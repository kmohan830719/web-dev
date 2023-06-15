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

  //doing a post request to crudcrud
  axios.post("https://crudcrud.com/api/647104e6ccd14a73a590fc94b1cde349/appointment", myobj)
  .then((responce)=>{
    // console.log(responce);
    showDetails(responce.data);
  })
  .catch((err)=>{
    console.log(err);
  })

  //storing in local storage
  // let myobj_serialized=JSON.stringify(myobj);
  // localStorage.setItem(email,myobj_serialized );

  //showing on the screen
 //showDetails(myobj);
 
});

 //doing a get request
 window.addEventListener("DOMContentLoaded",()=>{
  axios.get("https://crudcrud.com/api/647104e6ccd14a73a590fc94b1cde349/appointment")
  .then((response)=>{
    console.log(response);
    for(var i=0;i<response.data.length;i++){
      showDetails(response.data[i])
    }
  })
  .catch((err)=>{
    console.log(err)
  })
}) 

function deleteUser(email){
  localStorage.removeItem(email);
}

function showDetails(obj){
   // Create a new <li> element
   var li = document.createElement("li");
   li.id="list";
   li.textContent = "Name: " + obj.Name + ", Email: " + obj.Email + ", Phone: " + obj.Phone ;
   //adding a delete button
   var deleteBtn=document.createElement('button');
   deleteBtn.textContent='delete';
   li.appendChild(deleteBtn);
 
     //adding a edit button
     var editBtn=document.createElement('button');
     editBtn.textContent='edit';
     li.appendChild(editBtn);
 
   // Append the <li> element to an existing <ul> element on the screen
   var ul = document.getElementById("userList");
   ul.appendChild(li);
   deleteBtn.addEventListener("click",function(e){
    e.preventDefault();
    deleteUser(obj.Email);
    li.remove();
  })
  
  editBtn.addEventListener("click",function(e){
    e.preventDefault();
    var userData = JSON.parse(localStorage.getItem(obj.Email));
  
    if (userData) {
      document.getElementById("myname").value = userData.Name;
      document.getElementById("myemail").value = userData.Email;
      document.getElementById("myphone").value = userData.Phone_no;
      document.getElementById("mydate").value = userData.Date;
      document.getElementById("mytime").value = userData.Time;
    }
    deleteUser(obj.Email);
  
     // Remove the user from the UI
     li.remove();
  })
}
 