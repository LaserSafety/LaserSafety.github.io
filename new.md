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
 .grad {
  background-image: linear-gradient(black, #6b2443 80%);
}
.text {
 color: white;
}
}
.settings-menu {
  display: block;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  overflow-x: hidden;
  transition: 0.5s;
  z-index: 2; /* Adjusted z-index */
}
#navbar {
  background-color: #333;
  position: fixed;
  top: -100%;
  width: 100%;
  display: block;
  transition: top 0.3s;
  padding: 5px 10px;
}

#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  font-size: 17px;
}

#navbar a:hover {
  background-color: #ddd;
  color: black;
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
  background-color: #6b2443;
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
    .fadingElement {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
    .fade-out {
      opacity: 0;
    }
    .fade-in {
      opacity: 1;
    }

input[type=text] {
  width: 20%;
  box-sizing: border-box;
  border: 2px solid #8b3a5d;
  border-radius: 4px;
}
input[type=text]:focus {
  border: 2px solid #6b2443;
  border-radius: 4px;
}
input[type=number] {
  width: 50px;
  box-sizing: border-box;
  border: 2px solid #8b3a5d;
  border-radius: 4px;
}
input[type=number]:focus {
  border: 2px solid #6b2443;
  border-radius: 4px;
}
</style>
</head>
<body>
<div id="navbar">
  <img src="wappen.png" width="50" height="50">
</div>
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
<nav class="w3-sidebar w3-bar-block w3-card w3-animate-right w3-center" style="display:none; right: 0;" id="settingsMenu">
  <h1 class="w3-xxxlarge w3-text-theme">Settings</h1>
  <button class="w3-bar-item w3-button closebtn" onclick="w3_close_r()">Close <i class="fa fa-remove"></i></button>
  <a href="#" class="w3-bar-item w3-button">Setting 1</a>
  <a href="#" class="w3-bar-item w3-button">Setting 2</a>
  <a href="#" class="w3-bar-item w3-button">Setting 3</a>
  <a href="#" class="w3-bar-item w3-button">Setting 4</a>
</nav>
<!-- Header -->
<header class="w3-container grad w3-padding" id="myHeader">
  <i onclick="w3_open()" class="fa fa-bars w3-xlarge w3-button w3-theme"></i>
  <i onclick="w3_open_r()" class="fa fa-cog w3-xlarge w3-button w3-theme settings-button"></i>
  <div class="w3-center text">
    <h4>test</h4>
    <h1 class="w3-xxxlarge w3-animate-bottom">LASER SAFETY</h1>
    <div class="w3-padding-32">
     <form>
      <input class="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" onclick="document.getElementById('id01').style.display='block'" onclick="calculate()" type="submit" style="font-weight:900;" value="calculate">
     </form>
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
        <h4>Results</h4>
        <h5> test </h5>
      </header>
      <div class="w3-padding">
       <p id="result"></p>
      </div>
      <footer class="w3-container w3-theme-l1">
        <p>Modal footer</p>
      </footer>
    </div>
</div>

<div class="w3-row-padding w3-column-padding w3-center w3-margin-top">
  <div class="w3-third">
    <div class="w3-card w3-container w3-animate-bottom" style="min-height:460px">
      <h3>Expositionsdauer</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe Expositionsdauer 
      <br>(<b>x</b>&sdot;10<sup><b>-y</b></sup>)</p>
      <p><b>t</b> = <input type="text" id="expositionsdauer_x"> &sdot;10<sup><bold>-</bold></sup> <input type="number" id="expositionsdauer_y"> in <b>s</b></p>
    </div>
  </div>

  <div class="w3-third">
    <div class="w3-card w3-container w3-animate-bottom" style="min-height:460px">
      <h3>Wellenlaenge</h3><br>
      <i class="fa fa-css3 w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe Wellenlaenge</p>
      <p><b>&lambda;</b> = <input type="text" id="wellenlaenge"> in <b>nm</b></p>
    </div>
  </div>

  <div class="w3-third">
    <div class="w3-card w3-container w3-animate-bottom" style="min-height:460px">
      <h3>&alpha;</h3><br>
      <i class="fa fa-diamond w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe <b>&alpha;</b></p>
      <p><b>&#945;</b> = <input type="text" id="alpha"> in <b>mrad</b></p>
    </div>
  </div>

<div class="w3-third">
  <div class="w3-card w3-container w3-animate-bottom" style="min-height:460px">
    <h3>Betriebsart</h3><br>
    <i class="fa fa-diamond w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
    <p>Select an option:</p>
    <select id="betriebsart">
      <option value="D">Dauerstrahl</option>
      <option value="I">Impuls</option>
      <option value="R">Riesenimpuls</option>
      <option value="M">Modengekoppelt</option>
    </select>
  </div>
 </div>

 <div class="w3-third">
  <div class="w3-card w3-container fadingElement w3-animate-bottom" style="min-height:460px" id="Frequenz">
    <h3>Frequenz</h3><br>
    <i class="fa fa-clock-o w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
    <p>Eingabe Frequenz</p>
    <p><b>F</b> = <input type="text" id="frequenz"> in <b>Hz</b></p>
  </div>
</div>

<div class="w3-third">
  <div class="w3-card w3-container fadingElement w3-animate-bottom" style="min-height:460px" id="Pulsdauer">
    <h3>Pulsdauer</h3><br>
    <i class="fa fa-diamond w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
    <p>Eingabe Pulsdauer</p>
    <p><b>t</b> = <input type="text" id="pulsdauer"> in <b>s</b></p>
  </div>
 </div>

  <div class="w3-third">
    <div class="w3-card w3-container w3-animate-bottom" style="min-height:460px">
      <h3>Austrittsdurchmesser</h3><br>
      <i class="fa fa-css3 w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe Austrittsdurchmesser</p>
      <p><b>a</b> = <input type="text" id="austrittsdurchmesser"> in <b>mm</b></p>
    </div>
  </div>

   <div class="w3-third">
    <div class="w3-card w3-container w3-animate-bottom" style="min-height:460px">
      <h3>&phi;</h3><br>
      <i class="fa fa-css3 w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe &phi;</p>
      <p><b>&phi;</b> = <input type="text" id="&phi;"> in <b>mrad</b></p>
    </div>
  </div>

   <div class="w3-third">
    <div class="w3-card w3-container w3-animate-bottom" style="min-height:460px">
      <h3>Ausgangsenergie</h3><br>
      <i class="fa fa-css3 w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe Ausgangsenergie</p>
      <p><b>Q</b> = <input type="text" id="&phi;"> in <b>J</b></p>
    </div>
  </div>

   <div class="w3-third">
    <div class="w3-card w3-container w3-animate-bottom" style="min-height:460px">
      <h3>Ausgangsleistung</h3><br>
      <i class="fa fa-css3 w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe Ausgangsleistung</p>
      <p><b>P</b> = <input type="text" id="ausgangsleistung"> in <b>W</b></p>
    </div>
  </div>

   <div class="w3-third">
    <div class="w3-card w3-container w3-animate-bottom" style="min-height:460px">
      <h3>Daempfungsgrad</h3><br>
      <i class="fa fa-css3 w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <p>Eingabe Ausgangsleistung</p>
      <p><b>g</b> = <input type="text" id="daempfungsgrad"> in <b>dB</b></p>
    </div>
  </div>
</div>

<!-- <hr>

 <h2 class="w3-center">Progress Bars</h2>
<div class="w3-container">
  <div class="w3-light-gray">
    <div id="myBar" class="w3-center w3-padding w3-theme" style="width:5%">5%</div>
  </div><br>
  <button class="w3-btn w3-theme" onclick="move()">Click Me</button> 
</div> -->

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
<!--
<footer class="w3-container w3-theme-dark w3-padding-16">
<img src="wappen.png" width="100" height="100">
  <div style="position:relative;bottom:55px;" class="w3-tooltip w3-right">
    <button onclick="topFunction()" id="myBtn" title="Go to top" position="relative" right="5">Top</button>
    <span class="w3-text w3-theme-light w3-padding">
    <a class="w3-text-white" href="#myHeader"><span class="w3-xlarge">
    <i class="fa fa-chevron-circle-up"></i></span></a>
  </div>
</footer>
-->
<footer class="w3-container w3-theme-dark w3-padding-16">
  <h3>Footer</h3>
  <p><img src="wappen.png" width="100" height="100"></p>
  <div style="position:relative;bottom:55px;" class="w3-tooltip w3-right">
    <span class="w3-text w3-theme-light w3-padding">Go To Top</span>    
    <a class="w3-text-white" href="#myHeader"><span class="w3-xlarge">
    <i class="fa fa-chevron-circle-up"></i></span></a>
  </div>
</footer>
<!-- Script for Sidebar, Tabs, Accordions, Progress bars and slideshows -->
<script>
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100%";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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

// Settings
function w3_open_r() {
  var x = document.getElementById("settingsMenu");
  x.style.width = "100%";
  x.style.fontSize = "40px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}
function w3_close_r() {
  document.getElementById("settingsMenu").style.display = "none";
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

    const Betriebsart = document.getElementById('betriebsart');
    const Frequenz = document.getElementById('Frequenz');
    const Pulsdauer = document.getElementById('Pulsdauer');

    betriebsart.addEventListener('change', function() {
      if (betriebsart.value === 'D') {
        // Fade out first element, then fade out second element after a delay
        Pulsdauer.classList.add('fade-out');
        Pulsdauer.classList.remove('fade-in');
        setTimeout(() => {
          Frequenz.classList.add('fade-out');
          Frequenz.classList.remove('fade-in');
        }, 500); // Delay after first element fades out
      } else {
        // Fade in second element, then fade in first element after a delay
          Frequenz.classList.remove('fade-out');
          Frequenz.classList.add('fade-in');
        setTimeout(() => {
          Pulsdauer.classList.remove('fade-out');
          Pulsdauer.classList.add('fade-in');
        }, 500); // Delay before first element fades in
      }
    });
</script>


</body>
</html>
