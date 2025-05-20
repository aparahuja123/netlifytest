// Data: insert your stories here
const reasons = [
  { title: "Your kindness", story: "<img.txt> My favorite story of your kindness..." },
  { title: "Your smile", story: "<img.txt> The day your smile lit up..." },
  // ... up to 24 items
];

// Parallax header
window.addEventListener('scroll', () => {
  document.querySelectorAll('.parallax .layer').forEach(layer => {
    const speed = layer.dataset.speed;
    const y = window.scrollY * speed;
    layer.style.transform = `translateY(${y}px)`;
  });
});

// Generate cards
const grid = document.getElementById('reasonsGrid');
reasons.forEach((item, i) => {
  const card = document.createElement('div'); card.className = 'card';
  const inner = document.createElement('div'); inner.className = 'card-inner';
  inner.style.animation = `fadeInUp 0.6s ease ${i*0.05}s both`;

  // Front
  const front = document.createElement('div'); front.className = 'card-front';
  front.innerHTML = `<div class="number">${i+1}</div><div class="title">${item.title}</div>`;

  // Back
  const back = document.createElement('div'); back.className = 'card-back';
  back.innerHTML = `
    <!-- photo -->
    <img src="assets/images/photo${i+1}.jpg" alt="${item.title}">
    <!-- story -->
    <p>${item.story}</p>
  `;

  inner.appendChild(front); inner.appendChild(back);
  card.appendChild(inner);
  grid.appendChild(card);
});

// Background music mute/unmute
const bgMusic = document.getElementById('bgMusic');
const muteBtn = document.getElementById('muteBtn');
muteBtn.addEventListener('click', () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.textContent = bgMusic.muted ? '🔇' : '🔈';
});

// Heart-trail cursor
const heartContainer = document.getElementById('heartContainer');
window.addEventListener('mousemove', e => {
  const heart = document.createElement('div'); heart.className = 'heart';
  heart.style.left = e.clientX - 10 + 'px';
  heart.style.top = e.clientY - 10 + 'px';
  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});