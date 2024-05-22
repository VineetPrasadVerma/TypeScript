let userage: number = 27;
let username: string = "vineet";
let isMale: boolean = true;

// userage = '30'
userage = 40;

let something: null;

let names: string[] = ["Mario", "Kunfu"];
let ages: number[] = [25, 35];

const n: string = names[1];

names.push("34");

let fruits = ["apple", 30, true];
// const fruit:string = fruits[2]

let user: { firstName: string; age: number; id: number } = {
  firstName: "Vineet",
  age: 27,
  id: 1,
};

// user.firstName = 40
// user.email = 'vineet@st.com'

// console.log(user)

// console.log(names)

// console.log(userage);

function addNumber(a: number, b: number): number {
  return a + b;
}

function addNumbers(a: number, b: number): void {
  console.log(a + b);
}
addNumbers(5, 10);

const addArrItems = (arr: number[]): number => {
  return arr.reduce((a, c) => a + c, 0);
};

console.log(addArrItems([1, 2, 3, 4, 5]));

let item;

item = "abc";
item = 123;

// console.log(item)

let itemArr: any[] = ["abc", 10];

const temp = itemArr[1]

function addTogether(val:any): any{
  return val + val
}

console.log(addTogether(3))