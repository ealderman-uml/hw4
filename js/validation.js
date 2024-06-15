$(document).ready(function () {

    $("#parameter-form").validate({
        rules: {
            min_col: {
                required: true,
                min: -100,
                max: 100
            },
            max_col: {
                required: true,
                min: -100,
                max: 100
            },
            min_row: {
                required: true,
                min: -100,
                max: 100
            },
            max_row: {
                required: true,
                min: -100,
                max: 100
            }
        },

        messages: {},

        onfocusout: function(element) {
            $(element).valid();
        },
        
        onkeyup: function(element) {
            $(element).valid();
        }
    });
});