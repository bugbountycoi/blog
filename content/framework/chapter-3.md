---
title: "Chapter 3: Charter Your Program & Set Strategic Objectives"
date: 2021-07-28
authors: [
    "Anil Dewan",
    "Annika Erickson",
    "Kathleen Trimble-Noble",
    "Chris Holt",
    "Deana Shick"
    ]
tags: [
  "bug bounty",
  "security",
  "framework",
  "program management",
  "vulnerability disclosure",
  "strategic objectives",
  "stakeholder engagement",
  "leadership",
  "legal considerations",
  "communications",
  "metrics",
  "program charter"
]
---

If you have stumbled upon this Chapter of the [Bug Bounty Framework](/tags/framework), you may have decided that a Bug Bounty program fits your needs . Creating a program charter and defining your strategic objectives are important steps in defining **why** your Bug Bounty program should exist and what constitutes success. Setting strategic objectives, with clear goals, and establishing the program charter will help to ensure that you have a holistic program plan. The overarching objective for this type of internal documentation is to reduce internal roadblocks and develop a clear plan to help guide your program, while clarifying and articulating your goals and objectives to your internal organization. In this Chapter, we will describe the key steps to consider as you create your program’s charter. This Chapter builds on our previous Chapters where we define different types of Bug Bounty programs ([Chapter 1: What is a Bug Bounty Program?](./chapter-1.md)) and provide detailed information on strategic and operational factors to determine if a Bug Bounty program is right for your organization ([Chapter 2: Is a Bug Bounty Program Right for You?](./chapter-2.md)).

<!--more-->
{{< toc style="block" >}}

Whether you are considering a Bug Bounty program for infrastructure or product testing, some of the key steps to create a program charter include:

-   Defining the vision and strategic objectives
-   Identify key stakeholders
-   Establishing measurable success criteria
-   Considering a pilot Bug Bounty program

## Defining the Vision and Strategic Objectives

A well developed and executed Bug Bounty program has a multifold impact on your organization. In addition to potentially changing the culture of security, as you will see below, Bug Bounty programs can enable your organization to:

-   Pursue greater security through increased vulnerability reporting and disclosure, which is effective in helping your products gain a competitive advantage.
-   Secure the company’s own products and data by offering substantive and evidence-based disclosures, which ultimately protect your users and customers.

The impact of Bug Bounty programs extends to asset owners and/or product or engineering teams by increasing awareness of potential vulnerabilities and mitigation strategies during development and motivating those teams to approach development with a security-first mindset.

### Articulate the Business Value

When developing the business case consider the questions:

-   How does a Bug Bounty program add value to your organization and existing VDP?
-   What is the benefit of launching a program that is simple in concept but complicated to execute?

Answering these questions will provide you the justification that is often called on when communicating the business case to key stakeholders.

