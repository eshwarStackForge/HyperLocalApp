const tabButtons = document.querySelectorAll('.tab-buttons button');
const panels = document.querySelectorAll('.tab-panel');
const heroButtons = document.querySelectorAll('.hero-actions button');

function activateTab(tabName) {
  tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === tabName);
  });

  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === tabName);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => activateTab(button.dataset.tab));
});

heroButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activateTab(button.dataset.role);
    document.getElementById(button.dataset.role).scrollIntoView({ behavior: 'smooth' });
  });
});
