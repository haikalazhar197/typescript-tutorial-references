//Any type

let age: any = 25;

age = true;
console.log(age);
age = "hello";
console.log(age);
age = { name: "Haikal" };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push("Haikal");
mixed.push(false);
console.log(mixed);

let ninja: { name: any; age: any };

ninja = { name: "Haikal", age: 25 };
console.log(ninja);

ninja = { name: 25, age: "Haikal" };
console.log(ninja);
