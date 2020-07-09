function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabsParrent = document.querySelector(tabsParentSelector),
          tabs = tabsParrent.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector);

    hideTabContent();
    showTabContent();

    tabsParrent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
}

export default tabs;