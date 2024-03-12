---
permalink: /night.html
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fade In/Out on Dropdown Select</title>
  <style>
    .fadingElement {
      opacity: 1;
      transition: opacity 0.5s ease;
    }

    .fade-out {
      opacity: 0;
    }
  </style>
</head>
<body>
  <select id="dropdown">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>

  <div id="firstElement" class="fadingElement">This is the first element</div>
  <div id="secondElement" class="fadingElement">This is the second element</div>

  <script>
    const dropdown = document.getElementById('dropdown');
    const firstElement = document.getElementById('firstElement');
    const secondElement = document.getElementById('secondElement');

    function fadeElementsOut() {
      // Fade out first element, then fade out second element after a delay
      firstElement.classList.add('fade-out');
      setTimeout(() => {
        secondElement.classList.add('fade-out');
      }, 500); // Delay after first element fades out
    }

    function fadeElementsIn() {
      // Fade in second element, then fade in first element after a delay
      secondElement.style.opacity = '1'; // Ensure second element is initially visible
      setTimeout(() => {
        firstElement.style.opacity = '1'; // Ensure first element is visible before fading in
      }, 500); // Delay before first element fades in
    }

    dropdown.addEventListener('change', function() {
      if (dropdown.value === 'option2') {
        fadeElementsOut();
      } else {
        fadeElementsIn();
      }
    });
  </script>
</body>
</html>
