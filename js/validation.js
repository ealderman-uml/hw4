$(document).ready(function () {



    $("#parameter-form").validate({

        rules: {
            min_col: {
                required: true
            },
            max_col: {
                required: true
            },
            min_row: {
                required: true
            },
            max_row: {
                required: true
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