$(document).ready(function () {
    var age = "";
    $("#datepicker").datepicker({
        onSelect: function (value, ui) {
            var today = new Date();
            age = today.getFullYear() - ui.selectedYear;
            $("#age").val(age);

        },
        changeYear: true,
        changeMonth: true,
        dateFormat: 'dd-mm-yy',
        yearRange: "-60:+0",

    });

    $.get("https://restcountries.eu/rest/v2/all", function (data, status) {

        var country = new Array();

        for (let i = 0; i < data.length; i++) {
            country.push(data[i].name)
        }

        $("#country").select2({
            data: country
        });
    });

    // changeYear: true,
    //     changeMonth:true,
    //     dateFormat:'dd-mm-yy',
    //     yearRange: "-60:+0",




    $("#form").submit(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var dob = $("#datepicker").val()
        var country = $("#country").val();
        var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var phonx = /^[+][9][1]([0-9]{10})$/;

        if (name == "") {
            $("#invalid-name").text("*Name Required");
            return false;
        }
        else{
            $("#invalid-name").text(" "); 
        }
        if (email == "") {
            $("#invalid-email").text("*Email Required");
            return false;
        }
        else {
            if (!regx.test(email)) {
                $("#invalid-email").text("*Invalid Email");
                return false;

            }
            else{
                $("#invalid-email").text(" ");
            }

        }
        if (phone == "") {
            $("#invalid-mob").text("");

        }
        else if (!phonx.test(phone)) {
            $("#invalid-mob").text("*Indian Phone Number Required");
            return false;
        }
        else {
            $("#invalid-mob").text("");
        }

        if (dob == "") {
            $("#invalid-dob").text("*DOB Required")
            return false;

        }
        else{
            $("#invalid-dob").text(" ")
        }

        if (country == "") {
            $("#invalid-country").text("*Country Required")
            return false;

        }
        else{
            $("#invalid-country").text(" ")
        }

        alert("Submitted Successfully");
    });

});