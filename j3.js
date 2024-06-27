for(let count = 1; count <= 5; count++)
    {
        console.log(count);
    }

let i = 0;
while(i < 5)
    {
        console.log(i);
    }

do
{
    console.log(i);
}while(i < 0);

let str = "Apna Ghar";
for(let v of str)
    {
        console.log(v);
    }

const student = {
    name: "Rahul Gandhi",
    age: 20,
    cgpa: 9.8
}

for(i in student)
    {
        console.log(i);
        console.log(student.i);
    }

let s = "Apana Ghar";
console.log(s.length);
console.log(s[0]);

let stri = `Hello\n${student.name}`;
console.log(stri);

console.log(stri.toUpperCase());
stri.toUpperCase;
console.log(str);
//strings are immutable cant be changed hence all 
//the methods for string doesnot changes original string

console.log(stri.toLowerCase);
stri = "   bhgh  ";
console.log(stri.trim);

stri.slice(1, 5);
stri.concat(stri);
stri.replace(stri, 'val');
stri.replaceAll(stri, 'val');
stri.charAt(0);