//explicit types
var character;
var age;
var isLoggedIn;
// age = "hello";
age = 30;
// isLoggedIn = 20;
isLoggedIn = false;
//arrays
var persons = [];
// persons = [10, 23];
persons = ["Haikal", "Azhar"];
persons.push("Maya");
//union types
var mixed = [];
mixed.push("Haikal");
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = "123";
uid = 123;
// uid = true;
//objects
var ninjaOne;
ninjaOne = {
    name: "Haikal",
    age: 23
};
var ninjaTwo;
ninjaTwo = { name: "Haikal", age: 20, beltColor: "black" };
