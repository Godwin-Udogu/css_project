// 1 year = 365 days
// 1 day = 24 hours
// 1 hr = 60 min
// 1 min = 60 sec
// 1 sec = milisec

const myDate = new Date();
console.log(myDate)


const specificDate = new Date("2022-01-01T12:00:00");
console.log(specificDate)

const mymilisec = (days) => {
    return days * 24 *60 * 60 *1000
}
console.log(mymilisec(1))

const specificDate2 = new Date("March 21, 2024 12:00:00");
console.log(specificDate2)
const specificDate2x = new Date("Jan 21, 2004 12:00:00");
console.log(specificDate2x)

// by numeric parameters
const customDate = new Date(2022, 0, 1, 12, 0, 0, 0);

const specificDate3 = new Date(2022, 2, 1, 12, 0, 0, 0);
console.log(specificDate3)
// get UTC time
console.log("UTC time",specificDate3.toUTCString())

const currentDate = new Date();
const currentyear = currentDate.getFullYear();
console.log('fullyear', currentyear)
const currentMonth = currentDate.getMonth();
console.log('month', currentMonth)

const adjustedcurrentMonth = currentDate.getMonth() + 1;
console.log('month', adjustedcurrentMonth)
const currentDay = currentDate.getDate();
console.log('Day', currentDay)
const currentHours = currentDate.getHours();
console.log('hours', currentHours)
const currentMinutes = currentDate.getMinutes();
console.log('minutes', currentMinutes)
const currentsec = currentDate.getSeconds();
console.log('seconds', currentsec)
const currentMilisec = currentDate.getMilliseconds();
console.log('milisec', currentMilisec)



const MyDate = new Date();




MyDate.setTime()
// converts miliseconds to string time
console.log('setTime', new Date(7755555555555))

let specifiedTimestamp = Date.parse(specificDate3)
console.log('specifiedTimestamp', specifiedTimestamp)
let specifiedTimestamp2 = Date.parse("March 21, 2024 12:00:00")
console.log('specifiedTimestamp2', specifiedTimestamp2)

let now = new Date()
// now + {const mymilisec2 = (days) => {
//     return days * 24 *60 * 60 *1000
// }
// console.log(mymilisec2(7))}
//  console

 {const mymilisec2 = (days) => {
    return days * 24 *60 * 60 *1000
}
console.log(mymilisec2(30))}

const mymilisec2 = new Date()
mymilisec2.setTime(2592000000)
console.log('setTime',new Date(2592000000))