const me = {
    name: "Haikal",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("i spent", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("Sabrina", "Work on Something", 40);
const invTwo = new Invoice("Maya", "Work on Something", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
