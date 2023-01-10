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

// map and filter concepts are also there in JS
// Conditionals and if-else like i already studied

// Let's look into switch case:
let mycolor = "yellow";
switch(mycolor) {
    case "red" :
        console.log("It' red color")
        break;
    case "blue" :
        console.log("It's Blue color");
        break;
    case "yellow" :
        console.log("It's Yellow color");
        break;
    default :
    console.log("Not Matched");
}

// Object oriented programming concepts in JavaScript

/*
// constructor function
function Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// making prototype instead of making functions under construcor
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear(); // getFullYear() is an Inbuilt fun
}
*/
// Instead of making prototype and constructors which we done above we can also make a class which will do same thing
class Person {

    constructor(firstName, lastName, dob)
     {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
     }
     getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
     getBirthYear() {
        return this.dob.getFullYear();
     }
}

// Instantiate object
const person1 = new Person("Amarjeet", "Singh", "09-29-2001");
const person2 = new Person("Amisha", "Singh", "11-21-2002");
console.log(person1);
console.log(person2.getFullName());
console.log(person1.getBirthYear());

// DOM: Document Object Model

// selecting single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// selecting multiple elements
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

// querySelectorAll() returns a NodeList so we can perform different array operations on it

// Example:-
const items = document.querySelectorAll('.item');
// appling for each loop and getting all the elements
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// calling remove function will remove the whole "items" class
ul.remove();

// removing last child
//ul.lastElementChild.remove(); 

// changing the text content
ul.firstElementChild.textContent = 'Hello';
// instead of above we can also use
ul.children[1].innerText = 'Hii';  
// also this can be done
ul.lastElementChild.innerHTML = '<h1>Kha Lo ME</h1>';

// let's change some style
const button = document.querySelector('.btn');
button.style.background = 'red';

// making things dynamic when user click "submit",button
button.addEventListener('mouseover', (e) => {
    e.preventDefault();
    console.log(e.target.id);
    // changing some design
    //document.querySelector('#my-form').style.background = 'yellow';
    //document.querySelector('body').classList.add('bg-dark');
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // the message will disappear
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

// that's it for this file