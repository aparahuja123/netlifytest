const reasons = [
  {
    title: "How did it all begin?",
    message: "It started with a Bumble match and a few shared Instagram reels. Life got busy, and the chats slowed down to just story replies. But that tiny spark quietly waited. Was fate already at work?"
  },
  {
    title: "Why did Bangalore matter?",
    message: "In December 2022, while Apar interned in Bangalore, Khushi replied to a story and suggested they should meet. Distance made meeting hard – she was in Pune, he in Bangalore, and Singapore was on the horizon. Could anything even come of this?"
  },
  {
    title: "Was there still hope?",
    message: "By February, Khushi was back in Gurgaon. They chatted, but plans never worked out. Then came March, and IIT Delhi’s fest gave them a reason to connect again. But when plans failed again, was it over?"
  },
  {
    title: "What changed with one show?",
    message: "A standup show plan with Shaurya flopped. Apar texted Khushi impulsively. She replied late, but fate had a plan – her next day’s plan got canceled. Could this be their chance to finally meet?"
  },
  {
    title: "How did the first date happen?",
    message: "They chose Raasta Café in Hauz Khas. Apar sent options with thoughtful pros & cons. Khushi was impressed. She said yes. Could this be the start of something beautiful?"
  },
  {
    title: "Did she almost not show up?",
    message: "Khushi’s first Delhi metro ride scared her so much, she called Ravi panicking. But somehow, she made it to the café. Apar was already waiting, in his olive green shirt. Was this destiny testing them?"
  },
  {
    title: "What was their first impression?",
    message: "They talked for hours, sharing stories and laughter over pizza and drinks. Olive (Apar) listened intently. The date wasn’t over yet. Was one café meeting really enough to know someone?"
  },
  {
    title: "Why a walk next?",
    message: "The Delhi weather was kind, so they went for a walk in Deer Park. They talked about everything—shows, food, medical stuff, dating. The conversation never stopped. Were they already falling for each other?"
  },
  {
    title: "Was goodbye hard?",
    message: "Three hours flew by. It was late, and Khushi had to go home. Apar dropped her at the metro station. They hugged – his first real date hug. Could this really be their only meeting?"
  },
  {
    title: "Did they stay in touch?",
    message: "They never stopped talking. Slowly, without planning it, they became each other's daily person. Time passed, feelings grew. Was something deeper blooming between them?"
  },
  {
    title: "Why did May feel magical?",
    message: "Apar’s Singapore joining got delayed. Khushi returned to Delhi. They planned their next meet—Van Gogh, ice skating, and more. Were the stars aligning just for them?"
  },
  {
    title: "Did he meet the family?",
    message: "In the scorching heat, they sat below her apartment talking for hours. Khushi’s mom invited him for lunch. Apar met Dexy, and had lunch with her mom. Was he already part of her world?"
  },
  {
    title: "What happened on May 20th?",
    message: "Apar couldn’t sleep. He talked to Shaurya and Tanvi—should he confess his feelings? Khushi was asking her friends the same. Were they both secretly wishing for the same answer?"
  },
  {
    title: "Was she ready?",
    message: "Apar asked her to be his girlfriend. She was hesitant—distance was scary. But after hours of heartfelt talk, she agreed to a one-month trial. Could this trial turn into forever?"
  },
  {
    title: "Did it feel real?",
    message: "They talked daily, but Apar was careful. He never called her his girlfriend—not yet. One month passed, and he reminded her of their one-month anniversary and the relationship was official now. Had she fallen too?"
  },
  {
    title: "Why did Pune matter?",
    message: "Before Apar flew to Singapore, he planned a family trip to Mahabaleshwar via Pune. He carved out one day to meet Khushi. Could one more day be enough to create forever memories?"
  },
  {
    title: "What happened in Yolkshire?",
    message: "They had breakfast, visited Shaniwar Wada, but the crowd kept them from talking. Still, something felt magical. Was the city conspiring to make space for their love?"
  },
  {
    title: "What made the date perfect?",
    message: "They ended up in a café, then to Okayama Park. They talked deeply, did the 36 questions to fall in love, and claimed 'Wildfire' as their song. Were their hearts now completely entangled?"
  },
  {
    title: "Was goodbye harder this time?",
    message: "Evening came too soon. Silent, shy, they avoided the moment—but their eyes said it all. A first kiss, nervous and sweet. A final hug. Was this goodbye, or something else?"
  },
  {
    title: "Did long distance scare them?",
    message: "Yes, but they kept showing up for each other. Day by day, call by call. Despite miles, love found its rhythm. Could their hearts really stay so close from so far?"
  },
  // NEED TO REVIEW BELOW
  {
    title: "Was it official now?",
    message: "Khushi had fallen too. No more doubts. They were officially together, in love. Not just a trial. Not just a story. Was this what true love looked like?"
  },
  {
    title: "How did time treat them?",
    message: "From texts to video calls, missed each other deeply but stayed patient. They celebrated little moments. Could love really grow across oceans?"
  },
  {
    title: "What makes this special?",
    message: "They didn’t plan for forever—but life kept weaving them closer. Their story is not just about love, but fate, patience, and joy. Can a story get any more magical?"
  },
  {
    title: "Where does it go next?",
    message: "From Bumble to forever. Through metros, monsoons, messages, and memories—they kept choosing each other. And now here we are… Do you believe in soulmates now?"
  }
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
