'use strict';

const projectGrid = document.querySelector('#project-grid');
const emptyState = document.querySelector('#collection-empty');
const searchInput = document.querySelector('#project-search');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const countAll = document.querySelector('#count-all');

let projects = [{
  id: 'studiospace',
  title: 'StudioSpace',
  number: '001',
  type: 'WEBSITE EXPERIENCE',
  category: 'websites',
  summary: 'Immersive storefront, motion and editorial layouts.',
  tags: ['websites', 'design', 'motion'],
  image: './assets/preview.svg',
  url: './pages/studiospace/'
}];
let activeFilter = 'all';
let searchTerm = '';

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function projectCard(project) {
  const link = element('a', 'project-card');
  link.href = project.url;
  link.setAttribute('aria-label', 'Explore ' + project.title);

  const media = element('div', 'card-media');
  const image = element('img');
  image.src = project.image;
  image.alt = project.title + ' website preview';
  image.loading = 'lazy';
  media.append(image, element('span', 'card-visit', 'View project ↗'));

  const info = element('div', 'card-footer');
  const details = element('div');
  details.append(
    element('span', 'project-tag', project.number + ' / ' + project.type),
    element('h3', '', project.title),
    element('p', '', project.summary)
  );
  info.append(details, element('span', 'card-arrow', '↗'));
  link.append(media, info);
  return link;
}

function renderProjects() {
  const matching = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const haystack = [project.title, project.summary, project.category, ...(project.tags || [])].join(' ').toLowerCase();
    return matchesFilter && haystack.includes(searchTerm);
  });
  projectGrid.replaceChildren(...matching.map(projectCard));
  emptyState.hidden = matching.length > 0;
  countAll.textContent = String(projects.length).padStart(2, '0');
}

async function loadProjects() {
  try {
    const response = await fetch('./data/projects.json');
    if (!response.ok) throw new Error('Could not load project index');
    const data = await response.json();
    if (!Array.isArray(data.projects)) throw new Error('Invalid catalog format');
    const valid = data.projects.filter(item =>
      item && typeof item.id === 'string' &&
      typeof item.title === 'string' &&
      typeof item.url === 'string' &&
      typeof item.image === 'string' &&
      typeof item.category === 'string'
    );
    if (valid.length) projects = valid;
  } catch (error) {
    console.info('Using embedded project fallback:', error.message);
  }
  renderProjects();
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    renderProjects();
  });
});

searchInput.addEventListener('input', event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderProjects();
});

document.addEventListener('keydown', event => {
  const inputFocused = /input|textarea/i.test(document.activeElement?.tagName || '') ||
    document.activeElement?.isContentEditable;
  if (event.key === '/' && !inputFocused && !event.ctrlKey && !event.metaKey) {
    event.preventDefault();
    searchInput.focus();
    document.querySelector('#collection').scrollIntoView({ behavior: 'smooth' });
  }
  if (event.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = '';
    searchTerm = '';
    searchInput.blur();
    renderProjects();
  }
});

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  mobileNav.hidden = true;
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  mobileNav.hidden = expanded;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.matchMedia('(min-width: 741px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const revealElements = [...document.querySelectorAll('.reveal')];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  revealElements.forEach(item => observer.observe(item));
} else {
  revealElements.forEach(item => item.classList.add('visible'));
}
loadProjects();
