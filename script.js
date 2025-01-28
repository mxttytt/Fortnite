function generateStars() {
    const sky = document.getElementById("sky");
    const starCount = Math.floor(Math.random() * 300) + 200; // Random star count between 200-500
    
    // Create random stars
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const size = Math.random() * 2 + 1; // Random size between 1-3px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.position = "absolute";
        star.style.backgroundColor = "white";
        star.style.borderRadius = "50%";
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animation = `twinkling ${Math.random() * 3 + 2}s infinite alternate`;
        sky.appendChild(star);
    }
}

// Function to generate shooting stars
function generateShootingStars() {
    const sky = document.getElementById("sky");
    setInterval(() => {
        const shootingStar = document.createElement("div");
        shootingStar.classList.add("shooting-star");

        // Random starting position and direction
        const startPosition = Math.random() * 50 + 30; // Random top position
        shootingStar.style.top = `${startPosition}vh`;

        // Random direction (left or right)
        const direction = Math.random() > 0.5 ? "left" : "right";
        shootingStar.style.left = direction === "left" ? `${Math.random() * 100}vw` : `100vw`;

        // Random animation duration
        shootingStar.style.animationDuration = `${Math.random() * 2 + 1}s`;

        sky.appendChild(shootingStar);

        // Remove shooting star after animation
        setTimeout(() => {
            shootingStar.remove();
        }, 3000); // Remove after 3 seconds
    }, Math.random() * 2000 + 1000); // New shooting star every 1-3 seconds
}



// Initialize scene
generateStars();
generateShootingStars();


// Function to toggle tab content visibility
function toggleTab() {
    const tabContent = document.getElementById('tabContent');
    if (tabContent) {  // Check if tabContent exists
        tabContent.style.display = tabContent.style.display === 'block' ? 'none' : 'block';
    }
}

// Function to disable a link (for item shop)
function disableLink() {
    const itemShopLink = document.getElementById('itemShopLink');
    if (itemShopLink) {  // Check if link exists
        itemShopLink.innerText = 'Coming Soon';  // Change link text to 'Coming Soon'
        itemShopLink.style.cursor = 'not-allowed';  // Change cursor to show that it's disabled
        itemShopLink.removeAttribute('href');  // Remove the clickable link functionality
    }
}

// Disable link when the page loads (if needed)
disableLink();

// Event listener for openTab click
document.getElementById('openTab').addEventListener('click', disableLink);

