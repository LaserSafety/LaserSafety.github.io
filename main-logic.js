  // Function to close the modal
function closeModal() {
  document.getElementById('id01').style.display='none'; 
}

function openSettings() {
  document.getElementById("settingsMenu").style.display = "block";
}

function closeSettingsMenu() {
  document.getElementById("settingsMenu").style.display = "none";
}
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
