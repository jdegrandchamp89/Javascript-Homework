/* Create a simple checkout form that collects a billing address (name, address, city, state, zip) and shipping
address with the same fields. Add a checkbox over the shipping address with the label “Shipping address
is the same as billing.” If the user clicks on the checkbox, then automatically transfer the contents of the
billing address fields into the shipping address fields and disable the shipping fields for entry. If the user
unchecks the box, the contents of the fields should be left as is, but the fields should once again be
enabled. */
/* 
Implement #2 above using jQuery */

$(document).ready(function () {

    // jQuery methods go here...
    $("#shippingIsSame").click(function () {
        if ($("#shippingIsSame").is(":checked")) {
            $("#shippingname").val($("#billingname").val());
            $("#shippingname").prop("disabled", true);
            $("#shippingaddress").val($("#billingaddress").val());
            $("#shippingaddress").prop("disabled", true);
            $("#shippingcity").val($("#billingcity").val());
            $("#shippingcity").prop("disabled", true);
            $("#shippingstate").val($("#billingstate").val());
            $("#shippingstate").prop("disabled", true);
            $("#shippingzip").val($("#billingzip").val());
            $("#shippingzip").prop("disabled", true);
        }
        else {
            $("#shippingname").prop("disabled", false);
            $("#shippingaddress").prop("disabled", false);
            $("#shippingcity").prop("disabled", false);
            $("#shippingstate").prop("disabled", false);
            $("#shippingzip").prop("disabled", false);
        }
    });
});