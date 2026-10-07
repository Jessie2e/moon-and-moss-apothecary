const products = [
  {
    id: 'lavender-bath-salts',
    name: 'Lavender Bath Salts',
    price: '$7',
    category: 'bath-body',
    categoryLabel: 'Bath + Body',
    image: 'assets/products/lavender-bath-salts.webp',
    description: 'A small-batch lavender soak made for slow evenings and simple self-care.',
    tag: 'Soak',
    position: '50% 36%',
  },
  {
    id: 'mahogany-teakwood-beard-oil',
    name: 'Mahogany Teakwood Beard Oil',
    price: '$5',
    category: 'grooming',
    categoryLabel: 'Beard + Shave',
    image: 'assets/products/mahogany-teakwood-beard-oil.webp',
    description: 'Warm mahogany + teakwood beard oil made with olive, vitamin E, and natural oils.',
    tag: 'Grooming',
    position: '50% 32%',
  },
  {
    id: 'mahogany-teakwood-aftershave',
    name: 'Mahogany Teakwood Aftershave',
    price: '$3',
    category: 'grooming',
    categoryLabel: 'Beard + Shave',
    image: 'assets/products/mahogany-teakwood-aftershave.webp',
    description: 'A matching aftershave with witch hazel, glycerin, aloe, and natural oils.',
    tag: 'Grooming',
    position: '50% 30%',
  },
  {
    id: 'caramel-orange-clove-body-scrub',
    name: 'Caramel, Orange + Clove Body Scrub',
    price: '$5',
    category: 'bath-body',
    categoryLabel: 'Bath + Body',
    image: 'assets/products/caramel-orange-clove-body-scrub.webp',
    description: 'A cozy citrus-spice body scrub with an exfoliating sugar base.',
    tag: 'Scrub',
    position: '50% 28%',
  },
  {
    id: 'decorative-soap-bars',
    name: 'Decorative Soap Bars',
    price: '$3',
    category: 'bath-body',
    categoryLabel: 'Bath + Body',
    image: 'assets/products/decorative-soap-bars.webp',
    description: 'Colorful molded soap bars that make everyday washing feel a little more fun.',
    tag: 'Soap',
    position: '50% 43%',
  },
  {
    id: 'gemstone-hoop-earrings',
    name: 'Gemstone Hoop Earrings',
    price: '$5',
    category: 'jewelry',
    categoryLabel: 'Jewelry',
    image: 'assets/products/gemstone-hoop-earrings.webp',
    description: 'Colorful gemstone hoops for a little market-table sparkle beyond bath + body.',
    tag: 'Jewelry',
    position: '50% 45%',
  },
  {
    id: 'green-tea-lemon-lip-balm',
    name: 'Green Tea + Lemon Lip Balm',
    price: '$3',
    category: 'lip-care',
    categoryLabel: 'Lip Care',
    image: 'assets/products/green-tea-lemon-lip-balm.webp',
    description: 'An easy carry-along lip balm with a bright green tea + lemon pairing.',
    tag: 'Lip Care',
    position: '50% 31%',
  },
  {
    id: 'blackberry-acai-lip-balm',
    name: 'Blackberry Açaí Lip Balm',
    price: '$3',
    category: 'lip-care',
    categoryLabel: 'Lip Care',
    image: 'assets/products/blackberry-acai-lip-balm.webp',
    description: 'A fruity blackberry + açaí lip balm for pockets, purses, and bedside tables.',
    tag: 'Lip Care',
    position: '50% 30%',
  },
  {
    id: 'sugar-spun-pineapple-lip-balm',
    name: 'Sugar Spun Pineapple Lip Balm',
    price: '$3',
    category: 'lip-care',
    categoryLabel: 'Lip Care',
    image: 'assets/products/sugar-spun-pineapple-lip-balm.webp',
    description: 'A playful pineapple lip balm with a sweet, sunny feel.',
    tag: 'Lip Care',
    position: '50% 31%',
  },
  {
    id: 'peppermint-eucalyptus-foot-cream',
    name: 'Peppermint Eucalyptus Foot Cream',
    price: '$3',
    category: 'bath-body',
    categoryLabel: 'Bath + Body',
    image: 'assets/products/peppermint-eucalyptus-foot-cream.webp',
    description: 'Cooling peppermint + eucalyptus foot cream with coconut oil and aloe.',
    tag: 'Foot Care',
    position: '50% 27%',
  },
  {
    id: 'anxiety-relief-spray-for-dogs',
    name: 'Anxiety Relief Spray for Dogs',
    price: '$3',
    category: 'pet-outdoor',
    categoryLabel: 'Pet + Outdoor',
    image: 'assets/products/anxiety-relief-spray-for-dogs.webp',
    description: 'A small-batch dog spray from the Moon + Moss pet-care side of the table.',
    tag: 'Pet Care',
    position: '50% 35%',
  },
  {
    id: 'peppermint-foot-scrub',
    name: 'Peppermint Foot Scrub',
    price: '$5',
    category: 'bath-body',
    categoryLabel: 'Bath + Body',
    image: 'assets/products/peppermint-foot-scrub.webp',
    description: 'A peppermint foot scrub made with Epsom salt, baking soda, sugar, and peppermint essential oil.',
    tag: 'Foot Care',
    position: '50% 12%',
  },
  {
    id: 'after-sun-relief-spray',
    name: 'After Sun Relief Spray',
    price: '$3',
    category: 'pet-outdoor',
    categoryLabel: 'Pet + Outdoor',
    image: 'assets/products/after-sun-relief-spray.webp',
    description: 'A light after-sun spray for the summer-care shelf.',
    tag: 'Outdoor Care',
    position: '50% 35%',
  },
  {
    id: 'bug-repellent-spray',
    name: 'Bug Repellent Spray',
    price: '$3',
    category: 'pet-outdoor',
    categoryLabel: 'Pet + Outdoor',
    image: 'assets/products/bug-repellent-spray.webp',
    description: 'A small spray bottle made for outdoor days, markets, porches, and patios.',
    tag: 'Outdoor Care',
    position: '50% 35%',
  },

  // NEW PRODUCTS

  {
    id: 'heart-pendant-necklace',
    name: 'Heart Pendant Necklace',
    price: '$7',
    category: 'jewelry',
    categoryLabel: 'Jewelry',
    image: 'assets/products/heart-pendant-necklace.jpg',
    description: 'A warm-toned heart pendant on a simple cord necklace for gifting or everyday wear.',
    tag: 'Jewelry',
    position: '50% 55%',
  },
  {
    id: 'spiral-gemstone-pendant-necklace',
    name: 'Spiral Gemstone Pendant Necklace',
    price: '$7',
    category: 'jewelry',
    categoryLabel: 'Jewelry',
    image: 'assets/products/spiral-gemstone-pendant-necklace.jpg',
    description: 'A gemstone pendant with copper-toned spiral detail on a simple black cord.',
    tag: 'Jewelry',
    position: '50% 62%',
  },
  {
    id: 'crescent-moon-necklace',
    name: 'Crescent Moon Necklace',
    price: '$7',
    category: 'jewelry',
    categoryLabel: 'Jewelry',
    image: 'assets/products/crescent-moon-necklace2.jpg',
    description: 'A crescent moon pendant with an antique-inspired finish on a dark chain.',
    tag: 'Jewelry',
    position: '50% 62%',
  },
  {
    id: 'halloween-witch-hat-necklace',
    name: 'Halloween Witch Hat Necklace',
    price: '$7',
    category: 'jewelry',
    categoryLabel: 'Jewelry',
    image: 'assets/products/halloween-witch-hat-necklace.jpg',
    description: 'A playful witch hat charm necklace made for spooky season and Halloween gifting.',
    tag: 'Seasonal',
    position: '50% 70%',
  },
  {
    id: 'halloween-pumpkin-necklace',
    name: 'Halloween Pumpkin Necklace',
    price: '$7',
    category: 'jewelry',
    categoryLabel: 'Jewelry',
    image: 'assets/products/halloween-pumpkin-necklace.jpg',
    description: 'A cheerful jack-o’-lantern charm necklace for a little seasonal fun.',
    tag: 'Seasonal',
    position: '50% 70%',
  },
  {
    id: 'pentacle-necklace',
    name: 'Pentacle Necklace',
    price: '$7',
    category: 'jewelry',
    categoryLabel: 'Jewelry',
    image: 'assets/products/pentacle-necklace.jpg',
    description: 'A silver-toned pentacle pendant paired with a simple black cord necklace.',
    tag: 'Jewelry',
    position: '50% 68%',
  },
  {
    id: 'pain-relief-massage-oil',
    name: 'Pain Relief Massage Oil',
    price: '$10',
    category: 'bath-body',
    categoryLabel: 'Bath + Body',
    image: 'assets/products/pain-relief-massage-oil.jpg',
    description: 'A botanical massage oil blend with peppermint, eucalyptus, lavender, and tea tree oils.',
    tag: 'Massage',
    position: '50% 48%',
  },
  {
    id: 'coffee-wax-melts',
    name: 'Coffee Wax Melts',
    price: '$4',
    category: 'gifts',
    categoryLabel: 'Gifts + Extras',
    image: 'assets/products/coffee-wax-melts.jpg',
    description: 'Coffee-inspired wax melts for adding a cozy little fragrance moment at home.',
    tag: 'Home Fragrance',
    position: '50% 52%',
  },
];

