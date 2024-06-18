$(document).ready(function() {

    $("#min_col_slider").slider({
        animate: "fast",
        min: -100,
        max: 100,
        value: -5,
        slide: function(event, ui) {
            $("#min_col").val(ui.value);
            update_table();
        }
    });

    $("#max_col_slider").slider({
        animate: "fast",
        min: -100,
        max: 100,
        value: 5,
        slide: function(event, ui) {
            $("#max_col").val(ui.value);
            update_table();
        }
    });

    $("#min_row_slider").slider({
        animate: "fast",
        min: -100,
        max: 100,
        value: -5,
        slide: function(event, ui) {
            $("#min_row").val(ui.value);
            update_table();
        }
    });

    $("#max_row_slider").slider({
        animate: "fast",
        min: -100,
        max: 100,
        value: 5,
        slide: function(event, ui) {
            $("#max_row").val(ui.value);
            update_table();
        }
    });
    


    // TODO: refactor into function
    $("#min_col").change(function(event, ui) {
        var val = $("#min_col").val();
        if (val < 100 && val > -100) {
            $("#min_col_slider").slider("value", val);
            update_table();
        }
    })
    $("#max_col").change(function(event, ui) {
        var val = $("#max_col").val();
        if (val < 100 && val > -100) {
            $("#max_col_slider").slider("value", val);
            update_table();
        }
    })
    $("#min_row").change(function(event, ui) {
        var val = $("#min_row").val();
        if (val < 100 && val > -100) {
            $("#min_row_slider").slider("value", val);
            update_table();
        }
    })
    $("#max_row").change(function(event, ui) {
        var val = $("#max_row").val();
        if (val < 100 && val > -100) {
            $("#max_row_slider").slider("value", val);
            update_table();
        }
    })
});


// TODO: refactor to change -100 and 100 from "magic values" into constants