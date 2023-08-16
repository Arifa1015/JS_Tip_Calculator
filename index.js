let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let errorMessageElement = document.getElementById("errorMessage");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");

function calculateTip() {
    let billAmountInputValue = billAmountInput.value;
    let percentageTipInputValue = percentageTipInput.value;


    if (billAmountInputValue === "") { //Here, if the bill input value is empty, error message will be displayed
        errorMessageElement.textContent = "Please Enter a Valid Input ";
    } else if (percentageTipInputValue === "") { //Here, if the percentage tip input value is empty, error message will be displayed
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else {
        errorMessageElement.textContent = ""; //Here, if the both input values are not empty, error message will be removed
        let billAmount = parseInt(billAmountInputValue); //getting bill amount and converting to integer
        let percentageTip = parseInt(percentageTipInputValue); //getting tip percentage and converting to integer

        let calculatedTip = (percentageTip / 100) * billAmount; //calculating tip
        let calculatedTotal = billAmount + calculatedTip; //calculating total


        tipAmountInput.value = calculatedTip; //assigning CalculatedTip to the input
        totalInput.value = calculatedTotal; //assigning total bill amount to the input
    }
}