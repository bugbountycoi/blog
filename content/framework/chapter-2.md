---
title: "Chapter 2: Is a Bug Bounty Program Right for You?"
date: 2021-06-23
authors: [
  "Sean Poris",
  "Johnathan Kuskos",
  "Josh Dembling",
  "Katie Trimble-Noble",
  "Chris Holt",
  "Deana Shick",
  "Christopher Robinson"
]
tags: [
  "bug bounty",
  "security",
  "program readiness",
  "framework",
  "vulnerability disclosure",
  "risk management",
  "program management",
  "stakeholder engagement",
  "legal considerations",
  "communications"
]
menu:
  framework:
    weight: 3
---

By now, you have read [Chapter 1](./chapter-1.md), and you may be wondering if a Bug Bounty program is right for your organization. You might be intrigued by the idea of interacting with researchers, and wondering about the risks of exposure that comes with researchers hacking away at your product. Perhaps you or someone in your organization has floated the idea of a Bug Bounty program, and you are wondering if it will allow you to meet the trend that you observe in the industry today. The decision to establish a Bug Bounty program should not be made lightly or as a reaction to some unexpected or sudden event.  It is a decision that should be evaluated and executed with business-like objectivity and with the unique needs and culture of your business in mind.  

<!--more-->
{{< toc style="block" >}}

It is worth noting that Bug Bounty programs are not magic bullets, nor should they be used to merely “pay off” security researchers or control their disclosure.  Do not expect to deploy a Bug Bounty program to attempt to control the influx of security vulnerabilities found by security researchers outside of your company.  Starting a Bug Bounty program for the wrong reasons or with the wrong intent is a recipe for failure that may also have adverse effects on your brand. A Bug Bounty program is a tool that, if established and deployed properly, can help you build a strong relationship with the security researcher community while strengthening your products’ security posture. 

Throughout this chapter we will cover objectives and capabilities of your Bug Bounty program, and explore how to identify business objectives that might shape your decision to establish a Bug Bounty program. It bears repeating, a Bug Bounty program while operationally stands alone, is something that you want to integrate into your existing vulnerability handling and disclosure program.

After exploring these considerations, you might decide your company needs a Bug Bounty program.  The support of external stakeholders, aka the vulnerability researchers and reporters, is as important as your internal stakeholders and staff. Be sure to stack your team with legal support, communications and public relations specialists and Bug Bounty subject matter experts.  A strong foundation will help you gain and maintain the long-term support of your executive team.  Executives across your company are much needed allies.  By helping them understand the tangible and intangible benefits of a Bug Bounty program they can help to ensure the budgetary needs of your program are met as well as give you a sense of the risk that they are willing to take with the Bug Bounty program and researcher interactions. 

## A Note on Crowdsource Platforms
Before getting started on the rest of this chapter, we would be remiss if we didn’t point out that it’s worth considering consulting with a commercial crowdsourced Bug Bounty platform if this is your first Bug Bounty program.  In general, these platforms can provide you with the following (and more):

* Consulting services to help you start and shape your Bug Bounty program.
* Access to a tool that will help you manage incoming reports and payments.
* Access to their community of security researchers to evaluate your products. 

Most platforms will help you evaluate your program needs and develop a strategy that is tailored for your business and community needs. Their analytics and staff can help you understand their services, support, and cost models. However, not all platforms are alike and it will take some research on your part to evaluate which, if any, crowdsource platform fits your needs and budget. Remember, it’s not as easy as just having a bundle of cash and paying researchers. For you to be successful, you will need to have a strong foundational Vulnerability Disclosure Program (VDP), and be willing to care for, groom, and feed your Bug Bounty program. For this reason, it can help to have a company that specializes in providing this kind of service to support you.  

## Do you need a Bug Bounty Program? 
To determine if you really need a Bug Bounty program beyond a VDP you need to have your eyes wide open about the benefits. Consider this list of questions:

* Would you find value in bringing a wide variety of skill sets and backgrounds to bear in looking at your infrastructure or products? 
* Do you already have a strong security program that you would like to augment (the “belt and suspenders” metaphor in security) with unique research? 
* Would you like to enjoy industry recognition for having the confidence in your brands and transparency in your operations to accept, triage, and remediate vulnerabilities identified from the researcher community? 
* Do you need or want to improve or build relationships with the security researcher community outside of your company?  
* Are you able to secure funding for and build metrics for a Bug Bounty program? 

