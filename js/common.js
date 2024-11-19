//menu JS
$(document).ready(function () {
    $('.menu-btn').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.nav-inner').addClass('active');
        } else {
            $('.nav-inner').removeClass('active');
        }
    });
    //test 
});


$(function () {
    $(".accordion-content:not(:last)").css("display", "none");
    $(".accordion-title:last").addClass("open");

    $(".accordion-title").click(function () {
        $(".open").not(this).removeClass("open").next().slideUp(300);
        $(this).toggleClass("open").next().slideToggle(300);
    });
});

//than 
$(".sld-1, .sld-2, .sld-3, .sld-4, .sld-5, .sld-6").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
});

// Show the first tab and hide the rest
$('.tab-panel li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('.tab-panel li').click(function () {
    $('.tab-panel li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});

