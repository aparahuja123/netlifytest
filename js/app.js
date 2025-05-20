// Helper: localStorage keys
const STORAGE_KEY = 'loveReasons';

// Load from storage or seed dummy data
function loadReasons() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  // Seed dummy reasons for 24 months
  return Array.from({ length: 24 }, (_, i) => ({
    month: i + 1,
    title: `Beautiful Moment ${i+1}`,
    details: `This is a sweet memory from month ${i+1}.`
  }));
}

// Save to localStorage
function saveReasons() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reasons));
}

// Data store
let reasons = loadReasons();

// DOM elements
const reasonsList = document.getElementById('reasonsList');
const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const cancelBtn = document.getElementById('cancelBtn');
const form = document.getElementById('reasonForm');
const searchInput = document.getElementById('searchInput');

// Open/close modal
addBtn.addEventListener('click', () => modal.classList.remove('hidden'));
cancelBtn.addEventListener('click', () => {
  form.reset();
  modal.classList.add('hidden');
});

// Render function
def render(filter = '') {
  reasonsList.innerHTML = '';
  reasons
    .filter(r => r.title.toLowerCase().includes(filter.toLowerCase())
             || r.details.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a.month - b.month)
    .forEach((r, idx) => {
      const li = document.createElement('li');
      li.className = 'reason-item';
      li.innerHTML = `
        <div class="month-badge">${r.month}</div>
        <h3>${r.title}</h3>
        <p>${r.details}</p>
        <button class="delete-btn" title="Delete">×</button>
      `;
      li.querySelector('.delete-btn').addEventListener('click', () => {
        reasons.splice(reasons.indexOf(r), 1);
        saveReasons();
        render(searchInput.value);
      });
      reasonsList.appendChild(li);
    });
}

// Handle form submit
form.addEventListener('submit', e => {
  e.preventDefault();
  const month = parseInt(document.getElementById('monthInput').value);
  const title = document.getElementById('titleInput').value.trim();
  const details = document.getElementById('detailInput').value.trim();
  reasons.push({ month, title, details });
  saveReasons();
  form.reset();
  modal.classList.add('hidden');
  render(searchInput.value);
});

// Search handler
searchInput.addEventListener('input', () => render(searchInput.value));

// Initial render
render();