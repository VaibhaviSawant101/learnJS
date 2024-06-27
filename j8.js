/*let para = document.querySelector("p");
console.log(para);
para.onmouseover = (e) => {
    console.log("Hello World");
    console.log(e);
    //event object
    console.log(e.type);
    console.log(e.target);
}

para.addEventListener("click", ()=>{
    console.log("para was clicked 1");
});
para.addEventListener("click", ()=>{
    console.log("para was clicked 2");
});
const handler3 = ()=>{
    console.log("para was clicked 3");
};
para.addEventListener("click", handler3);
para.addEventListener("click", ()=>{
    console.log("para was clicked 4");
});

para.removeEventListener("click", handler3);*/

let modeBtn = document.querySelector(".mode");
let currMode = "light";
modeBtn.addEventListener("click", () =>{
    if(currMode === "light")
        {
            currMode="dark";
            document.querySelector("body").style.backgroundColor="black";
        }
    else
    {
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});