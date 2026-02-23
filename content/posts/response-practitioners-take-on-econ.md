---
title: "Response: A Practitioner’s Take on Economic Taxonomy of Vulnerabilities"
date: 2026-02-09
draft: false
authors: [
  “bbcoi”,
  "Chris Holt"
]
tags: [
  “bug bounty”,
  “vulnerability research”,
  “economics”,
  “security programs”,
  “response”
]
summary: "A response to a paper on vulnerability economics, highlighting overlooked assumptions in public bug bounty data and the realities of researcher behavior."
---

*Note: This piece was written by a select few individuals within the BBCOI and may not represent the views of the entire group.*

# Response: A Practitioner’s Take on “Economic Taxonomy of Vulnerabilities”

I recently read Heitor Gouvêa’s paper, *Economic Taxonomy of Vulnerabilities*, and I’m genuinely glad someone is putting real effort into analyzing bug bounty economics with actual data. The structured approach is solid, the explanations are clear, and publishing the dataset is a huge plus. We need more transparency in this space.

That said, there are a few assumptions baked into the analysis that deserve a closer look. They don’t invalidate the work, but they do shape the conclusions in ways that matter if you’re trying to understand the real economics of vulnerability discovery.


## Unconsidered or Understated Assumptions

### Chosen program data is not the whole picture
The paper relies heavily on public bug bounty programs and some selected private programs. These programs attract a wide range of skill levels and tend to pay less than private or invite‑only programs. High‑skill researchers sometimes avoid public programs entirely because the economics don’t make sense for them. So the dataset ends up reflecting the lower end of the market rather than the full spectrum. Additionally, there are many outlier programs that advertise very large bounty ranges which could skew data, these do not appear to be represented. Why make a selection of public programs without using all of the available public program data?

### Bounty values rarely change over time
Most programs set their bounty tables once and then leave them alone for years. They don’t adjust for inflation, the increasing complexity of modern systems, or security enhancement that occurs over time. A payout from 2018 is treated the same as a payout from 2026, even though the cost of living and the cost of expertise have both gone up. That flattens the data in a way that hides real trends.

### Advertised bounty ranges are not the same as real payouts
Bug Bounty Program advertised ranges are often not fully followed across the industry. Some programs choose to overpromise-and-underdeliver as a marketing boost, while others choose to underpromise-then-overdeliver for researcher stickiness. The value expected to be derived from a finding will be calculated taking that program choice into account, never directly related to advertised amounts. Actual payouts cluster towards the middle of ranges. Analysis that treats posted bounty amounts as a cost signal is going to miss how researchers and companies actually behave.

### Programs prioritize different goals
Some programs genuinely want to reduce risk, while others run a program that amounts to a compliance checkbox. Others want security community engagement or brand visibility. These goals influence how they set bounties and how they triage findings. Treating all programs as if they focus on vulnerability reduction as a primary objective oversimplifies the landscape.

### Participant volume and skill distribution matter a lot
The paper looks at advertised payouts but does not contain details or data as to what makes a program successful. How many reports do they get? How many are duplicates? How many are low quality? Are researchers satisfied? Are program owners satisfied? These questions matter because a program that pays a “standard” amount but only attracts beginners is not equivalent to a program that pays the same amount and consistently attracts experienced researchers.

From my own experience, medium and highly skilled researchers often choose not to engage with programs that pay at the levels shown in the dataset. That alone should make us cautious about treating these numbers as representative of the broader market.


## Thoughts on the Paper’s Conclusions

The paper points out that most programs have similar bounty values. That lines up with what I see. New programs look at what everyone else is doing and copy it, or are given recommendations or guidance by 3rd party advisors or vendors, so this becomes a self-fulfilling prophecy (an echo chamber). It creates a kind of gravitational pull toward the same price points. But similarity does not mean those prices are correct or sustainable. It just means everyone is referencing the same benchmarks.

The paper also suggests that these values reflect the cost of vulnerability discovery. I think they reflect the cost that public programs are willing to pay, which is not the same thing. They don’t reflect the cost of attracting top talent or the cost of finding vulnerabilities in complex systems or the cost of private program findings. It also does not necessarily reflect the full-picture market value of these vulnerabilities. They reflect the lower bound of the market.


## Closing Thoughts

Even with the limitations above, I want to give credit where it’s due. The analysis is thoughtful and well structured. The dataset is a real contribution. And the paper helps move the conversation toward a more data‑driven understanding of vulnerability economics.

My hope is that future work in this area brings in more context around private programs, researcher behavior, and the changing cost of expertise. That would help us get closer to a full picture of what vulnerabilities actually cost to discover.
 
