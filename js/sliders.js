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
    
    $("#min_col").change(function(event, ui) {
        $("#min_col_slider").slider("value", $("#min_col").val());
        update_table();
    })
    $("#max_col").change(function(event, ui) {
        $("#max_col_slider").slider("value", $("#max_col").val());
        update_table();
    })
    $("#min_row").change(function(event, ui) {
        $("#min_row_slider").slider("value", $("#min_row").val());
        update_table();
    })
    $("#max_row").change(function(event, ui) {
        $("#max_row_slider").slider("value", $("#max_row").val());
        update_table();
    })
});
