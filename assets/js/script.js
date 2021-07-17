$(document).ready(function () {
    $('#sideIcon').click(function () {
        $(this).toggleClass("fa-bars fa-times");
        $("nav").toggleClass("nav-toggle");
    });

    $("nav ul li a").click(function () {
        $("#sideIcon").removeClass("fa-times").addClass("fa-bars");
        $("nav").removeClass("nav-toggle");
    });

    $(window).on("scroll load", function () {
        if ($(window).scrollTop() > 20) {
            $("header").addClass("header-active");
        } else {
            $("header").removeClass("header-active");
        }
    });

    $(".dot1").click(function () {
        $(".vid1").css("display", "block");
        $(".vid2").css("display", "none");
        $(".vid3").css("display", "none");
    });
    $(".dot2").click(function () {
        $(".vid2").css("display", "block");
        $(".vid1").css("display", "none");
        $(".vid3").css("display", "none");
    });
    $(".dot3").click(function () {
        $(".vid3").css("display", "block");
        $(".vid1").css("display", "none");
        $(".vid2").css("display", "none");
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 60) {
            $("#scrollTop").css("top", "90%");
        } else {
            $("#scrollTop").css("top", "-120%");
        }
    });

    $(window).on("load", function () {
        $(".loader-container").fadeOut();
    });
});