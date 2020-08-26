import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

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

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});
