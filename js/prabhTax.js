// Prabhkanwar Singh Sabharwal n01652796
const $ = (selector) => document.querySelector(selector);

function processEntries(){
    let income = $("#income").value;
    let taxableAmount = 0;
    if(income == ""){
        alert("Income : field is mandatory.");
        clearData();
        return;
    }
    else if(isNaN(income) || (parseInt(income)<0 || parseInt(income)>99999999)){
        alert("Taxable Income : must be a number and it should be > 0 and < 99999999");
        clearData();
        return;
    }else{
        income = parseInt(income);
        taxableAmount = calculateTax(income);
        $("#tax_owed").value = taxableAmount.toFixed(2);
    }
}

function calculateTax(income){
    let taxableAmount = 0;
    const taxArray = [0,9875,40125,85525,163300,207350,518400];
    const taxpercentArray = [0.10,0.12,0.22,0.24,0.32,0.35,0.37];

    for(let i in taxArray){
        i = parseInt(i);
       
        if(taxArray[i+1] != undefined && taxArray[i]<=income && income<taxArray[i+1]){
            taxableAmount += (income-taxArray[i]) * taxpercentArray[i];
            break;
        }else{
            if(taxArray[i+1] == undefined){
                taxableAmount += (income-taxArray[i]) * taxpercentArray[i];
                break;
            }else{
                taxableAmount += (taxArray[i+1]-taxArray[i]) * taxpercentArray[i];
            }
        }
        
    }
    return taxableAmount;


   
}

function clearData(){
    $("#income").focus();
    $("#income").select();
    $("#income").value = "";
    $("#tax_owed").value = "";
}

document.addEventListener("DOMContentLoaded",()=>{
    $("#income").focus();
    $("#income").select();
    $("#calculate").addEventListener("click",processEntries);
    $("#clear").addEventListener("click",clearData);
});