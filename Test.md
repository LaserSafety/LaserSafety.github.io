---
permalink: /test.html
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pill-shaped Slider</title>
<style>
.slider {
  width: 300px;
  height: 50px;
  background-color: #4CAF50;
  border-radius: 25px; /* half of height */
  border: 2px solid #ccc; /* Add grey border */
  overflow: hidden;
  position: relative;
}

.slider-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #4CAF50; /* Default background color */
}

.slider-handle {
  width: 50px;
  height: 50px;
  background-color: #ddd; /* Default background color */
  border-radius: 50%; /* makes it circular */
  position: absolute;
  top: 0;
  left: 0;
  transition: left 0.5s, background-color 0.5s; /* added transition for smooth movement and background color change */
}

.slider.clicked .slider-handle {
  left: calc(100% - 50px); /* slides to the end */
  background-color: #f44336; /* Change background color when handle is clicked */
}

.slider.left-bg .slider-inner {
  background-color: #4CAF50; /* green when handle is on the left */
}

.slider.right-bg .slider-inner {
  background-color: #f44336; /* red when handle is on the right */
}
</style>
</head>
<body>

<div class="slider" id="slider">
  <div class="slider-inner" id="slider-inner"></div>
  <div class="slider-handle" id="handle"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var slider = document.getElementById('slider');
  var sliderInner = document.getElementById('slider-inner');
  var handle = document.getElementById('handle');
  
  handle.addEventListener('click', function() {
    slider.classList.toggle('clicked');
    slider.classList.toggle('left-bg', !slider.classList.contains('clicked'));
    slider.classList.toggle('right-bg', slider.classList.contains('clicked'));
  });
  
  slider.addEventListener('mousemove', function(e) {
    if (slider.classList.contains('clicked')) {
      var sliderRect = slider.getBoundingClientRect();
      var handleRect = handle.getBoundingClientRect();
      var relativePosition = (e.clientX - sliderRect.left) / sliderRect.width;
      var handlePosition = (handleRect.left - sliderRect.left) / sliderRect.width;
      
      if (relativePosition > handlePosition) {
        sliderInner.style.width = (relativePosition * 100) + '%';
      }
    }
  });
  
  slider.addEventListener('mouseleave', function() {
    if (slider.classList.contains('clicked')) {
      sliderInner.style.width = '100%';
    }
  });
});
</script>

</body>
</html>