const productGrid = document.querySelector('#product-grid');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const searchInput = document.querySelector('#product-search');
const resultsCount = document.querySelector('[data-results-count]');
const emptyState = document.querySelector('[data-empty]');
const resetButton = document.querySelector('[data-reset-filters]');
const bag = document.querySelector('[data-order-bag]');
const bagItems = document.querySelector('[data-bag-items]');
const bagEmpty = document.querySelector('[data-bag-empty]');
const bagActions = document.querySelector('[data-bag-actions]');
const bagCountNodes = [...document.querySelectorAll('[data-bag-count]')];

let activeFilter = new URLSearchParams(window.location.search).get('category') || 'all';
let query = '';
let orderBag = {};
try {
  orderBag = JSON.parse(localStorage.getItem('moonMossOrderBag') || '{}');
} catch {
  orderBag = {};
}

if (!filterButtons.some((button) => button.dataset.filter === activeFilter)) {
  activeFilter = 'all';
}

const saveBag = () => localStorage.setItem('moonMossOrderBag', JSON.stringify(orderBag));

const productCard = (product) => `
  <article class="shop-product-card reveal visible" data-product-id="${product.id}">
    <div class="shop-product-card__media">
      <img src="${product.image}" alt="${product.name}" loading="lazy" style="object-position:${product.position || 'center'}" />
      <span class="shop-product-card__tag">${product.tag}</span>
      <button class="shop-product-card__add" type="button" data-add-product="${product.id}" aria-label="Add ${product.name} to order bag">
        <span aria-hidden="true">＋</span>
      </button>
    </div>
    <div class="shop-product-card__copy">
      <p>${product.categoryLabel}</p>
      <h3>${product.name}</h3>
      ${product.price ? `<strong class="shop-product-card__price">${product.price}</strong>` : ''}
      <span>${product.description}</span>
      <button class="shop-product-card__button" type="button" data-add-product="${product.id}">
        Add to order bag <span aria-hidden="true">→</span>
      </button>
    </div>
  </article>
`;

