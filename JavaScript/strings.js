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


const btn=document.querySelector('.btn');

btn.addEventListener('click',(e)=>{
     e.preventDefault();
     document.querySelector('#my-form').getElementsByClassName.background=
     '#ccc';
     document.querySelector('body').classList.add('bg-dark');
});

btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').getElementsByClassName.background=
    '#ccc';
    document.querySelector('body').classList.add('bg-dark');
});

btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').getElementsByClassName.background=
    '#ccc';
    document.querySelector('body').classList.add('bg-dark');
});


const myform=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value ==='' || emailInput===''){
        msg.classList.add('error');
        msg.innerHTML='please inter all fields';

        setTimeout(()=>msg.remove(),2000);
    }else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:
            ${emailInput.value}`));

            userList.appendChild(li);

            nameInput.value='';
            emailInput.value='';
    }
}