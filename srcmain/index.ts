// let userage: number = 27;
// let username: string = "vineet";
// let isMale: boolean = true;

// // userage = '30'
// userage = 40;

// let something: null;

// let names: string[] = ["Mario", "Kunfu"];
// let ages: number[] = [25, 35];

// const n: string = names[1];

// names.push("34");

// let fruits = ["apple", 30, true];
// // const fruit:string = fruits[2]

// let user: { firstName: string; age: number; id: number } = {
//   firstName: "Vineet",
//   age: 27,
//   id: 1,
// };

// // user.firstName = 40
// // user.email = 'vineet@st.com'

// // console.log(user)

// // console.log(names)

// // console.log(userage);

// function addNumber(a: number, b: number): number {
//   return a + b;
// }

// function addNumbers(a: number, b: number): void {
//   console.log(a + b);
// }
// addNumbers(5, 10);

// const addArrItems = (arr: number[]): number => {
//   return arr.reduce((a, c) => a + c, 0);
// };

// console.log(addArrItems([1, 2, 3, 4, 5]));

// let item;

// item = "abc";
// item = 123;

// // console.log(item)

// let itemArr: any[] = ["abc", 10];

// const temp = itemArr[1];

// function addTogether(val: any): any {
//   return val + val;
// }

// console.log(addTogether(3));

// let hsla: [boolean, string, string, number];
// hsla = [false, "100%", "50%", 4];

// function useCords(): [number, number] {
//   return [1, 2];
// }

// //named tuples
// let human: [name: string, age: number];
// human = ["vin", 25];

// // console.log(human[1])

// //interfaces
// interface Author {
//   id: number;
//   name: string;
//   avatar: string;
//   type: 'author';
// }

// const authorOne: Author = {
//   id: 1,
//   name: "mario",
//   avatar: "/img/mario.jpg",
//   type: "author",
// };

// interface Post {
//   id: number;
//   type: 'post';
//   title: string;
//   tags: string[];
//   author: Author;
//   created_at: Date;
// }

// const newPost: Post = {
//   id: 1,
//   type: "post",
//   title: "new post",
//   tags: ["tech", "game"],
//   author: authorOne,
//   created_at: new Date(),
// };

// let posts: Post[] = [];
// posts.push(newPost);

// //type aliases
// type Rgb = [number, number, number];

// type userss = {
//   name: string;
//   score: number;
// };

// const userOne: userss = {
//   name: "maio",
//   score: 54,
// };

// //union

// let id: number | string;
// id = 1;
// id = "2";

// type Id = number | string;
// let anotherId: Id = "1ergd453s";
// anotherId = 2;

// // union type pitfall
// function swapId(id: Id): Id {
//   // can only use method and props common to bith string and number
//   // return parseInt(id)

//   if (typeof id === "string") {
//     return parseInt(id);
//   } else {
//     return id.toString();
//   }
// }

// console.log(swapId("4"));
// console.log(swapId(5));

// //typeGuards

// function print(value: Post | Author): void {
//   console.log(value.id);

//   if (value.type === 'post') {
//     console.log(value.created_at)
//   }else{
//     console.log(value.name)
//   }
// }

// print(newPost)
export interface User {
  id: number;
  name: string;
  activatedOn: Date;
  deactivatedOn: Date | null;
  customerId: number;
}

export interface Subscription {
  id: number;
  customerId: number;
  monthlyPriceInCents: number;
}

export function monthlyCharge(yearMonth: string, subscription: Subscription | null, users: User[]): number {
  if (subscription === null || users.length === 0) {
    return 0;
  }

  const [year, month] = yearMonth.split("-").map(item=>Number(item));
  // console.log(year, month)
  const dateFromYearAndMonth = new Date(year, month - 1, 15);
  // console.log(dateFromYearAndMonth)

  const firstDay = firstDayOfMonth(dateFromYearAndMonth)
  // console.log('F', firstDay)
  const lastDay = lastDayOfMonth(firstDay);
  // console.log('L', lastDay)
  const daysInMonth = lastDay.getDate();
  // console.log('DIM', daysInMonth)
  const dailyRate = subscription.monthlyPriceInCents / daysInMonth;
  // console.log('DR', dailyRate)

  let totalActiveUserDays = 0;

  users.forEach(user => {
    const userSubscriptionStartDate = user.activatedOn;
    const userSubscriptionEndDate = user.deactivatedOn || lastDay;

    if (userSubscriptionStartDate > lastDay || userSubscriptionEndDate < firstDay) {
      return;
    }

    const effectiveStart = userSubscriptionStartDate < firstDay ? firstDay : userSubscriptionStartDate;
    const effectiveEnd = userSubscriptionEndDate > lastDay ? lastDay : userSubscriptionEndDate;
    // console.log('es', effectiveStart, 'ee', effectiveEnd);

    const activeDays = (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60 * 24) + 1;

    // console.log('He',effectiveEnd.getDate(), effectiveStart.getDate())
    totalActiveUserDays += activeDays;
  });

  const totalCharge = Math.round(totalActiveUserDays * dailyRate);
  return totalCharge;
}

/*******************
* Helper functions *
*******************/

function firstDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function lastDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function nextDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}


console.log(monthlyCharge('2022-04',
  {
    'id': 763,
    'customerId': 328,
    'monthlyPriceInCents': 359
  },
  [
    {
      id: 1,
      name: "Employee #1",
      customerId: 1,

      // when this user started
      activatedOn: new Date("2021-11-04"),

      // last day to bill for user
      // should bill up to and including this date
      // since user had some access on this date
      deactivatedOn: new Date("2022-04-10")
    },
    {
      id: 2,
      name: "Employee #2",
      customerId: 1,

      // when this user started
      activatedOn: new Date("2021-12-04"),

      // hasn't been deactivated yet
      deactivatedOn: null
    },
  ]
));

/**
 * Computes the monthly charge for a given subscription.
 *
 * @returns The total monthly bill for the customer in cents, rounded
 * to the nearest cent. For example, a bill of $20.00 should return 2000.
 * If there are no active users or the subscription is null, returns 0.
 *
 * @param month - Always present
 *   Has the following structure:
 *   "2022-04"  // April 2022 in YYYY-MM format
 *
 * @param subscription - May be null
 *   If present, has the following structure (see Subscription interface):
 *   {
 *     'id': 763,
 *     'customerId': 328,
 *     'monthlyPriceInCents': 359  // price per active user per month
 *   }
 *
 * @param users - May be empty, but not null
 *   Has the following structure (see User interface):
 *   [
 *     {
 *       id: 1,
 *       name: "Employee #1",
 *       customerId: 1,
 *   
 *       // when this user started
 *       activatedOn: new Date("2021-11-04"),
 *   
 *       // last day to bill for user
 *       // should bill up to and including this date
 *       // since user had some access on this date
 *       deactivatedOn: new Date("2022-04-10")
 *     },
 *     {
 *       id: 2,
 *       name: "Employee #2",
 *       customerId: 1,
 *   
 *       // when this user started
 *       activatedOn: new Date("2021-12-04"),
 *   
 *       // hasn't been deactivated yet
 *       deactivatedOn: null
 *     },
 *   ]
 */

/**
  Takes a Date instance and returns a Date which is the first day
  of that month. For example:

  firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)

  Input type: Date
  Output type: Date
**/
// function firstDayOfMonth(date: Date): Date {
//   return new Date(date.getFullYear(), date.getMonth(), 1)
// }