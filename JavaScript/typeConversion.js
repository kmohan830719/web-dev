//type conversion and type coersion

let myvar=34;
myvar=String(34);  //type casted to string
console.log(myvar,(typeof myvar));

let bool=Number(true);  //type casting boolean value into number
console.log(bool,(typeof bool));

let date=String(new Date());   //type casting object into string
console.log(date,(typeof date));

let arr=String([1,2,3,4]);   //type casting object into string
console.log(arr.length,(typeof arr.length));


//toString method

let i=4;
console.log(i.toString());

//understand parsing

let str="1234";
str=Number("12345");  //type casting string into number
str=Number("123.12");  //print 123.12 decimal number
str=parseInt("123.12");  //print 123 coz we are changing string int Integer
str=parseFloat("123.12"); //print 123.12 cuz a floating number
console.log(str, (typeof str));

//toFixed() method
console.log(str.toFixed(5));  //it will printstr to 5 decimal numbers


//type coercion

let string="123";
let num=123;
let string2=Number("123");
console.log(string + num); //here num is converted to string and then concatinated
console.log(string2+num);  //because both are numbers hence they are added together
//and 246 is printed which is 123+123=246
