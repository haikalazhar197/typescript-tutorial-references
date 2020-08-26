import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Haikal", "Web Work", 250);
// docTwo = new Payment("Maya", "Plumbing", 300);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice("Sabrina", "Work on Something", 40);
// const invTwo = new Invoice("Maya", "Work on Something", 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((invoice) => {
//   console.log(invoice.client, invoice.amount, invoice.format());
// });
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
