function toggleFavorite() {
    const icon = document.getElementById('favorite-icon');
    const popup = document.getElementById('popup-notification');
    const imageURL = document.querySelector('.image img').src;
    const imageTitle = document.querySelector('.description h3').textContent;

    // Ensure imageURL and imageTitle are defined
    if (!imageURL || !imageTitle) {
        return;
    }

    // Get existing favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the image is already in favorites
    const existing = favorites.find(fav => fav.url === imageURL);

    if (existing) {
        // Remove from favorites if already added
        favorites = favorites.filter(fav => fav.url !== imageURL);
        icon.src = '../images/add.png';
        popup.textContent = 'Removed from Favorites!';
    } else {
        // Add to favorites if not present
        favorites.push({ url: imageURL, title: imageTitle });
        icon.src = '../images/added.png';
        popup.textContent = 'Added to Favorites!';
    }

    // Save updated favorites to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Show popup
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}

// Function to check if the current image is already a favorite
function checkFavorite() {
    const icon = document.getElementById('favorite-icon');
    const imageURL = document.querySelector('.image img').src;

    // Get existing favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the image is already in favorites
    const existing = favorites.find(fav => fav.url === imageURL);

    if (existing) {
        icon.src = '../images/added.png';
    } else {
        icon.src = '../images/add.png';
    }
}

// Function to render the favorites on the Favorites page
function renderFavorites() {
    const favoritesSection = document.getElementById('favorites-list');
    if (!favoritesSection) return;

    // Get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesSection.innerHTML = '';

    if (favorites.length === 0) {
        favoritesSection.innerHTML = `
            <div class="empty-placeholder">
                <p>You have nothing added, go and add something!</p>
                <button onclick="location.href='BRABRAND_PAGE.html'" class="home-button">Go Home</button>
            </div>
        `;
        return;
    }

    // Create favorite cards
    favorites.forEach((fav, index) => {
        const favoriteCard = document.createElement('div');
        favoriteCard.classList.add('favorite-card');
        favoriteCard.innerHTML = `
            <div class="favorite-image">
                <img src="${fav.url}" alt="${fav.title}">
                <button class="remove-button" onclick="removeFavorite(${index})">X</button>
            </div>
            <p class="favorite-title">${fav.title}</p>
        `;
        favoritesSection.appendChild(favoriteCard);
    });
}

// Function to remove a favorite
function removeFavorite(index) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites(); // Re-render the list after deletion
}

// Ensure the page checks for favorites on load
document.addEventListener('DOMContentLoaded', checkFavorite);