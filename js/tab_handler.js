/* Ed Alderman
 * This class creates tabs in the parentElement passed to it,
 * and exposes function for adding and deleting tabs, 
 * and setting the content and title of the tabs and 
 */

class TabHandler {
    curUniqueId;
    curMaxIndex;
    parentElement;

    constructor(parentElement) {
        this.parentElement = parentElement;
        $(parentElement).tabs({});
        this.curUniqueId = 0;
        this.curMaxIndex = 0;
    }

    setCurrTabTitle(title) {
        let index = $(this.parentElement).tabs( "option", "active" );
        $(this.parentElement + " ul").children().eq(index).children().text(title);
        $(this.parentElement).tabs("refresh");
    }

    setCurrTabContent(element) {
        let index = $(this.parentElement).tabs( "option", "active" );
        console.log(index);
        $(this.parentElement).children().eq(index + 1).children().replaceWith(element);
        $(this.parentElement).tabs("refresh");
    }

    save() {
        this.curUniqueId++;
        this.curMaxIndex++;
        $(this.parentElement + " ul").append("<li><a href=\"#tab" + 
            this.curUniqueId + 
            "\">" + 
            "</a></li>");
            
        $(this.parentElement).append("<div id=\"tab" + 
            this.curUniqueId + 
            "\"><div></div></div>");    // nested div necessary because setCurrTabContent leverages "replaceWith"

        $(this.parentElement).tabs("refresh");
        $(this.parentElement).tabs( "option", "active", this.curMaxIndex );
    }

    delete() {
        let activeTabIndex = $(this.parentElement).tabs( "option", "active");
        $(this.parentElement + " ul").children()[activeTabIndex].remove();
        $(this.parentElement).children()[activeTabIndex + 1].remove();
        $(this.parentElement).tabs("refresh");
        this.curMaxIndex--;
        $(this.parentElement).tabs( "option", "active", this.curMaxIndex );
    }

    deleteAll() {
        for (var i = 0; i < this.curMaxIndex; i++) {
            $(this.parentElement + " ul").children()[0].remove();   // 0th index = 1st <li> element in <ul>
            $(this.parentElement).children()[1].remove();           // 1st index to skip over <ul>
        }
        this.curMaxIndex = 0;
        $(this.parentElement).tabs("refresh");
        $(this.parentElement).tabs( "option", "active", this.curMaxIndex );
    }

}