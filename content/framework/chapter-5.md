---
title: "Chapter 5: All Things Payment"
date: 2024-05-13
authors: [
  "Logan MacLaren",
  "Deana Shick",
  "Christopher Robinson",
  "Kathleen Trimble-Noble",
  "Jeff, Guerra",
  "Chris Holt"
]
tags: [
  "bug bounty",
  "security",
  "framework",
  "vulnerability disclosure",
  "program management",
  "payments",
  "rewards",
  "incentives",
  "CVSS"
]
---

Vulnerability Disclosure Programs (VDP) are differentiated from a sub-classification known as Bug Bounty programs (BBP) when rewards are offered. There are many methods to determine your incentive or payment schedule. Typically, payouts are tied to one of many factors. We are going to dive into the most common factors that we have seen across Bug Bounty programs. Monetary payments are the most common incentivization mechanism, though many Bug Bounty programs will start with reputation points (depending on the crowdsourced provider) or sending swag to participants. For monetary payments, you should pick the amount per issue that fits into your scope and budget – there is no industry standard amount that organizations pay per issue. It comes down to your own risk calculation and goals of your Bug Bounty program.

<!--more-->
{{< toc style="block" >}}

Whichever model you choose for your Bug Bounty program, we recommend remaining flexible even within your payment schedule. If you find that a vulnerability reporter is a great help and submitting high-impact vulnerabilities, you may want to allocate some of your budget to provide bonuses.’

In this chapter we will reward structures and the required framework decisions for building a program to support that structure.

## Research Your Capability

### Are you in a position to pay for reports?

Researchers hack on different programs for various reasons. Depending on the organization’s resources, the program will attract different types of researchers in terms of quality in reports, vulnerabilities, skill levels, and more. It is crucial to have an open conversation with your leadership team on a shared expectation on what success looks like for your program and organization. Important questions to ask are:

1.  What is the overall goal of our Bug Bounty program?
2.  Do we have any automation in place to help our internal triage team?
3.  Do we have a goal of when we can award researchers?
4.  Do we currently have a budget to award researchers swag? Monetary bounty rewards?

It’s important to note that there are many different reward opportunities along with paying monetary bounty rewards.

### Maturity and Ability to Act

An important factor to consider when determining payouts is making sure that you’re positioned to not just pay for what you receive, but to fix it. In  [Chapter 2](./chapter-2.md)  we touched on whether or not a Bug Bounty program is right for you, and this is a logical extension of that.

When gauging what you can take on, you should do an analysis on what types of vulnerabilities you’re most concerned about. For example, if your program is primarily focused on a SaaS offering, perhaps you’re concerned about cross-site scripting (XSS). Of course, not all XSS vulnerabilities are created equal – many programs will not accept reports for “self-XSS”, and others will not consider them to be impactful if additional protections (e.g. CSP) are not bypassed as well. If you’re able to determine what’s most impactful to the security of your application, it’s worth highlighting this in your researcher-facing materials to help steer researchers toward reporting issues that will both get them paid, and improve your security posture.

