function popup() {
  alert("Camp Canada welcome you to our brand new website!");
}

function displayDate()
{
  document.getElementById("demo").innerHTML=Date();
}
// get the modal
var modal = document.getElementById('myModal');
// get the button that open the modal
var btn = document.getElementById('myBtn');
// when the user clicks on the button open the modal
var span = document.getElementsByClassName('close')[0];
// when the user clicks on <span> (x), close the modal
btn.onclick = function() {
  modal.style.display = "block";
}

spam.onclick =function() {
  modal.style.display = "none";
}
// when the user clicks anywhere outside of the moda, close it
window.onclick = function(event){
  if(event.target == modal){
     modal.style.display = "none";
 }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
