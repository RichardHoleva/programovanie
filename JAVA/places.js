
// Select all place items
const placeItems = document.querySelectorAll('.place');

// Function to handle click for places
placeItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        placeItems.forEach(place => place.classList.remove('active'));
        // Add active class to the clicked item
        item.classList.add('active');
    });
});