const roles = [...document.querySelectorAll('.experience')];
const menu = document.querySelector('.mobile-menu');
const menuToggle = menu.querySelector('summary');
const header = document.querySelector('.site-header');
let openStates;

// Include all experience when printing, then restore the reader's view.
window.addEventListener('beforeprint', () => {
  if (openStates) return;
  openStates = roles.map(role => role.open);
  roles.forEach(role => { role.open = true; });
  menu.open = false;
});
window.addEventListener('afterprint', () => {
  if (!openStates) return;
  roles.forEach((role, index) => { role.open = openStates[index]; });
  openStates = undefined;
});
document.querySelectorAll('.print-button').forEach(button => {
  button.addEventListener('click', () => window.print());
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Native details supplies expanded state and keyboard activation for the menu.
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.open = false;
    const target = document.querySelector(link.hash);
    requestAnimationFrame(() => target?.focus({ preventScroll: true }));
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.open) {
    menu.open = false;
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (menu.open && !menu.contains(event.target)) menu.open = false;
});
const compactLayout = window.matchMedia('(max-width: 52rem)');
compactLayout.addEventListener('change', event => {
  if (!event.matches) menu.open = false;
});

// Keep anchor targets below the header even when enlarged text adds a row.
const updateHeaderHeight = () => {
  const height = Math.ceil(header.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--header-height', `${height}px`);
};
updateHeaderHeight();
if ('ResizeObserver' in window) new ResizeObserver(updateHeaderHeight).observe(header);
else window.addEventListener('resize', updateHeaderHeight);

const sectionLinks = [...document.querySelectorAll('.nav-links a, .mobile-links a')];
const sections = [...document.querySelectorAll('main > section[id]')];
let scheduled = false;
const updateCurrentSection = () => {
  scheduled = false;
  const threshold = header.getBoundingClientRect().height + 100;
  let current = 'top';
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) current = section.id;
  }
  sectionLinks.forEach(link => {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(updateCurrentSection);
}, { passive: true });
window.addEventListener('resize', updateCurrentSection);
updateCurrentSection();
