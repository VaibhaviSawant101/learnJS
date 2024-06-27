// console.log("Panchat");
// console.log("Hello World I am Vaibhavi");

// fullname = "Tony Stark";
// age = 24;
// price = 99.99;
// x = null;
// y = undefined;
// isFollow = false;
// console.log(fullname);

let price = 24;
console.log(price);
price = 32;
console.log(typeof(price));

// const a;

let fullName = "Vaibhavi";
console.log(typeof(fullName));

let x;
console.log(typeof(x));

x = null;
console.log(typeof(x));

x = BigInt("123");
console.log(typeof(x));
console.log(x);

x = Symbol("Hello");
console.log(typeof(x));
console.log(x);

const student = {
    fullName : "Rahul Kumar",
    age : 20,
    cgpa : 8.2,
    isPass : true
};

console.log(student.fullName);
console.log(student["age"]);
student.age = 21;
console.log(student["age"]);