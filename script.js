function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
<script>
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;


// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}
function mouseOver22() {
  document.getElementById("forward").src = "https://cdn.glitch.global/3d39eb03-fe83-467a-a934-5f464b79bc42/forward_color.png?v=1738187662219";
 }
 
 function mouseOut22() {
   document.getElementById("forward").src = "https://cdn.glitch.global/3d39eb03-fe83-467a-a934-5f464b79bc42/forward_empty.png?v=1738187665094";
 }
 
 function mouseOverback() {
  document.getElementById("back").src = "https://cdn.glitch.global/3d39eb03-fe83-467a-a934-5f464b79bc42/forward_color.png?v=1738187662219";
 }
 
 function mouseOutback() {
   document.getElementById("back").src = "https://cdn.glitch.global/3d39eb03-fe83-467a-a934-5f464b79bc42/forward_empty.png?v=1738187665094";
 }
</script>