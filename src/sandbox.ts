let greet: Function;

// greet = "haikal";

greet = () => {
  console.log("hello again");
};

//optional parameters at the end
const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(2, 3, "20");

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);
