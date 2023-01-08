// Variable declarations 
const a = 12; // Once declared it's value can't be changed also it's assignment done at the time of declaration
let b = 12; // It's value can be chnaged
var c = 18; // This way also we can declare the variable but the common use coders use is const and let

/*
console.warn("Its a warning");
console.error("Its an error");
window.alert("It's an alert");
*/

let arr = ["Apple", "Mango", "Grapes"];
console.log(arr);
arr.push("Dog");
console.log(arr);

// We acn access the array by index 
console.log(arr[1]);

// In JS array we can add value of different type
arr.push(100);
console.log(arr);

// Objects 
const person = {
    name: "Amarjeet",
    age: 21,
    sex: "male",
    //we can also declare objects inside a object
    address: {
        vill: "Jogiara",
        Dis: "Darbhanga",
        Hno:  20
    }
}

// Accessing the element which is inside the object of a object
console.log(person.address.vill);

// destructuring in JS | It's a new feature introduced in ES6
const {name, age} = person;
console.log(age);

// adding a new thing in existing object
person.email= "amarjeet@gmail.com"
console.log(person);

// declaring objects inside array
const todoarray = [
    {
        id: 1,
        text: "Bath",
        isCompleted: true
    },
    {
        id: 2,
        text: "Eat",
        isCompleted: false
    }
];

console.log(todoarray);

// access partcular element of an array
console.log(todoarray[1].text);

// converting object to JSON format
const todoJSON = JSON.stringify(todoarray);
console.log(todoJSON);

// For loop in JavaScript
for(let i=0;i<2;i++)
console.log(todoarray[i].text);

// While loop
let j=0;
while(j<2)
{
    console.log(todoarray[j].id);
    j++;
}

// map and filter concepts are also there in