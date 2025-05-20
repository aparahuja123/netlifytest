const reasons = [
  { title: "Your kindness", message: "You treat everyone with warmth and respect, and it inspires me every day." },
  { title: "Your smile", message: "Your smile lights up my world and makes everything feel right." },
  { title: "How you support me", message: "You're always there, cheering me on and lifting me up." },
  { title: "Your laugh", message: "That laugh of yours is contagious and makes my heart dance." },
  { title: "Your love for animals", message: "Seeing how much you care for animals shows your beautiful heart." },
  { title: "How you hold my hand", message: "Your touch brings comfort, peace, and love all at once." },
  { title: "Our late night talks", message: "Those deep conversations are where I feel closest to you." },
  { title: "Your creativity", message: "The way you see the world differently always amazes me." },
  { title: "How you surprise me", message: "Your little surprises make life so much more magical." },
  { title: "The way you look at me", message: "That look tells me everything I need to know about love." },
  { title: "How you always listen", message: "You hear me even when I don’t speak. That’s rare and special." },
  { title: "Your hugs", message: "Your hugs feel like home – safe, warm, and full of love." },
  { title: "Your sense of humor", message: "You always know how to make me laugh, no matter what." },
  { title: "Our shared dreams", message: "Planning the future with you is my favorite thing to do." },
  { title: "Your passion", message: "Your energy and enthusiasm make everything more exciting." },
  { title: "How you make me feel special", message: "You remind me I’m loved in the smallest and biggest ways." },
  { title: "Your intelligence", message: "Your mind impresses me every single day." },
  { title: "How you dance with me", message: "Even when there’s no music, you make me want to dance." },
  { title: "Your patience", message: "You handle tough moments with such grace and calm." },
  { title: "Our adventures", message: "Every little journey with you becomes unforgettable." },
  { title: "How you say 'I love you'", message: "When you say it, I feel it with my whole heart." },
  { title: "Your eyes", message: "They sparkle with kindness, love, and all the things I adore." },
  { title: "The way you care for others", message: "You give so much of yourself to help others." },
  { title: "You're my best friend", message: "Above all, I love you because you're my person – my best friend." }
];

// Convert IST (UTC+5:30) to UTC
// const unlockDateUTC = new Date('2025-05-20T18:30:00Z'); // 21 May 2025 00:00 IST
const unlockDateUTC = new Date('2024-05-20T18:30:00Z'); // 21 May 2025 00:00 IST

const countdownElement = document.getElementById('countdown');
const grid = document.getElementById('reasonsGrid');
let unlocked = false;

function updateCountdown() {
  const now = new Date();
  const diff = unlockDateUTC - now;

  if (diff <= 0) {
    countdownElement.innerHTML = "Happy Anniversary, my love ❤️";
    unlocked = true;
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('disabled');
    });
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.innerHTML = `⏳ Unlocking in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

reasons.forEach((item, index) => {
  const card = document.createElement('div');
  card.className = 'card disabled'; // initially disabled

  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="number">Chapter ${index + 1}.</div>
        <div class="title">${item.title}</div>
      </div>
      <div class="flip-card-back">
        <p>${item.message}</p>
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    if (unlocked) {
      card.classList.toggle('flip');
    }
  });

  grid.appendChild(card);
});

// Start countdown
updateCountdown();
setInterval(updateCountdown, 1000);
