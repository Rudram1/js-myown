//console.log("Harihar");
//console.table([])
//primitive data types
//symbol => unique

//Non-primitive datatypes
//object
/*console.log(typeof null);object*/ 

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
//Comaprison convert null to number, treating it as 0.
//avoid null and undefined comparison.

//primitive: string, number, boolean,null,undefined,symbol,bigint

//non-primitive or refernece: Arrays,objects,functions.
const heros= ["shaktimaan","naagraj","raga"];
let myObj ={
    name: "suraj",
    age:32,
}

const myFunction = function(){
    console.log("hello world");
}

//stack(primimtive), heap(non-primitive)

//strings
const name ="hitesh";
const repoCount = 60;

//console.log(name + repoCount + " Value"); outdated/

console.log(`Hello My name is ${name} and my repo count is ${repoCount}.`);//template literals

const gameName = new String('Surajidk');
console.log(gameName.__proto__);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(1,5);
console.log(newString);







