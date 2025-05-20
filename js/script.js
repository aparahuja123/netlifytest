/ Shuffle cards and animate heart
const shuffleBtn = document.getElementById('shuffleBtn');
const heart = shuffleBtn.querySelector('.heart');
shuffleBtn.addEventListener('click', () => {
  // Shuffle grid
  const grid = document.querySelector('.reasons-grid');
  Array.from(grid.children)
    .sort(() => Math.random() - 0.5)
    .forEach(card => grid.appendChild(card));

  // Heart pop animation
  heart.classList.add('pop');
  setTimeout(() => heart.classList.remove('pop'), 400);
});