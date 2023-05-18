//TRAVERSING THE DOM//

var itemList =document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#ccc';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement// its similar to parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#ccc';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes// gives all the childNoes in a nodeList including lineBreak,whiteSpaces,comments
// console.log(itemList.childNodes);

//children//  similar to childNodes but it'll return a htmlCollection excluding lineBreak,whiteSpaces,comments etc
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";

//firstChild
// console.log(itemList.firstChild);

//firstElementChild// similar to firstChild but it will ingnore any lineBreak,whiteSpaces,comments etc
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.color="blue";

//lastChild
// console.log(itemList.lastChild);

//lastElementChild// similar to lastChild but it will ingnore any lineBreak,whiteSpaces,comments etc
// console.log(itemList.latsElementChild);
// itemList.lastElementChild.textContent="Hello 4";

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling// it ignores the lineBreak,whiteSpaces,comments etc
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling// it ignores the lineBreak,whiteSpaces,comments etc
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="red";

//creating elements using javaScript//

//createElement
var newDiv=document.createElement('div'); //creating a div tag
newDiv.className="hello";  //adding a class 
newDiv.id='hello1'; //adding an id
newDiv.setAttribute('title','Hello Div'); //adding attribute(setAttribute takes two parameters one attr name, attr value)
//creating text node
var newDivText=document.createTextNode('Hello World');
//adding text to the div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

var items=document.querySelector('#items');
var li=document.querySelector('ul li');

newDiv.style.fontSize="30px";

container.insertBefore(newDiv, h1);//inserting the element
items.insertBefore(newDiv,li);    //insertirf div before item 1