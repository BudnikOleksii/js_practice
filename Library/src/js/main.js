import './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closestElem('.findmeq').addClass('dgdg'));
console.log($('.findme').siblings());

// console.log($('div').html('hello'));