let heroes = ['ironman', 'hulk', 'thor', 'batman'];
let marks = [96, 75, 48, 83, 66];
let info = ['rahul', 86, 'Delhi'] //can do this but not preffered
console.log(marks);
console.log(marks.length);
console.log(typeof(marks)); //type - array
console.log(marks[3]);
console.log(marks[100]);//undefined
marks[0] = 34;
console.log(marks[0]);

for(let i = 0; i < marks.length; i++)
    {
        console.log(marks[i]);
    }

for(let i of marks)
    {
        console.log(i);
    }

let sum = 0;
marks = [85, 97, 44, 37, 76, 60];
for(m of marks)
    {
        sum += m;
    }
    console.log(sum/marks.length);

let vegies = ['potato', 'bringal', 'tomato', 'corriander', 'cucumber'];
console.log(vegies);
console.log(marks.toString);
vegies.push('ladiesfinger');
console.log(vegies);
vegies.pop();
console.log(vegies);

let fruit = ['strawberry', 'mango', 'grapes'];
let food = vegies.concat(fruit);
console.log(food);

vegies.unshift('bitterguard');
console.log(vegies);
vegies.shift();
console.log(vegies);

console.log(vegies.slice(2, 5));
console.log(vegies.slice()); //doesnot changes original array

//splice - splice(startidx, delCount, newElem..)
let arr = [1, 5, 8, 10, 3, 7];
arr.splice(2, 2);
console.log(arr);
arr.splice(1, 2, 101, 102);
console.log(arr);
arr.splice(3);
console.log(arr);
arr.splice();
console.log(arr);