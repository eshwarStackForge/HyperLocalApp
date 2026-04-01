# HyperLocal Swiggy-style Clone (No Delivery)

A lightweight Swiggy-inspired interface focused on three roles:

- Customer
- Partner (restaurant/business owner)
- Inventory Manager

> Delivery-partner and live delivery-tracking workflows are intentionally excluded.

## Features

- Swiggy-like landing hero and role navigation
- Customer module: discovery, menu/cart, pickup-ready order status
- Partner module: onboarding, catalog management, order preparation queue
- Inventory manager module: stock ledger, reorder thresholds, usage analytics
- Responsive static UI with role-based tab switching

## Run locally

Since this is a static app, open `index.html` directly in a browser.

Or serve with Python:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
