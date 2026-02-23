---
title: "Signal Calculation Tool"
date: 2026-02-23
authors: [
  "bbcoi",
  "Chris Holt",
  ]
tags: [
  "Bug Bounty Programs",
  “Signal Estimation",
  “tool”
  ]
draft: false
summary: "Tool to help program operators set objectives for program performance."
---

You could summarize the performance (not value) of a VDP or BBP through one single metric: Signal ratio. Signal, or signal-to-noise ratio, comes from the simple formula of valid reports divided by total report:

| [Number of valid reports] |
|---|
| [Total number of reports] |

“What is the right signal ratio for my program?” That is one of the most common questions and typically very hard to answer. When you have a happy program performance, you know, and when it’s sad, you know; but judging in the middle is a lot harder to do.

## Baseline
I will define this scale as the “Baseline”:
Red 0-20%
Orange 21-30%
Yellow 31-45%
Green 46-60%
Gold 61-100%

Not all programs will match up to this baseline. Many different factors can influence what YOUR specific program should measure against. This makes it very difficult to score one program against another. Through many years of experience and seeing many many different programs, and hundreds of thousands of reports, I can advise that most programs can start with the Baseline scale above, and then apply a set of modifiers to it to calculate what your program’s ratio scoring scale should look like.


## Modifiers
When looking at all these modifiers, consider that some will increase your signal, some will increase noise, some will increase volume, some will increase or decrease program visibility. As you plan your program, do NOT only select the positive modifiers. It is OK to have a success scale that is skewed lower because you are highly engaged in the community.

### Program Access
What type of program do you have?
* Public Program: Anyone can submit reports and earn bounties.
* VDP: Public program variant that does not offer rewards/payments.
* Private Program: Invitation is required to join.

AI Slop occurs at a much greater rate in public program offerings. If you have a combination of programs, select that modifier when considering all your program data combined.

| pts | Description | 
| :-- | :-- |
| -15 | Public + VDP |
| -10 | Public |
| -7 | VDP |
| -5 | Public + VDP + Private |
| -3 | VDP + Private |
| +5 | Public + Private |
| +10 | Private | 

### Program Scope
The primary skillset of the security researcher community that engaged with VDP/BBP programs is heavily skewed towards the HTTP stack. That means web, api, and some mobile applications are well served. 

| pts | Description | 
| :-- | :-- |
| -5 | IT/Infrastructure assets are excluded |
| -5 | Many Open-Source Software assets are included |
| -3 | One or a few Open-Source Software assets are included |
| -2 | Software assets are included |
| +2 | Hardware assets are included |

### Engagement Activities
Engagement events are things that YOU as the program owner/operator are able to do that will drive more researchers to participate in your program. These things are not always free, some come with very significant costs, but the results will be wild!

*Assumption: engagement events reoccur annually.*

* LHE: Live hacking event - bring hackers together for targeted focus on your program/assets (very high expense, very high value); invite-only
* VHE: Virtual hacking event - LHE, but exclusively with remote participation; typically invite-only
* Community sponsorship: Engage with the community to sponsor their activities. e.g. : [Vulnerability Vibes](https://www.vulnerabilityvibes.com), podcast sponsorship, conference sponsorship.
* Show & Tell: Put hackers in front of each other to present their work (on your program)

| pts | Description | 
| :-- | :-- |
| -2 | Hacker community sponsorship |
| -1 | Host a public Show & Tell session |
| +1 | 1-3 promotions, bonuses, or multipliers |
| +1 | Host a public webinar to train hackers on your products |

| pts | Description | 
| :-- | :-- |
| +5 | Host one LHE |
| +8 | Host 2-3 LHE |
| +12 | Host 4+ LHE |
| -5 | Host one public VHE |
| -8 | Host 2+ public VHE |
| +2 | Host one invite-only VHE |
| +4 | Host 2+ invite-only VHE |

—
All of this has been rolled into a calculator widget you can play with.

<!-- Load CSS -->
<link rel="stylesheet" href="/tools/signal-calc.css">

<!-- Load JS -->
<script src="/tools/signal-calc.js"></script>

<div id="signal-calc-root"></div>
