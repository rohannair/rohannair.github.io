$(document).ready( function() {

    var pageHero = $('#heroBanner').attr('data-bg');
    console.log(pageHero);
    $('#heroBanner').css({
        'background-image': 'url(' + pageHero + ')'
    });

});