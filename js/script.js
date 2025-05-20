// Data store
let reasons = [];

// DOM elements
const reasonsList = document.getElementById('reasonsList');
const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const cancelBtn = document.getElementById('cancelBtn');
const form = document.getElementById('reasonForm');
const searchInput = document.getElementById('searchInput');

// Open/close modal
delete modalClose;
addBtn.addEventListener('click', () => modal.classList.remove('hidden'));
cancelBtn.addEventListener('click', () => modal.classList.add('hidden'));

// Render function
function render(filter = '') {
  reasonsList.innerHTML = '';
  reasons
    .filter(r => r.title.toLowerCase().includes(filter.toLowerCase())
             || r.details.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a.month - b.month)
    .forEach(r => {
      const li = document.createElement('li');
      li.className = 'reason-item';
      li.innerHTML = `
        <div class="month-badge">${r.month}</div>
        <h3>${r.title}</h3>
        <p>${r.details}</p>
        <button class="delete-btn" title="Delete">×</button>
      `;
      li.querySelector('.delete-btn').addEventListener('click', () => {
        reasons = reasons.filter(x => x !== r);
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
  form.reset();
  modal.classList.add('hidden');
  render(searchInput.value);
});

// Search handler
searchInput.addEventListener('input', () => render(searchInput.value));

// Initialize with 24 empty slots
for (let i = 1; i <= 24; i++) {
  reasons.push({ month: i, title: `Placeholder Title ${i}`, details: 'Reason goes here.' });
}
render();