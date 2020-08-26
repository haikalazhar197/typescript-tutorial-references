"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes RM" + this.amount + " for " + details;
    };
    return Invoice;
}());
var invOne = new Invoice("Sabrina", "Work on Something", 40);
var invTwo = new Invoice("Maya", "Work on Something", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "Haikal";
invTwo.amount = 200;
console.log(invOne, invTwo);
console.log(invoices);
var form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
var type = document.querySelector("#type");
var toFrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
