// script.js

// Get the modal
// Get the modal
var modal = document.getElementById("svgModal");

// Get the overlay
var modalOverlay = document.getElementById("modalOverlay");

// Get the images that open the modal
var containers = document.querySelectorAll(".intro-menu");

var loadingOverlay = document.getElementById("loading_overlay");

// When the user clicks on an image, open the modal and show the overlay
containers.forEach(function(container) {
    container.onclick = function() {
        loadingOverlay.style.display = "flex";

        setTimeout(() => {
            loadingOverlay.classList.add("separate"); // Add class to trigger separation animation
        }, 800);

        setTimeout(() => {
            loadingOverlay.style.display = "none";
            loadingOverlay.classList.remove("separate");
            
            // Show the overlay and modal
            modalOverlay.style.display = "block";
            modal.style.display = "block";
        }, 1400);
    };
});

// When the user clicks anywhere outside of the modal, close it
modalOverlay.onclick = function() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
};

window.onclick = function(event) {
    // Close modal if clicked outside the modal content (on overlay)
    if (event.target == modalOverlay) {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    }
};

//Takes user to specific container
function closeandScroll(modalID, sectionID) {
    var modal = document.getElementById(modalID);
    var overlay = document.getElementById("modalOverlay");

    if (modal) {
        modal.style.display = 'none';
    }

    if (overlay) {
        overlay.style.display = 'none';
    }

    var element = document.getElementById(sectionID);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}


//  Show the back-to-top icon when the user scrolls down if modal was interacted with
// window.addEventListener('scroll', function() {
//     var backToTopButton = document.getElementById("backtoTop");

//      Only show the back-to-top button if the modal has been interacted with
//     if (modalInteracted && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
//         backToTopButton.style.display = "block";
//     } else {
//         backToTopButton.style.display = "none";
//     }
// });

