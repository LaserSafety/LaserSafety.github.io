---
permalink: /test.html
---
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pill-shaped Slider</title>
<style>
.slider {
  width: 300px;
  height: 50px;
  background-color: #ddd;
  border-radius: 25px; /* half of height */
  overflow: hidden;
  position: relative;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */
}

.slider-handle {
  width: 50px;
  height: 50px;
  background-color: #4CAF50;
  border-radius: 50%; /* makes it circular */
  position: absolute;
  top: 0;
  left: 0;
  animation: slide 2s infinite alternate; /* applies animation */
}

@keyframes slide {
  0% {
    left: 0;
  }
  100% {
    left: calc(100% - 50px); /* slides to the end */
  }
}
</style>
</head>
<body>

<div class="slider" id="slider">
  <div class="slider-handle" id="handle"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var slider = document.getElementById('slider');
  var handle = document.getElementById('handle');
  
  slider.addEventListener('click', function() {
    // Toggle the position of the handle
    if (handle.style.left === '0px') {
      handle.style.left = 'calc(100% - 50px)';
    } else {
      handle.style.left = '0px';
    }
  });
});
</script>

</body>
</html>
