document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); 

  var name = document.getElementById("myname").value;
  var email = document.getElementById("myemail").value;
  var phone = document.getElementById("myphone").value;
  var date=document.getElementById('mydate').value;
  var time = document.getElementById("mytime").value;


  localStorage.setItem('Name', name);
  localStorage.setItem('Email', email);
  localStorage.setItem('Phone no', phone);
  localStorage.setItem('Date', date);
  localStorage.setItem('Time', time);
 
});