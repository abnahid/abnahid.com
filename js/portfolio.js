$(document).ready(function () {
    console.log('Document is ready');
    var $grid = $('.menu-column').isotope({
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
    });

    $('.menu-filter button').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // Add active class to the current button (highlight it)
    $('.menu-filter button').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});