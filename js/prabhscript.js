//Prabhkanwar Singh Sabharwal n01652796
const $ = (selector) => document.querySelector(selector);

function processEntries(){
    let subTotal = $("#sub_total").value;
    let taxRate = $("#tax_rate").value;
    let salesTax = 0;
    let total = 0;

    if(subTotal == "" || taxRate == ""){
        alert("SubTotal and TaxRate fields are mandatory.");
        clearData();
        return;
    }
    else if(isNaN(subTotal) || (parseFloat(subTotal)<0 || parseFloat(subTotal)>10000)){
        alert("Sub total : must be a number and it should be > 0 and < 10000");
        clearData();
        return;
    }
    else if(isNaN(taxRate) || (parseFloat(taxRate)<0 || parseFloat(taxRate)>12)){
        alert("Tax rate : must be a number and it should be > 0 and < 12");
        clearData();
        return;
    }
    else{
        subTotal = parseFloat(subTotal);
        taxRate = parseFloat(taxRate);
        salesTax = (subTotal * (taxRate/100)).toFixed(2);
        total = subTotal + parseFloat(salesTax);
        $("#sales_tax").value = salesTax;
        $("#total").value = total;
    }
}

function clearData(){
    $("#sub_total").focus();
    $("#sub_total").select();
    $("#sub_total").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";
}

document.addEventListener("DOMContentLoaded",()=>{
    $("#sub_total").focus();
    $("#sub_total").select();
    $("#calculate").addEventListener("click",processEntries);
    $("#clear").addEventListener("click",clearData);
});