//  Smooth scroll to the top when the icon is clicked
// document.getElementById("backtoTop").addEventListener('click', function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });
        
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    var container = document.getElementById("intro-page");
    if (container) {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


var svgcontainer = document.getElementById("svgModal");
var modalOverlay = document.getElementById('modalOverlay'); // Ensure you have the correct ID for the overlay

function exitLoadingOverlay() {
    // Add fade effect to the modal
    svgcontainer.classList.add("fade");

    // Hide the modal after the fade effect is complete
    setTimeout(() => {
        svgcontainer.style.display = 'none';
        svgcontainer.classList.remove("fade");
    }, 1000); // Match this with the fade duration

    // Hide the loading overlay
    setTimeout(() => {
        if (modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    }, 700); // Ensure this is enough to let the modal hide

    // Scroll to the intro-page container
    var introPage = document.getElementById('intro-page');
    if (introPage) {
        introPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Example button to trigger exitLoadingOverlay function
// <button onclick="exitLoadingOverlay()">Close Modal and Scroll</button>


/* <div id="backtoTop" class="back-to-top" onclick="scrolltoTop()">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
</svg> 
</div>     */




const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');

const eyeRadius = 15; // Radius of the eye
const maxMovementX = 8; // Maximum movement range horizontally
const maxMovementY = 1.2; // Maximum movement range vertically

// Function to update eye positions
function updateEyePosition(x, y) {
    const face = document.getElementById('face');
    const faceRect = face.getBoundingClientRect();
    const faceCenterX = faceRect.left + faceRect.width / 2;
    const faceCenterY = faceRect.top + faceRect.height / 2;

    // Calculate eye movement
    const moveX = ((x - faceCenterX) / faceRect.width) * maxMovementX;
    const moveY = ((y - faceCenterY) / faceRect.height) * maxMovementY;

    // Get SVG viewBox
    const svg = document.querySelector('.portrait svg');
    const svgRect = svg.getBoundingClientRect();

    // Adjust eye positions relative to the SVG
    const newLeftEyePos = {
        x: Math.min(leftEyeBounds.maxX, Math.max(leftEyeBounds.minX, leftEye.getAttribute('cx') - moveX)),
        y: Math.min(leftEyeBounds.maxY, Math.max(leftEyeBounds.minY, leftEye.getAttribute('cy') - moveY))
    };

    const newRightEyePos = {
        x: Math.min(rightEyeBounds.maxX, Math.max(rightEyeBounds.minX, rightEye.getAttribute('cx') - moveX)),
        y: Math.min(rightEyeBounds.maxY, Math.max(rightEyeBounds.minY, rightEye.getAttribute('cy') - moveY))
    };

    // Smoothly interpolate to new positions
    leftEye.setAttribute('cx', newLeftEyePos.x);
    leftEye.setAttribute('cy', newLeftEyePos.y);

    rightEye.setAttribute('cx', newRightEyePos.x);
    rightEye.setAttribute('cy', newRightEyePos.y);
}

// Add mousemove event listener
document.addEventListener('mousemove', (event) => {
    updateEyePosition(event.clientX, event.clientY);
});


const leftEyebrow = document.getElementById('left-eyebrow'); // Select the left eyebrow
const rightEyebrow = document.getElementById('right-eyebrow'); // Select the right eyebrow

const leftEyebrowMaxLift = 4; // Maximum lift for the left eyebrow
const leftMinEyebrowY = -20; // Minimum Y value for the left eyebrow to prevent it from going too low
const maxLeftEyebrowAngle = -1; // Maximum angle when cursor is at the top (negative for leftward tilt)

const rightEyebrowMaxLift = 4; // Maximum lift for the right eyebrow
const rightMinEyebrowY = -20; // Minimum Y value for the right eyebrow to prevent it from going too low
const maxEyebrowAngle = 1; // Maximum angle when cursor is at the top

let leftEyebrowPos = { y: -10, angle: 0 }; // Initial left eyebrow position with angle
let rightEyebrowPos = { y: -10, angle: 0 }; // Initial right eyebrow position with angle

function updateEyebrowsPosition(y) {
    // Function to update both eyebrows based on cursor movement

    const leftFaceRect = leftEyebrow.getBoundingClientRect();
    const leftFaceCenterY = leftFaceRect.top + leftFaceRect.height / 2;
    const rightFaceRect = rightEyebrow.getBoundingClientRect();
    const rightFaceCenterY = rightFaceRect.top + rightFaceRect.height / 2;

    // Calculate left eyebrow lift and angle
    const leftEyebrowLift = ((y - leftFaceCenterY) / leftFaceRect.height) * leftEyebrowMaxLift;
    const newLeftEyebrowPosY = Math.max(leftMinEyebrowY - leftEyebrowLift, leftMinEyebrowY);
    const leftEyebrowAngle = ((y - leftFaceCenterY) / leftFaceRect.height) * maxLeftEyebrowAngle;

    leftEyebrowPos.y += (newLeftEyebrowPosY - leftEyebrowPos.y) * 0.5;
    leftEyebrowPos.angle += (leftEyebrowAngle - leftEyebrowPos.angle) * 0.5;

    leftEyebrow.style.transform = `translateY(${leftEyebrowPos.y}px) rotate(${leftEyebrowPos.angle}deg)`;

    // Calculate right eyebrow lift and angle
    const rightEyebrowLift = ((y - rightFaceCenterY) / rightFaceRect.height) * rightEyebrowMaxLift;
    const newRightEyebrowPosY = Math.max(rightMinEyebrowY - rightEyebrowLift, rightMinEyebrowY);
    const rightEyebrowAngle = ((y - rightFaceCenterY) / rightFaceRect.height) * maxEyebrowAngle;

    rightEyebrowPos.y += (newRightEyebrowPosY - rightEyebrowPos.y) * 0.5;
    rightEyebrowPos.angle += (rightEyebrowAngle - rightEyebrowPos.angle) * 0.5;

    rightEyebrow.style.transform = `translateY(${rightEyebrowPos.y}px) rotate(${rightEyebrowPos.angle}deg)`;
}

// Add mousemove event listener for the eyebrows
document.addEventListener('mousemove', (event) => {
    updateEyebrowsPosition(event.clientY);
});

const mouth = document.getElementById('mouth'); // Select the mouth element

const mouthMaxMovementX = 10; // Maximum horizontal movement range for the mouth
const mouthMaxMovementY = 5;  // Maximum vertical movement range for the mouth
const minMouthY = -2; // Minimum Y value for the mouth to prevent it from going too low
const maxMouthY = 2; // Maximum Y value for the mouth to prevent it from going too high
const minMouthX = -2; // Minimum X value for the mouth to prevent it from going too far left
const maxMouthX = 2; // Maximum X value for the mouth to prevent it from going too far right

let mouthPos = { x: 0, y: 0 }; // Initial mouth position

// Function to update mouth position based on cursor movement
function updateMouthPosition(x, y) {
    const faceRect = document.getElementById('face2').getBoundingClientRect();
    const faceCenterX = faceRect.left + faceRect.width / 2;
    const faceCenterY = faceRect.top + faceRect.height / 2;

    // Calculate mouth movement based on cursor position
    const mouthMovementX = ((x - faceCenterX) / faceRect.width) * mouthMaxMovementX;
    const mouthMovementY = ((y - faceCenterY) / faceRect.height) * mouthMaxMovementY;

    // New mouth position (confine movement between min and max values)
    const newMouthPosX = Math.min(Math.max(mouthPos.x + mouthMovementX, minMouthX), maxMouthX);
    const newMouthPosY = Math.min(Math.max(mouthPos.y + mouthMovementY, minMouthY), maxMouthY);

    // Smoothly interpolate to new positions
    mouthPos.x += (newMouthPosX - mouthPos.x) * 0.1;
    mouthPos.y += (newMouthPosY - mouthPos.y) * 0.1;

    // Apply the new position (adjust 'transform' for translation)
    mouth.style.transform = `translate(${mouthPos.x}px, ${mouthPos.y}px)`;
}

// Add mousemove event listener for the mouth
document.addEventListener('mousemove', (event) => {
    updateMouthPosition(event.clientX, event.clientY);
});


const leftIris = document.getElementById('left-iris');
const rightIris = document.getElementById('right-iris');

const maxIrisMovementX = 1; // Max horizontal movement for the iris
const maxIrisMovementY = 1; // Max vertical movement for the iris

// Constrain the iris movement to a certain range
const maxIrisY = 75; // Max Y value (prevent the iris from moving too far down)
const minIrisY = 70; // Min Y value (prevent the iris from moving too far up)
const maxIrisX = 110; // Max X value (right boundary for iris movement)
const minIrisX = -35; // Min X value (left boundary for iris movement)

// Store previous iris positions
let leftIrisPos = { x: -32, y: 73 };
let rightIrisPos = { x: 105, y: 73 };

// Function to update iris positions based on cursor movement
function updateIrisPosition(x, y) {
    const faceRect = document.getElementById('face2').getBoundingClientRect();
    const faceCenterX = faceRect.left + faceRect.width / 2;
    const faceCenterY = faceRect.top + faceRect.height / 2;

    // Calculate iris movement
    const irisMoveX = ((x - faceCenterX) / faceRect.width) * maxIrisMovementX;
    const irisMoveY = ((y - faceCenterY) / faceRect.height) * maxIrisMovementY;

    // New iris positions with constraints applied
    const newLeftIrisPos = {
        x: Math.min(Math.max(-32 + irisMoveX, minIrisX), maxIrisX), // Constrain within min/max X
        y: Math.min(Math.max(73 + irisMoveY, minIrisY), maxIrisY)   // Constrain within min/max Y
    };

    const newRightIrisPos = {
        x: Math.min(Math.max(105 + irisMoveX, minIrisX), maxIrisX), // Constrain within min/max X
        y: Math.min(Math.max(73 + irisMoveY, minIrisY), maxIrisY)   // Constrain within min/max Y
    };

    // Smoothly interpolate to new positions
    leftIrisPos.x += (newLeftIrisPos.x - leftIrisPos.x) * 0.1;
    leftIrisPos.y += (newLeftIrisPos.y - leftIrisPos.y) * 0.1;

    rightIrisPos.x += (newRightIrisPos.x - rightIrisPos.x) * 0.1;
    rightIrisPos.y += (newRightIrisPos.y - rightIrisPos.y) * 0.1;

    // Update iris positions
    leftIris.setAttribute('cx', leftIrisPos.x);
    leftIris.setAttribute('cy', leftIrisPos.y);

    rightIris.setAttribute('cx', rightIrisPos.x);
    rightIris.setAttribute('cy', rightIrisPos.y);
}

// Add event listener for mouse movement
document.addEventListener('mousemove', (event) => {
    updateIrisPosition(event.clientX, event.clientY);
});




var i = 0;
var textArray = ['an Aspiring Software Engineer.', 'an Independent Creator.', 'a Tech Enthusiast.', 'a Creative Developer.']; // Array of texts to type
var currentIndex = 0;
var speed = 60;
var isDeleted = false;

function typeWriter() {
    const typewriterElement = document.getElementById("typewriter");
    const cursor = document.getElementById("cursor");
    var txt = textArray[currentIndex];

    if (!isDeleted) {
        if (i < txt.length) {
            typewriterElement.innerHTML = txt.substring(0, i + 1) + cursor.innerHTML;
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                isDeleted = true; // Start deleting
                typeWriter(); // Call typeWriter again for deleting
            }, 1000); // 1-second pause after finishing typing
        }
    } else {
        if (i > 0) {
            typewriterElement.innerHTML = txt.substring(0, i - 1) + cursor.innerHTML;
            i--;
            setTimeout(typeWriter, speed);
        } else {
            isDeleted = false;
            currentIndex = (currentIndex + 1) % textArray.length; // Move to the next text
            setTimeout(typeWriter, 500); // Wait before starting to type the next text
        }
    }
}

typeWriter();

