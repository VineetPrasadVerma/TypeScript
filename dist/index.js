"use strict";
let userage = 27;
let username = "vineet";
let isMale = true;
// userage = '30'
userage = 40;
let something;
let names = ["Mario", "Kunfu"];
let ages = [25, 35];
const n = names[1];
names.push("34");
let fruits = ["apple", 30, true];
// const fruit:string = fruits[2]
let user = {
    firstName: "Vineet",
    age: 27,
    id: 1,
};
// user.firstName = 40
// user.email = 'vineet@st.com'
// console.log(user)
// console.log(names)
// console.log(userage);
function addNumber(a, b) {
    return a + b;
}
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(5, 10);
const addArrItems = (arr) => {
    return arr.reduce((a, c) => a + c, 0);
};
console.log(addArrItems([1, 2, 3, 4, 5]));
let item;
item = "abc";
item = 123;
// console.log(item)
let itemArr = ["abc", 10];
const temp = itemArr[1];
function addTogether(val) {
    return val + val;
}
console.log(addTogether(3));
