//all about Strings in javascript
// let arr=[];
// arr.push(1);
// arr.pop();
// console.log(arr);
// console.log(arr.length)



// const person = {
//     age: 26,
//     firstName: "Yash",
//     lastName: "Prasad",
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main street',
//         city: 'BLR',
//         state: 'Karnataka'
//     }
// }
// // In the person object, print 2nd hobby = "movies" from the hobbies

// console.log("Person's 2nd hobby = ",person.hobbies[1])

// // In the person object, print the "state" value from address key
// console.log("Person's state = ", person.address.state)

// // Take out the age and city from the person object using destructuring and console log
// const { age,address:{city}} = person
// console.log("Person's age = ", age)
// console.log("Person's city = ", city)

console.log(window);
const ul=document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent='Hello';
ul.firstElementChild.style.background="green"; //

ul.children[1].style.background="yellow";

// ul.children[1].innerText='mohan';
// ul.lastElementChild.innerHTML='<h2>hello</h2>';

