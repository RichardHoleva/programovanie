const rateOverlay = document.getElementById('rateOverlay');
const rateButton = document.querySelector('.box:nth-child(1)');
const cancelButton = document.querySelector('.cancel-button');
const sendButton = document.querySelector('.send-button');
const reviewTextarea = document.querySelector('.review-textarea');
const body = document.body; // To apply background darkening

// Function to show overlay
rateButton.addEventListener('click', () => {
    rateOverlay.style.display = 'flex'; // Show the overlay
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Darken the background
    body.style.transition = 'background-color 0.3s ease'; // Smooth transition
    clearReviewTextarea(); // Clear the textarea when overlay is opened
});

// Function to close overlay when clicking outside the content area
rateOverlay.addEventListener('click', (e) => {
    if (e.target === rateOverlay) { // Check if clicked outside the content
        toggleOverlay(); // Reuse toggleOverlay to close
    }
});

// Function to close overlay when clicking "CANCEL"
cancelButton?.addEventListener('click', () => {
    toggleOverlay();
});

// Function to handle "SEND" button click
sendButton?.addEventListener('click', () => {
    const reviewText = reviewTextarea?.value; // Get the input value
    if (reviewText.trim()) { // Check if the input is not empty
        alert('Thank you for your review!'); // Thank the user
        toggleOverlay();
    } else {
        alert('Please write a review before sending!'); // Alert for empty input
    }
});

// Function to toggle overlay visibility and reset background
function toggleOverlay() {
    rateOverlay.style.display = 'none'; // Hide the overlay
    body.style.backgroundColor = ''; // Restore original background
}

// Function to clear the review textarea
function clearReviewTextarea() {
    if (reviewTextarea) {
        reviewTextarea.value = ''; // Clear the textarea content
    }
}
