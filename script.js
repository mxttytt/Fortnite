// Add additional shooting star logic if needed
// Shooting star positions and motion can be randomized for more variety
const stars = document.querySelectorAll('.shooting-star');
stars.forEach(star => {
  setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    star.style.transform = `translate(${x}px, ${y}px)`;
  }, 5000);
});