Similarly, it’s important at any scale to understand what you are  _not_ concerned about and will not accept reports on. To build on the XSS examples, perhaps you’re only concerned about XSS vulnerabilities if they can be chained to demonstrate some level of real impact. Other examples of areas that may be specifically excluded from your program are things like vulnerabilities requiring direct access to a device (e.g., being able to run malicious code via  [Electron Fuses](https://book.hacktricks.xyz/macos-hardening/macos-security-and-privilege-escalation/macos-proces-abuse/macos-electron-applications-injection), but only if you already have remote code execution capability in the context of the same user).While being tactical about what your program will accept is one part of this, it’s also important to be able to  _fix_  the reported issues. Do you have a mature enough operational model, with the support of your engineering team(s), to push fixes out for reported issues in a timely fashion? Industry standard disclosure timelines of 90-120 days aside, accruing additional technical debt in the form of reported vulnerabilities not only impacts the velocity of your engineering teams but is often directly visible to the researcher community as your rate of reports that will be marked as “Duplicates” may increase exponentially as unpatched vulnerabilities are encountered by more and more researchers.

## Rewards Structures

Bug Bounty and Vulnerability Disclosure Programs typically reward “monetary” and “non-monetary” rewards depending on their design, staffing, and funding capabilities.

“Bug Bounty Program” (BBP) is a sub-classification of the general term “Vulnerability Disclosure Program” (VDP). A VDP does not require rewards of any kind; a BBP must offer rewards to participants. Non-Bounty VDPs typically consist of either a standalone page on an organization’s site that provides a “security@” email address to send vulnerability reports to.

### Monetary Rewards

#### Bounties

One of the most common methods to payout on vulnerabilities is to tie the payment amount to the [Common Vulnerability Scoring System (CVSS)](https://www.first.org/cvss/specification-document)  score associated with the vulnerability. CVSS is the de facto industry standard for network defenders and PSIRTs (product security incident response team; see  [PSIRT SIG @ first.org](https://www.first.org/global/sigs/psirt/)) to understand the technical severity of the issue. CVSS is not a risk calculation methodology and should not be used as a standalone metric for prioritization. However, since it is well established across industry, many in the Bug Bounty community will pay out the most for vulnerabilities deemed “Critical” and the least for those deemed “Low.”

If you opt to use CVSS as the scoring system for your Bug Bounty program, you should consider the creation or adoption of a rewards calculator that can be tied to the CVSS score (for example,  [this one from Shopify](https://shopify.github.io/appsec/cvss_calculator/)). We’ll discuss this in more depth later, however this will allow for discussions/disputes over specific criteria/CIA (confidentiality, Integrity, Availability) impact rather than more esoteric severity “buckets”.

CVSS does not have to be the only metric that you use to determine the severity of an issue. Many organizations develop their own severity models to add context to a vulnerability, and payment can be tied to a context-specific calculation of severity rather than CVSS alone. Examples of this include Zoom’s  [VISS](https://viss.zoom.com/)  and GitHub’s  [guidelines](https://bounty.github.com/). For the sake of simplicity, the below table is just one example of how to use CVSS as a basis for a Bug Bounty payment.

**Note:**  The monetary value provided in the below tables is for demonstration purposes only.

| **CVSS Severity** | **Payment** |
| :-- | :-- |
| Critical (9.0-10.0) | Up to $10,000 |
| High (7.9-8.9) | Up to $7,500 |
| Medium (4.0-6.9) | Up to $1,500.00 |
| Low (0.1-3.9) | Up to $500.00 |

If you have many types of technology that you would like included into your Bug Bounty program, a common practice is to increase the payout amount for “Critical,” “High,” “Medium” or “Low” per each technology type. For example, if your program produces software and firmware, and you would like to focus efforts on firmware, a payment schedule could look like the following:

| **CVSS Severity** | **Software Issue** | **Firmware Issue** | 
| :-- | :-- | :-- |
| Critical (9.0-10.0) | Up to $10,000 | Up to $20,000 |
| High (7.9-8.9) | Up to $7,500 | Up to $13,000 |
| Medium (4.0-6.9) | Up to $1,500.00 | Up to $10,000 |
| Low (0.1-3.9) | Up to $500.00 | Up to $5,000 |

When rewarding based on Low/Med/High, it’s recommended to avoid gaps between the severity levels (eg. Low at $0-500, Medium at $1,000-2,000). Instead, keep the transition gradual which may cause less contention about the score with the researcher as the differences between severities can be significantly smaller.

#### Bonuses

Bonuses are a mechanism for offering additional monetary rewards above-and-beyond the standard payout schedule. For product-specific Bug Bounty programs, many have opted to provide a bonus amount, which is typically a percentage of the total amount paid for an issue, based on the disclosure timeframe of the vulnerability. Different organizations have wildly different timeframes for how long it takes for a vulnerability to go from Identification to Disclosure. For [multiparty coordinated vulnerability disclosure (MPCVD)](https://vuls.cert.org/confluence/display/CVD/5.4+Multiparty+CVD)  cases, for example, the embargo period for issues can extend a few times to allow impacted organizations to test and deploy mitigations. For reporters closely tied to these types of cases, it may be worth providing bonuses along the way to account for the impact of the vulnerability to the overall technology ecosystem.

This is not a required part of a monetary incentive model and should always be viewed as ‘extra’. If you find your program regularly offering bonuses, consider whether those amounts can be standardized and published as part of your program material so that hackers can have additional goals to work towards. For example, a program might offer a 25% bonus if the original report does not need any modification to be templatized and deployed at scale inside the company.

### Competitive Landscape

Another consideration when determining your payout scales is to weigh your budgets against what might be considered “competing” programs. While Bug Bounty programs are not inherently competitive with each other, in fact many researchers contribute to a wide variety of programs, competitive rewards can be helpful for attracting researchers to your program if you do not already have an established base.

When looking to establish these scales, it can be beneficial to understand other programs that are comparable to your own. Look for similarities in

-   Technology – hardware platform if you are focused on physical devices, software stack, desktop applications vs web applications, etc
-   Maturity – company age and history of producing this kind of product/service
-   Product categories – Companies that sell similar products
-   Leadership – Do you or your leadership idolize or talk about another program? Why? What do you think they are doing well?
-   Marketspace – consider your reward schedule compared to the value in less-official or less-ethical markets
-   Hacker-commentary – Do hackers compare your company or your program to another program? Ask yourself or ask them why.

As an example, if you are launching a program for a multi-billion dollar SaaS software company, it will likely be of most benefit to review programs from others in your industry vertical and company scale. Alternatively, if you’re a relatively new and small company, there will be very different expectations from researchers around your payout scale – no one expects a 10 person software shop to pay the same as a company like Apple!

Beyond the initial analysis, it can be beneficial to review your payout scales, and overall activity, with comparable programs on at least a yearly basis if not more often.

### Non-Financial Incentives

Beyond the direct cash rewards that can come from a Bug Bounty report being resolved, there are also other incentives that you can provide to researchers. In some cases you’ll see these as part of “invite-only” programs, and other times they’ll be available as part of any submission to a program. While these are often not factors that will draw researchers to your program in a vacuum, they can be a strong incentive for repeat submissions and can help make your program “sticky” as it can feel more collaborative than the otherwise transactional world of Bug Bounty. Without going into exhaustive depth, we’ve outlined a few you may wish to consider working into your program in some form.

#### Reputation Points

Reputation points are used on platform providers to rank researchers. Benefits to earning more reputation may include

-   Private Bug Bounty program invitations which are desirable by researchers
-   Exclusive platform swag
-   Private event invitations
-   Early access to platform features
-   Extra staff support
-   Priority mediation/dispute or Triage services

#### Public Recognition

Some hackers appreciate the opportunity to publicly display their accomplishments, findings, and achievements. Your organization can explore this in different ways:

1.  Report disclosures: The opportunity to share their findings to the public on social media platforms, appear on the platform’s disclosed reports category, personal blog posts, and more.
2.  Researcher spotlights: an opportunity for the researcher and program to publicly celebrate their research accomplishments, expertise, and more. For example, GitHub likes to interview researchers and  [give them a spotlight](https://github.blog/2021-11-01-cybersecurity-spotlight-bug-bounty-researcher-yvvdwf/), especially during Cybersecurity Awareness Month. Intel often uses the  [Chips & Salsa podcast](https://www.youtube.com/watch?v=5Pu4oKlBI5Y&list=PLk2sjg_-F-Md7-khvQrd2QiC_ZKvcLv3K)  to interview researchers.
3.  Co-sponsored blog or technical papers
4.  Invitations to speak with, or to, the company as either one-offs or part of a series or conference
5.  Coordinated Vulnerability Disclosure (CVD) in partnership with product teams

#### Swag

There are thousands of swag options a program can reward users. We’ve seen t-shirts, keyboards, backpacks, etc. It’s also a great way for the program to advertise their program, as researchers will sport their swag. They feel a sense of pride as bounty-swag is “earned” through submissions, achievements on the platform or program, competitions, and more. If your organization has the budget for swag options, the opportunities are endless. The more creative and funky your swag is, the more it appeals to researchers. Examples:

1.  The National Cyber Security Centre – Netherlands awards a trendy T-Shirt that the community enjoys.  [“I hacked the Dutch government and all I got was this lousy t-shirt”](https://jacobriggs.io/blog/posts/i-hacked-the-dutch-government-and-all-i-got-was-this-t-shirt-24)
2.  GitHub launched a  [Bug Bounty swag store](https://bugbounty.printengine.com/)  in which you can only earn a swag item if you’ve submitted a valid bounty report. The reward you choose, depends on the severity of your report.
3.  Yahoo’s Paranoids  [published a poster](https://www.yahooinc.com/paranoids/2020-bb-letter)  showcasing everyone who participated in the program during 2020.
4.  Project Circuit Breaker [published a cookbook](https://www.projectcircuitbreaker.com/recipe-book/)  featuring recipes from their PSIRT team, platform triage staff (including the CEO!), and hackers alike.

#### Exclusive Access

Hackers appreciate personal connection to program staff. They enjoy hearing from folks who are reproducing, fixing, and reading the bugs they send in. There are opportunities for personal engagement with researchers:

-   a slack community with other top performing researchers and program staff
-   access to Beta features
-   direct line of communication with product teams to provide security-relevant feedback

#### Product Credits

Some programs offer credits for researchers to use their products. For example,  [United Airlines](https://www.united.com/ual/en/us/fly/contact/vdppolicy.html), awards miles for valid submissions in their VDP program. Red Bull offers Red Bull Energy drink cans for valid submissions in their VDP program.

#### Continued Professional Education Credit

Many professionals in the security industry, as well as academics and students require Continued Professional Education (CPE) credits to earn and maintain certifications or show proof of work. Becoming a certified CPE provider with some institutions may be prohibitively resource heavy, however many CPE-accepting agencies simply require a basic certificate of acknowledgement from the work partner. Spend the time to learn what kinds of CPEs your participants need or want and you may find it to be a no-cost additive to your program reward suite.

## Build a Process

### Triage and Intake

Depending on the operational model that your program has chosen (i.e., intake is handled by internal teams, or you rely on platform-provided triage services), you’ll need to identify the quality bar for a report to be “triaged” (formally accepted).

This can generally be distilled down to the following key points across programs:

-   The report contains sufficient information to identify an impacted “asset” and review the claim of malfunction
-   The “asset” is within the published scope of your program
-   The observed (malfunction) behavior is confirmed to be reproducible, or otherwise demonstrates specific merit for action (e.g., a public exposure of sensitive data)
-   Your (internal) team(s) can make an accurate assessment of the severity of the report with the information provided

If you’re working with an external team that provides triage services, you may also want to add an extra layer of verifications prior to a report being unilaterally triaged by the external team given the expectations that are set with researchers when that occurs. Your platform or service provider may build this into their standard workflow already.

### Assign (Initial) Severity

When marking a report as triaged, you may also wish to adjust the researcher-facing severity assessment (some platforms may separate researcher-facing and internal-facing metadata fields) in order to both manage expectations and invite further discussion if they believe your assessment to be inaccurate. With this noted, there is often a trend of reports being submitted with significantly higher severities assigned by the researcher than may be the case for your established framework and/or final assessment. Similarly, assigning a severity at the time of triage only to adjust it later, either during the course of investigation or prior to rewarding and closing the report, can invite conflict due to a lack of context around the changes.

As with your program scope, it is strongly recommended that you provide public-facing guidelines around how you perform severity assessments,  [either with examples that researchers can reference](https://bounty.github.com/#rewards)  or a reference to a standardized scoring framework like  [CVSS](https://gitlab-com.gitlab.io/gl-security/appsec/cvss-calculator/),  [EPSS](https://www.first.org/epss/), or  [VISS](https://viss.zoom.com/). The more specific you can be in your guidelines, especially if you are not publicly disclosing reports, the easier it will be to manage expectations with researchers submitting to your program. Understand that even with a specific framework such as CVSS you’ll still frequently need to adjust the severity provided at the time of submission. We advise transparency when making severity adjustments: explain your reasoning and point to standardized scoring frameworks or definitions whenever possible

### Apply Severity to Payment

Expanding on the severity assignments, this may or may not directly align with how you’re scoring vulnerabilities  _internally_. For example, it’s common for security teams to have more generic “Low, Medium, High, Critical” severity assignments for internal use but use CVSS or another standard for external purposes (Bug Bounty, CVEs, etc).

While some large programs, like  [GitHub’s](https://hackerone.com/github), use their own severity assignments you’ll frequently see CVSS used. This allows for common language not just between security researchers and Bug Bounty program operators, but between industry peers. Using a homegrown standard such as  [Zoom’s VISS](https://viss.zoom.com/)  may work for you as long as it allows for that common language, CVSS just happens to be the most common across the industry. If you use a common framework, be sure that you state which version you are using and offer educational statements when disagreeing with a researcher’s understanding versus your own interpretation of the framework.

Handling disputes is a whole different topic, however it should be stated that using CVSS, EPSS, VISS, or any other common language is  _not_  a guarantee that you’ll avoid disputes. It’s often not possible for an external party to fully appreciate the impact that a vulnerability has, and program operators may also miss details that aren’t clear from reports. These frameworks simply allow for a clear discussion and provide an easier way to manage expectations around severity assignments and, by extension, rewards.

### Managing Payout Decisions

At this point we’ve talked about establishing your severity guidelines and payout thresholds, but how do you actually go about making sure that you’re paying the  _right_  amount based on your program’s policies?

It’s generally recommended that you have an established approval process for payouts. Ignoring the potential cost to your company from overpaying, this also helps to avoid individual bias problems that can occur from only having a single point-of-view on the severity of an issue.

This process can be as simple as an “authoritarian” model where any payout proposal must be reviewed and approved by someone senior to the proposing party, or relying on peer reviews within a team that is responsible for handling the Bug Bounty program.

In an “authoritarian” model, a proposal could be suggested in a bounty report or related piece of documentation. These would then require a formal sign-off from either the program manager or other responsible party before they could be paid out to the researcher.

On the other hand, an example of a peer review scenario could be weekly meetings with the team responsible for suggesting and approving payouts where all proposals can be reviewed, discussed, and updated or approved. This can also be done asynchronously, with thoughts left in relevant documentation related to each report, then using a similar “formal signoff” approach to the “authoritarian” model discussed above.

As noted above, this process should exist not only to mitigate any individual bias, but also to ensure that precedents are not missed/misunderstood, that individual knowledge-gaps are not overly influencing the outcome, and that other important details in the report and/or its impact are clearly accounted for. Just like it may take a few proposals, and discussions, to come to the correct severity assessment/payout for a report, it may take several iterations to identify the proper approval model as you scale and mature your program. There’s no right or wrong answer for how to structure your process, however it should be stressed that individuals should generally  _not_  make unilateral decisions on award values.

## Communicate Your Rewards

### Set Researcher Guardrails

As we discussed in  [Chapter 4](./chapter-4.md), it is critical to have a clear understanding of what your program’s intended scope includes, what scenarios are considered eligible, and what are not. Similarly, it is important to clearly communicate what expectations your program has for researchers when it comes to disclosure – both in terms of specific process and timelines.

While  [ISO 29147](https://www.iso.org/standard/72311.html)  is a more complete framework to build off of, many programs operate off of a more simple policy regarding coordinated vulnerability disclosure:

-   Do not disclose details of a report until X days (e.g. 90) after submission or until a fix for the issue has been made publicly available, whichever comes first.
-   Keep all details relevant to the submission within a noted submission framework (e.g., a report on a platform such as HackerOne, in a specific email thread, etc.)
-   Abide by all other rules specified for the program in question such as ensuring the target is in scope, data is handled responsibly, ensuring no/minimal disruption to services, etc.

For scenarios where a researcher is found to be in violation of your program’s guidelines, it should be made clear that they may forfeit any or all of their potential reward. How stringently you adhere to the terms of your program is up to your discretion. For example, if you have a policy that requires all content related to a report to exist solely on your reporting platform (e.g. Intigriti) and a relevant attachment is instead hosted on Google Drive a warning with a takedown request may suffice. By contrast, if a researcher discloses a vulnerability to another party (or publicly) prior to your established timeline you may wish to remove their eligibility for any reward. We have a saying “hackers gonna hack”; if you set rules you must be prepared to enforce them or you will find them to quickly become ignored at scale.

If you are using a platform provider such as HackerOne to host your program, you may find that there are additional broadly-scoped rules like a platform-based [Code of Conduct](https://www.hackerone.com/policies/code-of-conduct)  for researchers to adhere to. Often these will overlap with specific criteria that you have set for your program and will otherwise bolster your specific terms, but they can also offer an out-of-the-box starting point if you are building from nothing. If you have the opportunity to partner with a platform, it can be a valuable tool for mitigating potential abuse and bad actors that can otherwise cause significant disruption for your team. This overlap in terms and conditions allows flexibility for enforcement down the road. Collaborating with a platform you may identify a violation of a shared rule and collectively decide to warn on one policy and more strongly enforce the other.

### Communicating Your Payment Framework

Regardless of how you plan to incentivize researchers to submit reports to your program, it’s important to set expectations up front in order to help avoid disputes or feelings of ill-will. For example, if your program advertises a payout structure that includes rewards of $1,000 and above for Medium severity bugs and the submitter of a valid report receives an award of only $200 they will feel wronged.

Similarly, many programs find it valuable to perform some level of disclosure of their reports to help manage expectations and establish a loose precedence for reports in addition to a static resource outlining specific payout values or ranges. Using  [GitLab](https://hackerone.com/gitlab)’s program as an example, a researcher can get a solid understanding of what a Remote Code Execution (RCE) vulnerability could be rewarded with (example  [1](https://hackerone.com/reports/1679624),  [2](https://hackerone.com/reports/1609965)) and manage their own expectations while learning about past vulnerabilities in the process.

### Precedent

If you’re starting from scratch for your program you can likely skim over this sub-section with the following caveat – Remember that everything you pay for is setting  _new_  precedent. Take extra time to think about, and verify, the decisions that you’re making since you’ll want to use them as a reference point in the future.

Now, for the others in the audience, being able to cite precedence within your own program’s historical payouts is hugely helpful. Not only does this give you and your team the ability to have a reference point when sanity checking payout suggestions, but it also allows you to stand up to audits (e.g. ISO 27001).

## Final Notes

Payments seem simple on the surface – get a bug, pay someone for it – but as can be seen in this article the subject is considerably more complex.

When you’re planning out your initial payments to set precedent, or handling payments for a long-standing program, it’s important to keep the fundamentals in mind.

-   Are your rewards in line with what you advertise and do they make sense for their impact?
-   Are researchers submitting to your program provided with the information they need in order to understand the potential value of their time?
-   Do you have precedent that you can cite in disputes or audits?
-   If money isn’t on the table, what can you do to drive engagement?

With so many programs having public scoping, and being hosted on platforms like HackerOne, Intigriti, and BugCrowd, we encourage you to review other programs in your industry space to understand how your peers are operating their programs.

---

## Next Chapter: Handling Disputes

In the next chapter, we’ll discuss some tools and techniques for situations where things don’t go as planned. We’ll review formal dispute mechanics, mediation techniques, and ways to help ensure that everyone can walk away happy.