function renderProducts() {
  const normalized = query.trim().toLowerCase();
  const visible = products.filter((product) => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const haystack = `${product.name} ${product.categoryLabel} ${product.description} ${product.tag}`.toLowerCase();
    return matchesCategory && (!normalized || haystack.includes(normalized));
  });

  productGrid.innerHTML = visible.map(productCard).join('');
  resultsCount.textContent = `${visible.length} ${visible.length === 1 ? 'product' : 'products'}`;
  emptyState.hidden = visible.length !== 0;

  document.querySelectorAll('[data-add-product]').forEach((button) => {
    button.addEventListener('click', () => addToBag(button.dataset.addProduct));
  });
}

function updateFilters() {
  filterButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.filter === activeFilter);
    button.setAttribute('aria-pressed', String(button.dataset.filter === activeFilter));
  });
}

function addToBag(id) {
  orderBag[id] = (orderBag[id] || 0) + 1;
  saveBag();
  renderBag();
  const button = document.querySelector(`[data-product-id="${id}"] .shop-product-card__button`);
  if (button) {
    const original = button.innerHTML;
    button.innerHTML = 'Added ♡';
    button.classList.add('is-added');
    setTimeout(() => {
      button.innerHTML = original;
      button.classList.remove('is-added');
    }, 900);
  }
}

