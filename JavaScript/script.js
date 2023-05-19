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

  localStorage.setItem('UserDetail',myobj_serialized );
 
});