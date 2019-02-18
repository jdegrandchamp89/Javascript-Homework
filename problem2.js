/* Create a simple checkout form that collects a billing address (name, address, city, state, zip) and shipping
address with the same fields. Add a checkbox over the shipping address with the label “Shipping address
is the same as billing.” If the user clicks on the checkbox, then automatically transfer the contents of the
billing address fields into the shipping address fields and disable the shipping fields for entry. If the user
unchecks the box, the contents of the fields should be left as is, but the fields should once again be
enabled. */
var shippingIsSame = document.getElementById("shippingIsSame");
//shippingIsSame.addEventListener("click", copy);

function copy(event) {
    var inputFields = document.getElementsByTagName("input");
    var shippingName = document.getElementById("shippingname");
    var shippingAddress = document.getElementById("shippingaddress");
    var shippingCity = document.getElementById("shippingcity");
    var shippingState = document.getElementById("shippingstate");
    var shippingZip = document.getElementById("shippingzip");
    
    if (shippingIsSame.checked == true) {
        shippingIsSame.checked = true;
        for (var i = 0; i < inputFields.length; i++) {
            switch (inputFields[i].getAttribute("name")) {
                case "name":
                    shippingName.value = inputFields[i].value;
                    shippingName.disabled = true;
                    break;
                case "address":
                    shippingAddress.value = inputFields[i].value;
                    shippingAddress.disabled = true;
                    break;
                case "city":
                    shippingCity.value = inputFields[i].value;
                    shippingCity.disabled = true;
                    break;
                case "state":
                    shippingState.value = inputFields[i].value;
                    shippingState.disabled = true;
                    break;
                case "zip":
                    shippingZip.value = inputFields[i].value;
                    shippingZip.disabled = true;
                    break;
            }
        }
    }
    else {
        shippingName.disabled = shippingAddress.disabled = shippingCity.disabled = shippingState.disabled = shippingZip.disabled = false;
    }
}