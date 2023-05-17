console.time('your code took') //to capture time from here
console.log("hello world!");
console.log(2+3);
console.log(true);
console.log([1,2,3,4,4]); // printing an array
console.log({mohan:'koda',marks:"98"});  //printing a javascript object
console.timeEnd('your code took'); //printing the time btw time and timeEnd(note:parameter should be same)
console.clear();//to clear the console
console.table([1,2,3,4,4]); //to print in a tabular formate
console.assert(151<150,'age>150 is not possible'); //if the condition gets false itll print the assert statemnet
console.error('this is an error'); //print the statement as an error