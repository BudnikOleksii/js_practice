import './lib/lib';

$('#first').click(() => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').click(() => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(() => {
    $('.w-500').fadeToggle(800);
});

$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
    </div>
    `
);

$('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal(
	{
		txtTitle: 'Modal title',
		txtBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!',
		btnCount: 3,
		btnSettings: [
			[
				'Close',
				['btn-danger', 'mr-10'],
				true
			],
			[
				'Save changes',
				['btn-success'],
				false,
				() => {
					alert('Данные сохранены');
				}
			],
			[
				'Exstra btn',
				['btn-warning', 'ml-10'],
				false,
				() => {
					alert('Hello World');
				}
			]
		]
	}
));

$().get('https://jsonplaceholder.typicode.com/todos/1')
	.then(res => console.log(res));