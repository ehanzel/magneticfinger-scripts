/* Cart reminder: when a visitor comes back (30+ min since their last page view) and still has
   items in their Webflow cart, show a small note bottom-left with a "View cart" button.
   Shows at most once a day. Never on checkout/confirmation pages. Add ?mfcr=test to any URL to force it. */
(function () {
  if (window.__mfcr) return; window.__mfcr = 1;
  var AWAY = 30 * 60 * 1000, ONCE = 24 * 60 * 60 * 1000, K_LAST = "mfcr_last", K_SHOWN = "mfcr_shown";
  var path = location.pathname, force = /[?&]mfcr=test\b/.test(location.search);
  if (/^\/(checkout|paypal-checkout|order-confirmation)/.test(path)) return;
  var now = Date.now(), last = 0, shown = 0;
  try { last = +localStorage.getItem(K_LAST) || 0; shown = +localStorage.getItem(K_SHOWN) || 0; localStorage.setItem(K_LAST, now); } catch (e) { return; }
  var returning = last && now - last > AWAY;
  if (!force && (!returning || now - shown < ONCE)) return;
  var tries = 0;
  function names() {
    return [].map.call(document.querySelectorAll(".w-commerce-commercecartproductname"), function (e) { return e.textContent.trim(); }).filter(Boolean);
  }
  function wait() {
    var n = names();
    if (n.length) return show(n);
    if (++tries < 40) setTimeout(wait, 150);
  }
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
  function track(ev) { try { (window.dataLayer = window.dataLayer || []).push({ event: ev }); } catch (e) {} }
  function show(n) {
    try { localStorage.setItem(K_SHOWN, now); } catch (e) {}
    var st = document.createElement("style");
    st.textContent = "#mfcr{position:fixed;left:20px;bottom:20px;z-index:2147482990;width:300px;max-width:calc(100vw - 120px);background:#fff;border:2px solid #000;border-radius:10px;box-shadow:0 8px 28px rgba(0,0,0,.25);padding:14px 16px;font:14px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111;opacity:0;transform:translateY(12px);transition:opacity .35s,transform .35s}" +
      "#mfcr.on{opacity:1;transform:none}#mfcr b.t{display:block;font-size:15px;margin:0 22px 4px 0}#mfcr .x{position:absolute;top:6px;right:8px;background:none;border:0;font-size:20px;line-height:1;cursor:pointer;color:#555;padding:4px}" +
      "#mfcr .go{display:block;width:100%;margin-top:10px;background:#ec6d24;color:#fff;border:0;border-radius:6px;padding:10px;font:600 14px/1 inherit;cursor:pointer}#mfcr .go:hover{background:#000}" +
      "@media(max-width:480px){#mfcr{left:12px;bottom:14px;padding:12px 14px}}";
    document.head.appendChild(st);
    var more = n.length > 1 ? " and " + (n.length - 1) + " more item" + (n.length > 2 ? "s" : "") : "";
    var w = document.createElement("div");
    w.id = "mfcr"; w.setAttribute("role", "status");
    w.innerHTML = '<button class="x" aria-label="Dismiss">&times;</button><b class="t">Still thinking it over?</b>You left <b>' + esc(n[0]) + "</b>" + esc(more) + ' in your cart.<button class="go" type="button">View my cart</button>';
    document.body.appendChild(w);
    setTimeout(function () { w.classList.add("on"); }, 50);
    track("mfcr_shown");
    function close() { w.classList.remove("on"); setTimeout(function () { w.remove(); }, 400); }
    w.querySelector(".x").onclick = function () { close(); track("mfcr_dismiss"); };
    w.querySelector(".go").onclick = function () {
      close(); track("mfcr_view_cart");
      var o = document.querySelector(".w-commerce-commercecartopenlink");
      if (o) o.click(); else location.href = "/checkout";
    };
    setTimeout(close, 20000);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wait); else wait();
})();