Bug Bounty programs can get _expensive_ in terms of the resources required to execute them effectively, not to mention the monetary cost of payouts to vulnerability reporters. Yet, industry research shows that the cost of **identifying and fixing** vulnerabilities early in the Software Development Lifecycle (SDL or SDLC) is **_considerably less_** than reacting to a bad actor exploiting an unknown vulnerability in your product or service (see Synopsys – [How much do bugs cost to fix during each phase of the SDLC?](https://www.synopsys.com/blogs/software-security/cost-to-fix-bugs-during-each-sdlc-phase/)).

At its most basic, a Bug Bounty program goes beyond the “security theater” of checklists and compliance by incentivizing reporters to help you identify and mitigate (especially, if corrected immediately) actual vulnerabilities in your offering portfolio. At its most powerful, a Bug Bounty program is a force-multiplier to better secure your products and ultimately customer’s systems and data. It can change the approach to security within your organization, and help improve your organization’s reputation for the delivery of safe, secure products and services. It is important to recognize that while a Bug Bounty program is only one tool, among many, in your security toolbox, it has proven itself as an efficient, cost effective, and scalable tool for collaborative security.

### Define the Vision: What Does Success Look Like and What Is the Intended Impact?

A properly executed Bug Bounty program is an incentivization mechanism to encourage vulnerability reporters with varying backgrounds and experiences to test your asset or product. A diverse set of eyes ultimately leads to a more secure product or infrastructure. While it may feel like there is a sense of urgency to start a Bug Bounty program, it is crucial that you take the time to lay the proper groundwork (see [Chapter 2: Is a Bug Bounty Program Right for You?)](./chapter-2.md).

You should have an existing, well-oiled VDP before evaluating whether a Bug Bounty fits your needs. You will want to allocate enough time to create a Bug Bounty program charter and obtain key stakeholder buy-in prior to building and launching a program.

### Define Strategic Objectives for the Bug Bounty Program

When pitching a new Bug Bounty program or time-restrained challenge ([more information in Chapter 1: What is a Bug Bounty Program?)](./chapter-2.md) you should determine measurable success criteria and objectives. Crisply defined Objectives and Key Results and/or Key Performance Indicators (OKRs/KPIs) help you prove to your stakeholders that you are hitting those desired objectives and fulfilling your vision. The section below on “Measuring Success” provides additional information on key considerations.

When defining the reasons for the program and its objectives, it is also important to decide if your Bug Bounty program is a mandate for compliance reasons or if it is to meet the other strategic objectives detailed below. You should consider incentives (vs._enforced_ compliance) for asset owners or product and/or engineering teams to participate in the creation of a Bug Bounty program.

Some example strategic objectives may be:

-   Honor companies Core Values ​– be the truth you are likely speaking to your customers.
-   Deliver best product to customer​
-   Opportunity to build better relationship with the research community​
-   Crowdsource security research for out of box thinking ​
-   Uncover untapped security issues that may not have been identified through traditional internal security reviews
-   Highlight/uncover gaps in our mindsets around security

Examples of more in-depth objectives or key performance indicators may be:

-   Improve the security posture of a product or service by identifying vulnerabilities and fixing issues upon discovery.
-   Establish a practice within the organization of continuously testing, or frequently testing in the case of time-restrained challenges, as software as it is being developed.
-   Move vulnerability detection upstream (see “Shift Left” in [Chapter 2](./chapter-2.md)).
-   Build trust between the organization’s security team and vulnerability reporters (and vendors or third-party coordinators, if applicable), streamline communications, and develop processes for resolving differences or disputes related to vulnerabilities, severities, or payments.
-   Work with reporters to understand the “adversary mindset” and share that knowledge with asset owners, product and/or engineering teams to improve internal development, test, and security practices.
-   Integrate Bug Bounty programs as a standard practice within the organization including key stakeholders such as legal, communications, finance, leadership and so on.
-   Change the culture of security within the organization — moving from checklist and compliance to meaningful security practices by design.

## Identify Stakeholders

Throughout this Bug Bounty Framework you will see us continue to drive home the concept of stakeholder engagement time and time again. Identifying and working with stakeholders can be frustrating and exhausting but it is absolutely a requirement at every stage of a Bug Bounty program. Working together on the shared vision, goals, roles, scope, ROE, triage, payment, and remediation is important to execute an effective and efficient Bug Bounty program.

Generally, Bug Bounty programs are owned by an organization’s security team. This team is responsible for structuring the program, developing the business case, establishing the charter, and overseeing and executing the reporter incentives. However, like most complicated or sensitive projects, the program works best when executed in collaboration with other key stakeholders in the organization.

### Executive Leadership

Leadership equities include ensuring the success of the program through KPIs, understanding cost and resource requirements, supporting the teams, and communicating the vision for the program (such culture change, security awareness, and so on). It is important that executive leadership buys in and supports on the objectives and the estimated resources for the Bug Bounty program (see “Executive Leadership Buy-In” in [Chapter 2](./chapter-2.md)).

### Asset Owners and Product and/or Engineering Teams

Asset owners and product and/or engineering teams are a key stakeholder that should be engaged in the process. These folks should participate in scoping and developing ROE. The need to mitigate vulnerabilities can have a considerable impact on the asset owner or product and/or engineering team’s milestones. In general, these folks should develop a strategy to address the reporting coming through the Bug Bounty program.

To ensure that reporters are not just focusing on “low hanging fruit,” we recommend asset owners and product and/or engineering teams lean into security assessments (Bug Bounty or otherwise) prior to having an asset or product in scope (even though there may be concerns or fear about “looking bad” or having assessment interfere with development). This way, you will receive more-valuable findings when your Bug Bounty program goes live.

### Legal

An organization’s legal team has important equities in a Bug Bounty program. Organizational guidelines, ROE, terms and conditions for reporting, triage, validation, and payment need to be created, evaluated for legal risk, and approved. In addition, the legal team should be aware of potential leakage of personally identifiable information (PII), should a reporter find this type of vulnerability, and establish rules for how it will be managed. Another scenario may be what to do if a reporter does break the ROE or otherwise acts maliciously. Your legal team should determine the scenarios or triggers for outside counsel, if needed.

### Communications

Messaging the existence of a Bug Bounty program is generally a positive (from our point of view) but each organization should evaluate its benefit and value to it. Communications teams play a foundational role in publicizing the existence of a Bug Bounty program within an organization, among the vulnerability reporters, and in the media. Showing support, providing information, and being consistent — especially in the event a critical vulnerability is found — is critical to maintaining a positive relationship with the security community at large.

### Define a RACI – Responsible, Accountable, Consulted, Informed Matrix

When developing the Bug Bounty charter and aligning stakeholders, we recommend creating a Responsible, Accountable, Consulted, Informed Matrix ([RACI Matrix](https://www.cio.com/article/2395825/project-management-how-to-design-a-successful-raci-project-plan.html)) for your Bug Bounty program. A RACI Matrix is helpful to understand when to bring in certain stakeholders, who is responsible for certain parts of the process, any escalation paths, and how to work together on common problems. Bug Bounty programs can be fast moving, and it is good practice to have a clear understanding of each stakeholder’s role in an organization. A Bug Bounty program may unveil high-profile issues, which may require an immediate response or otherwise, be potentially embarrassing for an organization. In such cases, it is even more important to have an agreement of roles and responsibilities for the program to pursue agreed-upon action.

## Timelines

Creating a charter for your Bug Bounty program is a detailed process and takes time. The duration of a program could range anywhere from months to a year or more, depending on the size of an organization, leadership, stakeholder buy-in, strategic priorities, and available resources.

For the Bug Bounty program itself, timelines also vary depending on whether the project is a pilot, time-restrained challenge, or a continuous program (see [Chapter 1](./chapter-1.md) for more information), or if your program is focusing on infrastructure compared to products.

For example, for an infrastructure-focused, a time-restrained challenge on a scoped asset or small number of assets may be 12 weeks — from initial kick off to reporting findings to leadership. 12 weeks would be broken into:

-   four weeks for set-up including aligning on scope, ROE, incentive models, and getting approvals from stakeholders
-   four weeks for the actual assessment with reporters, which includes releasing assets in scope, intake, triage, validation, and payout
-   four weeks of wrap up where the results are tabulated and presented to stakeholders within the organization

Note that mitigation is _not specified_ in this timeline, as it generally requires a separate process depending on the organization, asset and/or product.

Continuous programs are, of course, continuous. It is important for continuous programs to ensure that periodic summary reports are shared with stakeholders and reviews scheduled to evaluate the programs success per established OKRs or KPIs.

## Circulating Program Charter and Soliciting Feedback

In any collaborative environment, it is important to circulate working agreements and strategic documentation to give stakeholders the opportunity to ask questions and voice concerns. Not only will the interactions improve the quality and clarity of your plans and documentation, but also solidifies the buy-in from reviewing groups, having the opportunity to contribute meaningful input throughout the process.

### Setting Expectations Early

Set clear expectations for feedback deadlines so there is ample time to collate ideas shared and incorporate them into the review discussions. Once initial feedback has been shared, set up conversations with key stakeholders as detailed above to review their thoughts and understand the feedback in the context of their individual or collective workstreams. A successful Bug Bounty program relies heavily on the expertise and support of various partners in the organization. These conversations should serve as an opportunity to better understand your stakeholders’ priorities and how their collaboration on the Bug Bounty program aligns with the common vision and value of security for the customer or end user. Often, we can glean additional sentiment from these discussions that may not always be captured in written feedback. Document these conversation outcomes so that they may be considered, and solutions reflected in your formal revisions of the charter.

### Revise and Iterate Quickly

Upon understanding concerns and incorporating any subsequent changes or updates to the charter in response, make a concerted effort to iterate quickly and communicate results broadly. A short turnaround time maintains the momentum and allows you to begin implementation with your stakeholders’ backing. Understand that you will almost certainly encounter many new challenges and organizational roadblocks in actual program implementation, and the charter should be established with every intention of reviewing and revising it on a regular basis in alignment with evolving broader security strategy and resources. Communicate the intended frequency with which this review will occur so everyone can operate with certainty and conviction, knowing that in the meantime they are encouraged to identify and voice opportunities for improvement.

## Incentives for External Reporters and Internal Teams

There are a number of informed decisions to be made in the chartering phase of establishing your Bug Bounty program. While many of these are tactical implementations, your broader program strategy should inform these decisions.

A Bug Bounty program can only be of any value if you have reporters actively participating in it and technical assets or products as targets to put in scope. This depends on having an effective incentive model, both for reporters and for asset owners or product and engineering teams to participate. These should be factored into your planning so they are broadly agreed upon and provide a consistent experience for reporters and internal stakeholders alike.

Regardless of whether your program makes a public or private debut, you need to publish a program policy visible to all who have access to submitting reports. (Public program policy, terms and conditions will be discussed in depth in a later chapter) This serves as a basis for accountable decision making in a very busy environment, and also demonstrates to reporters that you intend to operate the program with a level of objectivity and fairness to all.

### External Reporter Incentives

While some reporter incentives are financial, they can be multifaceted to keep reporters with valuable skills interested in your program. This is also a great area to sprinkle in some creativity to make your program stand out. A few tactical examples of incentives that can keep reporters coming back are:

-   Payment on Triage: Consider awarding reporters right when findings are confirmed as valid and assigned to owning teams internally. At this point, the reporter’s work is done, and timely payment is greatly appreciated.
-   VIP / Loyalty Program for Top Reporters: Develop criteria by which to acknowledge reporters who have demonstrated top value and made repeated contributions to your program.
-   Time Restrained Promotions / Challenges: Invite VIP reporters to exclusive challenges or promotional events where they will be some of the first in the program to test on new scope – this lowers their likelihood of finding issues that will later be deemed duplicates, which can feel like time wasted.
-   Acknowledge Collective Impact: Reporters want to know they are making contributions to your organization’s overall security. Consider sharing a reporter newsletter, writing a blog post, awarding impact badges, publishing a thank you page, or other avenues to publicly acknowledge your reporters’ contributions so they may gain career credibility with the industry as an audience.

### Internal Incentives

It’s important to think of asset owners or product/engineering partners as customers of your service, as they are the ones who are typically tasked with fixing findings uncovered by the Bug Bounty program. When facing challenges, be sure to engage new teams early and be clear about the value you seek to offer as a program. A few tactical examples of incentives that can keep internal teams happy are:

-   Internal Recognition: highlight teams who fix vulnerability reports the fastest, or whose target passes the stress testing of incentivized time restrained engagements with minimal findings.
-   Charitable giving / sponsorship: Consider this as a form of award for the teams earning internal recognition, empowering them to give back and valuing their continued partnership.
-   Publicity / PR: This added layer of security can be a great talking point with existing and prospective customers and partners as it demonstrates commitment to customer trust.

Most importantly, their Customer is safer using their product.

## Consider a Pilot

Establishing a Bug Bounty program is no easy feat. If you are feeling overwhelmed, or if your organization is not quite ready to jump into the deep end, we recommend designing and launching a pilot, or “test” program before establishing a fully-fledged, continuous Bug Bounty program. A pilot may be warranted if you are considerably changing your existing Bug Bounty program, too. It is worth mentioning here the value that Crowdsourced Provider companies bring to launching a pilot or establishing a Bug Bounty program. There may be many reasons your organization would want to seek outside advice and expertise to launch a Bug Bounty program.

A pilot Bug Bounty program is often a small scale proof of concept for leadership and stakeholders that can help codify your strategic objectives long term. It offers an opportunity for an organization to learn best practices, develop a playbook which may include adaptations specific to the organization and product, educate leadership and stakeholders by “doing” a Bug Bounty, and preparing the security, engineering, and project management teams for a larger program.

Examples of specific objectives for a pilot Bug Bounty program could be:

1.  Learn how to define scope and which assets are suitable for a bounty. This is determined by evaluating the potential utility of the findings towards your assets or products, the maturity of the product and engineering team, and their ability to respond and mitigate findings. This objective could also define the size of the engagement – for example: is it a single asset or multiple assets?
2.  Decide the intent of the program. Is the intent to discover how vulnerable a product is or identify where the weaknesses might be? In the context of a pilot program, this would help to determine what future, continuous Bug Bounty programs should focus.
3.  Understand how to establish ROE. A pilot Bug Bounty may uncover unknown gaps and corner cases for vulnerability reporters. You may find that reporters are delivering reports you did not expect, or uncovering unknown gap areas in your internal handling processes.
4.  Assess skills and resourcing for the triage team for validating reported vulnerabilities. You may find that additional help is required, or that your VDP may need to move from a distributed model to a centralized model, for example (more information in the [PSIRT Services Framework](https://www.first.org/standards/frameworks/psirts/psirt_services_framework_v1.1)).
5.  Assess skills and resourcing for the asset owner or engineering team. Just like the triage team, you may find that asset owners or the product teams require additional resources to receive the reports, answer questions from reporters, and ultimately mitigate vulnerabilities in a timely manner.
6.  Refine and establish policies. A pilot Bug Bounty program can help you hone triage, validation, and incentive SLA. Some examples include time to triage and validate, whether payment is offered at the time of identification or after mitigation, handling duplicate findings, whether financial incentives or bonuses are offered to reporters based on severity, quantity, or creativity, retest criteria, among others.
7.  Determine engagement with externally available resources. A pilot Bug Bounty program can determine whether the organization wants to manage the entire Bug Bounty process internally or contract with a commercial crowdsourced Bug Bounty platform (see [Chapter 2](./chapter-2.md)).
8.  Exercise and establish common timelines and expectations. By running the end-to-end Bug Bounty process with a pilot including all the stakeholders can help iron out issues, responsibilities, concerns, and questions.
9.  Obtain an estimate of the costs. A pilot will help you understand true cost of launching and managing a continuous Bug Bounty program including potential payout amounts to reporters.
10.  Share findings and lessons learned. A pilot can encourage a conversation with leadership and stakeholders by using the data to adjust the process to ensure a continuous program can be launched successfully.

Once a pilot Bug Bounty program has been completed and results evaluated, an organization can investigate next steps to establish an official program and scale it over time. Even though a pilot Bug Bounty is not required to launch a full program, it is still recommended as an important step.

Assuming the pilot was considered successful, the next step is to determine the objectives of an official, ongoing program. The objectives of an ongoing program are similar to the pilot but with more emphasis on finding vulnerabilities and securing your product; maturing the process within an organization (and with a vendor if you program is structured as such); and ensuring that the program is able to meet benchmarks such as time to triage, time to remediate, and time to pay.

## Measuring Success

Whether you are instituting a continuous program, time-restrained challenge, or have opted for a pilot, you will have to show how your program is meeting your defined goals. The stakeholders defined above will likely begin asking questions, and you should be prepared to highlight your program’s value. Often, a Bug Bounty program’s impact can speak for itself when the right OKRs and KPIs are defined, tracked, and communicated to stakeholders. This is crucial to define some key metrics upfront so that you can show value right away. With time, you will develop a deeper understanding of how to measure your program’s success as it impacts key areas of your broader security strategy.

### Leveraging Program Data

Bug Bounty programs are unique in that they are a good representation of how malicious actors could exploit products and services. Data from this program should serve as inputs to other key security partners and programs to inform a better understanding of organizational risk at a root cause level.

The goal of an effective VDP program is to have a profound impact on risk reduction beyond being an expensive game of find-and-fix that continues in perpetuity. A well-developed Bug Bounty program is a force multiplier for your organization’s security ecosystem. Bug Bounties elevate VDP’s to the next level. They move from a “see something, say something” of a VDP, to “invitation to hack.” The ability to transition from being a source of risk _discovery_ to that of risk _reduction_ is one of the primary indicators of a program’s maturity over time. See the graphic below for a visual representation of this goal.

![risk reduction flywheel](/images/leveraging-program-data.png)

A few considerations for how to make use of program data include:

-   What gaps lead to the reports?
-   How to augment processes to close gaps?
-   How can findings encourage education, tooling, or processes to avoid re-introducing the same issues again?
-   What are the most common vulnerability classes uncovered by the program?
-   Are these vulnerability classes consistent if we look at the distribution by product?
-   How can we distinguish between lower researcher activity and improved security posture?
-   Can we measure the impact of security investments made in different areas over time?

The fact is there are endless ways to slice and dice the data from a program, and different approaches should be taken depending on the intended insights. This will be discussed in depth in a later chapter.

### Program Coverage

When leadership is making substantial investments in any program, they want to understand the reach it has across everything the customer is exposed to. Are you engaging all the right stakeholders to ensure all your organization’s technical assets or products are benefiting from the Bug Bounty program’s efforts and resources? This can be extremely complicated to measure, but starting somewhere is better than not measuring at all.

As your program’s scope grows, we recommend keeping track of testing environment limitations and other intricacies associated with each asset or product so you can perform an informed assessment of the breadth and depth of coverage the program has in each general product area.

### Moving the Needle on High-Level Business Objectives

At this stage of your planning, you must have a strong sense of how a Bug Bounty program should be contributing to your organization’s high-level business and security objectives. We recommend that you revisit periodically whether your program is enabling meaningful progress toward these high-level security objectives and, if not, consider where the program may need to adapt in order to do so.

### Culture Impact

Bug Bounty program can be a vehicle for change in areas such as security transparency with customers, industry education by learning from our mistakes, and so on. If your organization has a broader vision to set the standard for transparency with regard to customers’ security, but are currently operating under a private program or other constraint, you may want to assess what it will take to actually _be_ the example you are advocating.

## Final Notes

Given the interconnected nature of organizations, assets, products or services, when one of us does better at security, we all benefit. Security professionals and engineers bounce between organizations, and they bring their experiences and expertise with them. If we can influence a culture of transparency and education around leveraging reporter talent and advocating for public disclosure, we make security _everyone’s_ responsibility. Let’s propel the industry forward.

We hope this Chapter of the Bug Bounty Framework helps you set your vision and your strategic priorities. Remember, each organization has different needs and requirements, so there is no one-size-fits-all solution for Bug Bounty programs.

---

## Next Chapter: Budget and Scope

In  [Chapter 4](./chapter-4.md), we take a deep dive into determining the right budget and scope for your Bug Bounty program. We will discuss how to determine the “surface area” of your program and go into how you can estimate resources, and appropriately structure your Bug Bounty personnel. We will also highlight common problems Bug Bounty programs face in this area, and different ways to move your program