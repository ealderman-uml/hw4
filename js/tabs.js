$(document).ready(function () {
    $("#result").tabs({});
    var tab_unique_id = 0;
    var tabs_max_index = 0;
    update_table();

    $("#save").click(function () {
        tab_unique_id++;
        tabs_max_index++;
        $("#result ul").append("<li><a href=\"#tab" + 
            tab_unique_id + 
            "\">" + 
            $("#min_col").val() + ", " +
            $("#max_col").val() + ", " +
            $("#min_row").val() + ", " +
            $("#max_row").val() +
            "</a></li>");
            
        $("#result").append("<div id=\"tab" + 
            tab_unique_id + 
            "\"></div>");

        $("#result").tabs("refresh");
        $("#result").tabs( "option", "active", tabs_max_index );
        $("#tab" + tab_unique_id).append(build_table());
    });

    $("#delete").click(function () {
        tab_index = $("#result").tabs( "option", "active");
        $("#result ul").children()[tab_index].remove();
        $("#result").children()[tab_index + 1].remove();
        $("#result").tabs("refresh");
        tabs_max_index--;
        $("#result").tabs( "option", "active", tabs_max_index );
        update_table();
    });

    $("#delete_all").click(function () {
        for (var i = 0; i < tabs_max_index; i++) {
            $("#result ul").children()[0].remove(); // 0th index = 1st <li> element in <ul>
            $("#result").children()[1].remove();    // 1st index to skip over <ul>
            }
        $("#result").tabs("refresh");
        tabs_max_index = 0;
        $("#result").tabs( "option", "active", tabs_max_index );
        update_table();
    });
});


// Dynamically update table of current tab when called
function update_table() {

    // update tab header
    $("#result ul").children().last().children().text(
        $("#min_col").val() + ", " +
        $("#max_col").val() + ", " +
        $("#min_row").val() + ", " +
        $("#max_row").val()
    );

    // draw table:
    $("#result").children().last().children().replaceWith(build_table());

    // refresh tabs:
    $("#result").tabs("refresh");
}