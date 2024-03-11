---
permalink: /new.html
---
<html>
<head>
<title>Laser Safety</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css">
<style>
.settings-menu {
  display: block;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  transition: 0.5s;
  z-index: 2; /* Adjusted z-index */
}

.settings-menu a {
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
  width: 100%;
}

.settings-menu a:hover {
  background-color: #ddd;
}

.settings-menu .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}

.settings-button {
  float: right;
}

.settings-button:hover + .settings-menu {
  display: block;
  animation: slideIn 0.5s forwards;
}

@keyframes slideIn {
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
}

</style>
</head>
<body>

<!-- Side Navigation -->
<nav class="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style="display:none" id="mySidebar">
  <h1 class="w3-xxxlarge w3-text-theme">Side Navigation</h1>
  <button class="w3-bar-item w3-button" onclick="w3_close()">Close <i class="fa fa-remove"></i></button>
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
  <a href="#" class="w3-bar-item w3-button">Link 4</a>
</nav>

<!-- Settings Menu -->
<nav class="w3-sidebar w3-bar-block w3-card w3-animate-right w3-center" style="display:none" id="settingsMenu">
  <h1 class="w3-xxxlarge w3-text-theme">Settings</h1>
  <button class="w3-bar-item w3-button closebtn" onclick="closeSettingsMenu()">Close <i class="fa fa-remove"></i></button>
  <a href="#" class="w3-bar-item w3-button">Setting 1</a>
  <a href="#" class="w3-bar-item w3-button">Setting 2</a>
  <a href="#" class="w3-bar-item w3-button">Setting 3</a>
  <a href="#" class="w3-bar-item w3-button">Setting 4</a>
</nav>
<!-- Header -->
<header class="w3-container w3-theme w3-padding" id="myHeader">
  <i onclick="w3_open()" class="fa fa-bars w3-xlarge w3-button w3-theme"></i>
  <i onclick="openSettings()" class="fa fa-cog w3-xlarge w3-button w3-theme settings-button"></i>
  <div class="w3-center">
    <h4>test</h4>
    <h1 class="w3-xxxlarge w3-animate-bottom">LASER SAFETY</h1>
    <div class="w3-padding-32">
      <button class="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" onclick="document.getElementById('id01').style.display='block'" style="font-weight:900;">LEARN W3.CSS</button>
    </div>
  </div>
</header>

<script>
function openSettings() {
  document.getElementById("settingsMenu").style.display = "block";
}

function closeSettingsMenu() {
  document.getElementById("settingsMenu").style.display = "none";
}
</script>

<!-- Modal -->
<div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-animate-top">
      <header class="w3-container w3-theme-l1"> 
        <span onclick="document.getElementById('id01').style.display='none'"
        class="w3-button w3-display-topright">×</span>
        <h4>Oh snap! We just showed you a modal..</h4>
        <h5>Because we can <i class="fa fa-smile-o"></i></h5>
      </header>
      <div class="w3-padding">
        <p>Cool huh? Ok, enough teasing around..</p>
        <p>Go to our <a class="w3-btn" href="/w3css/default.asp">W3.CSS Tutorial</a> to learn more!</p>
      </div>
      <footer class="w3-container w3-theme-l1">
        <p>Modal footer</p>
      </footer>
    </div>
</div>

<div class="w3-row-padding w3-center w3-margin-top">
  <div class="w3-third">
    <div class="w3-card w3-container" style="min-height:460px">
      <h3>Expositionsdauer</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe Expositionsdauer 
      <br>(xE-y)</p>
      <p><input type="text" id="expositionsdauer_x"> &sdot;10<sup><bold>-</bold></sup> <input type="number" id="expositionsdauer_y"> in <b>s</b></p>
    </div>
  </div>

  <div class="w3-third">
    <div class="w3-card w3-container" style="min-height:460px">
      <h3>Wellenlaenge</h3><br>
      <i class="fa fa-css3 w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe Wellenlaenge</p>
      <p><b>&lambda;</b> = <input type="text" id="wellenlaenge"> in <b>nm</b></p>
    </div>
  </div>

  <div class="w3-third">
    <div class="w3-card w3-container" style="min-height:460px">
      <h3>&alpha;</h3><br>
      <i class="fa fa-diamond w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe <b>&alpha;</b></p>
      <p><b>&#945;</b> = <input type="text" id="alpha"> in <b>mrad</b></p>
    </div>
  </div>
</div>

<hr>

<h2 class="w3-center">Progress Bars</h2>
<div class="w3-container">
  <div class="w3-light-gray">
    <div id="myBar" class="w3-center w3-padding w3-theme" style="width:5%">5%</div>
  </div><br>
  <button class="w3-btn w3-theme" onclick="move()">Click Me</button> 
</div>

<hr>
<h2 class="w3-center">Tabs</h2>
<div class="w3-border">
  <div class="w3-bar w3-theme">
    <button class="w3-bar-item w3-button testbtn w3-padding-16" onclick="openCity(event,'Expositionsdauer')">Expositionsdauer</button>
    <button class="w3-bar-item w3-button testbtn w3-padding-16" onclick="openCity(event,'Wellenlaenge')">Wellenlaenge</button>
    <button class="w3-bar-item w3-button testbtn w3-padding-16" onclick="openCity(event,'&alpha;')">&alpha;</button>
  </div>

  <div id="Expositionsdauer" class="w3-container city w3-animate-opacity">
    <h2>Expositionsdauer</h2>
    <p>Definition etc.</p>
  </div>

  <div id="Wellenlaenge" class="w3-container city w3-animate-opacity">
    <h2>Wellenlaenge</h2>
    <p>Definition etc.</p>
  </div>

  <div id="&alpha;" class="w3-container city w3-animate-opacity">
    <h2>&alpha;</h2>
    <p>Definition etc.</p>
  </div>
</div>

<hr>

<!-- Footer -->
<footer class="w3-container w3-theme-dark w3-padding-16">
  <h3>Footer</h3>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
  <div style="position:relative;bottom:55px;" class="w3-tooltip w3-right">
    <span class="w3-text w3-theme-light w3-padding">Go To Top</span>    
    <a class="w3-text-white" href="#myHeader"><span class="w3-xlarge">
    <i class="fa fa-chevron-circle-up"></i></span></a>
  </div>
  <p>Remember to check out our  <a href="w3css_references.asp" class="w3-btn w3-theme-light" target="_blank">W3.CSS Reference</a></p>
</footer>

<!-- Script for Sidebar, Tabs, Accordions, Progress bars and slideshows -->
<script>
// Side navigation
function w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "100%";
  x.style.fontSize = "40px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Tabs
function openCity(evt, cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-dark-grey";
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

// Accordions
function myAccFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// Slideshows
var slideIndex = 1;

function plusDivs(n) {
  slideIndex = slideIndex + n;
  showDivs(slideIndex);
}

function showDivs(n) {
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

showDivs(1);

// Progress Bars
function move() {
  var elem = document.getElementById("myBar");   
  var width = 5;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
</script>

</body>
</html>
