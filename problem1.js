//Code up a web form with three appropriately labeled fields: name (text, 24 chars max, mandatory), age
//(numeric, mandatory) and gender (male/female, mandatory). Write validation code in JavaScript that
//runs when the submit button is pressed. Whenever a field does not meet the input requirements a
//descriptive error message (boldface red) appears to the right of each invalid field. You do not have to
//actually write up the server side script 
var submit = document.getElementById("submitButton");
submit.addEventListener("click", validate);

function validate(event) {
    var inputFields = document.getElementsByTagName("input");
    event.preventDefault();

    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].getAttribute("name") == "Name") {
            var re = /^[A-Za-z\s]+$/;
            if(inputFields[i].value == "" || inputFields[i].value == null){
                document.getElementById('errorname').innerHTML="Name field is required";
            }
            else if (!re.test(inputFields[i].value)) {
                document.getElementById('errorname').innerHTML=inputFields[i].value + " is not a valid name";
            }
            else {
                document.getElementById('errorname').innerHTML="";
            }
        } else if (inputFields[i].getAttribute("name") == "Age") {
            if (isNaN(inputFields[i].value)) {
                document.getElementById('errorage').innerHTML=inputFields[i].value + " is not a number";
            }
            else if (inputFields[i].value == "" || inputFields[i].value == null) {
                document.getElementById('errorage').innerHTML="Age field is required"
            }
            else {
                document.getElementById('errorage').innerHTML="";
            }
        } else if (inputFields[i].getAttribute("name") == "Gender") {
            if(inputFields[i].value == "Male" && inputFields[i].checked == false &&
               inputFields[i+1].value == "Female" && inputFields[i+1].checked == false) {
                document.getElementById('errorgender').innerHTML="Gender field is required";
            }
            else if(inputFields[i].value == "Female" && inputFields[i].checked == false &&
                    inputFields[i-1].value == "Male" && inputFields[i-1].checked == false) {
                document.getElementById('errorgender').innerHTML="Gender field is required";
            }
            else {
                document.getElementById('errorgender').innerHTML="";
            }
        }
    }
}