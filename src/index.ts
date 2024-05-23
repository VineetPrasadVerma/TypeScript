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

const temp = itemArr[1];

function addTogether(val: any): any {
  return val + val;
}

console.log(addTogether(3));

let hsla: [boolean, string, string, number];
hsla = [false, "100%", "50%", 4];

function useCords(): [number, number] {
  return [1, 2];
}

//named tuples
let human: [name: string, age: number];
human = ["vin", 25];

// console.log(human[1])

//interfaces
interface Author {
  id: number;
  name: string;
  avatar: string;
  type: 'author';
}

const authorOne: Author = {
  id: 1,
  name: "mario",
  avatar: "/img/mario.jpg",
  type: "author",
};

interface Post {
  id: number;
  type: 'post';
  title: string;
  tags: string[];
  author: Author;
  created_at: Date;
}

const newPost: Post = {
  id: 1,
  type: "post",
  title: "new post",
  tags: ["tech", "game"],
  author: authorOne,
  created_at: new Date(),
};

let posts: Post[] = [];
posts.push(newPost);

//type aliases
type Rgb = [number, number, number];

type userss = {
  name: string;
  score: number;
};

const userOne: userss = {
  name: "maio",
  score: 54,
};

//union

let id: number | string;
id = 1;
id = "2";

type Id = number | string;
let anotherId: Id = "1ergd453s";
anotherId = 2;

// union type pitfall
function swapId(id: Id): Id {
  // can only use method and props common to bith string and number
  // return parseInt(id)

  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
}

console.log(swapId("4"));
console.log(swapId(5));

//typeGuards

function print(value: Post | Author): void {
  console.log(value.id);

  if (value.type === 'post') {
    console.log(value.created_at)
  }else{
    console.log(value.name)
  }
}

print(newPost)