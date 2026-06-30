---
title: "Designing a Credit-Scoring Model Where Credit History Doesn't Exist"
slug: "qasatly-credit-scoring"
dimension: "Design"
company: "Qasatly"
companyContext: "BNPL & digital lending · integrated with Easykash · Egyptian consumer market"
role: "Minority Partner · Scoring-Model & Data Design"
hook: "Solved the cold-start problem of lending in a market with no credit bureau — risk-contained bootstrapping and a self-improving, consent-first scoring model."
metric: "Cold-start scoring from zero · self-improving cohort model"
demonstrates: "Data-led product design for hard problems"
order: 5
summary:
  - label: "Role"
    value: "Designed the scoring model and data strategy — what to collect, how to process it, how to make it self-improving. Not engineering: the model and data design were mine."
  - label: "Core problem"
    value: "Cold-start credit scoring with no formal credit history to draw on"
  - label: "Key idea"
    value: "Treat the first lending phase as risk-contained data acquisition, then switch on dynamic scoring once a dataset existed"
  - label: "Pillars"
    value: "Capped-downside bootstrap · a self-improving versioned model · transparency-first, compliant data collection"
  - label: "Stage"
    value: "Early-stage R&D — a scoring foundation built ahead of the data, designed to learn its way to accuracy"
---

## Summary

Qasatly set out to offer buy-now-pay-later to Egyptian consumers — a market where low banking penetration makes traditional installment financing slow, painful, and high-rejection. The hard problem underneath: **how do you assess creditworthiness in a country with effectively no consumer credit bureau, and score a brand-new user the moment they finish signup, before they've ever repaid you?** I owned the design of the answer — what data to collect, how to process it, and how to build a model that could safely bootstrap from zero and improve as real repayment behavior arrived.

## The challenge

Low banking penetration makes buying in installments through traditional channels lengthy, difficult, and high-rejection. Qasatly's premise was to skip the bank and go straight to the consumer — BNPL at the point of purchase, integrated with Easykash as a payment option.

That premise runs into the hardest problem in consumer lending: **credit risk with no credit infrastructure.** Where mature bureaus exist, a lender pulls a score and decides; Egypt has no equivalent depth of formal credit history, so there was no score to pull. And it's worse than a "thin file," because of the **cold-start moment**: to make BNPL feel instant at checkout, we had to assign a risk score and lending limit *right after a user finished setup* — when, by definition, they had zero repayment history with us.

So the real question wasn't "build a scoring model." Every lender has one. It was: **how do you score people you know nothing about, in a market that can't tell you anything about them, without lending yourself into the ground while you learn?**

## Part 1 — bootstrap lending as risk-contained data acquisition

You can't train a data-driven model without data, and you can't get repayment data without lending first — the chicken-and-egg problem where most BNPL ambitions quietly bleed out. My move was to treat the earliest lending phase not as a profit center but as a **deliberately risk-capped data-collection exercise**, funded as an investment in the dataset:

- **Low starting limits** — enough to buy day-to-day items, not enough to expose us to meaningful loss on any single bad call. Every loan was both a small bet and a labeled data point.
- **A selective rollout, not a blanket launch** — we did *not* enable Qasatly across all Easykash merchants, closing the loophole where opportunistic merchants could game a not-yet-hardened lending product. Scope control *was* risk control.
- **Aggressive, consented data collection from day one** — capturing the behavioral and repayment signals the real model would later train on.

The reframe is the elegance: early losses weren't failures, they were the *price of the training data*, budgeted as investment. Once enough repayment behavior had accumulated, we switched on dynamic scoring. The bootstrap had done its job.

## Part 2 — a self-improving, versioned model

The model was never meant to be frozen at our first guess; it was designed to learn from each wave of users and sharpen over time. The mechanism was an **incremental, versioned model that learned cohort by cohort**: an early cohort was scored under the first version of the rules, their actual repayment behavior fed the next version, the following cohort was scored against that, and so on — each generation standing on the accumulated data and refined rules of the ones before it.

That bought two things: a principled way to **improve accuracy as evidence arrived** rather than relying on a static guess, and **traceability** — because every cohort tied to a specific version, we could see how scoring evolved and why, instead of mutating one opaque model in place. At signup, the live model could take the consented signals it had — behavioral and spending patterns, correlated with geographic and personal information — and predict a new user's risk score and limit with usable accuracy, immediately. Cold-start was solved not by one clever feature but by the loop: bootstrap safely, collect, version, refine, repeat.

## Responsible by design — transparency first

Scoring people with personal and geographic data is predictively powerful and ethically loaded — exactly how lenders drift into bias or privacy violations. My line between *predictive* and *responsible* came down to **transparency from the first interaction.** Users were never silently profiled: enrolling meant explicitly accepting an agreement that they were joining a program collecting and analyzing data to build a scoring model — data was the deal, and we said so plainly. On compliance, we followed Google's data-protection protocols to the letter. Consent was informed and explicit, and the data practices were built to be defensible, not just effective.

## My role

On a data product the lines between product, data, and engineering blur, so to be precise: **I owned the scoring-model and data design, not the engineering.** That meant asking the defining questions — what data is worth collecting, what actually predicts repayment, how should it be processed and structured — and turning the answers into a model design the team could build against. The intellectual core of the product — the logic of how a stranger becomes a risk score — was my contribution.

## What the design accomplished

Framed honestly for an early-stage R&D product:

- **A workable answer to cold-start scoring** in a market with no credit bureau — scoring a brand-new user, right after setup, from consented proxy signals.
- **A bootstrap that contained risk while building the asset that mattered** — a real repayment dataset — by capping limits and controlling rollout instead of launching wide and hoping.
- **A model architected to improve itself** through cohort-based versioning.
- **A transparent, compliant data practice**, treating informed consent and Google's protocols as design constraints from the start.

## What I'd take with me

- **When you can't get the data you need, design the safest way to earn it** — reframing early lending as risk-capped data acquisition made an unsolvable chicken-and-egg problem tractable.
- **Build models that learn, not models that guess** — cohort versioning compounded accuracy over time and stayed traceable.
- **Scope is a risk lever** — choosing *not* to launch everywhere mattered as much as any limit or rule.
- **In data products, transparency is the design, not a compliance afterthought** — being explicit about the data deal kept it ethical and defensible.
