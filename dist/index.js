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
let hsla;
hsla = [false, "100%", "50%", 4];
function useCords() {
    return [1, 2];
}
//named tuples
let human;
human = ["vin", 25];
const authorOne = {
    id: 1,
    name: "mario",
    avatar: "/img/mario.jpg",
    type: "author",
};
const newPost = {
    id: 1,
    type: "post",
    title: "new post",
    tags: ["tech", "game"],
    author: authorOne,
    created_at: new Date(),
};
let posts = [];
posts.push(newPost);
const userOne = {
    name: "maio",
    score: 54,
};
//union
let id;
id = 1;
id = "2";
let anotherId = "1ergd453s";
anotherId = 2;
// union type pitfall
function swapId(id) {
    // can only use method and props common to bith string and number
    // return parseInt(id)
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
console.log(swapId("4"));
console.log(swapId(5));
//typeGuards
function print(value) {
    console.log(value.id);
    if (value.type === 'post') {
        console.log(value.created_at);
    }
    else {
        console.log(value.name);
    }
}
print(newPost);
