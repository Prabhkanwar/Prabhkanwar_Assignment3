// Prabhkanwar Singh Sabharwal n01652796
const $ = (selector) => document.querySelector(selector);

function processEntries(){
    let amount = $("#amount").value;
    if(amount == ""){
        alert("Amount : field is mandatory.");
        clearData();
        return;
    }
    else if(isNaN(amount) || (parseInt(amount)<0 || parseInt(amount)>99)){
        alert("Amount : must be a number and it should be > 0 and < 100");
        clearData();
        return;
    }else{
        amount = parseInt(amount);
        makeChanges(amount);
    }
}

function makeChanges(amount){
    $("#quarters").value = Math.floor(amount/25);
    $("#dimes").value = Math.floor((amount%25)/10);
    $("#nickels").value = Math.floor(((amount%25)%10)/5);
    $("#pennies").value = Math.floor((((amount%25)%10)%5));
}

function clearData(){
    $("#amount").focus();
    $("#amount").select();
    $("#amount").value = "";
    $("#quarters").value = "";
    $("#dimes").value = "";
    $("#nickels").value = "";
    $("#pennies").value = "";
}

document.addEventListener("DOMContentLoaded",()=>{
    $("#amount").focus();
    $("#amount").select();
    $("#calculate").addEventListener("click",processEntries);
    $("#clear").addEventListener("click",clearData);
});