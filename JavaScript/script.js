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
  // axios.post("https://crudcrud.com/api/6a59010557b3430aa461e6ab08b2c698/appointment", myobj)
  // .then((responce)=>{
  //   // console.log(responce);
  //   showDetails(responce.data);
  // })
  // .catch((err)=>{
  //   console.log(err);
  // })

  //storing in local storage
  let myobj_serialized=JSON.stringify(myobj);
  localStorage.setItem(email,myobj_serialized );

  //showing on the screen from localstorage
 //showDetails(myobj);
 
});

 //doing a get request
 window.addEventListener("DOMContentLoaded",()=>{
  axios.get("https://crudcrud.com/api/6a59010557b3430aa461e6ab08b2c698/appointment")
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

//delete from local storage
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

   //to delete user from crudcrud as well as localstorage
   deleteBtn.addEventListener("click",function(e){
    e.preventDefault();
    axios.delete(`https://crudcrud.com/api/6a59010557b3430aa461e6ab08b2c698/appointment/${obj._id}`)
    .then((promis)=>{
      console.log(promis)
    })
    .catch((err)=>{
      console.log(err)
    })
    deleteUser(obj.Email);
    li.remove();
  })
  
  editBtn.addEventListener("click",function(e){
    e.preventDefault();
    axios.get(`https://crudcrud.com/api/6a59010557b3430aa461e6ab08b2c698/appointment/${obj._id}`)
    .then((promis)=>{
      console.log(promis.data)
      if (promis) {
        document.getElementById("myname").value = promis.data.Name;
        document.getElementById("myemail").value = promis.data.Email;
        document.getElementById("myphone").value = promis.data.Phone_no;
        document.getElementById("mydate").value = promis.data.Date;
        document.getElementById("mytime").value = promis.data.Time;
      }
    })
    .catch((err)=>{
      console.log(err)
    })

    // var userData = JSON.parse(localStorage.getItem(obj.Email));
  
    // deleteUser(obj.Email);
  
     // Remove the user from the UI
     li.remove();
  })
  document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();

    var updatedData = {
      Name: document.getElementById("myname").value,
      Email: document.getElementById("myemail").value,
      Phone_no: document.getElementById("myphone").value,
      Date: document.getElementById("mydate").value,
      Time: document.getElementById("mytime").value
    };

    axios.put(`https://crudcrud.com/api/6a59010557b3430aa461e6ab08b2c698/appointment/${obj._id}`, updatedData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    })
}
 