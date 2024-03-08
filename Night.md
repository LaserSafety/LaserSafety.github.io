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
<body>
    <div class="night-sky">
        <!-- Replace div elements with SVG star shapes -->
        <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="2" height="2">
            <!-- Rotated and Flipped Curves -->
            <path d="M75,25 Q50,50 75,75" fill="#fff" stroke="#fff" transform="rotate(45 50 50)" />
            <path d="M25,75 Q50,50 75,75" fill="#fff" stroke="#fff" transform="rotate(45 50 50)" />
            <path d="M25,25 Q50,50 75,25" fill="#fff" stroke="#fff" transform="rotate(45 50 50)" /> <!-- Flipped Curve -->
            <path d="M25,25 Q50,50 25,75" fill="#fff" stroke="#fff" transform="rotate(45 50 50)" />
            <!-- Mirrored Curves -->
            <path d="M75,25 Q50,50 25,75" fill="#fff" stroke="#fff" transform="rotate(-45 50 50)" />
            <path d="M25,75 Q50,50 25,25" fill="#fff" stroke="#fff" transform="rotate(-45 50 50)" />
            <path d="M75,75 Q50,50 25,25" fill="#fff" stroke="#fff" transform="rotate(-45 50 50)" />
            <path d="M75,25 Q50,50 75,75" fill="#fff" stroke="#fff" transform="rotate(-45 50 50)" />
        </svg>
    </div>
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
            position: absolute;
            animation: twinkle 1s infinite alternate; /* Add twinkle animation */
        }

        /* Set position of stars */
        .star {
            top: 20%;
            left: 30%;
        }

        /* You can add more star positions similarly */
        /* Ensure stars are not overlapping with each other for a natural look */

        @keyframes twinkle {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
        }
    </style>
</body>
