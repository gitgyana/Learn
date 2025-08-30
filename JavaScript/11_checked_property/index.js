// .checked = property that determines the checked state of an
//            HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const rupayCardBtn = document.getElementById("rupayCardBtn");
const upiBtn = document.getElementById("upiBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckBox.checked) {
        subResult.textContent = `You are subscribed!`;
    }
    else {
        subResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with visa`;
    }
    else if(rupayCardBtn.checked) {
        paymentResult.textContent = `You are paying with RupayCard`;
    }
    else if(upiBtn.checked) {
        paymentResult.textContent = `You are paying with UPI`;
    }
    else {
        paymentResult.textContent = `You must select a payment type`;
    }
}