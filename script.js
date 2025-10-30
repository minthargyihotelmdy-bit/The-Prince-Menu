// Menu data is loaded from `menus.js` which assigns `window.menus`.
// Fallback to an empty object if the data file isn't loaded.
const menus = window.menus || {};
// Keep the global reference so manage.js can modify it if needed.
window.menus = menus;

const menuSelect = document.getElementById('menuSelect');
const menuList = document.getElementById('menuList');
const tabsContainer = document.querySelector('.tabs');

// Current state
let currentMenuKey = menuSelect?.value || 'myanmar';
let currentCategory = null; // assigned during tab generation

function humanizeCategoryKey(key) {
  // simple fallback label if no localized label exists
  return key.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function renderTabs() {
  // Clear existing tabs
  tabsContainer.innerHTML = '';

  const categories = Object.keys(menus[currentMenuKey] || {});
  if (categories.length === 0) {
    // nothing to show
    return;
  }

  // If currentCategory is missing or not in list, default to first
  if (!currentCategory || !categories.includes(currentCategory)) {
    currentCategory = categories[0];
  }

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'tab';
    btn.dataset.category = cat;

    // Use localized label map if present, else fallback to humanized key
    const label = (window.categoryLabels && window.categoryLabels[currentMenuKey] && window.categoryLabels[currentMenuKey][cat]) || humanizeCategoryKey(cat);
    btn.textContent = label;

    if (cat === currentCategory) btn.classList.add('active');

    btn.addEventListener('click', () => {
      // remove active from all
      tabsContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = cat;
      renderMenu();
    });

    tabsContainer.appendChild(btn);
  });
}

function renderMenu() {
  // Clear existing
  menuList.innerHTML = '';

  const items = (menus[currentMenuKey] && menus[currentMenuKey][currentCategory]) || [];

  if (!items || items.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'menu-empty';
    empty.textContent = 'No items in this category.';
    menuList.appendChild(empty);
    return;
  }

  items.forEach((it, index) => {
    const card = document.createElement('div');
    card.className = 'menu-card';

    const img = document.createElement('img');
    img.src = it.img || 'https://via.placeholder.com/120x80';
    img.alt = it.name || '';

    const info = document.createElement('div');
    info.className = 'menu-info';

    const h3 = document.createElement('h3');
    h3.textContent = it.name || '';

    const p = document.createElement('p');
    p.textContent = it.desc || '';

    const span = document.createElement('span');
    span.className = 'price';
    span.textContent = it.price || '';

    info.appendChild(h3);
    info.appendChild(p);
    info.appendChild(span);

    card.appendChild(img);
    card.appendChild(info);

    menuList.appendChild(card);
  });
}

// When the menu selection changes (Myanmar / International), re-render tabs and menu
menuSelect.addEventListener('change', (e) => {
  currentMenuKey = e.target.value;
  renderTabs();
  renderMenu();
});

// Initial render: create tabs from menu data then render the first category
renderTabs();
renderMenu();
