// Mobile menu: show/hide the nav when the Menu button is tapped
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu after a link is tapped
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('nav--open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// Project filter: show only the cards that match the chosen button
const filterButtons = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((b) => b.setAttribute('aria-pressed', b === button));
    projects.forEach((project) => {
      project.hidden = filter !== 'all' && project.dataset.category !== filter;
    });
  });
});

// Highlight the nav link for the section on screen
const navLinks = document.querySelectorAll('#main-nav ul a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

navLinks.forEach((link) => {
  const section = document.querySelector(link.getAttribute('href'));
  if (section) observer.observe(section);
});
