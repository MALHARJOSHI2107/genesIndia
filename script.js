function toggleSection(header) {
  const list = header.nextElementSibling;
  if (list.style.display === "none" || !list.style.display) {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}

// Collapse section toggle
function toggleSection(header) {
  const list = header.nextElementSibling;
  list.style.display = (list.style.display === "none" || !list.style.display) ? "block" : "none";
}

// Dark mode toggle logic
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  const isDark = localStorage.getItem('darkMode') === 'true';

  if (isDark) {
    document.body.classList.add('dark');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', toggle.checked);
  });
});


