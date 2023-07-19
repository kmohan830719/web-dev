document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); 
  
    var name = document.getElementById("myname").value;
    var email = document.getElementById("myemail").value;
    var phone = document.getElementById("myphone").value;
    var date=document.getElementById('mydate').value;
    var time = document.getElementById("mytime").value;
  
    let myobj={
      name:name,
      email:email,
      phone_no:phone,
      date:date,
      time:time
    }
  
  
  
    //doing a post request to crudcrud
    axios.post("http://localhost:3000/user", myobj)
    .then((responce)=>{
      // console.log(responce);
      showDetails(responce.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  
    //storing in local storage
    let myobj_serialized=JSON.stringify(myobj);
    localStorage.setItem(email,myobj_serialized );
  
    //showing on the screen from localstorage
   //showDetails(myobj);
   
  });
  
   //doing a get request
   window.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:3000/user")
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
     li.textContent = "Name: " + obj.name + ", Email: " + obj.email + ", Phone: " + obj.phone_no ;
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
      axios.delete(`http://localhost:3000/user/${obj.id}`)
      .then((promis)=>{
        console.log(promis)
      })
      .catch((err)=>{
        console.log(err)
      })
      deleteUser(obj.email);
      li.remove();
    })
    
    editBtn.addEventListener("click",function(e){
      e.preventDefault();
      axios.get(`http://localhost:3000/user/${obj.id}`)
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
  
      axios.put(`http://localhost:3000/user/${obj.id}`, updatedData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
      })
  }
   