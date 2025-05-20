const reasons = [
  { title: "Your kindness" },
  { title: "Your smile" },
  { title: "How you support me" },
  { title: "Your laugh" },
  { title: "Your love for animals" },
  { title: "How you hold my hand" },
  { title: "Our late night talks" },
  { title: "Your creativity" },
  { title: "How you surprise me" },
  { title: "The way you look at me" },
  { title: "How you always listen" },
  { title: "Your hugs" },
  { title: "Your sense of humor" },
  { title: "Our shared dreams" },
  { title: "Your passion" },
  { title: "How you make me feel special" },
  { title: "Your intelligence" },
  { title: "How you dance with me" },
  { title: "Your patience" },
  { title: "Our adventures" },
  { title: "How you say 'I love you'" },
  { title: "Your eyes" },
  { title: "The way you care for others" },
  { title: "You're my best friend" }
];

const grid = document.getElementById('reasonsGrid');
reasons.forEach((item, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.animationDelay = `${index * 0.05}s`;

  card.innerHTML = `
    <div class="number">${index + 1}.</div>
    <div class="title">${item.title}</div>
  `;

  grid.appendChild(card);
});