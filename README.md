# Moon and Moss Apothecary

Responsive static small-business site with a dedicated product catalog and lightweight order-request workflow.

## Preview locally

```bash
python3 -m http.server 8080
```

Then open:
- Home: `http://localhost:8080/`
- Shop: `http://localhost:8080/shop.html`

## Shop features
- Dedicated `shop.html` catalog
- Category filters + product search
- 14 newly added products with descriptive image filenames
- Responsive product cards
- Persistent order bag using `localStorage`
- Quantity controls
- Mobile-friendly floating order-bag button
- Prefilled email order request (no payment/checkout is implied)
- Homepage shop cards now deep-link into matching shop categories

## Product images
- Web-ready images: `assets/products/*.webp`
- Full-resolution source photos: `assets/product-source/*.jpg`

## Before launch
1. Replace `ORDER_EMAIL` at the top of `shop.js` with the client's real order email.
2. Add prices if/when the client confirms them. The current catalog intentionally does **not** invent prices.
3. Confirm exact product availability and any final product names/descriptions with the client.
4. Update upcoming market cards in `index.html`.
5. Add real social URLs in the footer/top bar.

## Hosting
No build step is required. This can deploy directly to Cloudflare Pages, Netlify, Vercel, or any standard static host.
