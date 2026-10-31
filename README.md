# Magnetic Finger – site scripts

Custom code for the Magnetic Finger Webflow site (magneticfinger.com). Webflow loads these files from this repo through jsDelivr.

**This repo is public. Never put passwords, API keys, or other secrets in it.**

## Files

| File | What it does | Where it runs |
|---|---|---|
| `loader.js` | The only script registered in Webflow (as "MFAsyncLoader"). Loads the chatbot and free-shipping popup **async** from jsDelivr, pinned to a commit, with integrity hashes, so they never slow down the page or the store. | Every page |
| `chatbot/chatbot.js` | "Need a hand?" chat helper (product picker, sizing, shipping, wholesale/private label) | Every page |
| `popups/free-shipping-popup.js` | "Want free shipping?" prompt when the cart is under $50 and has no multipack | Every page (cart) |
| `popups/cart-reminder.js` | "Still thinking it over? You left X in your cart" note, bottom-left, for visitors who come back after 30+ minutes with items still in their cart. At most once a day; never on checkout/confirmation pages. Add `?mfcr=test` to any URL to force it. | Every page (via loader) |
| `custom-code/checkout-head.html` | Copy of the checkout page's **Head** code: shows "Calculating your total…" instead of Webflow's $0.00 placeholder while the order summary loads. | Checkout page |
| `popups/checkout-shipping-note.js` | Free-shipping note under the discount box on checkout | Checkout page |
| `custom-code/site-head.html` | Copy of the site-wide **Head** custom code box (GTM, Meta Pixel, etc.). Reference/backup only. | — |
| `custom-code/site-footer.html` | Copy of the site-wide **Footer** custom code box. Reference/backup only. | — |

## How the site loads files

Webflow runs `loader.js`, which adds the other files from jsDelivr, pinned to an exact commit:

```
https://cdn.jsdelivr.net/gh/ehanzel/magneticfinger-scripts@<commit>/chatbot/chatbot.js
```

Each file also has a `sha384` integrity hash in the loader; if the file doesn't match, the browser refuses to run it.

## Making a change

1. Edit the file and commit/push.
2. Update `loader.js` with the new commit ID and the file's new integrity hash.
3. Register the new loader version in Webflow, publish to staging (magneticfinger.webflow.io) and check it.
4. Publish to the live domains.

Because the site is pinned to a commit, editing the repo never changes the live site until the loader is updated in Webflow.

`checkout-shipping-note.js` is a copy for reference; it is still registered directly in Webflow.

## Version history

- **v1.3.0**: Chatbot v1.3 (size calculator, private label flow). Free-shipping popup v1.0.4, checkout note v1.0.3.
- **Loader 1.1.0** (Oct 31): loads chatbot, free-shipping popup and cart reminder async, pinned to commit 7850a0e.
