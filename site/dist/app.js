import { products, categories, filterProducts, proposalUrl } from './catalog.js';

if (document.querySelector('#catalogo')) {
const catalogue = document.querySelector('#catalogo');
const search = document.querySelector('#product-search');
const list = document.querySelector('#product-list');
const count = document.querySelector('#result-count');
const filters = document.querySelector('.filters');
const dialog = document.querySelector('#product-dialog');
let activeCategory = 'todos';
let detailData;
let dialogTrigger;

categories.forEach(category => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = category.name;
  button.dataset.filter = category.id;
  button.setAttribute('aria-pressed', String(category.id === activeCategory));
  button.addEventListener('click', () => {
    activeCategory = category.id;
    renderProducts();
  });
  filters.append(button);
});

function renderProducts() {
  filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === activeCategory)));
  const results = filterProducts(activeCategory, search.value);
  count.textContent = `${results.length} ${results.length === 1 ? 'produto encontrado' : 'produtos encontrados'}`;
  list.replaceChildren();
  if (!results.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Não encontramos produtos para essa busca. Tente outro termo ou escolha uma categoria diferente.';
    list.append(empty);
    return;
  }
  results.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-item';
    const content = document.createElement('div');
    const label = document.createElement('span');
    label.className = 'product-category';
    label.textContent = categories.find(category => category.id === product.category).name;
    const title = document.createElement('h3');
    title.textContent = product.name;
    const description = document.createElement('p');
    description.textContent = product.description;
    content.append(label, title, description);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'product-more';
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
    button.setAttribute('aria-label', `Conhecer ${product.name}`);
    button.addEventListener('click', () => openProduct(product, button));
    card.append(content, button);
    list.append(card);
  });
}
search.addEventListener('input', renderProducts);
document.querySelectorAll('[data-category]').forEach(link => link.addEventListener('click', () => {
  activeCategory = link.dataset.category;
  search.value = '';
  catalogue.open = true;
  renderProducts();
}));
renderProducts();

async function openProduct(product, trigger) {
  dialogTrigger = trigger;
  document.querySelector('#dialog-category').textContent = categories.find(category => category.id === product.category).name;
  document.querySelector('#dialog-title').textContent = product.name;
  document.querySelector('#dialog-description').textContent = product.description;
  const content = document.querySelector('#dialog-content');
  content.replaceChildren();
  const purchase = document.querySelector('#dialog-purchase');
  purchase.hidden = !product.purchase;
  if (product.purchase) purchase.href = product.purchase;
  else purchase.removeAttribute('href');
  dialog.querySelector('.dialog-actions .button').href = `${proposalUrl}?produto=${encodeURIComponent(product.name)}`;
  dialog.showModal();
  document.body.classList.add('dialog-open');
  if (!product.slug) return;
  const status = document.createElement('p');
  status.textContent = 'Carregando informações do produto…';
  status.setAttribute('role', 'status');
  content.append(status);
  try {
    if (!detailData) {
      const response = await fetch('product-details.json');
      if (!response.ok) throw new Error('Catalogue unavailable');
      detailData = await response.json();
    }
    if (!dialog.open || document.querySelector('#dialog-title').textContent !== product.name) return;
    content.replaceChildren();
    (detailData[product.slug] || []).forEach(line => {
      const paragraph = document.createElement('p');
      paragraph.textContent = line;
      if (line.length < 85 && (line === line.toUpperCase() || /^(Vantagens|Principais Vantagens|FGTS|Assessoria jurídica|Conheça|Total|Danos a Terceiros|Proteção aos Vidros)/.test(line))) paragraph.className = 'detail-heading';
      content.append(paragraph);
    });
  } catch {
    content.replaceChildren();
    const error = document.createElement('p');
    error.textContent = 'Não foi possível carregar os detalhes agora. Nossa equipe pode apresentar as coberturas e condições desse produto.';
    content.append(error);
  }
}
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (dialogTrigger?.isConnected) dialogTrigger.focus();
});

}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
