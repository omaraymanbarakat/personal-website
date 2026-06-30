---
title: "Reversing Customer Churn at RentAll"
slug: "rentall-turnaround"
dimension: "Fix"
company: "RentAll (Aspire Software)"
companyContext: "Car-rental SaaS for small-to-medium rental agencies · Americas & Europe"
role: "Technical Product Manager"
hook: "Diagnosed churn as a process-and-trust problem — not just bugs — and rebuilt both; churn fell to zero in ~4 months and reversed into growth by ~6."
metric: "Churn → zero in ~4 months, then growth"
demonstrates: "Root-cause product thinking"
order: 4
summary:
  - label: "Role"
    value: "Diagnose root causes, design the processes to fix them, drive them to completion"
  - label: "Insight"
    value: "Churn was manufactured by broken systems and destroyed trust — not just bugs"
  - label: "Results"
    value: "Churn → zero in ~4 months, then growth by ~6; high-priority turnaround 4 weeks → 3 days; downtime ~3/month → 2 in 6 months"
---

## Summary

I joined RentAll when it was bleeding customers: a buggy, unstable product, an opaque delivery team that missed deadlines, and a sales motion onboarding customers on promises the product couldn't keep. The mandate was simple to state and hard to do — **stabilize the system and stop the churn.** I diagnosed that churn wasn't fundamentally a quality problem but a **process-and-trust problem**, and rebuilt both the internal system producing the churn and the customer relationship it had already damaged. **Churn fell to zero in ~4 months and reversed into growth by ~6.**

## The challenge

When I arrived, nearly everything that could be wrong was: the product was buggy and unstable, the delivery team was opaque and missed deadlines, and customers were leaving from every direction. Digging into *why* surfaced four recurring complaints — a buggy system, slow turnaround on issues, **recurring issues** (bugs that had been fixed reappearing), and **overselling** (sales onboarding customers on features that didn't exist yet).

The temptation is to start swatting bugs. But those four complaints aren't four problems — they're symptoms of two broken systems, and that distinction became the whole strategy.

## The diagnosis

I didn't trust first impressions or the loudest complaints. I attended every development and management call to see how work actually flowed and stalled, ran customer interviews to hear churn reasons firsthand, and drilled into support tickets and issue history so I was reacting to patterns, not anecdotes. Consolidated, the picture wasn't "bad engineers building a bad product" — it was the **absence of functioning systems**:

- **A broken engineering-to-customer pipeline.** The tell was the *recurring* bugs: regressions returning meant no reliable change management, no regression discipline, no healthy path from "customer reports a problem" to "fix that stays fixed." Slow turnaround and missed deadlines were the same disease.
- **A broken promise pipeline.** Overselling manufactured churn at the front door — customers arrived with expectations the product was structured to disappoint.

So the work wasn't to fix bugs. It was to **build the systems whose absence produced the churn — then repair the trust they'd already burned.**

## The work, part 1 — rebuild the system that produced the churn

I put in the operational backbone the product had been missing: **SLAs/SLOs for bugs** with clear categories and priorities (handled by severity, not by who shouted loudest); a **triage-and-validation process for enhancement requests**, with valid ones added to an active roadmap and given real ETAs instead of a vague "soon"; and a **full development lifecycle** — development, PR reviews, QA, deployments, production releases — the discipline that makes fixes reliable and stops regressions sneaking back in. This is the machine that turns a customer problem into a fix that *stays* fixed.

## The work, part 2 — rebuild the trust the churn had destroyed

Fixing the product quietly wouldn't have been enough — customers burned by recurring bugs and broken promises don't stay just because things improve behind the scenes; they have to *see* it and feel heard. So I built a customer-facing layer: **release notifications and a newsletter** so customers could see the product improving, and a **monthly webinar** where customers spoke directly with the team and raised concerns — turning an opaque vendor into a communicative partner. This is the half most teams skip, and attacking churn at *both* ends is what actually retained people.

## The overselling problem — enforced, with clear ownership

The gap between sales promises and product reality crossed into go-to-market, outside a PM's direct lane. I helped enforce the fix, but the policy was owned by the R&D Director and the Director of Sales: reps could **only sell existing features**, and couldn't sign customers on future promises unless the request was already on the roadmap. (I note the boundary deliberately — it's the honest account of what I drove versus influenced.)

## The hard part — making the new processes stick

Designing processes is easy; getting them adopted through a team you don't command, that isn't transparent and misses deadlines, is the real test. Here, management chose decisive action: an architect and I authored a **transition plan**, after which delivery moved to a new team. I didn't formally manage that team — but as the most experienced person on the product, **I became the one who onboarded them into every new process we'd built.** Being the institutional knowledge and process owner is how the systems took hold for real instead of being nodded at and ignored.

That's the leading-without-authority core of this turnaround: my contribution wasn't positional power but diagnosing the problems, designing the systems, and ensuring — through whatever path the situation required — they actually got solved.

## The results

- **Churn reduced to zero in ~4 months**, then **reversed into growth by ~6** — the customer base was expanding again before I left.
- **High-priority issue turnaround improved from ~4 weeks to ~3 days** for triaged bugs.
- **Downtime dropped from ~3 occurrences/month to just 2 across 6 months.**
- **The product stabilized** — the recurring-regression problem was brought under control by the new development discipline.

## What I'd take with me

- **Treat churn as a system output, not a list of bugs** — the leverage was in the systems producing it, not the symptoms.
- **A turnaround has two halves: fix the product, and repair the trust** — either alone underdelivers.
- **Diagnose with data and proximity, not impressions** — calls, customer interviews, and ticket history separated root causes from noise.
- **Influence is a delivery mechanism** — without authority over the team, the result still came, through diagnosis, system design, and becoming the owner of the new way of working.
