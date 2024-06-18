/* Ed Alderman
 * This simply functions as the "main" entrypoint for this web app
 */

$(document).ready(function () {
    minColInput = new fieldAndSlider("min_col", "min_col_slider", -100, 100, -5);
    maxColInput = new fieldAndSlider("max_col", "max_col_slider", -100, 100, 5);
    minRowInput = new fieldAndSlider("min_row", "min_row_slider", -100, 100, -5);
    maxRowInput = new fieldAndSlider("max_row", "max_row_slider", -100, 100, 5);

    tableBuilder = new MultiplicationTableBuilder(minColInput.getCurrentValue(), 
                                                  maxColInput.getCurrentValue(), 
                                                  minRowInput.getCurrentValue(),
                                                  maxRowInput.getCurrentValue()
    );

    tabHandler = new TabHandler("#result");
    updateTable();

    // update table when any value is changed
    $(minColInput).on("change", function() {
        updateTable();
    });
    $(maxColInput).on("change", function() {
        updateTable();
    });
    $(minRowInput).on("change", function() {
        updateTable();
    });
    $(maxRowInput).on("change", function() {
        updateTable();
    });


    // handle button press events:
    $("#save").click(function () {
        tabHandler.save();
        updateTable();
    });
    $("#delete").click(function () {
        tabHandler.delete();
    });
    $("#delete_all").click(function () {
        tabHandler.deleteAll();
    });
    
    // helper function
    function updateTable() {
        tableBuilder.xMin = minColInput.getCurrentValue();
        tableBuilder.xMax = maxColInput.getCurrentValue();
        tableBuilder.yMin = minRowInput.getCurrentValue();
        tableBuilder.yMax = maxRowInput.getCurrentValue();

        let title = minColInput.getCurrentValue() + ", " + 
                    maxColInput.getCurrentValue() + ", " + 
                    minRowInput.getCurrentValue() + ", " + 
                    maxRowInput.getCurrentValue();

        tabHandler.setCurrTabTitle(title);
        tabHandler.setCurrTabContent( tableBuilder.build_table() );
    }
});
