// Data types in javaScript

// -> Primitive data type(stored in stack)
//    .string
//    .number
//    .boolean
//    .null    (intensionall u acn put)
//    .undefined  (default value)
//    .Symbol

//string
let name="mohan";
console.log("My name is "+ name);
console.log("Data type is "+(typeof name));  //typre of give the type of the variable is

//Number
let number=1234;
console.log("Data type is "+(typeof number));

//boolean
let isValid=true;
console.log("Data type is "+(typeof isValid));

//null
let nullVar=null;
console.log("Data type is "+(typeof nullVar)); //it returns null as object but its a premitive dataType

//undefined
let undef;     //by default undefined
console.log("Data type is "+(typeof undef));


// -> Reference data type(stored in heap memory)
//    .Arrays
//    .object literals
//    .function
//    .date

//Arrays
let arr=[1,2,3,4];
console.log("Data type is "+(typeof arr));

//object literals
let myObject={
    name: 'mohan',
    age: 25,
    marks: 45
};
console.log("Data type is "+(typeof myObject));

//function
function findname(){
 console.log('i am a function');
}
console.log("Data type is "+(typeof findname));

//date
let dte=new Date();
console.log("Data type is "+(typeof dte));