// const student = {
//     fullName : "shradha khapra",
//     marks: 94.4,
//     printMarks : function() {
//         console.log(`${this.fullName} received ${this.marks}`);
//     }
// };

/*

const employee = {
    calcTax(){
        console.log("Employee tax is 10%");
    },
};

const karanArjun = {
    salary : 5000,
    calcTax()
    {
        console.log("Employee tax is 20%");
    }
};

karanArjun.__proto__ = employee;*/

/*
class ToyataCar{
    constructor(brand, milege){
        this.brandName = brand;
        this.milege = milege;
        console.log("Creating new Object");
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyataCar();
let lexus = new ToyataCar("lexus");
fortuner.setBrand("fortuner");*/

class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{

}

let obj = new Child();

class Person{
    constructor(name){
        this.name = name;
        console.log("parent constructor");
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    constructor(name, branch){
        console.log("child constructor");
        super(name); //to invoke parent class constructor
        this.branch = branch;
        console.log("child exist constructor");
    }
    work(){
        super.eat();
        console.log("solve problems, build something");
    }
}

let shradhaObj = new Engineer("shradha","computer");

