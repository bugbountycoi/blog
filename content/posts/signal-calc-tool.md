---
title: "Signal Calculation Tool"
date: 2026-02-27
authors: [
  "bbcoi",
  "Chris Holt",
  ]
tags: [
  "Bug Bounty Programs",
  “Signal",
  "Performance Estimate",
  “tool”
  ]
draft: false
summary: "Tool to help program operators set objectives for program performance."
---

You could summarize the performance (not value) of a VDP or BBP through one single metric: Signal ratio. Signal, or signal-to-noise ratio, comes from the simple formula of valid reports divided by total report volume:

{{< katex >}}
$$\frac{\text{Valid Reports}}{\text{Valid + Invalid Reports}}$$

The next obviuous thing to ask is: 
> What is the right signal ratio for my program?

That is one of the most common questions and typically very hard to answer. When you have a happy program performance, you know, and when it’s sad, you know; but judging in the middle is a lot harder to do.

Program operators often struggle to answer the question: "Is our signal ratio good enough?" This tool provides a data-driven baseline that accounts for your program's specific characteristics. Instead of comparing yourself to an arbitrary standard, you can see what's realistic for *your* program type. Every program is unique. A large enterprise with a variety of VDP programs will have different signal expectations than a private, invite-only program. When presenting program performance to leadership, it's helpful to provide context. Rather than saying "we have a 35% signal ratio," you can explain "we have a 35% signal ratio, which puts us in the yellow zone for our program type, we should target the green zone at 46%+ by implementing these improvements."


## Introducing the Signal Calculator
This tool is designed to help you understand where your program should sit on the spectrum based on your specific circumstances. 

As programs evolve by adding new engagement activities, expanding scope, or changing access models, the expected signal ratio changes. Use this tool to model how different strategic decisions might impact your signal expectations. For example, if you're considering launching a public VDP to support partners, you can adjust the modifiers to see how that might affect your target signal range.

### Baseline
I will define this scale as the “Baseline”:  
Red: 0-20%  
Orange: 21-30%  
Yellow: 31-45%  
Green: 46-60%  
Blue: 61-100%  

Not all programs will match up to this baseline. Many different factors can influence what YOUR specific program should measure against. This makes it very difficult to score one program against another. Through many years of experience and seeing many many different programs, and hundreds of thousands of reports, I can advise that most programs can start with the Baseline scale above, and then apply a set of modifiers to it to calculate what your program’s ratio scoring scale should look like.

### Modifiers
Consider that some will increase your signal, some will increase noise, some will increase or decrease report volume, some will increase or decrease program visibility or researcher engagement. As you plan your program, do NOT only select the positive modifiers. It is OK to have a performance scale that is skewed lower because you are highly engaged in the community.

#### Program Access
What type of program do you have?
* Public Program: Anyone can submit reports and earn bounties.
* VDP: Public program variant that does not offer rewards/payments.
* Private Program: Invitation is required to join.

AI Slop occurs at a much greater rate in public program offerings. 

#### Program Scope (Assets)
The primary skillset of the security researcher community that engaged with VDP/BBP programs is heavily skewed towards the HTTP stack. That means web, api, and some mobile applications are well-served while other product types may be underserved or receive more noise. 

#### Engagement Activities
Engagement events are things that YOU as the program owner/operator are able to do that will drive more researchers to participate in your program. These things are not always free, some come with very significant costs, but the results will be wild!

*Assumption: engagement events reoccur annually.*

