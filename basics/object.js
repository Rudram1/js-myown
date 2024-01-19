//singleton

const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Aman"
tinderUser.isloggin = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggin'));

const course = {
    coursename : "my buiding",
    price: "899",
    courseInstructor: "GOD"
}


//course.courseInstructor

const {price} = course

console.log(price);