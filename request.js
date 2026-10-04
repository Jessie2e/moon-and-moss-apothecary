const REQUEST_EMAIL = 'hello@moonandmossapothecary.com'; // Replace with the client's preferred customer-order email before launch.

const requestForm = document.querySelector('[data-request-form]');
const bagSummary = document.querySelector('[data-request-bag]');
const bagItemsNode = document.querySelector('[data-request-bag-items]');
const clearBagButton = document.querySelector('[data-request-clear]');
const statusNode = document.querySelector('[data-request-status]');

const productNames = {
  'lavender-bath-salts': 'Lavender Bath Salts',
  'mahogany-teakwood-beard-oil': 'Mahogany Teakwood Beard Oil',
  'mahogany-teakwood-aftershave': 'Mahogany Teakwood Aftershave',
  'caramel-orange-clove-body-scrub': 'Caramel, Orange + Clove Body Scrub',
  'decorative-soap-bars': 'Decorative Soap Bars',
  'gemstone-hoop-earrings': 'Gemstone Hoop Earrings',
  'green-tea-lemon-lip-balm': 'Green Tea + Lemon Lip Balm',
  'blackberry-acai-lip-balm': 'Blackberry Açaí Lip Balm',
  'sugar-spun-pineapple-lip-balm': 'Sugar Spun Pineapple Lip Balm',
  'peppermint-eucalyptus-foot-cream': 'Peppermint Eucalyptus Foot Cream',
  'anxiety-relief-spray-for-dogs': 'Anxiety Relief Spray for Dogs',
  'peppermint-foot-scrub': 'Peppermint Foot Scrub',
  'after-sun-relief-spray': 'After Sun Relief Spray',
  'bug-repellent-spray': 'Bug Repellent Spray'
};

function getBag() {
  try { return JSON.parse(localStorage.getItem('moonMossOrderBag') || '{}'); }
  catch { return {}; }
}

function bagLines() {
  return Object.entries(getBag())
    .filter(([, qty]) => Number(qty) > 0)
    .map(([id, qty]) => `${productNames[id] || id} × ${qty}`);
}

function renderBag() {
  const lines = bagLines();
  bagSummary.hidden = lines.length === 0;
  bagItemsNode.innerHTML = lines.map((line) => `<div class="request-bag-item"><span>♡</span><strong>${line}</strong></div>`).join('');
}

clearBagButton?.addEventListener('click', () => {
  localStorage.removeItem('moonMossOrderBag');
  renderBag();
});

requestForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(requestForm);
  const selected = bagLines();
  const body = [
    'Hi Moon + Moss!',
    '',
    'I would like to ask about the following:',
    selected.length ? selected.map((line) => `- ${line}`).join('\n') : '- No items selected from the online order bag',
    '',
    `Other items / description:\n${data.get('items') || ''}`,
    '',
    `Name: ${data.get('name') || ''}`,
    `Email: ${data.get('email') || ''}`,
    `Phone: ${data.get('phone') || 'Not provided'}`,
    `Preferred contact: ${data.get('contact') || ''}`,
    '',
    `Shipping address (if applicable):\n${data.get('address') || 'Not provided'}`,
    '',
    `Additional notes:\n${data.get('notes') || 'None'}`,
    '',
    'Could you let me know what is available, pricing, and next steps? Thank you!'
  ].join('\n');

  const subject = `Moon + Moss item request — ${data.get('name') || 'customer'}`;
  statusNode.textContent = 'Opening your email app with the request filled in…';
  window.location.href = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

renderBag();
