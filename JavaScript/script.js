document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); 

  var name = document.getElementById("myname").value;
  var email = document.getElementById("myemail").value;
  var phone = document.getElementById("myphone").value;
  var date=document.getElementById('mydate').value;
  var time = document.getElementById("mytime").value;

  let myobj={
    Name:name,
    Email:email,
    Phone_no:phone,
    Date:date,
    Time:time
  }
  let myobj_serialized=JSON.stringify(myobj);

  localStorage.setItem(email,myobj_serialized );

  // Create a new <li> element
  var li = document.createElement("li");
  li.textContent = "Name: " + name + ", Email: " + email + ", Phone: " + phone ;
  //adding a delete button
  var deleteBtn=document.createElement('button');
  deleteBtn.id='delete';
  deleteBtn.textContent='delete';
  li.appendChild(deleteBtn);

  // Append the <li> element to an existing <ul> element on the screen
  var ul = document.getElementById("userList");
  ul.appendChild(li);

deleteBtn.addEventListener("click",function(){
  deleteUser(email);
})
 
});

function deleteUser(email){
  localStorage.removeItem(email);
}