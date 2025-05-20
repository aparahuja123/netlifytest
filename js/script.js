// Shuffle cards randomly
const shuffleBtn = document.getElementById('shuffleBtn');
shuffleBtn.addEventListener('click', () => {
  const grid = document.querySelector('.reasons-grid');
  Array.from(grid.children)
    .sort(() => Math.random() - 0.5)
    .forEach(card => grid.appendChild(card));
});

// TODO: Confetti trigger on card click
// Example placeholder:
// document.querySelectorAll('.card').forEach(card => {
//   card.addEventListener('click', () => {
//     // trigger confetti from assets/confetti/
//   });
// });
