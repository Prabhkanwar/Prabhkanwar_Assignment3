// Prabhkanwar Singh Sabharwal n01652796
const $ = (selector) => document.querySelector(selector);
const numericRegex = /^\d+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

function processEntries(){

    if($("#arrival_date").value == undefined || $("#arrival_date").value == null || $("#arrival_date").value == ''){
        message("#error_arrival_date","Must not be blank.");
        event.preventDefault();
    }
    else if($("#nights").value == undefined || $("#nights").value == null || $("#nights").value == ''){
        message("#error_nights","Must not be blank.");
        event.preventDefault();
    }
    else if(!numericRegex.test($("#nights").value)){
        message("#error_nights","Must be numeric.");
        event.preventDefault();
    }
    else if(parseInt($("#nights").value) < 0 || parseInt($("#nights").value) > 30 ){
        message("#error_nights","Must be between 0 to 30.");
        event.preventDefault();
    }
    else if($("#contact_name").value == undefined || $("#contact_name").value == null || $("#contact_name").value == ''){
        message("#error_contact_name","Must not be blank.");
        event.preventDefault();
    }
    else if($("#contact_email").value == undefined || $("#contact_email").value == null || $("#contact_email").value == ''){
        message("#error_contact_email","Must not be blank.");
        event.preventDefault();
    }
    else if(!emailRegex.test($("#contact_email").value)){
        message("#error_contact_email","Invalid Entry.");
        event.preventDefault();
    }
    else if($("#contact_phone").value == undefined || $("#contact_phone").value == null || $("#contact_phone").value == ''){
        message("#error_contact_phone","Must not be blank.");
        event.preventDefault();
    }
    else if(!phoneRegex.test($("#contact_phone").value)){
        message("#error_contact_phone","Invalid Entry.");
        event.preventDefault();
    }
}

function clearData(){
    $("#arrival_date").focus();
    $("#arrival_date").select();
    $("#arrival_date").value = "";
    $("#nights").value = "";
    $("#nights").value = "";
    $("#adults").value = "1";
    $("#children").value = "0";
    $("#room_type_1").checked = true;
    $("#bed_type_1").checked = true;
    $("#checkbox").checked = false;
    $("#contact_name").value = "";
    $("#contact_email").value = "";
    $("#contact_phone").value = "";
}

document.addEventListener("DOMContentLoaded",()=>{
    $("#arrival_date").focus();
    $("#arrival_date").select();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    $("#arrival_date").setAttribute("min", today);
    $("#submit_request").addEventListener("click",processEntries);
    $("#clear").addEventListener("click",clearData);
});

function message(selector, message){
    $(selector).textContent = message;
    $(selector).style.display = "inline";
    setTimeout(hideErrorMessage, 5000, selector);
}

function hideErrorMessage(selector) {
    $(selector).textContent = "";
    document.querySelector(selector).style.display = "none";
}