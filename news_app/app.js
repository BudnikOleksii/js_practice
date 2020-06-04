// Custom Http Module
function customHttp() {
    return {
        get(url, cb) {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.addEventListener('load', () => {
            if (Math.floor(xhr.status / 100) !== 2) {
                cb(`Error. Status code: ${xhr.status}`, xhr);
                return;
            }
            const response = JSON.parse(xhr.responseText);
            cb(null, response);
            });

            xhr.addEventListener('error', () => {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            });

            xhr.send();
        } catch (error) {
            cb(error);
        }
        },
        post(url, body, headers, cb) {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.addEventListener('load', () => {
            if (Math.floor(xhr.status / 100) !== 2) {
                cb(`Error. Status code: ${xhr.status}`, xhr);
                return;
            }
            const response = JSON.parse(xhr.responseText);
            cb(null, response);
            });

            xhr.addEventListener('error', () => {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            });

            if (headers) {
            Object.entries(headers).forEach(([key, value]) => {
                xhr.setRequestHeader(key, value);
            });
            }

            xhr.send(JSON.stringify(body));
        } catch (error) {
            cb(error);
        }
        },
    };
}
// Init http module
const http = customHttp();

const newsService = (function() {
    const apiKey = '1669b53aa0cf4b7488f8d1d774436668';
    const apiUrl = 'https://news-api-v2.herokuapp.com';

    return {
        topHeadlines(country = 'ua', cb) {
            http.get(`${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`, cb);
        },
        everything(querry, cb) {
            http.get(`${apiUrl}/everything?q=${querry}&apiKey=${apiKey}`, cb);
        }
    };
})();

//  init selects
document.addEventListener('DOMContentLoaded', function() {
    // M.AutoInit();
    loadNews();
});

function loadNews() {
    newsService.topHeadlines('ua', onGetResponse);
}

function onGetResponse(err, res) {
    renderNews(res.articles);
}

function renderNews(news) {
    const newsContainer = document.querySelector('.news-container .row');
    let fragment = '';

    news.forEach(newsItem => {
        const el =newsTemplate(newsItem);
        fragment += el;
    });

    newsContainer.insertAdjacentHTML('afterbegin', fragment);
}

// News item templacte function
function newsTemplate({ urlToImage, title, url, description }) {
    return `
        <div class="col s12">
            <div class="card">
                <div class="card-image">
                    <img src="${urlToImage}">
                    <span class="card-image">${title || ''}</span>
                </div>
                <div class="card-content">
                    <p>${description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${url}">Read more</a>
                </div>
            </div>
        </div>
    `;
}