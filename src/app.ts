import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// Lsit template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  // console.log(doc);

  list.render(doc, type.value, "end");
});

//GENERICSSS

const addUID = <T extends { name: string }>(object: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...object, uid };
};

let docOne = addUID({ name: "Haikal", age: 23 });
// let docTow = addUID("STRING");

console.log(docOne);

interface Resources<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resources<object> = {
  uid: 1,
  resourceName: "Person",
  data: { name: "Haikal" },
};

const docFour: Resources<string[]> = {
  uid: 2,
  resourceName: "Shopping list",
  data: ["bread", "milk", "toiler roll"],
};

console.log(docThree, docFour);
