$(document).ready(function () {
    var tab_num = 0;
    $("#result").tabs({});

    $("#save").click(function () {
        tab_num += 1;
        $("#result ul").append("<li><a href=\"#tab" + 
            tab_num + 
            "\">" + 
            $("#min_col").val() + ", " +
            $("#max_col").val() + ", " +
            $("#min_row").val() + ", " +
            $("#max_row").val() +
            "</a></li>");
            
        $("#result").append("<div id=\"tab" + 
            tab_num + 
            "\"></div>");

        $("#result").tabs("refresh");
        
        $("#result").tabs( "option", "active", tab_num );
        $("#tab" + tab_num).append(build_table());
    });
});

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