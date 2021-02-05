$(document).ready(() => {
    // accordion
    $("#accordion").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true,

    })
    // tabs
    $("#tabs").tabs();

    // dialog box
    $("#image").button();
    $("#image").click(() => {
        $("#dialog").dialog({ modal:true})
    })

    // date picker
    $("#datepicker").datepicker({
        minDate: new Date(),
        maxDate: +45,
        showButtonPanel: true,
    })
})