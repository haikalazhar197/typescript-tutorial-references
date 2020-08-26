import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// Lsit template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc);
    list.render(doc, type.value, "end");
});
//GENERICSSS
const addUID = (object) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, object), { uid });
};
let docOne = addUID({ name: "Haikal", age: 23 });
// let docTow = addUID("STRING");
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: "Person",
    data: { name: "Haikal" },
};
const docFour = {
    uid: 2,
    resourceName: "Shopping list",
    data: ["bread", "milk", "toiler roll"],
};
console.log(docThree, docFour);
