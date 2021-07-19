$(document).ready(function () {
    $(window).on("load", function () {
        $(".loader-container").fadeOut("fast");
    });

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

    $("#name_err_msg").hide();
    $("#email_err_msg").hide();
    $("#message_err_msg").hide();

    var error_name = false;
    var error_email = false;
    var error_message = false

    $("#name").blur(function () {
        checkFname();
    });
    $("#mail").blur(function () {
        checkEmail();
    });
    $("#message").blur(function () {
        checkMessage();
    });

    function checkFname() {
        var pattern = /^[a-zA-Z ]*$/;
        var fname = $("#name").val();
        if (pattern.test(fname) && fname !== '') {
            $("#name_err_msg").hide();
            $("#name").css("border", "2px solid #34F458");
        }
        else {
            $("#name_err_msg").html("Should contain only letters");
            $("#name_err_msg").show();
            $("#name").css("border", "2px solid #F90A0A");
            error_name = true;
        }
    }
    function checkEmail() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#mail").val();
        if (pattern.test(email) && email !== '') {
            $("#email_err_msg").hide();
            $("#mail").css("border", "2px solid #34F458");
        }
        else {
            $("#email_err_msg").html("Invalid email");
            $("#email_err_msg").show();
            $("#mail").css("border", "2px solid #F90A0A");
            error_email = true;
        }
    }
    function checkMessage() {
        var pattern = /^[a-zA-Z ]*$/;
        var message = $("#message").val();
        var msg_lenght = $("#message").val().length;

        // if(msg_lenght<3 || msg_lenght >20){
        //     should be between 5-20 characters
        // }
        if (!pattern.test(message) || msg_lenght < 20) {
            $("#message_err_msg").html("At least 20 letters");
            $("#message_err_msg").show();
            $("#message").css("border", "2px solid #F90A0A");
            error_message = true;
        }
        else {
            $("#message_err_msg").hide();
            $("#message").css("border", "2px solid #34F458");
        }
    }

    $("#registration_form").submit(function () {

        error_name = false;
        error_email = false;
        error_message = false;

        checkFname();
        checkEmail();
        checkMessage();

        if (error_name === false && error_email === false && error_message === false) {
            $("#submission").html("Thank you for contacting us");
            return true;
        } else {
            $("#submission").html("Fill the form correctly");
            $("#submission").css({ "background": "#ff3300", "color": "#fff", "font-size": "2rem", "text-align": "center" });
            return false;
        }
    });

});