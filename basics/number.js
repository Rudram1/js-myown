const balance = new Number(100);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber = 123.8967;

console.log(otherNumber.toPrecision(4));

const limit = 100000000
console.log(limit.toLocaleString('en-IN'));


//++++++++++++++Math+++++++++++++++++++++
//console.log(Math.round(4.5));
console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 5;
const max = 7;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//Date

// let myCreateDate = new Date(2023,0,24)
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());