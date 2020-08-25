//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "hello";
age = 30;

// isLoggedIn = 20;
isLoggedIn = false;

//arrays
let persons: string[] = [];

// persons = [10, 23];
persons = ["Haikal", "Azhar"];

persons.push("Maya");

//union types
let mixed: (string | number | boolean)[] = [];
mixed.push("Haikal");
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = "123";
uid = 123;
// uid = true;

//objects
let ninjaOne: object;
ninjaOne = {
  name: "Haikal",
  age: 23,
};

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: "Haikal", age: 20, beltColor: "black" };
