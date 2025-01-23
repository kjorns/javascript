$(function() {

    $("#form").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        success: function(label) {
            label.parent().removeClass("error-parent");
        },
        highlight: function(element, errorClass) {
            $(element).parent().addClass("error-parent");
            $(element).fadeOut(function() {
                $(element).fadeIn();
            });
        },
        rules: {
            email: {
                required: true,
            },
            username: {
                required: true,
                minlength: 4
            },
            password: {
                required: true,
                minlength: 8
            },
            fname: {
                required: true,
            },
            lname: {
                required: true,
            },
            state: {
                required: true,
            },
            'birth-year': {
                required: true,
            },
            gender: {
                required: true,
            },
            play: {
                required: true,
            },
            'sports[]': {
                required: true,
                minlength: 2
            },
            about: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Please Enter Your E-Mail Address"
            },
            username: {
                required: "Please Enter A Username",
                minlength: "Your Username Must Be At Least 4 Characters"
            },
            password: {
                required: "Please Enter A Password",
                minlength: "Your Password Must Be At Least 8 Characters"
            },
            state: {
                required: "Please Choose A Country"
            },
            'birth-year': {
                required: "Please Choose A Birth Year"
            },
            gender: {
                required: "Please Choose A Gender"
            },
            play: {
                required: "Please Choose Yes or No"
            },
            'sports[]': {
                required: "Please Choose At Least 2 Sports",
                minlength: "You Must Choose At Least 2 Sports"
            },
            about: {
                required: "Please Tell Us About Yourself"
            }
        }
    });


});