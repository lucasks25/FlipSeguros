import { products } from './catalog.js';
import { prepareMessage } from './message.js';

document.querySelectorAll('[data-message-form]').forEach(form => {
  const select = form.querySelector('[name="product"]');
  if (select) {
    products.toSorted((a, b) => a.name.localeCompare(b.name, 'pt-BR')).forEach(product => {
      const option = document.createElement('option');
      option.value = product.name;
      option.textContent = product.name;
      select.append(option);
    });
    const selected = new URLSearchParams(location.search).get('produto');
    if (products.some(product => product.name === selected)) select.value = selected;
  }
  const panel = form.closest('.form-panel');
  const result = panel.querySelector('.form-result');
  let prepared;
  form.querySelectorAll('[required]:not([type="checkbox"])').forEach(field => {
    field.addEventListener('input', () => field.setCustomValidity(''));
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    for (const field of form.querySelectorAll('[required]:not([type="checkbox"])')) {
      field.setCustomValidity(field.value.trim() ? '' : 'Preencha este campo.');
    }
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));
    values.marketing = form.elements.marketing.checked;
    prepared = prepareMessage(form.dataset.messageForm, values);
    result.querySelector('.message-preview').textContent = prepared.body;
    result.querySelector('.email-action').href = prepared.mailto;
    result.querySelector('.copy-status').textContent = '';
    form.hidden = true;
    result.hidden = false;
    const heading = result.querySelector('h2');
    heading.tabIndex = -1;
    heading.focus();
    result.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
  });
  result.querySelector('.edit-message').addEventListener('click', () => {
    result.hidden = true;
    form.hidden = false;
    form.elements.name.focus();
  });
  result.querySelector('.copy-message').addEventListener('click', async () => {
    const status = result.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(prepared.body);
      status.textContent = 'Mensagem copiada. Envie para atendimento@flipseguros.com.br.';
    } catch {
      status.textContent = 'Não foi possível copiar automaticamente. Selecione e copie o texto da mensagem acima.';
    }
  });
});
