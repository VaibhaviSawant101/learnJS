//this is hello world program
/*this is hello world program*/
console.log("hello world");
//Assignment Operator
let a = 5;
let b = 2;
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a%b = ",a%b);
console.log("a**b = ",a**b);
console.log("a++ = ",a++);
console.log("a-- = ",a--);
console.log("++a = ",++a);
console.log("--a = ",--a);

//Assignment Operator
console.log(a+=2);
console.log(a-=2);
console.log(a*=2);
console.log(a/=2);
console.log(a%=2);
console.log(a**=2);

//Comparison Operator
let c = "5"
let d = 5;
console.log(a==b);
console.log(a!=b);
console.log(c==d);
console.log(c===d);
console.log(a<d);
console.log(a<=d);
console.log(a>d);
console.log(a>=d);

//Logical Operator
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

console.log(!false);
console.log(!true);

//Conditional Statement
let age = 34;
if(age >= 18){
    console.log("You can vote")
}
else {
    console.log("You cannot vote")
}

if(age > 18)
    {
        console.log("junior");
    }
else if(age > 60)
    {
        console.log("middle");
    }
else
    {
        console.log("senior");
    }

    if(3 > 2) console.log(true);

let s = age >= 15 ? "hello" : "bye";
console.log(s);

switch(age)
{
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("default");
        break;
}

let name = prompt("Enter your name");
console.log(name);
