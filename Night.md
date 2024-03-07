---
permalink: /night.html
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Night Sky</title>
    <link rel="stylesheet" href="styles.css">
</head>
<style>
body {
    margin: 0;
    padding: 0;
    overflow: hidden; /* Prevent horizontal scrolling */
}

.night-sky {
    width: 100%;
    height: 100vh; /* Full viewport height */
    background-color: #041e42; /* Dark blue for the sky */
    position: relative;
}

.star {
    width: 60px; /* Adjust size as needed */
    height: 60px; /* Adjust size as needed */
    position: absolute;
}

.star::before,
.star::after {
    content: '';
    width: 30px; /* Adjust size as needed */
    height: 6px; /* Adjust size as needed */
    background-color: #fff; /* White for the stars */
    position: absolute;
    border-radius: 3px; /* Create rounded ends */
}

.star::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg); /* Rotate to form + shape */
}

.star::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(135deg); /* Rotate to form + shape */
}

/* Set position of stars */
.star:nth-child(1) {
    top: 20%;
    left: 30%;
}

.star:nth-child(2) {
    top: 60%;
    left: 70%;
}

/* You can add more star positions similarly */
/* Ensure stars are not overlapping with each other for a natural look */

</style>
<body>
    <div class="night-sky">
        <div class="star"></div>
        <!-- You can add more stars here -->
    </div>
</body>
</html>
