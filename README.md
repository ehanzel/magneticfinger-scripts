# Magnetic Finger – site scripts

Custom code for the Magnetic Finger Webflow site (magneticfinger.com). Webflow loads these files from this repo through jsDelivr.

**This repo is public. Never put passwords, API keys, or other secrets in it.**

## Files

| File | What it does | Where it runs |
|---|---|---|
| `chatbot/chatbot.js` | "Need a hand?" chat helper (product picker, sizing, shipping, wholesale/private label) | Every page |
| `popups/free-shipping-popup.js` | "Want free shipping?" prompt when the cart is under $50 and has no multipack | Every page (cart) |
| `popups/checkout-shipping-note.js` | Free-shipping note under the discount box on checkout | Checkout page |
| `custom-code/site-head.html` | Copy of the site-wide **Head** custom code box (GTM, Meta Pixel, etc.). Reference/backup only. | — |
| `custom-code/site-footer.html` | Copy of the site-wide **Footer** custom code box. Reference/backup only. | — |

## How the site loads a file

Each script is added in Webflow as a *hosted script* pointing at a jsDelivr URL pinned to a release tag:

```
https://cdn.jsdelivr.net/gh/<owner>/magneticfinger-scripts@v1.3.0/chatbot/chatbot.js
```

## Making a change

1. Edit the file and commit.
2. Create a new tag/release (e.g. `v1.3.1`).
3. Point the **test** site at the new tag, publish, and check it.
4. Point the **live** site at the same tag and publish.

Because each site is pinned to a tag, editing the repo never changes the live site until you update the tag in Webflow.

## Version history

- **v1.3.0**: Chatbot v1.3 (size calculator, private label flow). Free-shipping popup v1.0.4, checkout note v1.0.3.
