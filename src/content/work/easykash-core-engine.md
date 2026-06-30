---
title: "Building the Core Easykash Engine"
slug: "easykash-core-engine"
dimension: "Build"
company: "Easykash"
companyContext: "Egyptian fintech · SaaS payments for SMEs · idea → certified gateway, 15,000+ merchants, ~1B EGP"
role: "Technical Product Manager & Delivery Manager · Minority Partner"
hook: "A friction-stripping product thesis — no-account buyer checkout, one creation flow across every product type — that scaled to 15,000+ merchants and ~1B EGP in volume."
metric: "15,000+ merchants · ~1B EGP processed"
demonstrates: "Foundational product judgment"
order: 1
summary:
  - label: "Scope"
    value: "The product / payment-link / template engine — the seller creation and buyer payment experiences"
  - label: "Two bets"
    value: "(1) No-account buyer checkout; (2) one simple creation flow across many complex product types"
  - label: "The craft"
    value: "A unified product-type model: identical first step and shared flow, isolating each type's complexity to a single final step"
  - label: "Result"
    value: "15,000+ merchants, ~1B EGP processed; an extensible foundation that scaled without re-architecting"
---

## Summary

The core Easykash engine lets sellers create products and payment links — invoices, subscriptions, events and tickets, reservations — and lets buyers pay seamlessly. I built it on one deliberate thesis: **strip friction from both sides of the payment.** Buyers pay with no account at all; sellers create genuinely different product types through one near-identical flow. Both bets ran against what the market and prior products were doing — and both held as Easykash scaled to 15,000+ merchants and ~1B EGP in volume.

## The challenge

The whole product came down to two experiences: a seller creating something to sell, and a buyer paying for it. Get the friction out of both and the platform works; leave it in and no later feature fixes it. But "simple" is the most expensive thing to build well — especially here, where buyers were cautious in an early, skeptical payments market, and sellers needed real range: invoices *and* subscriptions *and* events-with-tickets *and* reservations, each with different fields, logic, and rules. Prior products and competitors handled that range with complex, intimidating setup.

So the real question wasn't "build a payments platform." It was: can simplicity itself be the product — on *both* sides — without sacrificing the range sellers actually need?

## The two bets

**Bet 1 — No-account buyer checkout.** When this was essentially unheard of, I bet a buyer should *just pay*: a simple static form (name, email, phone) plus the payment. The seller shares a link, the buyer clicks, pays, done.

**Bet 2 — One creation flow across every product type.** Against a landscape of complex setup, I bet that creating *any* product type — however different underneath — should feel simple and consistent to the seller.

Same principle, applied at the two highest-leverage points in the product.

## Why the no-account bet wasn't a gamble

No-account checkout usually costs you buyer trust, fraud exposure, and history to fall back on. It worked here because of a market insight, not nerve. The missing link in Egypt wasn't *trust* between buyer and seller — it was *payment facilitation*: high internet penetration, low banking penetration. And Easykash worked with already-existing SMEs that had already-existing customers. We weren't asking a skeptical buyer to trust a stranger; we were removing friction from a transaction they already wanted, with a seller they already knew. The simplicity was the correct response to the market, not a reckless one.

## The craft: making many complex product types feel like one

This is where the seller-side bet was won, and the solution was simple by design. Every product type shares an identical *basic-information* structure — name, expiry date, payment options, who absorbs the fees, and so on — so **the first setup step and the whole flow are the same for every product; only the final step is unique to the type.** A seller learns the flow once and it transfers to everything they'll ever create; the genuine differences are isolated to one place instead of contaminating the experience.

On top of that, a **"Copy from another product"** feature let sellers base a new product on an existing one and change only the differences — collapsing creation from a task into a tweak. Simplicity here wasn't a vibe; it was engineered through deliberate choices about what to standardize and what to isolate.

## Built to last

Because this was a foundation, not a stopgap, the product-type model was the decision I most needed to get right long-term — so I designed it to be **extensible**: new product types slot into the same unified model and shared flow without re-architecting. That up-front investment is why every product type added since just fits, and why the foundation never became the bottleneck as the platform grew.

## The results

- **The bets held at scale** — 15,000+ merchants and ~1B EGP in processed volume validated friction-stripping on both sides.
- **A consistent, learn-it-once seller experience** across a growing catalog of product types.
- **A buyer experience reduced to its essence** — click, pay, done — matched precisely to the market.
- **A foundation that didn't need rebuilding** as the product expanded.

## What I'd take with me

- **Simplicity is engineered, not wished for** — standardize the shared parts, isolate the differences.
- **De-risk bold bets with market insight, not just caution** — the trust was already there; we just removed the friction.
- **Build the foundation for the product you don't have yet** — extensibility cost more up front and saved years of rework.
- **A coherent thesis beats a pile of features** — "strip friction from both sides" made every decision reinforce the others.
