(function () {
if (window.__mfbLoaded) return;
window.__mfbLoaded = true;
var P = {
orig: { n: "The Original Magnetic Finger", p: "$12.95", u: "/product/the-original-magnetic-finger", d: "Our first patented glove. Magnet sits at the tip so you can hold a screw or nut and work it with your thumb and middle finger. Best all-rounder for tight spots." },
fa: { n: "Frontal Assault", p: "$12.95", u: "/product/frontal-assault", d: "Magnet sits right on the front of the fingertip, so you can push a part straight ahead into a deep or narrow spot." },
hw: { n: "Heavyweight", p: "$13.95", u: "/product/heavy-weight", d: "Stronger magnet plus an end cap that keeps the glove from shifting. Made for cylinder head bolts, lug nuts and diesel or tractor work." },
mech: { n: "Mechanic's Pack", p: "$29.95", u: "/product/mechanics-pack", d: "Original + Frontal Assault + Heavyweight." },
handy: { n: "Handyman's Pack", p: "$34.95", u: "/product/handymans-pack", d: "Original + Frontal Assault + Lightweight + Heavyweight." },
full: { n: "Full House", p: "$44.95", u: "/product/full-house", d: "All four fingers plus the Magnetic Finger Glove (a thin full glove with a magnet in each index fingertip)." }
};
var PHOTO = "data:image/webp;base64,UklGRsYMAABXRUJQVlA4ILoMAABwOgCdASqQAJAAPpU+mEkloyImKxrcgMASiUAaCZTa3ZWd68Akje4H6F9vHz2nnC765vK/+OoJW5tMgOK7LvbfNjBysnFWGNH8b/1l+03wEdJr0iEBDwcFSE92ZOavo6LW23U3wrC1JKNrqL86qpw2+/WykIjUP4VCUUYVDRnRD+Xf93SFXU6qggc3/4UvQ4XA+tRMTYxgUsPw9h76VLIQyRIyXk/UbrKLHU0Skaqsjxg2JHkHAJNf5D356/k9uSNPWd/5q6sCS1CBL/iw7bTYxQzvD9PJ2k3peJVDJiBgT+fsk++RG04ssSsLoFYT0aUQRdLY16jqYfWV1iCB4Cy3xv4qiZWIzAcfjtX4XkUcvgjIi55jMRSwcRj+/uxRPVCsVCT+UZe0T9Ubkbv6VGO32W2CgWPfCNY8VcZx5HvIii5CMLarVYz6ZiZuVHZsPCXs3z31tRSLsTuG68DMoEnD5ktGYAIb9mH8JZVu7CXQLfZd3MC/5d079YQM0VYbpxJUI0fihtlYQHwb5rRGeUShRR33itgg0ah4mHt9q3pATd3dSgOAEx0EWCnpgpbZFqEeBVJtcQhhNDedlz+aFFjdxUZw+g0mS5UfPqPlDstSanGm5xVmLJdCM9g14AD+/P/GLk/wUe11YtNsCTUHsNjxTpAPPjlOV/u9zHtIE2MaT+4FCoUhw3MB4AerBVmxIErBzDwPl3Az9s1ntLH/51iAxUbYuYvTpDI1+kH6u8hJdrCsF2qDVPO0VaCU2//W9ksvkVY5LzFJqy+OAJQvgiLktw1mQzN4Y6htQDcOCfBvshd9Are5wV7kkoLu62NZepxJ20dqqyXNmfsCP28Q2GMiGMZQWDkM98R22EaguNN0oz4uh9RRyghl8FqXDOrgtlJDA+6ZCikWOsTLsM4xdM2KRpKtlgrK3iSZYbdlLZLK+vi5UNOiMCMLOCZzgfhyLkgscdliTkLUqw39EjGKyf4U+DS+pid62aeANY1Hmy38HcQijIux8a6S0ykgERhsfZGMD2mcXAGHHaVed8oyN2IMNh9+/OGiHsG3GAY6bosbrrWMedheDs4Hr0BrcfneFALVdjoDZpMouJ2G/hDzoO4MrCsCObTVU/w0m3NoczoeBimgjLMKuhwFw4IHqwr8p69Fu/AgAffmReNBW/8dhe7F+THH6HaTWV8cWFD5xtJuqQBSBzFN4NCvuZqpKRzmVzJuJBXfLSNCWWffDTyypx2R7KdE9/hrWnC5AduTS3vgBbaN2zGZjaH3H7QXXzXFG2hdB1QSpjIt+a6YbvG3tttlyHcr2+olEXnuMNBJ/FEejFP0EGjS/gDZXVRj6OZlOBPntZS0babEPfay9JRFCdGjWqmEd8rs10XuT2AMX7tQLIfL04ZdMgbu+xBZbklG+Kp7GAjwAocAlPzXQD9oa+uqgRN5eUsc3WYNUV+0CPLLa3/qDlIilxu5wt9wnNAPP7p7I0UgoqH/E2/HDfALtpRJJsiUq1a90EfHc0b7Q/q2PBgXpdeep1giNSvPufqmhDVoVEBkAYw6OWE+eoKrmSxbaAlnMV61s0RuciquoFeSfhCNKPS822ndpwGpqzRU+cXvGzRPD84oxFpOD0nK3trLLffBfEy6+gALrMW0grmGtArRpF0MjlrClw2G/l/az9lw83iCKVXBKCmnV/ynvIQCczA1SVs93aJbEw+im058aH6GaeTcook6yo/1UAOVC93kBLCSuD7JJVf51dP/L+AKQ5001bewaVSoDgAQahtynRRyW2Hx8/GPvdfbKxKLb1vJKKqSqW2jQCFt1Ou70FOeazQYLbGGfIimx7E0Tyrp7LkvgRkgB1hrrrv9pD1cJSXitefLP6iaZHnO8Hn0Ja8FeA2cS88HjEP2sJzLBmZa97PFmYWcgvBZQo29OJspfN1bSx0ar57JTlOH8n1o8/z7ksUUWfpT++yBeapBPltmAzbpKpx0I0JKoLy0zNt1nVeuk+XqL0ijrNN/Rzr5XNCUaGQMOPcGu41uIL3mAqUyZuWB1Bg00FAtHHmIIaHGfIfqvmkeL8NT57y2np0aUlCXXFlcKN6pouw1zJr8xnLnH5CJQYMBLkLORSK/fdTXG2AVTdc4rN/0yVqbMa5rRK8/IoEo6mVeFD1xuzcmXDSpGZewDQj1+bT7KcaLUBUh+APsjzpokkJlaqejhZ6p4kfV1S7NTC2eBPWqBHf4TnoWs9QYKtvIr9nogFLIhu3CR9goJ0SR8/sfDMXz9WV2dEqpYPNmcaShgeAczEDqPBYkXJ3v6uFLH3OTib2Lavjn03j3M4FEt1BKrWROqf+jI1q9Lo7jp91AB9VAud4TOC1ZmWRvwACieG2oxu/Dkz8Ixh5Zu9vSS8vppmjNpFotgPzIjQ4G6XLXgp1M8r2EQZawOgLgRO0K8aoSj37bquFdPfrKxwpY6FaCb7bXKMZanPbr6TWYC7VsTTwJxZzuMTE0mwKxlt7gLmS3T9lrZ1XVE57rbTYqplniMERW2hJxZTFQeFto8UchrU4YuV8aa+njafLjnO/wuDmWTSOqbZZd4m2S92AUaxY6r/Tea0ng+ILuqyxgngW+rCPUEhwGI2H4/4RCg1kDQIqqXI3MHM61++TCo2Yhz4pT3gXO7EH9ZG4QTJ1/a4F/C3rv28yYqWglBSVnxFgD7mnwAJoOG0WTcE2cHctmRUaoSADortRElzwaBJHjU95s+oCvttneZR9JDJaGuj/zAcO4UmP5kDJMYTb/6uGsx9ldluhimyGMEtnB1wXGC3Po7eFaQKrU2kQFjYR2fcvo8JQyhe/srnmBsJdWR6NJ9xxNYkzdXjo641ZdlPgg9XmzyHhUK0jDpAISv+XRze+m/Z4TJ5/Orra9NTo0CdCrMluLs/7i1cQP28aiAgeVlDx6DUpoeAdZOlaprxot5l0xvXWOtw0rdp8HQbNIo2KH84cSz7XxSBNzQmvdQtT+F+vmELEqoSFKyrPtdAOi5PROI8cPl4YxWPp9gLJKgMcx+WMROCjszrtmNwBDCoDABga/QH3WDPQUEGTC23d19u1PiFrPLMo9iaRTFx5GnHFfo4u0VQ//uniSgcz1/akBmkd0w2dfELSQQHv1Ds3DU6KvMINXCGI3owYuBUiwC7gWJNkKw5FZV3w2CXNaD6ANtrZW0sNHdnGOnetbTIGp147lJWEU/GEh6zpHZ7NOFrR7YRk741TZiCecruvtL0m7x796E9ouFuhO75oc8lAIFe7P/u5r6R+51GPe0i8V1vitn3ZpObEBTA0Y5ffTePU/9Eo+w3aTWnP9wZ4r1wXHc1xeBMQBzZK5mA2McvW2RnMHFg/mS9zlheMqP9UJEEwklmRGiu+jrK8o7XwW3TE9z3MJP8mgL3bP5tsa7zLe8pT2fQbhtkNMWEy0gffR4X1cWJPSCKNOYTYUv49yWgPNL1jtQktS5KLSeCh+KhMQ6AtY9u8TpGp77H3RQkKJtPzr22ZSJf36AmH78qrN8Hyy9CVRtLHNUVnbgc2a7gQI/Sd7J6rWQn7DK5qHXho8DvTvyOWDywJSJXuy5F0b02UnS+XteLmzaUZtNpjrPOTsUuYuMhn3VsIa7mNSA5sdwQZVIQvGOtyxrwaOtlSzGGa1onQUtvlVE/7IY7met3/7//XS1CDRgLIbZRWA/wp1/BU9Pzo2uxiYu6vN5apdnGsv7kBPOM4c8+g+13qewXkl2TLXaVq27je43lUc8Z9MBciJq+V90WxF4pb9Pt9l9maNOoQxswMrZzuqwoWqRJI5S+0YdTNcKASttenv/FUsuBOVIUrdAx8+lguQxuV4D0Jos4hVcAZKL6NrlSEFOdBoMvC9S8uCKogtudNbJqs7WyNlgx+1ERRNpgUHj9JX6JSMAZdKkYRdDHMxn2ofPI24/Hsaikl5UPlcaQ5fDYyHrMa4/UBHdvM9cf4n9mAhaKLTm8iFgd3L2LkTZQ+ctsA0vUMLJMQtEi0Xs/Revu4G0qIHoJRl08k44OCMT3zER71tzRAlSF6LhnT00mJnO6A+9DHgO8RVEhnX38KIYB0BJw/xZoad5xUj623AXlS263oTYAUsaPDVG5Kt5lvcyZ/w1y62iES+9oikEiUBeNgsglpwUjU6U+Et2DYFR5DyCCDGLwmyWGJB8WMUTxDdnJ2pA5UJYiA80JTed61u5ph6DL0nDiKzVlhXUVIKN3HIIXQnFKVf67ZthGGFuuGYhwoiICAjfzDAonjv1C9UbSGJH7ybGgnGP5ciNd+EktP7qupwTGi1yqU2nlVYWeTmmWe7C8Ee9I0z9z/lur8s7YfyE5rNI9WG7HsNWU/MoxHLxstPM6ZN2MAAAAA=";
var BUBBLE = '<svg class="mfb-bub" viewBox="0 0 32 28"><path d="M5 1h22q4 0 4 4v10q0 4-4 4H14l-6 6v-6H5q-4 0-4-4V5q0-4 4-4z" fill="#fff" stroke="#000" stroke-width="2"/><circle cx="10" cy="10" r="2.2"/><circle cx="16" cy="10" r="2.2"/><circle cx="22" cy="10" r="2.2"/></svg>';
var MAIN = ["Which one is right for me?", "Prices & packs", "How does it work?", "Shipping & returns", "Wholesale / private label", "Contact us"];
// [name, ring lo, ring hi, inch lo, inch hi, mm lo, mm hi, hand profile]
var SZ = [
["Medium", 10, 11, 2.44, 2.56, 62.1, 64.9, "Leaner hands / smaller frame"],
["Large (L)", 12, 12.5, 2.64, 2.69, 67.2, 68.3, "Average mechanic pointer finger"],
["Extra Large (XL)", 13, 13.5, 2.74, 2.80, 69.7, 71.0, "Large, broad hands"],
["Double XL (XXL)", 14, 14.5, 2.85, 2.90, 72.3, 73.6, "Thick, heavily muscled hands"],
["Triple XL (XXXL)", 15, 16, 2.95, 3.05, 74.8, 77.4, "Very large / wide-knuckled hands"]
];
function sizeRow(s) {
return '<div class="mfb-sz"><b>' + s[0] + "</b> &middot; Ring " + s[1] + "&ndash;" + s[2] + "<br>" + s[3].toFixed(2) + "&ndash;" + s[4].toFixed(2) + "\" (" + s[5].toFixed(1) + "&ndash;" + s[6].toFixed(1) + " mm)<br><i>" + s[7] + "</i></div>";
}
function sizeChart() { return '<div class="mfb-card">' + SZ.map(sizeRow).join("") + "</div>"; }
// pick a size from a measurement; idx 1=ring, 4=inches, 6=mm (upper bounds). Between sizes rounds up.
function pickSize(v, idx, unit) {
var lo = SZ[0][idx - 1];
if (v < lo * 0.97) return "That's smaller than our smallest size. Medium fits ring sizes 10&ndash;11 (" + SZ[0][3] + "&ndash;" + SZ[0][4] + "\"). It stretches, but for a snug fit please " + link("/contact", "contact us") + ".";
for (var i = 0; i < SZ.length; i++) if (v <= SZ[i][idx]) return "For " + unit + ", go with <b>" + SZ[i][0] + "</b>." + (i > 0 && v < SZ[i][idx - 1] ? " You're between sizes, so I rounded up to clear the knuckle." : "") + '<div class="mfb-card">' + sizeRow(SZ[i]) + "</div>";
return "That's larger than our biggest size (XXXL, up to ring 16 / 3.05\"). Please " + link("/contact", "contact us") + " and we'll help.";
}
function measureIntent(s) {
var m;
if ((m = s.match(/(\d{2}(?:\.\d+)?)\s*(mm|millimet)/)) && +m[1] >= 45 && +m[1] <= 110) return pickSize(parseFloat(m[1]), 6, m[1] + " mm");
if (((m = s.match(/(\d(?:\.\d+)?)\s*("|inch)/)) || (m = s.match(/(\d\.\d+)\s*in\b/))) && +m[1] >= 1.8 && +m[1] <= 4.5) return pickSize(parseFloat(m[1]), 4, m[1] + "\"");
if ((m = s.match(/(?:ring|size)\D{0,6}(\d{1,2}(?:\.\d+)?)/)) || (m = s.match(/(\d{1,2}(?:\.\d+)?)\s*ring/))) {
var n = parseFloat(m[1]); if (n >= 3 && n <= 20) return pickSize(n, 2, "ring size " + n);
}
return null;
}
function card(k) {
var x = P[k];
return '<div class="mfb-card"><b>' + x.n + '</b> <span class="mfb-price">' + x.p + "</span><br>" + x.d + '<br><a href="' + x.u + '">View product &rarr;</a></div>';
}
function link(u, t) { return '<a href="' + u + '">' + t + "</a>"; }
var R = {
hello: { t: "Hi! I'm the Magnetic Finger helper. I can help you pick the right finger, compare packs, or point you to shipping, returns and support. What can I help with?", q: MAIN },
pick: { t: "Happy to help you choose. What are you mostly working on?", q: ["Screws & nuts in tight spots", "Reaching straight into deep holes", "Heavy bolts / lug nuts / diesel", "Tiny screws, watches, electronics", "A bit of everything"] },
r_orig: { t: "The Original is your best bet:" + "{orig}", q: ["See the packs", "How does it work?", "Something else"] },
r_fa: { t: "Go with the Frontal Assault:" + "{fa}", q: ["See the packs", "Something else"] },
r_hw: { t: "You want the Heavyweight:" + "{hw}" + "Or get it bundled with the Original and Frontal Assault:" + "{mech}", q: ["See the packs", "Something else"] },
r_lw: { t: "The Lightweight has a gentler magnet so tiny parts don't jump around. It comes in these packs:" + "{handy}" + "{full}", q: ["See the packs", "Something else"] },
r_all: { t: "Then a pack is the best value:" + "{mech}" + "{handy}" + "{full}", q: ["Which one is right for me?", "Something else"] },
prices: { t: "Here's the lineup:" + "{orig}" + "{fa}" + "{hw}" + "{mech}" + "{handy}" + "{full}" + "You can also browse everything on the " + link("/products", "Products page") + ".", q: ["Which one is right for me?", "Shipping & returns", "Something else"] },
how: { t: "The Magnetic Finger is a stretchy glove that slips over your index finger with a strong magnet in the tip. Pick up a screw, nut, bolt or nail, then guide it into place without dropping it into the engine bay. It works on ferrous metal (steel and iron). Brass, aluminum, copper and most stainless steel aren't magnetic, so it won't hold those.", q: ["Which one is right for me?", "Prices & packs", "Something else"] },
ship: { t: "All the details are on our policy pages:<br>&bull; " + link("/shipping-policy", "Shipping policy") + " (rates, delivery times, tracking)<br>&bull; " + link("/return-policy", "Return policy") + " (damaged items, refunds, exchanges)<br>Need help with a specific order? " + link("/contact", "Contact us") + ".", q: ["Contact us", "Something else"] },
whole: { t: "We work with businesses two ways:<br>&bull; " + link("/for-retailers", "For Retailers") + ": stock the original patented tool in your store, with several display options.<br>&bull; " + link("/private-labeling", "Private Labeling") + ": put your own branding on the Magnetic Finger.", q: ["Private label details", "Contact us", "Something else"] },
pl: { t: "Yes, we make the Magnetic Finger under your brand. The basics:<br>&bull; <b>Minimum order:</b> 1,000 units<br>&bull; <b>Customizable:</b> almost everything, including your brand name, logo, colors and package artwork<br>&bull; <b>Fixed:</b> the bottom of the finger always says \"Magnetic Finger\" (it's our trademark)<br>&bull; <b>Packaging:</b> a few Magnetic Finger design elements must stay on the package", q: ["What can I customize?", "Packaging requirements", "Minimum order", "Start a private label order"] },
pl_custom: { t: "You can change almost everything to fit your brand: your name and logo, colors, and the package design and wording. The one thing that doesn't change is the bottom of the finger, which keeps the \"Magnetic Finger\" name for trademark purposes. Your packaging also has to keep a few required design elements.", q: ["Packaging requirements", "Minimum order", "Start a private label order"] },
pl_pack: { t: "Your package can carry your brand, colors and artwork, but it must keep these Magnetic Finger design elements:<br>&bull; Finger pictures (the product shown on a finger)<br>&bull; The checkered bar<br>&bull; The \"Magnetic Finger\" print<br>&bull; The patent number<br>&bull; \"Manufactured by Magnetic Finger\"<br>Our team will help you lay it out.", q: ["What can I customize?", "Minimum order", "Start a private label order"] },
pl_moq: { t: "The minimum order for private label is <b>1,000 units</b>. Pricing depends on quantity and customization, so our team will quote you directly.", q: ["What can I customize?", "Packaging requirements", "Start a private label order"] },
pl_start: { t: "Great! Tell us about your brand, the quantity you need (1,000+ units) and any design ideas on the " + link("/private-labeling", "Private Labeling page") + " or our " + link("/contact", "Contact page") + ". Our team will follow up with pricing and artwork guidance.", q: ["Packaging requirements", "Something else"] },
contact: { t: "The fastest way to reach us is the form on our " + link("/contact", "Contact page") + ". We'll get back to you as soon as we can.", q: ["Something else"] },
history: { t: "The Magnetic Finger was invented by a classic car enthusiast who was tired of dropping parts in the garage. It's patented and has been featured on TV, radio and in the press. Read the story on " + link("/the-history", "The History") + " page.", q: ["Which one is right for me?", "Something else"] },
safety: { t: "These are strong magnets. If you have a pacemaker or other implanted medical device, check with your doctor before use. Keep them away from credit cards, phones and other magnet-sensitive items, and away from small children.", q: ["How does it work?", "Something else"] },
fit: { t: "Magnetic Finger sizes follow standard US ring sizes. Measure around the <b>widest part of your knuckle</b> on the pointer finger of the hand you'll use it on:" + "{sizes}" + "Between sizes? Go with the larger one so it slides over your knuckle. You can also type your ring size or measurement (like \"ring size 12\" or \"68 mm\") and I'll pick the size for you.", q: ["How do I measure?", "Which one is right for me?", "Something else"] },
measure: { t: "Quick way to measure:<br>1. Use the pointer finger on the hand you'll wear it on. On your dominant hand it's usually bigger.<br>2. Wrap a strip of paper or string around the <b>widest part of the knuckle</b>, not the base of the finger.<br>3. Mark where it overlaps, lay it flat and measure in inches or mm.<br>4. Type the number here and I'll match your size. If you already know your ring size, just type that.", q: ["Show the size chart", "Something else"] },
discount: { t: "We sometimes run partner offers with special codes. Any current deal will be shown on the site or at checkout. For other questions about pricing, " + link("/contact", "contact us") + ".", q: ["Prices & packs", "Something else"] },
thanks: { t: "You're welcome! Anything else?", q: MAIN },
more: { t: "Sure, what else can I help with?", q: MAIN },
fallback: { t: "I'm not sure I got that. I can help with choosing a finger, prices, how it works, shipping and returns, or wholesale. For anything else, our team can help via the " + link("/contact", "Contact page") + ".", q: MAIN }
};
var BTN = {
"which one is right for me?": "pick", "prices & packs": "prices", "see the packs": "prices", "how does it work?": "how",
"shipping & returns": "ship", "wholesale / private label": "whole", "contact us": "contact", "something else": "more",
"screws & nuts in tight spots": "r_orig", "reaching straight into deep holes": "r_fa", "heavy bolts / lug nuts / diesel": "r_hw",
"tiny screws, watches, electronics": "r_lw", "a bit of everything": "r_all",
"private label details": "pl", "what can i customize?": "pl_custom", "packaging requirements": "pl_pack", "minimum order": "pl_moq", "start a private label order": "pl_start",
"how do i measure?": "measure", "show the size chart": "fit"
};
var KW = [
["thank", "thanks"],
["minimum|moq|min order|how many units|1,?000", "pl_moq"],
["packag|artwork|design rule|requirement", "pl_pack"],
["customi[sz]|custom (logo|color|colour|design|brand|print)|logo|my brand|our brand|own brand|rebrand|co-?brand|change the|personaliz", "pl_custom"],
["private label|white label|privat", "pl"],
["my order|order status|where is my|track", "ship"], ["pacemaker|safe|danger|child|kid|credit card", "safety"],
["lug|diesel|tractor|heavy|cylinder|big bolt", "r_hw"], ["watch|tiny|small screw|electronic|battery|washer|delicate|lightweight|light weight", "r_lw"],
["frontal|straight|deep hole|forward", "r_fa"],
["which|recommend|best|choose|right for|difference|compare|should i", "pick"],
["ship|deliver|track|arriv", "ship"], ["return|refund|exchange|damag|broken|cancel", "ship"],
["wholesale|retail|store|distribut|bulk|brand", "whole"],
["code|coupon|discount|promo|sale|deal", "discount"],
["price|cost|how much|\\$|pack|bundle|buy|order|shop|full house|mechanic|handyman", "prices"],
["size|fit|hand|left|right|stretch|glove|knuckle|ring|too (big|small|tight|loose)", "fit"],
["how.*work|what is|stainless|alumin|brass|copper|metal|magnet|strong", "how"],
["history|invent|founder|patent|tv|story", "history"],
["contact|email|phone|call|human|person|support|service|help", "contact"],
["original", "r_orig"], ["^(hi|hey|hello|yo|sup)\\b", "hello"]
];
function intent(s) {
s = s.toLowerCase().trim();
if (BTN[s]) return BTN[s];
var ms = measureIntent(s);
if (ms) { R.sizecalc = { t: ms, q: ["Show the size chart", "Something else"] }; return "sizecalc"; }
for (var i = 0; i < KW.length; i++) if (new RegExp(KW[i][0]).test(s)) return KW[i][1];
return "fallback";
}
var css = "#mfb-btn{position:fixed;right:20px;bottom:18px;width:76px;height:76px;padding:0;margin:0;background:none;border:0;cursor:pointer;z-index:2147483000;transition:transform .2s}" +
".mfb-ph{display:block;border-radius:50%;background:#111 url(" + PHOTO + ") center/cover no-repeat}" +
"#mfb-btn .mfb-ph{width:100%;height:100%;box-sizing:border-box;border:3px solid #F5A01E;box-shadow:0 4px 16px rgba(0,0,0,.4)}" +
"#mfb-btn .mfb-bub{position:absolute;top:-8px;right:-8px;width:30px;height:27px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.3))}" +
"#mfb-btn:hover,#mfb-btn:focus-visible{animation:mfb-wig .6s ease-in-out}" +
"@keyframes mfb-wig{0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}50%{transform:rotate(6deg)}75%{transform:rotate(-3deg)}}" +
"#mfb-tip{position:fixed;right:108px;bottom:40px;background:#000;color:#fff;font:600 14px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;padding:10px 14px;border-radius:18px;box-shadow:0 4px 14px rgba(0,0,0,.3);z-index:2147483000;cursor:pointer;opacity:0;transform:translateX(8px);transition:opacity .3s,transform .3s;pointer-events:none}" +
"#mfb-tip.mfb-show{opacity:1;transform:none;pointer-events:auto}" +
".mfb-av{width:42px;height:42px;flex:none;border:2px solid #F5A01E;box-sizing:border-box}" +
"#mfb-win{position:fixed;right:20px;bottom:108px;width:370px;max-width:calc(100vw - 24px);height:540px;max-height:calc(100dvh - 130px);background:#fff;border-radius:14px;box-shadow:0 10px 40px rgba(0,0,0,.3);z-index:2147483000;display:none;flex-direction:column;overflow:hidden;font:15px/1.45 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111}" +
"#mfb-win.mfb-open{display:flex}" +
".mfb-head{background:#000;color:#fff;padding:12px 16px;display:flex;align-items:center;gap:10px;background-image:linear-gradient(45deg,#1c1c1c 25%,transparent 25%),linear-gradient(-45deg,#1c1c1c 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#1c1c1c 75%),linear-gradient(-45deg,transparent 75%,#1c1c1c 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0}" +
".mfb-head b{font-size:16px;letter-spacing:.3px}.mfb-head small{display:block;opacity:.75;font-size:12px}" +
".mfb-x{margin-left:auto;background:none;border:0;color:#fff;font-size:24px;cursor:pointer;line-height:1;padding:4px}" +
".mfb-log{flex:1;overflow-y:auto;padding:14px;background:#f5f5f5;display:flex;flex-direction:column;gap:8px}" +
".mfb-m{max-width:88%;padding:9px 12px;border-radius:12px;word-wrap:break-word}" +
".mfb-bot{background:#fff;border:1px solid #e3e3e3;align-self:flex-start;border-bottom-left-radius:4px}" +
".mfb-me{background:#000;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}" +
".mfb-m a{color:#000;font-weight:600;text-decoration:underline}" +
".mfb-card{border:1px solid #e3e3e3;border-radius:8px;padding:8px 10px;margin:6px 0;background:#fafafa;font-size:14px}.mfb-price{font-weight:700}.mfb-sz{padding:6px 0;border-bottom:1px solid #e3e3e3}.mfb-sz:last-child{border-bottom:0}.mfb-sz i{color:#555}" +
".mfb-q{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-start}" +
".mfb-q button{background:#fff;border:1.5px solid #000;color:#000;border-radius:16px;padding:6px 11px;font-size:13px;cursor:pointer;font-family:inherit}" +
".mfb-q button:hover{background:#000;color:#fff}" +
".mfb-in{display:flex;border-top:1px solid #e3e3e3;background:#fff}" +
".mfb-in input{flex:1;border:0;padding:14px;font-size:15px;outline:none;font-family:inherit;color:#111;background:#fff}" +
".mfb-in button{background:#000;color:#fff;border:0;padding:0 18px;cursor:pointer;font-weight:600;font-family:inherit}" +
".mfb-typing{opacity:.6;font-style:italic}" +
"@media(max-width:480px){#mfb-win{right:12px;left:12px;width:auto;bottom:94px}#mfb-btn{right:14px;bottom:14px;width:66px;height:66px}#mfb-tip{right:94px;bottom:32px}}";
function build() {
var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
var b = document.createElement("button");
b.id = "mfb-btn"; b.setAttribute("aria-label", "Open chat");
b.innerHTML = '<span class="mfb-ph"></span>' + BUBBLE;
var tip = document.createElement("div"); tip.id = "mfb-tip"; tip.textContent = "Need a hand?";
var w = document.createElement("div");
w.id = "mfb-win"; w.setAttribute("role", "dialog"); w.setAttribute("aria-label", "Magnetic Finger chat");
w.innerHTML = '<div class="mfb-head"><span class="mfb-av mfb-ph"></span><div><b>Magnetic Finger</b><small>Ask us anything</small></div><button class="mfb-x" aria-label="Close chat">&times;</button></div><div class="mfb-log" aria-live="polite"></div><form class="mfb-in"><input type="text" placeholder="Type your question..." aria-label="Your message" maxlength="300"><button type="submit">Send</button></form>';
document.body.appendChild(w); document.body.appendChild(b); document.body.appendChild(tip);
tip.onclick = function () { toggle(true); };
setTimeout(function () { if (!started) tip.classList.add("mfb-show"); }, 2500);
setTimeout(function () { tip.classList.remove("mfb-show"); }, 12000);
var log = w.querySelector(".mfb-log"), form = w.querySelector("form"), inp = form.querySelector("input"), started = false;
function scroll() { log.scrollTop = log.scrollHeight; }
function clearQ() { var q = log.querySelectorAll(".mfb-q"); for (var i = 0; i < q.length; i++) q[i].remove(); }
function me(t) { var d = document.createElement("div"); d.className = "mfb-m mfb-me"; d.textContent = t; log.appendChild(d); scroll(); }
function bot(key) {
var r = R[key] || R.fallback;
var ty = document.createElement("div"); ty.className = "mfb-m mfb-bot mfb-typing"; ty.textContent = "typing..."; log.appendChild(ty); scroll();
setTimeout(function () {
ty.remove();
var d = document.createElement("div"); d.className = "mfb-m mfb-bot";
d.innerHTML = r.t.replace(/\{(\w+)\}/g, function (_, k) { return k === "sizes" ? sizeChart() : P[k] ? card(k) : ""; });
log.appendChild(d);
if (r.q && r.q.length) {
var q = document.createElement("div"); q.className = "mfb-q";
r.q.forEach(function (lbl) {
var bb = document.createElement("button"); bb.type = "button"; bb.textContent = lbl;
bb.onclick = function () { send(lbl); }; q.appendChild(bb);
});
log.appendChild(q);
}
log.scrollTop = d.offsetTop - log.offsetTop - 8;
track("mfb_reply", key);
}, 450);
}
function send(t) { t = (t || "").trim(); if (!t) return; clearQ(); me(t); bot(intent(t)); }
function track(ev, v) { try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: ev, mfb_intent: v }); } catch (e) {} }
function toggle(open) {
var o = open === undefined ? !w.classList.contains("mfb-open") : open;
w.classList.toggle("mfb-open", o); tip.classList.remove("mfb-show");
b.setAttribute("aria-label", o ? "Close chat" : "Open chat");
if (o) { if (!started) { started = true; bot("hello"); track("mfb_open", "open"); } setTimeout(function () { inp.focus(); }, 50); }
}
b.onclick = function () { toggle(); };
w.querySelector(".mfb-x").onclick = function () { toggle(false); };
form.onsubmit = function (e) { e.preventDefault(); var v = inp.value; inp.value = ""; send(v); };
document.addEventListener("keydown", function (e) { if (e.key === "Escape" && w.classList.contains("mfb-open")) toggle(false); });
window.MFBot = { open: function () { toggle(true); }, close: function () { toggle(false); }, intent: intent };
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();