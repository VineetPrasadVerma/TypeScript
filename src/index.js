"use strict";
// let userage: number = 27;
// let username: string = "vineet";
// let isMale: boolean = true;
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthlyCharge = monthlyCharge;
function monthlyCharge(yearMonth, subscription, users) {
    if (subscription === null || users.length === 0) {
        return 0;
    }
    const [year, month] = yearMonth.split("-").map(item => Number(item));
    // console.log(year, month)
    const dateFromYearAndMonth = new Date(year, month - 1, 15);
    // console.log(dateFromYearAndMonth)
    const firstDay = firstDayOfMonth(dateFromYearAndMonth);
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
function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}
function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}
console.log(monthlyCharge('2022-04', {
    'id': 763,
    'customerId': 328,
    'monthlyPriceInCents': 359
}, [
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
]));
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