* LHE: Live hacking event - bring hackers together for targeted focus on your program/assets (very high expense, very high value); invite-only
* VHE: Virtual hacking event - LHE, but exclusively with remote participation; typically invite-only
* Community sponsorship: Engage with the community to sponsor their activities. e.g. : [Vulnerability Vibes](https://www.vulnerabilityvibes.com), podcast sponsorship, conference sponsorship.
* Show & Tell: Put hackers in front of each other to present their work (on your program)

### Interpreting Your Results
Once you've input your program's modifiers, you'll see an adjusted scale showing where your program should aim to be. Here's how to interpret and act on your results:

#### Red Zone
Your program is generating more noise than signal relative to expectations. This typically indicates:

- Scope may be too broad or unclear (or conversely, so narrow that it invites hopeful fringe reports)
- Program policies may need refinement (duplicate handling, report quality standards)
- Triage processes may need improvement
- Consider implementing pre-submission guidance or researcher education

#### Orange & Yellow Zones
The combined **Orange + Yellow** band represents the "growth zone" for most bug bounty programs. This is where the majority of well-established, moderately active programs tend to land. This zone is stable, sustainable, and offers plenty of upside with targeted improvements. Programs in this range are actively processing legitimate security reports but also receiving a meaningful volume of low-quality or invalid submissions. This is not a failure state—it's normal. 

Your program is discoverable and interesting to the community, attracting consistent researcher attention. Your team is spending significant effort triaging noise and educating researchers on scope and quality. There's room to improve through clearer guidance, better scoping, or increased engagement.

Things to focus on:
1. Reduce ambiguity about what's in scope with clearer scope documentation.
2. Host webinars and resources to help hackers understand your tech stack.
3. Sponsor events, run challenges, or host CTF-style competitions to build rapport with your researcher base.
4. Close the loop with researchers—fast rejection with clear reasoning improves submission quality over time.

#### Green Zone
Your program is performing well for its type. Focus on:

- Maintaining current practices
- Identifying and rewarding top performers
- Gradually expanding scope or engagement as resources allow

#### Blue Zone
You're achieving exceptional signal ratio and your program is performing incredibly well and far above typical expectations. Consider:

- Maintaining your current practices
- Introduce experiments with your engaged researcher population
- Inject chaos into the program
- Challenge researhers directly with specific objectives or team vs team type activities


## Important Caveats and Guidance

### Signal Is Not the Only Metric

While signal ratio is a useful as single metric for **program health**, it doesn't tell the whole story. A program with 70% signal but only 10 reports per year may not be as valuable as one with 40% signal and 500 reports per year. Always consider signal alongside volume, severity distribution, and business impact. 

-> This is the first metric you should look at and presesnt, but always be prepared with a much deeper explanation (through other data) about what is going well, what is going poorly, and how to improve it.

### This Tool Provides Guidance, Not Rules
The provided baseline scale and modifiers are based on observed patterns across many programs, but your specific situation may warrant different targets. Use this as a starting point for discussion and goal-setting, not as an absolute judgment of program success or failure. 

-> If you feel extra confident about your scoring scale, consider sharing your target zones with your researcher community and regular updates on where the signal calculation sits against those targets.

### Programs Evolve Over Time
Your target signal ratio **should change** as your program matures. A newly launched public program might reasonably expect lower signal initially as researchers learn your assets and policies. An established program should trend toward higher signal over time. 

-> Program maturity and improvement will not be a simple journey, there is no silver bullet answer or plan that you can follow. Bug Bounty Program maturity is a constant challenge, even to the most experienced BBP program operators. This is exactly why the BB COI exists, to provide a community to share experiences and work together to help improve all of our programs.

### Not All "Noise" Is Bad
Invalid reports, duplicates, and out-of-scope submissions still provide value. These results show researcher engagement and interest. The goal isn't to eliminate all noise, but to maintain a healthy balance that keeps researchers motivated while managing triage burden. 

-> Duplicates are a signal that a vulnerability is more likely to be discovered and exploited; consider including "duplicate" rejections as a Signal report instead of Noise.

### Modifier Impacts Are Relative Estimates
This calculator was developed after (combined) *decades* of working with *hundreds* of programs and analyzing patterns across different program types, scopes, and engagement strategies. The baseline was developed prior to the advent of AI slop reports and their impact to public BBPs and VDPs. The numerical -/+ values assigned to each of the modifiers in the calculator are all relative to each other. 

-> If your experience differs, or you think we missed a **common** modifier that should be included in the calculator, please contact the BB COI and/or file a PR in our github to add it to the calculator tool.

### Scenario & Resource Planning
Understanding your target signal helps with resource planning. Before launching a new initiative (like a Live Hacking Event or expanding to include open-source assets), adjust the modifiers to see how it might impact your expected signal. This helps set realistic expectations with leadership and plan appropriate triage/response resources.

### Multi-Program Management
Signal and target scales should be viewed at both per-program and all-combined levels. If you manage multiple programs (e.g., a VDP for broad access, and a private bounty program for critical assets), calculating the expected signal for each separately can help identify which program is offering more value or performing to expectation. Looking at the holistic view of all your programs combined reflects a better picture of how your team and company operates their external security research program, and how researchers view your program; the "program brand value" is lost when looking only at one of your programs.

---

*This project was inspired by a conversation discussing the impact of that AI slop on the anticipated signal ratio a program can use to define success.*

{{< tool-signal-calc >}}