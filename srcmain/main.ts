let id: number = 5;
let myName: string = 'Vineet Verma';

let numArr: number[] = [1, 2, 4];

let myTuple: [string, boolean, number] = ['vineet', true, 1];

let myTuples: [string, boolean, number][] = [
  ['vineet', true, 1],
  ['vikas', false, 2],
];

let myNull: undefined = undefined;

let myUnion: string | number = 'vin';

enum Direction1 {
  up,
  down,
  left,
  right,
}

type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: 'vineet',
};

let cid: any = true;
let customerId = cid as string;

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(2, 3));

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'von',
};

interface PeronsInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PeronsInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register(): string {
    return `${this.name} is registered.`;
  }
}

const vineet = new Person(1, 'vineet');
// console.log(vineet.register())

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(2, 'Darshita', 'Worker');

console.log(emp.register());
console.log(emp.position);

const tempArr: any[] = [1, true, 'numebr'];

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numsArr = getArray<number>([1, 3, 2]);
let stringArr = getArray<string>(['as', 'str']);