function changeQuantity(id, delta) {
  orderBag[id] = Math.max(0, (orderBag[id] || 0) + delta);
  if (!orderBag[id]) delete orderBag[id];
  saveBag();
  renderBag();
}

function renderBag() {
  const entries = Object.entries(orderBag).filter(([, qty]) => qty > 0);
  const total = entries.reduce((sum, [, qty]) => sum + qty, 0);
  bagCountNodes.forEach((node) => { node.textContent = total; });
  bagEmpty.hidden = entries.length > 0;
  bagActions.hidden = entries.length === 0;

  bagItems.innerHTML = entries.map(([id, qty]) => {
    const product = products.find((item) => item.id === id);
    if (!product) return '';
    return `
      <div class="order-bag-item">
        <img src="${product.image}" alt="" />
        <div>
          <span>${product.categoryLabel}</span>
          <strong>${product.name}</strong>
${product.price ? `<small class="order-bag-item__price">${product.price} each</small>` : ''}
<div class="order-bag-item__qty" aria-label="Quantity for ${product.name}">
            <button type="button" data-bag-minus="${id}" aria-label="Remove one ${product.name}">−</button>
            <b>${qty}</b>
            <button type="button" data-bag-plus="${id}" aria-label="Add one ${product.name}">＋</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('[data-bag-minus]').forEach((button) => {
    button.addEventListener('click', () => changeQuantity(button.dataset.bagMinus, -1));
  });
  document.querySelectorAll('[data-bag-plus]').forEach((button) => {
    button.addEventListener('click', () => changeQuantity(button.dataset.bagPlus, 1));
  });
}

function openBag() {
  bag.classList.add('is-open');
  bag.setAttribute('aria-hidden', 'false');
  document.body.classList.add('bag-open');
  requestAnimationFrame(() => document.querySelector('.order-bag__close')?.focus());
}

function closeBag() {
  bag.classList.remove('is-open');
  bag.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('bag-open');
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    const url = new URL(window.location.href);
    if (activeFilter === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', activeFilter);
    window.history.replaceState({}, '', url);
    updateFilters();
    renderProducts();
  });
});

searchInput?.addEventListener('input', (event) => {
  query = event.target.value;
  renderProducts();
});

resetButton?.addEventListener('click', () => {
  activeFilter = 'all';
  query = '';
  searchInput.value = '';
  updateFilters();
  renderProducts();
});

document.querySelectorAll('[data-open-bag]').forEach((button) => button.addEventListener('click', openBag));
document.querySelectorAll('[data-close-bag]').forEach((button) => button.addEventListener('click', closeBag));
document.querySelector('[data-clear-bag]')?.addEventListener('click', () => {
  orderBag = {};
  saveBag();
  renderBag();
});

document.querySelector('[data-email-order]')?.addEventListener('click', () => {
  window.location.href = 'request.html';
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && bag.classList.contains('is-open')) closeBag();
});

updateFilters();
renderProducts();
renderBag();
