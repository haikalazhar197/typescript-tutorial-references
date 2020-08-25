"use strict";
var greet;
// greet = "haikal";
greet = function () {
    console.log("hello again");
};
//optional parameters at the end
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(2, 3, "20");
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
