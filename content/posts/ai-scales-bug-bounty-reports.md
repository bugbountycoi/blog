---
title: "AI Scales Bug Bounty Reports. Product Knowledge Scales Triage."
date: 2026-09-01
authors: [
  "Gabriel Nitu"
]
tags: [
  "bug bounty",
  "triage",
  "program management",
  "AI",
  "security operations",
  "fix validation",
  "evidence-based decision making"
]
draft: false
summary: "Why better AI models cannot replace the product judgment behind faster triage, stronger fix validation, and trustworthy evidence."
---

*Why better AI models cannot replace the product judgment behind faster triage, stronger fix validation, and trustworthy evidence.*

A generic large language model (LLM) can summarize a bug bounty report. It cannot reliably triage one until you teach it the product: its architecture, documentation, known false positives, duplicate rules, severity expectations, and evidence gates. A better model can help, but product knowledge turns general AI reasoning into useful security work.

Careful verification still takes real work. The clock did not get the memo. We still get only 24 hours in a day.

> **Report generation accelerated.** Researchers increasingly use security-focused LLMs to map attack paths, generate payloads, and test more code in less time.
>
> - [HackerOne reported](https://www.hackerone.com/blog/continuous-threat-exposure-management-remediation-crisis) 46,947 submissions in March 2026, up 76% year over year.
> - [Intigriti reported](https://www.intigriti.com/blog/business-insights/common-ai-misconceptions-debugged) 328% growth from 2022 to 2025.
> - [Bugcrowd said](https://www.bugcrowd.com/blog/introducing-priority-queue-bypass-a-new-way-to-recognize-top-hackers/) AI-generated reports were straining triage queues.
>
> These figures do not prove that AI caused every increase, but they show that discovery is scaling faster than triage.
>
> The pressure has already changed how some programs operate: [curl ended its paid bounty](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/), [Superthread closed its program](https://superthread.com/terms/vulnerability-disclosure-policy/), and [Winston AI temporarily closed its public bounty](https://gowinston.ai/responsible-disclosure-vulnerability-disclosure-policy/) after high-volume, low-signal, or automated submissions strained review.

That is where a product-aware skill becomes useful. Think of it as the playbook you would hand to a new teammate. It shows the AI how your team does the work, what evidence it needs, and when it should stop and ask for help. In this case, the skill gathers and organizes evidence. It checks product rules, proposes a verdict, and makes any gaps visible. If the proof is not there, it stops.

The goal was never to build a security oracle. It was to teach the skill our product judgment so it could handle the evidence-heavy lifting, show its work, and act only when the evidence supported the verdict.

So, I built AI skills around the way our team already works. One command starts a triage or fix-validation run while I move on to something else. When I return, I review the evidence and approve or revise the proposed verdict that the skill has posted to the ticket, instead of doing the full triage or fix validation manually.

Triaging a single bug bounty report from intake to a proposed verdict could take two or three hours. A complex case could take five or six, sometimes longer. In my testing, the skill got there up to 20x faster than manual triage. A person still reviews the evidence and can change the final verdict in the internal ticket if needed.

What comes back isn’t a wall of AI-generated prose. It’s a clear, structured verdict: confirmed, duplicate, false positive, customer configuration, fixed, partially fixed, or not fixed. Each workflow captures the evidence relevant to its verdict, from the affected products and root cause to the sensitive operation reached, attack prerequisites, exact reproduction steps, related paths sharing the same root cause and sink, proposed CVSS score, evidence showing why the issue is fixed, and any remaining gaps or successful bypasses in the fix. Every conclusion points to its supporting evidence; if the proof is missing, the hard gate stops the verdict.

## You cannot buy product judgment by paying for a better model

A stronger or more expensive LLM might reason better in general. It still does not know your product boundaries, recurring bug patterns, known false positives, supported configurations, duplicate rules, severity expectations, fix-validation process, customer configuration misconceptions, or the weird edge cases that your team learned the hard way.

## Product judgment has to be taught

The skill needs to know how the product works, how the team triages, where bugs usually hide, what evidence is required, and when to stop and ask a human.

Neither does a new Security Engineer. We would never hand a new teammate a vulnerability report, hide the documentation, and say, "Good luck. Please be certain by lunch."

The skill should not get that shortcut either.

I taught the skills that context through:

- **Product context:** architecture, security boundaries, relevant documentation, supported setups, edge cases, and configuration behavior
- **Triage rules:** review checklists, recurring bug patterns, known false positives, duplicate and severity rules, customer or administrator misconceptions, and escalation paths
- **Evidence gates:** required proof, evidence quality, fix-validation expectations, acceptance criteria, hard gates that block unsupported verdicts, and clear stop conditions
- **Learning loop:** reviewed outcomes, corrected mismatches, newly discovered product patterns, and updates to the skill's knowledge and checks

Keeping that knowledge current matters just as much. A beautifully written instruction that describes last year's product can produce this year's wrong answer with impressive confidence.

Without current product context, speed only helps the skill reach the wrong destination sooner.

## What I design against

Teaching the skill the product is only half the job. I also must design for the ways an AI-assisted workflow can go wrong.

**Adversarial input.** A report, comment, attachment, proof of concept, or linked page is untrusted evidence, never an instruction to the skill. It cannot change the workflow, relax an evidence gate, authorize an action, or decide its own verdict; the skill checks claims against source, documentation, configuration, and runtime evidence.

**Automation bias.** The ticket shows the evidence and visible gaps, not only the verdict label. For code validation, two AI reviewers work independently, using different models when available or isolated passes of the same model. Their findings are compared only after both reviews finish. Unresolved disagreement or missing proof stops the verdict from being posted.

**Missing a real vulnerability.** Duplicate, false-positive, and customer-configuration verdicts require affirmative proof. A duplicate must share the same root cause and affected operation; an as-designed result must match documentation, source, configuration, or runtime evidence. When the proof conflicts or is missing, the result stays incomplete instead of becoming a convenient negative verdict.

## "99% confidence" in what, exactly?

Sooner or later, someone asks for an accuracy number. "Can we say 99% confidence?"

My answer starts with another question: confidence in what?

Does 99% mean agreement with a human reviewer? Correct verdicts across a measured test set? Complete evidence? Or does it mean that a model rated its own answer highly?

Without a defined population, known answers, measured errors, and a denominator, 99% is decoration, not an accuracy metric.

I use a more useful standard: **evidence-backed confidence**.

Confidence improves when every verdict includes traceable evidence, visible gaps, and reasoning that can be reviewed. I also measure what happens over time: changed verdicts, reopened cases, missing evidence, and incorrect duplicate mappings.

I cap each batch at three tickets for each session. Three is a limit, not a dare: small batches keep each ticket anchored to its own evidence and make stray or unsupported details easier to catch.

The skill does not quietly train itself after every ticket. I improve it through a reviewed feedback loop: lessons from test runs and reviewed outcomes are added to its product knowledge, rules, and evidence checks. Across hundreds of reviewed triage and fix-validation test runs over two months, I found and corrected verdict mismatches as I refined the skill. By the end of the testing period, the earlier mismatch patterns no longer appeared in the reviewed runs.

That gave me enough confidence to let the skill take the final step. When the evidence gates pass, it now posts the verdict and its supporting evidence to the internal ticket automatically. If the proof is incomplete or conflicting, it stops.

People define the rules, review exceptions, make bounty decisions, communicate with researchers, and remain accountable for escalations and other high-risk calls.

> No evidence, no verdict.

The skill does not earn confidence by claiming confidence. It earns confidence by showing its work.

## The takeaway

Generic AI is useful. Product-aware AI becomes operationally useful because it works inside defined product boundaries, evidence gates, and a reviewed security process. Researchers get faster answers, eligible reports reach bounty decisions sooner, and related paths enter the fix scope earlier. Fixes face broader testing, bypasses get less room to hide, and we close more of the known bug family. That is a stronger security posture, not just a faster queue.

If you want AI to help with security operations, start by teaching it your product: its architecture, boundaries, edge cases, false positives, evidence gates, duplicate rules, and stop conditions.

> Generic AI can summarize a report. Product-aware AI can triage it, show its work, and post the verdict. People still own the rules.
