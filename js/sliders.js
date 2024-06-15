$(document).ready(function() {

    $("#min_col_slider").slider({
        animate: "fast",
        min: -300,
        max: 300,
        value: -5,
        slide: function(event, ui) {
            $("#min_col").val(ui.value);
            run();
        }
    });

    $("#max_col_slider").slider({
        animate: "fast",
        min: -300,
        max: 300,
        value: 5,
        slide: function(event, ui) {
            $("#max_col").val(ui.value);
            run();
        }
    });

    $("#min_row_slider").slider({
        animate: "fast",
        min: -300,
        max: 300,
        value: -5,
        slide: function(event, ui) {
            $("#min_row").val(ui.value);
            run();
        }
    });

    $("#max_row_slider").slider({
        animate: "fast",
        min: -300,
        max: 300,
        value: 5,
        slide: function(event, ui) {
            $("#max_row").val(ui.value);
            run();
        }
    });
    
    $("#min_col").change(function(event, ui) {
        $("#min_col_slider").slider("value", $("#min_col").val());
        run();
    })
    $("#max_col").change(function(event, ui) {
        $("#max_col_slider").slider("value", $("#max_col").val());
        run();
    })
    $("#min_row").change(function(event, ui) {
        $("#min_row_slider").slider("value", $("#min_row").val());
        run();
    })
    $("#max_row").change(function(event, ui) {
        $("#max_row_slider").slider("value", $("#max_row").val());
        run();
    })
});
