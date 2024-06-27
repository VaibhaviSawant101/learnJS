function myfunc(){
    console.log("Hello World");
}

function myfunc2(myparameter)
{
    console.log(`Hello ${myparameter}`)
}
function myfunc3(x,y)
{
    let s = x+y;
    return s;
}

let argument = "Vab";
myfunc();
myfunc2(argument);
let sum = myfunc3(2, 3);
console.log(sum);

let s = (x, y) => {return x+y};
console.log(s(2, 3));

function noOfVowels(str)
{
    let count = 0;
    for(ch of str)
        {
            if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U")
                {
                    count++;
                }  
        }
        console.log(count);
}

let count = (str) => {
    let c = 0;
    for(ch of str)
        {
            if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U")
                {
                    c++;
                }
        }
        return c;
}

console.log(count("Hello"));

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val){
    console.log(val);
});

arr.forEach((val) => {
    console.log(val);
});

arr.forEach(function printVal(val, idx, a){
    console.log(`${val} ${idx} ${a}`);
});

arr.forEach((val) => {
    console.log(val**2);
})

function square(x)
{
    console.log(x**2);
}

arr.forEach(square);

arr.map((val) => {
    console.log(val);
})

let newarr = arr.map((val) =>{
    return val*2;
})

console.log(newarr);

let evenArr = arr.filter((val) => {
    return val%2 === 0;
})

console.log(evenArr);

const output = arr.reduce((res, val) => {
    return res+val;
})
console.log(output);

let no = [0, 6, 2, 101, 3];
const fun = no.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(`the ans is ${fun}`);
