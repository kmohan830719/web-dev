//variables in javascript
//three keywords are used to declare variables
//var, let, const

//var name='mohan';
var marks;
var roll=24;
console.log(name,marks,roll);

//rules for creating variables
//1. can not start with number
//2. can start with letter, number,_ or $
//3. are case sensitive

const owner="mohan"; //const variables once declared with value it can not be redeclared
//owner="rami";     //can not do like this(cant reassign value)
console.log(owner);

//let(it has block level scope)
{
    let city="hyderabad";
    console.log(city);
}
//console.log(city); //error cuz let has block level scope


const arr=[1,2,3,4];
arr.push(45);   //we can push element in an const array
//arr=[1,2,3];   //but we can not redeclare it
console.log(arr);

//most common programing case types
//1. camelCase
//2. PascalCase
//3. kebab-case
//4. snake_case


