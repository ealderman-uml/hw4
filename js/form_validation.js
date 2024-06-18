/* Ed Alderman
 * This is the form validation portion of this project.
 */

$(document).ready(function () {
    // declare and configure form validation:
    var fieldMin = -100;
    var fieldMax = 100;
    $("#parameter-form").validate({
        rules: {
            min_col: {
                required: true,
                min: fieldMin,
                max: fieldMax
            },
            max_col: {
                required: true,
                min: fieldMin,
                max: fieldMax
            },
            min_row: {
                required: true,
                min: fieldMin,
                max: fieldMax
            },
            max_row: {
                required: true,
                min: fieldMin,
                max: fieldMax
            }
        },

        // Is there really no less verbose way to do this?
        messages: {
            min_col: {
                min: "Please enter an integer between " + fieldMin + " and " + fieldMax,
                max: "Please enter an integer between " + fieldMin + " and " + fieldMax
            },
            max_col: {
                min: "Please enter an integer between " + fieldMin + " and " + fieldMax,
                max: "Please enter an integer between " + fieldMin + " and " + fieldMax
            },
            min_row: {
                min: "Please enter an integer between " + fieldMin + " and " + fieldMax,
                max: "Please enter an integer between " + fieldMin + " and " + fieldMax
            },
            max_row: {
                min: "Please enter an integer between " + fieldMin + " and " + fieldMax,
                max: "Please enter an integer between " + fieldMin + " and " + fieldMax
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
