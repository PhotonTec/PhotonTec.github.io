// Add real paper URLs below. A null URL keeps a listed icon visible as a placeholder.
// Omit a resource key to hide that button for the corresponding paper.
const publications = [
  {
    id: 'refmover',
    title: 'RefMover: Diffusion-Based Single Image Reflection Removal With Language and Region Guidance',
    authors: ['Zifeng Wang', 'Yuchen Hong', 'Tianyi Xu', 'Haofeng Zhong', 'Shuchen Weng', 'Jinxiu Liang', 'Boxin Shi'],
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    type: 'journal', conference: 'TPAMI', year: 2026,
    links: {}
  },
  {
    id: 'reflection-removal',
    title: 'Diffusion-based Dual-view Reflection Removal',
    authors: ['Tianyi Xu', 'Zifeng Wang', 'Boyang Lv', 'Shuchen Weng', 'Boxin Shi'],
    venue: 'Proceedings of the European Conference on Computer Vision',
    conference: 'ECCV', year: 2026,
    links: { pdf: null }
  },
  {
    id: 'adaptiveae',
    title: 'AdaptiveAE: An Adaptive Exposure Strategy for HDR Capturing in Dynamic Scenes',
    authors: ['Tianyi Xu', 'Fan Zhang', 'Boxin Shi', 'Tianfan Xue', 'Yujin Wang'],
    venue: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    conference: 'ICCV', year: 2025,
    links: { pdf: null, arxiv: null, website: null }
  },
  {
    id: 'adaptiveisp',
    title: 'AdaptiveISP: Learning an Adaptive Image Signal Processor for Object Detection',
    authors: ['Yujin Wang', 'Tianyi Xu', 'Fan Zhang', 'Tianfan Xue', 'Jinwei Gu'],
    venue: 'Advances in Neural Information Processing Systems',
    conference: 'NeurIPS', year: 2024,
    links: { pdf: null, arxiv: null, website: null, code: null }
  },
  {
    id: 'coarse-to-fine-affordance',
    title: 'Articulated Object Manipulation with Coarse-to-Fine Affordance for Mitigating the Effect of Point Cloud Noise',
    authors: ['Suhan Ling', 'Yian Wang', 'Ruihai Wu', 'Shiguang Wu', 'Yuzheng Zhuang', 'Tianyi Xu', 'Yu Li', 'Chang Liu', 'Hao Dong'],
    venue: 'Proceedings of the IEEE International Conference on Robotics and Automation',
    conference: 'ICRA', year: 2024,
    links: { pdf: null, arxiv: null, website: null, code: null }
  }
];

const authorUrls = {
  'Boxin Shi': 'https://ci.idm.pku.edu.cn/',
  'Tianfan Xue': 'https://tianfan.info/',
  'Hao Dong': 'https://zsdonghao.github.io/',
  'Shuchen Weng': 'https://shuchenweng.github.io/'
};
const resourceLabels = { pdf: 'PDF', arxiv: 'arXiv', website: 'Website', code: 'Code' };
const resourceIcons = { pdf: 'pdf', arxiv: 'arxiv', website: 'globe', code: 'code' };
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

document.getElementById('publication-list').innerHTML = publications.map(paper => {
  const authors = paper.authors.map(author => author === 'Tianyi Xu'
    ? `<strong>${escapeHtml(author)}</strong>`
    : authorUrls[author]
      ? `<a href="${authorUrls[author]}" target="_blank" rel="noopener noreferrer">${escapeHtml(author)}</a>`
      : escapeHtml(author)).join(', ');
  const resources = Object.entries(paper.links).map(([type, url]) => {
    const label = resourceLabels[type];
    const contents = `<svg class="icon" aria-hidden="true"><use href="#icon-${resourceIcons[type]}"></use></svg>${label}`;
    return url
      ? `<a class="paper-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" aria-label="${label} for ${escapeHtml(paper.title)}">${contents}</a>`
      : `<button class="paper-link" type="button" data-placeholder="${label}" title="${label} link coming soon" aria-label="${label} for ${escapeHtml(paper.title)}: link coming soon">${contents}</button>`;
  }).join('');
  return `<article class="publication" id="${paper.id}"><h3>${escapeHtml(paper.title)}</h3><p class="authors">${authors}</p><p class="venue">${paper.type === 'journal' ? '' : 'In '}<i>${escapeHtml(paper.venue)}</i> (<strong>${paper.conference} ${paper.year}</strong>).</p>${resources ? `<div class="paper-links">${resources}</div>` : ''}</article>`;
}).join('');

const themeButton = document.querySelector('.theme-toggle');
const updateThemeLabel = () => {
  const label = `Switch to ${document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'} theme`;
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
};
updateThemeLabel();
let themeTransitionTimer;
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  clearTimeout(themeTransitionTimer);
  document.documentElement.classList.add('theme-transition');
  document.documentElement.dataset.theme = theme;
  themeTransitionTimer = setTimeout(() => document.documentElement.classList.remove('theme-transition'), 300);
  try { localStorage.setItem('theme', theme); } catch (_) {}
  updateThemeLabel();
});

const menuButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('nav-links');
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
const closeMenu = () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
};
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const progress = document.querySelector('.reading-progress');
const sections = [...document.querySelectorAll('main > section')];
const navLinks = [...menu.querySelectorAll('a')];
const header = document.querySelector('.site-header');
const updateHeaderHeight = () => {
  document.documentElement.style.setProperty('--nav-height', `${header.getBoundingClientRect().height}px`);
};
new ResizeObserver(updateHeaderHeight).observe(header);
updateHeaderHeight();
let scheduled = false;
const updateScroll = () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${total > 0 ? Math.min(100, window.scrollY / total * 100) : 0}%`;
  let active = sections[0].id;
  for (const section of sections) if (section.getBoundingClientRect().top <= header.getBoundingClientRect().height + 35) active = section.id;
  if (total > 0 && window.scrollY >= total - 5) active = sections[sections.length - 1].id;
  navLinks.forEach(link => {
    if (link.hash === `#${active}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
};
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateScroll); }
}, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

let toastTimer;
document.querySelectorAll('[data-placeholder]').forEach(button => button.addEventListener('click', () => {
  const toast = document.querySelector('.toast');
  clearTimeout(toastTimer);
  toast.textContent = `${button.dataset.placeholder} link coming soon.`;
  toast.classList.add('visible');
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2500);
}));
