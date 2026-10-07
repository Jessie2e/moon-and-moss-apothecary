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
  try {
    return JSON.parse(localStorage.getItem('moonMossOrderBag') || '{}');
  } catch {
    return {};
  }
}

function bagLines() {
  return Object.entries(getBag())
    .filter(([, qty]) => Number(qty) > 0)
    .map(([id, qty]) => `${productNames[id] || id} × ${qty}`);
}

function renderBag() {
  const lines = bagLines();

  if (bagSummary) {
    bagSummary.hidden = lines.length === 0;
  }

  if (bagItemsNode) {
    bagItemsNode.innerHTML = lines
      .map(
        (line) =>
          `<div class="request-bag-item"><span>♡</span><strong>${line}</strong></div>`
      )
      .join('');
  }
}

clearBagButton?.addEventListener('click', () => {
  localStorage.removeItem('moonMossOrderBag');
  renderBag();
});

requestForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const submitButton = requestForm.querySelector('[type="submit"]');
  const data = new FormData(requestForm);
  const selected = bagLines();

  data.append(
    'order_bag',
    selected.length
      ? selected.join('\n')
      : 'No items selected from the online order bag'
  );

  if (statusNode) {
    statusNode.textContent = 'Sending your request…';
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
  }

  try {
    const response = await fetch(requestForm.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    if (statusNode) {
      statusNode.textContent =
        'Thanks! Your request was sent to Moon + Moss. They’ll be in touch soon. ♡';
    }

    requestForm.reset();
    localStorage.removeItem('moonMossOrderBag');
    renderBag();

    if (submitButton) {
      submitButton.textContent = 'Request Sent ✓';
    }
  } catch (error) {
    if (statusNode) {
      statusNode.textContent =
        'Something went wrong while sending your request. Please try again.';
    }

    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = 'Send My Request →';
    }
  }
});

renderBag();