---
title: "Building Easykash Gate"
slug: "easykash-gate"
dimension: "Build"
company: "Easykash"
companyContext: "Egyptian fintech · SaaS payments for SMEs · idea → certified gateway, 15,000+ merchants, ~1B EGP"
role: "Technical Product Manager & Delivery Manager · Minority Partner"
hook: "Extracted payments into a dedicated infrastructure layer and shipped it to production during the COVID lockdown — payment issues fell ~70% in three months."
metric: "Payment issues ↓ ~70% in 3 months · ~95% within a year"
demonstrates: "Infrastructure extraction & constraint-driven delivery"
order: 2
summary:
  - label: "Role"
    value: "Owned the product — module organization, provider/payment-option interdependencies, and the from-scratch capabilities (fraud detection, smart routing, provider management)"
  - label: "Constraint"
    value: "Kicked off weeks before the COVID lockdown; went live during it"
  - label: "Stakes"
    value: "Real money and reputation in an early, skeptical market — doing nothing was hurting CSAT; doing it wrong could cost us our place"
  - label: "Result"
    value: "Payment issues ↓ ~70% in 3 months, ~95% within a year; core platform unburdened; Gate now consumed by Easykash as its own provider"
---

## Summary

As Easykash grew, its payment logic outgrew the platform it lived in — straining everything around it and causing reconciliation errors and delayed statuses that were eroding customer trust. I led the decision to extract payments into a dedicated system, **Easykash Gate**, and we shipped it to production *during the COVID-19 lockdown* — a project kicked off mere weeks before everything shut down. On launch day I left home, masked, to run the first live cash transactions myself at a kiosk, because cash-voucher payments can't be tested from a laptop. **Payment issues dropped ~70% within three months and ~95% within the year.**

## The challenge

Easykash launched with a single payment provider and grew from there — and that growth was the problem. As we added providers, the payment modules ballooned until they **strained the non-payment parts of the platform**: load centralized, reconciliation broke, statuses lagged. In a payments product these aren't cosmetic bugs — money not reconciling undermines the one thing the product must guarantee.

The market made it sharper. Egyptian e-payments were early, and customers were cautious and quick to react, creating a two-sided risk that defined the project: **doing nothing** was already dragging CSAT down, and **doing it wrong** — rebuilding payments without actually fixing them — could cost us our credibility entirely. There was no safe option, only a well-executed one.

## The decision

Rather than keep patching payments inside a platform buckling under them, **I led the decision to extract them into a dedicated system — Easykash Gate** — owning provider integrations, reconciliation, settlements, fraud detection, smart routing, and provider/payment-option management in one purpose-built place. Keeping all that inside core Easykash would have badly complicated its architecture; pulling it out let each side do its job well and, as it turned out, made the hard parts easier — building reconciliation inside Gate made queues, inquiry cronjobs, and status updates far cleaner to manage. (Our architect designed Gate's architecture; I owned the module organization and the interdependencies between providers, payment options, and the new features.)

## The constraint: building through a lockdown

We kicked off weeks before the COVID lockdown and went live, into production, while the country was shut down. The hardest part to handle remotely was cash. Beyond cards (testable anywhere), Easykash integrated **cash providers**: the provider issues the buyer a reference number (a voucher), the buyer pays cash at a kiosk, the provider fires a callback to Gate, and we update the transaction. That flow can't be tested from a laptop — a real person has to complete a real payment at a real kiosk to trigger the real callback.

So on launch day I left home, masked, mid-lockdown, and ran our first live transactions myself at a kiosk — running transaction after transaction to cover different test cases while the team stayed on a long call, reviewing each one in real time as it flowed back into Gate. The physical dependency became an edge: it forced genuine end-to-end validation under production conditions, with the whole team watching the money actually move.

## The approach: stop the bleeding, then build

With an active problem, a fragile market, and a lockdown deadline, sequencing beat ambition. I shipped a **focused MVP first** — moving existing provider integrations and their reconciliation/settlement into Gate, and nothing more. That fixed the immediate problem and proved the architecture before we bet anything else on it. With the MVP validated, I used the momentum to layer on the planned modules — fraud detection, smart routing, provider management — onto a foundation we now trusted. Stabilize first, expand second.

## The results

- **Payment issues fell ~70% within three months** and up to **~95% within the first year.**
- **The core platform was unburdened** — extraction relieved the centralized load straining everything else.
- **A clean architectural end state** — Easykash now treats Gate as a provider in its own right, supplying all payment options and absorbing all the operational noise.
- **A platform for what came next** — the same layer is where smart routing lives, later routing each card to the cheapest provider and reinvesting the savings into growth.

## What I'd take with me

- **Know when to extract, not patch** — spotting that payments had outgrown their home was the senior call, not any single feature.
- **Stabilize before you expand** — a narrow MVP that stopped the bleeding first de-risked everything after it.
- **Accountability sometimes means showing up in person** — some things can't be validated from a dashboard.
- **Constraints can sharpen a build** — the lockdown and the cash dependency forced real end-to-end testing, and the architecture was cleaner for it.
