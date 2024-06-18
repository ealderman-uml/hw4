/* Ed Alderman
 * This is essentially just a custom data class used for tying 
 * a number field and a slider together.
 * When one is changed, the other updates as well, 
 * and a "change" event is fired from the object.
 */

class fieldAndSlider {
    field;
    slider;
    valMax;
    valMin;

    constructor(field, slider, valMin, valMax, valInitial) {
        this.field = field;
        this.slider = slider;
        this.valMin = valMin;
        this.valMax = valMax;

        let thisObject = this;  // <- required to allow the "change" event below
                                // to originate from this object.

        // Configure slider
        $("#" + this.slider).slider({
            animate: "fast",
            min: valMin,
            max: valMax,
            value: valInitial,
            slide: function(event, ui) {
                $("#" + field).val(ui.value);
                $(thisObject).trigger("change");  // fire change event for this pairing
            }
        });

        // Define event handling
        $("#" + this.field).keyup(function(event, ui) {
            var val = $("#" + field).val();
            if (val < valMax && val > valMin) {
                $("#" + slider).slider("value", val);
                $(thisObject).trigger("change");  // fire change event for this pairing
            }
        });
    }

    getCurrentValue() {
        return $("#" + this.field).val();
    }
}
