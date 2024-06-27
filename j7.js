let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

para.setAttribute("class", "newClass");
console.log(para.getAttribute("class"));

div.style.backgroundColor="red";
div.style.fontSize= "26px";

let newBtn = document.createElement("button");
newBtn.innerText = "Click here";
console.log(newBtn);

div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);

para.remove();
para.getAttribute('class');
para.setClassList.add('myclass2');
para.setClassList.remove('myclass2');