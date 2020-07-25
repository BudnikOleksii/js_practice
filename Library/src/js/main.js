import './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

$('button').fadeIn(1800);

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closestElem('.findmeq').addClass('dgdg'));
$('button').on('click', function() {
    $(this).fadeOut(1800);
});

// console.log($('div').html('hello'));