If you can answer “Yes” to these questions, you might be in a good position to launch a Bug Bounty program.

## Considerations/Critical Success Factors
There are many considerations and critical success factors when determining if a Bug Bounty program is right for your organization. For your program to achieve its objectives, there are a handful of dials you must understand and be capable of tuning in order to have a thriving program. This isn’t an exhaustive list, and your individual needs may be different, but you should take these into account prior to launching a program.  Do you have:

* An existing foundational VDP
* Executive leadership buy-in 
* Labor support models – Bug Bounty Staff
* Understanding of existing security posture
* Legal and Competitive Landscape
* Communications plans
    * Internal
    * External
    * Reporter Considerations
    * Contingency Planning

## Existing Vulnerability Disclosure Program
A formal VDP is the cornerstone of a well-managed security program.  Fundamentally, a VDP is simply a way for researchers outside and inside your organization to report vulnerabilities they identify in your infrastructure or products. A VDP allows for an organization to receive reports, mitigate the findings in those reports, and publicly disclose any vulnerabilities once mitigations are made available. VDPs support Coordinated Vulnerability Disclosure (CVD), and need to be able to account for many different types of disclosure scenarios, including:

1. A vulnerability that impacts a single product
2. A vulnerability that impacts multiple products
3. A vulnerability that impacts multiple vendors (simply called Multiparty Coordinated Vulnerability Disclosure, or MPCVD)

These three base scenarios can increase in complexity as more products and/or parties are involved in a case.  The following are additional considerations or common scenarios for most VDPs, and may influence the way your company handles an incoming report:

* Was the vulnerability found and reported by an external researcher? 
* What if two separate external entities find the same issue at nearly the same time? 
* What if one of more vulnerabilities was also discovered by internal testers or red teamers?

