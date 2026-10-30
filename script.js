const roles = [...document.querySelectorAll('.experience')];
let openStates;
// Print every role, then restore the visitor's chosen view.
window.addEventListener('beforeprint', () => {
  if (openStates) return;
  openStates = roles.map(role => role.open);
  roles.forEach(role => { role.open = true; });
});
window.addEventListener('afterprint', () => {
  if (!openStates) return;
  roles.forEach((role, index) => { role.open = openStates[index]; });
  openStates = undefined;
});
document.querySelector('.print-button').addEventListener('click', () => window.print());
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.nav-links a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  links.forEach(link => observer.observe(document.querySelector(link.hash)));
  const heroObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) links.forEach(link => link.removeAttribute('aria-current'));
  }, { threshold: 0.4 });
  heroObserver.observe(document.querySelector('.hero'));
}
