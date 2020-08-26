// classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes RM${this.amount} for ${details}`;
  }
}

const invOne = new Invoice("Sabrina", "Work on Something", 40);
const invTwo = new Invoice("Maya", "Work on Something", 300);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invOne.client = "Haikal";
invTwo.amount = 200;

console.log(invOne, invTwo);

console.log(invoices);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