[ISO/IEC 29147](https://www.iso.org/standard/72311.html) and [ISO/IEC 30111](https://www.iso.org/standard/69725.html) for vulnerability handling and disclosure are useful references to help you identify and implement processes within your VDP.  We will not dive into the specifics of the above scenarios, but your VDP must be robust enough to account for these different situations before considering a Bug Bounty program.

*To learn more about establishing a VDP, which is typically run by a Product Security Incident Response Team (PSIRT) within an organization, you may want to review the [PSIRT Services Framework](https://www.first.org/standards/frameworks/psirts/psirt_services_framework_v1.1) developed by the PSIRT Special Interest Group within FIRST.org, or the [CERT Guide to Coordinated Vulnerability Disclosure](https://vuls.cert.org/confluence/display/CVD) developed by Carnegie Mellon University’s CERT Coordination Center (CERT/CC).*

## Vulnerability Management Processes
Three areas of particular interest are your ingestion capability, disclosure mechanism for when a vulnerability report goes public and remediation strategy.

### 1. Vulnerability Intake
The vulnerability intake process is the front-door to your VDP and/or Bug Bounty program. How vulnerability reporters interact with your program tends to color all subsequent interactions with that person or group. We recommend having a clear, simple reporting process that captures the information you require to take further action. An intake mechanism should explain what your organization does and does not consider a vulnerability. Additionally, it should set clear communication expectations between your organization and the vulnerability reporter throughout the lifecycle of a vulnerability – from intake to disclosure.

An intake mechanism can take many forms: a web form, an email box, an external defect tracker, even crude tools like social media monitoring can be used to signal the beginning for an interaction with a researcher. You should pick the tool that fits best to your organizational needs. It is important to balance the ease of access with capturing the relevant vulnerability information so that your organization can address the vulnerability properly. Optimally, this intake mechanism is an integrated part of an end-to-end enterprise bug management system. A bug management system will help you keep track of all the reported vulnerabilities, their statuses, resolution, and disclosure time periods.

While a VDP generally covers most infrastructure and/or products of an organization, a Bug Bounty program may be scoped to focus research on specific products or assets. You can find more on different types of Bug Bounty programs in [Chapter 1: What is  a Bug Bounty Program](./chapter-1.md). Ensuring clarity around what is considered in and out of scope for a Bug Bounty is critical to manage expectations with vulnerability reporters. (We will discuss scope development and implementation in more detail in a future chapter.) 

In terms of a broader Bug Bounty program, your intake process will be tested as the volume of reports increases due to the financial incentives you have now placed on the identification of vulnerabilities.  This can be “bursty” – with significant pops when you first launch a program and then again when you add or significantly change assets.

### 2. Disclosure Mechanisms
In comparison to intake, which is the first step of your vulnerability management process, your disclosure mechanism is the final step. Disclosure is the successful result of your entire VDP and/or Bug Bounty program. It is important to consider how you plan on sharing information about the vulnerability and its mitigations, workarounds, or resolutions, with your end-consumers, partner ecosystem, and the technology community at large.

From start to finish, an organization requires tooling, internal routing policies and guidelines, as well as editing, review, and appropriate approvals for public disclosure documentation. Planning sufficient time for proper vetting and approval when designing the process helps to avoid problems or delays due long term.

Beyond the advisory itself, the following are common considerations when considering various disclosure mechanisms and policies:

* Does your organization have a complete understanding of stakeholders you need to tell about the vulnerability? 
* Does your organization have accepted practices and processes in place for the delivery of hardware/software updates to customers?

### 3. Remediation strategy
Just like your intake and disclosure processes, remediation falls into the purview of a larger VDP, not just the Bug Bounty program.  You’ll need to tie into existing processes that identify the following:

* Who provides the remediation guidance for the vulnerabilities, particularly if they are recurring?
* Who owns the actual fixing? 
* What are the remediation SLAs (ideally tied to severity)?
* Whose responsibility is it to monitor those SLAs and handle exceptions? 

In general, when developing a Bug Bounty program, you should place ownership on teams instead of people to avoid single points of failure, though you should have a single responsible party within the team to drive resolution. Launching a new Bug Bounty intake pathway will place constant pressure on these remediation processes, so these processes may need to flex as appropriate.

Upon instantiating a new Bug Bounty program, time constrained challenge, or change in Bug Bounty scope, you may receive an influx of reporting. We do not recommend removing an asset from your Bug Bounty scope simply because your organization is afraid of this influx. It is common to encounter resistance from engineering teams who may want the Bug Bounty scope to be reduced (they are fixing the issues found, after all). Be empathetic, prioritize the most important things first for them, and be prepared to discourage descoping with a thoughtful risk-based approach to handling the volume and resolution of bugs. You want to understand the nature of the risk to take action on it. This enables you to ask your organization for increased resources with empirical evidence to support your vulnerability management process, which will ultimately allow the Bug Bounty to grow. This also helps you support your engineering/product teams with data for them to potentially request funding for more engineers or at least overflow support.

### Executive Leadership Buy-In
Developing and maintaining support from key stakeholders across the organization is crucial for a successful Bug Bounty program.  You will need the continual support from Legal, Finance, Communications, Public Relations, Engineering, Business, and Enterprise Security. Developing this support may require you to pitch a Bug Bounty to these stakeholders. The following are a few of many considerations when developing collateral for executive buy-in:

* How does an engineering team benefit from a Bug Bounty?
    * What are the risks of not participating?
    * What should your engineering teams expect from your program?
* What benefits would the business have if your program were successful? 
    * Would there be more public trust in your products or brand?
    * Would a Bug Bounty allow for a competitive edge in the market landscape? 
* How would Enterprise Security be involved in your program?
    * What are the requirements for in-house support?
    * What are the requirements for a crowdsourced vendor?
    * How will you handle and secure your vulnerability and payment data? 
* Are there any legal considerations when supporting your Bug Bounty?

### Budgeting
One of the big balancing acts for a Bug Bounty program is how much budget to set aside, and how to demonstrate the value for the budget spent on the program. This entails building financial models for the number of reports, the number of payouts, and the value of those reports. A well-documented business case will help you fund and defend your program.  You can leverage existing data from your vulnerability management program to understand the makeup of severities in your ecosystem and trends, in order to overlay that against annual projections. The only constant of Bug Bounty is change, so include some wiggle room in your budget to account for gaps in your process, or potential unknowns you didn’t consider when scoping and launching the program. Work with your immediate team to identify how you will handle budget shortfalls or surpluses. Nothing kills the momentum of your program and the trust of your researchers more than pausing or canceling your program because you ran out of fiscal year funds.

Envision what success of your program looks like and build in metrics to help demonstrate that success to your executives. Some common aspects to consider are:

* Are we looking to find a certain number of high severity bugs? 
* Are we looking for a focal area in certain product lines? 

There are a myriad of metrics paths you can take to measure your program. Identifying what your program should be achieving, then showing how to get there to your internal stakeholders will bolster confidence in your program and ease out year budget requests. We will be discussing Budgeting in more depth in a later chapter. 

### Labor Support Models – Bug Bounty Staff
There are a variety of ways to fund and support the staff for your program, but the following are common types of roles you’ll need to include:

* **Bug Bounty Program Lead**: This role provides the day-to-day care and feeding of the program. They run the processes, update the appropriate work instructions, playbooks, runbooks, or other documentation, request program funding, manage budget, and deal with the inevitable exceptions.  
* **Vulnerability Management Analysts**: These can come from a pool of vulnerability management resources, product security, dedicated Bug Bounty staff, or even outsourced triage-staff. These are the people who confirm that the Bug Bounty reports have the appropriate information to characterize severity and identify remediation options. They are technical resources who understand the vulnerability details and real impact of the vulnerability, or they know how to quickly obtain that information from around the organization.
* **Project Manager**: Depending upon the activities you have planned for your program, you can either hire or matrix a project manager for your program.  This role helps in planning live events, managing external deliverables, helping with internal awareness, or a host of other needs your program may have.
* **Operations Analysts**: Your Bug Bounty program will provide tremendous insight to the rest of the organization about how the information security program is doing and how successfully remediation efforts are executing.  Someone already on the team can fill this role, but it is crucial to mine your program for trends and inform other areas of the organization on what is going well, whether or not you are achieving your goals, and where additional investments might be needed to shore up security controls. An organized, metrics-driven approach will give the teeth you need when suggesting improvement efforts around the organization or even within your own program.

#### Understanding Your Security Posture
Consider the security maturity of your assets at the outset of your Bug Bounty program initiative and consider what should be in and out of scope (more on this in [Chapter 1](./chapter-1.md)). Before you include an asset in your program’s scope, you should understand to what extent engineering and/or Enterprise Security has already hardened it. At the very least, some meaningful and dedicated effort should be made to reduce low hanging fruit and identify obvious risks before the asset is officially in scope. Although identifying risks via your VDP is necessary to have a more comprehensive view of the real risk in your production environment, it’s also the most expensive way to identify those risks. 

A few ways to perform due diligence include:

* Code or process reviews
* Use of common fuzzers against products
* Software scanning tools
* Dependency checking threat modeling/attack surface analysis
* Penetration testing and/or Red Teaming

These methods can pick off many problems before they get released for vulnerability reporters to find and report through your Bug Bounty. Hopefully your internal testing can capture these issues so the issues reported to you through your Bug Bounty program have higher quality and impact.

#### Current Due Diligence and “Shifting Left”
Much of the information security community encourages “shifting left,” where more and more security is designed into the product or infrastructure. Bug Bounty programs, on the other hand, are on the opposite end of the spectrum, since they are designed to poke holes in an existing product or infrastructure. As such, it’s important that issues found via a Bug Bounty are only things that evaded **all other previous forms of due diligence or risk-based assessment.**

The vulnerabilities discovered through a Bug Bounty program may identify weaknesses in other security services you offer your organization. For example, you may identify trends in reporting that are an indicator that developer education on vulnerability management may be lacking, or perhaps unified code standards aren’t being followed. Bug Bounty programs should not only be identifying all the risks that slip through the gaps of the “shift left” initiatives, but the findings should be further utilized to guide efficiency tweaks in those same initiatives. This will help shore up your Software Development Lifecycle (SDL), identify controls that are not effective, or even identify controls that are absent. This is a major benefit to having a Bug Bounty program that will likely resonate with your stakeholders.

### Legal and Competitive Landscape
As part of your initial requirements gathering, and well before you roll out your Bug Bounty program, you should explore the idea with your Legal team and understand the relevant regulatory/contractual/legal requirements and constraints you might have.

In today’s landscape, Legal approval is a lot less of a barrier than you might think. Consulting with your internal legal team will ensure you’re not setting off on a path that is counter to your organization’s goals, policies, or needs.  Your Legal team will be aware of contractual obligations and legal constraints from both local or international laws that may enhance or inhibit your desired path forward.  They also can assist in crafting the appropriate language around contracts, program policies, or **Safe Harbor** protections for both the organization as well as any researchers participating in your Bug Bounty program. Laws can vary drastically state to state, domestically, and internationally, so it is imperative to not skip this step. Partnering with the legal team will ensure you avoid problems in the future. (We will discuss Safe Harbor, Terms of Service and other legal considerations, development and implementation in more detail in a future chapter.) 

It is vital to conduct an analysis of what your peers and competitors are doing in this space as well. If no one else is doing it, your Bug Bounty program could be seen as a sign of maturity and accountability, thus improving your company’s stature in your segment and encouraging potential researchers that you are a good and fair partner to deal with on security disclosures.  The opposite can also be true; you could be seen as shamelessly self-promoting and virtue-signaling, which may have the opposite effect you were seeking by creating this effort. This analysis can inform you and your leadership of the value and risks that may come with implementing a Bug Bounty program.

### Communications
A Bug Bounty program requires proper communication to ensure expectations are set and properly internalized.  One of the major differences of a Bug Bounty program compared to a VDP is that they are actively incentivizing stakeholders outside of the company – proactive security researchers.  A two-pronged communication strategy is necessary for scalability.

#### Internal
You need to identify the kinds of information the core stakeholders we mentioned earlier need to know about your program.  This is a Bug Bounty program “pre-launch” need as well as an ongoing need. The program should have internal transparency, so that anyone in the organization can learn more about its objectives, structure, processes, and expected outcomes.  Plan to periodically brief your key internal stakeholders on how the program is doing against its goals. It can be helpful to establish a governance structure with representation across security, legal, communications, public relations, tech, and business, among others.There will be times when a disclosure does not go smoothly, and there will be misunderstandings or competing objectives. Having your key internal stakeholders in the loop early will help reduce collateral damage if a disclosure becomes more challenging than anticipated. It is very helpful to have your Communications and Public Relations teams ready to handle situations, via playbooks, run books, or other documentation.

#### External
You need to establish a communications plan for your interactions with external researchers and your customers as a whole. Having the right policy in place up front sets the tone and expectations for how the reporter-relationship will be managed. You should understand what level of interaction you would like to have with your reporters. Getting to know them over the life of your program can help with ongoing program operations. You should determine the level of outreach you want to have, the amount of community engagement that is right for you, and who from your organization should be talking with researchers, in informal and formal contexts. Initial communications with the reachers should include a clear communications expectation policy. Clearly communicate the decision-making criteria and take into consideration any other factors to which the researcher is beholden (such as an upcoming conference presentation). Failing to communicate and work collaboratively with the researcher on the disclosure plan can result in a zero-day disclosure.

#### Reporter Considerations
Approach every situation from a place of well meaning. Assume good intent by default, while understanding that not every experience will be a positive one. It is important to put yourself in the “shoes” of the researcher. It is imperative that Bug Bounty managers consider the language barriers and neurodiversity of researchers. Not everyone will think the way that you do, there will be miscommunication, never be afraid to ask the researcher to get on a call with you to discuss the issue in more detail. A simple phone call can go a long way toward resolving disputes.

#### Contingency Planning
We have said it throughout this document but it bears repeating that not every disclosure will go well. The majority of your disclosures will go very well but not every experience will be a positive one. Instances of threats and extortion are not unheard of in this community. The culture is changing, but many people have had bad experiences. Some researchers demand payment for a bug before providing any details – a tactic designed to intimidate companies into paying for non-critical or trivial issues. Develop a plan for these situations and communicate this plan to internal stakeholders to reduce fear, uncertainty and doubt. Always report any instances of direct or indirect extortion to the appropriate internal stakeholders or law enforcement. 

## Operationalizing your “Pet Project”

### Tips on Institutionalizing your Bug Bounty Program
While nothing is ever “future-proof,” when you are implementing your program you should consider what happens down the road. For example, personnel changes and organizational reorganizations are commonplace in today’s corporate landscape and can cause significant disruption. Implementing a well-documented plan helps ensure continuity to serve your organization and your consumers.

* **Continuous internal documentation:** Simple things like playbooks, procedures, and policies should be crafted, circulated, and posted internally (and externally) for the relevant stakeholders.  This ensures accessibility throughout any changes in environment or structure and that system of record so that new entrants into the process can have the same information as those that helped forge it. 
* **Ensure external policies remain up to date**: Not only will your internal staff and partners change, so will the researcher community that interacts with your products.  Having your expectations published helps ease onboarding of new reporters seeking to participate in your awesome program.  While your veteran staff and security research community members would, ideally, know all of these guidelines the publication of them helps to ensure everyone is operating from the same understanding.
* **Keeping leadership in the loop**: Codifying the “Why” to leadership helps ensure changes in people don’t cause the company to lose sight of the vital reasons the program was originally created and endorsed. This helps ensure your sponsors are reminded/refreshed about the ROI or business reasons it exists.
* **Recording key dates**: Staff should be aware of contract renewal dates, budget deadlines, and so on.  Avoiding the embarrassment and frustration involved in an expiring contract and loss of services or trying to reclaim lost reputation with a security researcher that doesn’t get paid because you forgot to request a budget for next year should be your goal here.
* **Onboarding into your program**: You should document your processes and have effective training materials for the different stakeholder roles within your organization.  This ensures that new folks have access to the same consistent information as the most veteran participants.
* **Keeping Stakeholders in the loop**: Depending on how your program is funded, make sure to periodically reach out to key sponsors and stakeholders with program updates, reports, and to ensure the program is meeting their business objectives.  There will be changes in personnel at the leadership and business unit levels, so having that training and reporting prepared helps ensure your vital mission does not get forgotten or lost in the shuffle.

### Training for Internal Stakeholders
Training is integral for continuity of operations throughout the life of your Bug Bounty program. Part of your training should help enforce your desired process and expectations for interactions with the external reporters.  Some aspects to consider:

* Can the engineering team contact the reporter directly?
* Should communications only ever go through the PSIRT? 
* Are there particular nuances/tricks of the tool/platform you’re using to manage your program they need to be aware of to ensure things are done confidentially and consistently? 

You should get many of these aspects documented as part of your procedures and training to ensure your processes function properly.

### Bug Bounty Continuity Checklist
The checklist below contains the key elements to sustain your Bug Bounty Program:

* Program charter endorsed by leadership that is reviewed at least annually
* Public policy, guidelines, expectations for those seeking to research your offerings
* Periodic review & assessment of their effectiveness/efficiency 
* Internal procedures, playbooks, workflows to execute the program
* Periodic review & assessment of their effectiveness/efficiency 
* Internal training materials describing how the program works for internal stakeholders/participants 
* Periodic checkpoints/read-outs about the program (including budget) with internal stakeholders and sponsors
* Documented internal budgeting deadlines/important dates (don’t want to forget to request funding for next year, do you?)
* Documented important contract renewal dates (if you’ve outsourced the program to a vendor, you don’t want to forget to review their performance for you and to not forget to pay them if you’re happy with their services)
* Document key decisions and advertise with key stakeholders

## Final Notes
Embarking on a Bug Bounty program is usually much more complicated than you may anticipate at the outset.  We are hopeful that the tips and guidance in this chapter of the Bug Bounty Framework helped identify additional areas of complexity you may not have been considering. First and foremost, you need to be able to crisply answer the question, “Why does our company need a Bug Bounty program?” As in, what value will it offer in terms of both the security and business mission.  

An established VDP is crucial and an early indicator of your readiness for a Bug Bounty program. You need to consider the myriad of stakeholders highlighted above, along with the established vulnerability handling processes in order to be successful. “Right-sizing” your program in terms of scope is crucial to getting the right program boundaries in place, and a robust communications plan will ensure you aren’t surprised by any expectation gaps.

All that said, Bug Bounty is an adrenaline-inducing, exciting element of your information security program at large. Incorporating key critical success factors considerations into your program’s build out phase will ease adoption and offer a smoother journey into the world of Bug Bounty.  Good luck!

---

## Next chapter: Charter Your Program/Set Strategic Objectives
In the next [chapter](./chapter-3.md), we discuss how to formally instantiate your Bug Bounty program with a charter and well thought out strategic objectives. We dig deeper into objective setting and getting executive buy-in. Finally, we will offer tips and tricks to make sure you are equipped to keep moving the program forward and avoid analysis paralysis in early program stages. 