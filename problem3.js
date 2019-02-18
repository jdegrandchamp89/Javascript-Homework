//Code up a web form with three appropriately labeled fields: name (text, 24 chars max, mandatory), age
//(numeric, mandatory) and gender (male/female, mandatory). Write validation code in JavaScript that
//runs when the submit button is pressed. Whenever a field does not meet the input requirements a
//descriptive error message (boldface red) appears to the right of each invalid field. You do not have to
//actually write up the server side script 
/* 
Implement #1 above using jQuery. (Feel free to use the jQuery form validator plugin.) */

$(document).ready(function () {

    // jQuery methods go here...
    $("#submitButton").click(function (e) {
        e.preventDefault();
    
        _.each($("input"), function(inputItem){
            switch($(inputItem).attr("name")) {
                case "Name":
                    var re = /^[A-Za-z\s]+$/;
                    if($(inputItem).val() == "" || $(inputItem).val() == null){
                        $("#errorname").html("Name field is required");
                    }
                    else if(!re.test($(inputItem).val())) {
                        $("#errorname").html($(inputItem).val() + "is not a valid name");
                    }
                    else {
                        $("#errorname").html("");
                    }
                    break;
                case "Age":
                    if (isNaN($(inputItem).val())) {
                        $("#errorage").html($(inputItem).val() + " is not a number");
                    }
                    else if ($(inputItem).val() == "" || $(inputItem).val() == null) {
                        $("#errorage").html("Age field is required");
                    }
                    else {
                        $("#errorage").html("");
                    }
                    break;
                case "Gender":
                    if($(inputItem).val() == "Male" && $(inputItem).is(":checked") == false &&
                        $("#female").val() == "Female" && $("#female").is(":checked") == false) {
                        $("#errorgender").html("Gender field is required");
                    }
                    else if($(inputItem).val() == "Female" && $(inputItem).is(":checked") == false &&
                            $("#male").val() == "Male" && $("#male").is(":checked") == false) {
                        $("#errorgender").html("Gender field is required");
                    }
                    else {
                        $("#errorgender").html("");
                    }
                    break;
            }
        });
    });

});