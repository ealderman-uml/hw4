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


        // Is there really no less verbose way to do this?
        messages: {
            min_col: {
                min: "Please enter an integer between -100 and 100",
                max: "Please enter an integer between -100 and 100"
            },
            max_col: {
                min: "Please enter an integer between -100 and 100",
                max: "Please enter an integer between -100 and 100"
            },
            min_row: {
                min: "Please enter an integer between -100 and 100",
                max: "Please enter an integer between -100 and 100"
            },
            max_row: {
                min: "Please enter an integer between -100 and 100",
                max: "Please enter an integer between -100 and 100"
            }
        },

        onfocusout: function(element) {
            $(element).valid();
        },
        
        onkeyup: function(element) {
            $(element).valid();
        }
    });
});