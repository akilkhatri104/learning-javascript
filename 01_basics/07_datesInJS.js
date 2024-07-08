// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCustomDate = new Date(2024,0,24)
let myCustomDate = new Date("06/04/2022")
// console.log(myCustomDate.toString());

// let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myCustomDate.getTime());

// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getTimezoneOffset());
// console.log(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()} and ${newDate.getUTCDay()}`);

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));