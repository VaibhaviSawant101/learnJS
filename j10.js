/*console.log("one");
console.log("two");
console.log("three");*/

/*
function hello(){
    console.log("hello");
}

setTimeout(hello, 2000);*/
/*
setTimeout(()=>{
    console.log("hello");
}, 4000);

console.log("four");
console.log("five");*/
/*
function sum(a, b)
{
    console.log(a+b);
}

function calculator(a, b, sumCallback)
{
    sumCallback(a,b);
}

calculator(2, 3, sum);

calculator(3, 2, (a, b)=>{
    console.log(a*b);
});*/
/*
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData)
        {
            getNextData();
        }
    }, 2000);
}

getData(1, ()=>{
    getData(2);
})
*/
/*
let promise = new Promise((resolve, reject) =>{
    console.log("I am a promise");
    resolve(123);
});

console.log(promise);*/
/*
function getData(dataId, getNextData)
{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData)
            {
                getNextData();
            }
        }, 10000);
    });
}*/
/*
let getPromise = () =>{
    return new Promise((resolve, reject)=>{
        console.log("I am a promise");
        reject("success");
    });
};

let promise = getPromise();
promise.then((res)=>{
    console.log("Successfull ", res)
});

promise.catch((err)=>{
    console.log("Rejected ", err);
});
*/

function asyncFunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success1");
        }, 4000);
    });
};

function asyncFunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success2");
        }, 4000);
    });
};
/*
console.log("fetching data1");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);
});

console.log("fetching data2");
let p2 = asyncFunc2();
p2.then((res)=>{
    console.log(res);
});
*/
//promise chain
/*
console.log("fetching data1");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data2");
    let p2 = asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    
    });
});*/
/*
asyncFunc1().then(()=>{
    return asyncFunc2();
}).then((res)=>{
    console.log(res);
});
*/

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

/*
async function getWeatherdata(){
    await api();
    await api();
    console.log("hello")
}

getWeatherdata();
*/

//IIFE
(async function (){
    await api();
    await api();
    console.log("hello")
})();
