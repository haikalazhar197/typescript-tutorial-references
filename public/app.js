"use strict";
// classes
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // Have to put the modifiers for this to work
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes RM" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("Sabrina", "Work on Something", 40);
var invTwo = new Invoice("Maya", "Work on Something", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (invoice) {
    console.log(invoice.client, invoice.amount, invoice.format());
});
// invOne.client = "Haikal";
// invTwo.amount = 200;
// console.log(invOne, invTwo);
// console.log(invoices);
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
