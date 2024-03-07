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
    width: 2px;
    height: 2px;
    background-color: #fff; /* White for the stars */
    border-radius: 50%; /* Make stars circular */
    position: absolute;
    animation: twinkle 1s infinite alternate; /* Add twinkle animation */
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

@keyframes twinkle {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
}
</style>
<body>
    <div class="night-sky">
        <div class="star"></div>
        <!-- You can add more stars here -->
    </div>
</body>
</html>
