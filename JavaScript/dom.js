// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title=123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent="Hello"  //select using the index
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)


//getElementById

// console.log(document.getElementById('header-title'))
// var headerTitle= document.getElementById('header-title');
// console.log(headerTitle)
// headerTitle.textContent="Hello"
// headerTitle.innerText='goodbye'
// console.log(headerTitle.innerText)
// headerTitle.innerHTML='<h1>Hello</h1>';
// headerTitle.style.color="red"
// var header=document.getElementById('main-header');
// header.style.border='2px solid black'
// var addItem=document.getElementById('tittle');
// console.log(addItem)
// addItem.style.color='red'
// addItem.style.textDecorationStyle="italian"
// addItem.innerHTML='<b>Add Items</b>'

//getElementsBYCalssName

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="Hello"
// items[1].style.fontWeigth='bold';
// items[2].style.backgroundColor='green';

// //gives error as getElementsByClassName return htmlCollection
// //items.style.backgroundColor='#f4f4f4';

// for(let i=0;i<items.length;i++){
//     items[i].style.color="yellow";
// }

//getElementsByTagName  //it also returns the htmlCollection

var li=document.getElementsByTagName('li');
console.log(li)
console.log(li[1]);
li[1].textContent="Hello"
li[1].style.fontWeigth='bold';
li[2].style.backgroundColor='green';

//gives error as getElementsByClassName return htmlCollection
//items.style.backgroundColor='#f4f4f4';

for(let i=0;i<li.length;i++){
    li[i].style.color="red";
}