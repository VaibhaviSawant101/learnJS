/*console.log("hello");
console.log(window);
window.console.log("Hello");
console.log(window.document);
console.dir(window.document); //to access the object
console.log(document.body.childNodes[2]);
document.body.childNodes[3].innerText = "Hello World";*/

/*
let heading = document.getElementById("header");
console.log(heading);

let hecl = document.getElementsByClassName("headclass");
console.dir(hecl);

hecl = document.getElementsByTagName("p");
console.dir(hecl);

hecl = document.querySelector("p");
console.dir(hecl);
hecl = document.querySelectorAll("p");
console.dir(hecl);

hecl = document.querySelector(".headclass");
console.dir(hecl);
hecl = document.querySelector("#header");
console.dir(hecl);

//DOM Properties
let first = document.querySelector("#header");
console.dir(first);

console.log(first.tagName);

console.dir(window.document.body.firstChild);
*/
/*
let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);
console.log(div.innerHTML);

let h1 = document.querySelector("h1");
h1.innerText = "Hello World";
console.log(h1.innerText);

let p = document.querySelector("p");
console.log(p.textContent);
*/

// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText.concat(" from Apna College");

let divs = document.querySelectorAll(".box");
divs[0].innerText = divs[0].innerText + "1";
divs[1].innerText = divs[1].innerText + "2";
divs[2].innerText = divs[2].innerText + "3";

let idx = 1
for(div of divs)
    {
        div.innerText = `${div.innerText} ${idx}`;
        idx++;
    }