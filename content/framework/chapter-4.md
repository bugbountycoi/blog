---
title: "Chapter 4: Scope and Budget"
date: 2021-09-07
authors: [
  "Anil Dewan",
  "Annika Erickson",
  "Kathleen Trimble-Noble",
  "Christopher Robinson",
  "Deana Shick"
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
---

{{< toc style="block" >}}


## **Introduction**

By now, we hope that you have read [Chapters 1](./chapter-1.md), and [3](./chapter-3.md), and are ready to begin scoping and budgeting your Bug Bounty program. If you haven’t read those chapters and are new to Bug Bounty, we encourage you to do so before going any further. This chapter is broken down into two primary topics: establishing program scope and how to properly allocate resources to support your Bug Bounty program.

Once you set you have [chartered your program and strategic objectives](./chapter-3.md), it is time to begin defining your scope, or the types or amount of infrastructure and/or products available for vulnerability research and testing. In general, we advise to start with a smaller scope and expand to other infrastructure and/or products, rather than boiling the ocean all in one go. This chapter describes some considerations for scope, eligibility criteria for sound reporting, and how to properly focus your program to optimize value for your organization.

Once you have completed scoping, budgeting for your program is the next $50,000 question, so to speak. Budgeting and planning will depend greatly upon how much experience your organization has with Bug Bounty programs. If you have never done any work in this space, the task of setting and funding the whole program up can be a bit daunting. For those organizations that have an existing program or perhaps already contract out this capability, the task of planning will be one of refinement and tweaking rather than foundational concerns like staffing, tooling, and so on. This chapter discusses what to do if you are starting from scratch, and different funding models to help you during any state of your Bug Bounty program.

## **Defining Scope for your Bug Bounty Program**

Scoping assets or products for a Bug Bounty program is both an art and a science. It is one of the most important tasks you will do prior to launching your program. A scope allows the reporters to understand their testing limits, and what reports you are willing to accept or not.

The scope available for a Bug Bounty should be based on the vision, objectives, resources, and maturity of the security teams, product and/or engineering teams, or asset owners (more on setting a strategic vision in [Chapter 3](./chapter-3.md)). Once defined, the scope is then used to determine the eligibility criteria for reports and incentive models (more on Incentive Models in Chapter 5).

We recommend carefully evaluating scope before launching any program, as you should not de-scope due to an influx of vulnerability reports alone. Remember, increased vulnerability reports serve to make your assets or products more secure, though this could cause short-term strain on your security, product and/or engineering teams, or asset owners. Those expectations should be managed upfront with your stakeholders as much as possible.

### **Scoping Considerations**

During the scoping phase of developing your Bug Bounty, you want to carefully consider which assets or products will meet your objectives and provide your organization the best value. Some considerations include:

-   Does the security team handling the vulnerability reports have the peoplepower to manage the project?
-   Are the networks or products in scope accessible for vulnerability reporters via unauthenticated or authenticated means to test?
-   Does the security team handling the reports have the expertise to answer questions about the asset or product being considered for scope?
-   Is the triage team ready to receive reports (see “Vulnerability Intake” in [Chapter 2](./chapter-2.md))?
-   Does the triage team know the asset or product well enough to triage findings and determine scope and severity?
-   If the answer is no, is there a process established for the triage team to pass a report to asset owner or product team for validation and severity assessments?

Additionally, the asset owners and product and/or engineering teams must be ready to receive the vulnerability reports and have a plan or strategy to mitigate the issues found. Your legal and communications teams should be engaged throughout the life of your Bug Bounty program.

As your Bug Bounty program matures, you should adjust your scope to accurately represent the current state of the program. This helps to manage any expectations between your organization, vulnerability reporters, your customers, and/or the public.

### **Focusing Program Scope**

Scoping assets or products for an ongoing Bug Bounty program can be dynamic or static based on your organizational needs. You should carefully consider whether it is more beneficial to release all assets or products upon launch or release them in stages. Conversely, you may need to decide if or when to pull assets or products from scope. Thinking through scope prior to launching a Bug Bounty program is **critical**, as pulling assets or products suddenly may send the wrong message to vulnerability reporters, customers, or the public. It is better to _ease_ your way than panic halfway through. If you do plan to rotate assets or products, it helps to manage these expectations within your Bug Bounty charter.

Another strategic consideration, specific to optimizing value, is deciding whether the asset or product would benefit from a focus on critical vulnerabilities or all vulnerabilities (there are reasons for each). Your organization should make this choice based on its needs. Perhaps you are looking to augment your current testing program, so only critical vulnerabilities may be of interest to you. On the other hand, you could just be starting out and any vulnerability reports are valuable to your program.

Organizations are not limited to one type of Bug Bounty program. They can certainly mix and match to meet their organizational needs. Throughout the rest of this section, we are going to discuss how Enterprise Bug Bounty programs differ from Product-specific programs. There is not a one-size-fits-all solution, so organizations can choose one or both depending on their goals (more on this in [Chapter 3](./chapter-3.md)). In either case, we recommend explicitly calling out which infrastructure and/or products are in scope for reporters.

#### **Enterprise**

Some organizations may opt for a Bug Bounty scope that focuses on their enterprise infrastructure rather than a product. This might mean that all publicly accessible servers, devices, or domains both authenticated and unauthenticated are in scope for research and testing. Scoping can be formulated to be all encompassing or a subset of the enterprise infrastructure. Organizations may opt to test services such as VPNs, network devices, or technologies that enable customer communication. They could also opt to test cloud services depending on how their infrastructure is architected.

Before implementing an Enterprise program, we recommend investigating your organization’s web-footprint using resources like Shodan, for example. It is important to understand what is externally accessible through unauthenticated means, as this will likely be a researcher’s first stop to understand your organization. We recommend cleaning up any “low hanging fruit” before launching your program to ensure that researchers are focusing attention on the right places.

Bug Bounty programs focusing on enterprise or web infrastructure may receive reports related to poorly defended services or information leakage. Program Policy should clearly define how duplicate submissions from individual researchers will be triaged and managed. Additionally, if findings are found by multiple researchers prior to remediation, who will receive the award (i.e. first submitted or shared). If a zero-day is reported, we recommend that your Bug Bounty program work with the vendor or technology owner as soon as possible to receive a mitigation.

#### **Product**

Product development companies could introduce some or all products into a Bug Bounty program for research and testing. Like Enterprise programs, scoping can be all encompassing or a subset of the product portfolio. Testing can be limited to just software packages developed by a vendor, or researchers can drill down to the firmware or even the microcode on some hardware devices depending on the needs of the organization.

Before adding products into your testing scope, we recommend analyzing a team’s maturity to the appropriate industry standards along with its ability to meet organizational development lifecycle practices. Bug Bounty programs can cause an influx of reporting, and internal teams should be ready for any spikes. Most of the vulnerabilities submitted through a product-specific Bug Bounty program are likely zero-days, previously missed by internal code reviews and testing. Duplicate submission of issues does happen, so your program should be prepared to acknowledge reporters as appropriate (more on this in future chapters).

Like Enterprise programs, we recommend that Product Bug Bounty programs perform routine testing, scanning and code review to find the “low hanging fruit” on all products whether in or out of scope. Found issues should be mitigated or documented prior to including the product in the Bug Bounty scope.

#### **Regulations**

It is important for your Bug Bounty program to adapt to a changing regulatory environment, which vary from country to country. Since vulnerability reporters can submit from all over the world, it pays to understand various regulations and how those might impact your Bug Bounty program, and you should seek legal advice to ensure the program (including the bug bounty terms) fully comprehend the environment (this is not legal advice). This environment may include IP, contractual, data protection and anti-hacking regimes among others.

Here are a couple examples to point you in the right direction, and by no means is this a complete list:

-   [General Data Protection Regulation (GDPR)](https://gdpr-info.eu/)
-   Anti-Hacking Laws such as the Computer Fraud and Abuse Act, DMCA and the Computer Misuse Act

Considerable work has researched the interaction between anti-hacking laws and bug bounty program. We suggest to explore if your program can include a “Safe Harbor” provision (and which provision) that clarifies to researchers the legal implications of reporting under these laws. Resources on this topic include:

-   [disclose.io (provides templates language for consideration)](https://policymaker.disclose.io/)
-   [Department of Justice, A Framework for a Vulnerability Disclosure Program for Online Systems](https://www.justice.gov/criminal-ccips/page/file/983996/download)

If you are working with a crowdsourced vendor, they likely have a plan to work with existing and future regulations that may impact Bug Bounty programs.

## **Eligibility Criteria**

Establishing strong eligibility criteria, or the types of stipulations your organization has established to accept reports, helps to manage expectations between your Bug Bounty program and vulnerability reporters. Eligibility criteria is heavily rooted in your scope and the goals of your Bug Bounty program.

Some organizations choose to outline how reports become eligible for acceptance, while other organizations will list attributes that make a report ineligible or “out of scope”. We recommend advertising both aspects since you should be as transparent as possible when creating your eligibility criteria.

Once you have determined your program scope as noted above, then your eligibility criteria should reflect those requirements. If you are developing new eligibility criteria, we recommend surveying the Bug Bounty documentation for others in your industry sector to get a feel of what you should include in yours.

### **Suggestions of What to Include**

While scope and eligibility requirements vary from organization to organization, there are common threads that organizations include when advertising their Bug Bounty program. We have included a short list below to get you started. **PLEASE NOTE: We are not lawyers, and this is not legal advice. We highly recommend you working with your legal representation to ensure your organization establishes the appropriate eligibility criteria.**

-   Ensuring you are attracting the appropriate reporter without conflicts of interest. Some examples may include:
    -   You are not a resident of an embargoed country.
    -   You are not on a list of sanctioned individuals.
    -   You are reporting in your individual capacity or you have your employer’s written approval to submit a report.
    -   You are at least 18 years of age, and, if considered a minor in your place of residence, you have your parent’s or legal guardian’s permission prior to reporting.
    -   You are not currently nor have been an employee or contractor of the organization accepting reports.
-   Documenting the types of reports that you will accept. Some examples include:
    -   Listing products or infrastructure that is available to test.
    -   Listing products or infrastructure that is out of scope.
    -   Ensuring that submissions are unique and not previously made public.
-   Documenting data requirements to accept a report (e.g. ensuring there is a description of the issue, proof-of-concept, impacted product, impacted version, and so on).
-   Documenting the types of reports that you will not accept. Some examples include:
    
    -   Listing products and infrastructure explicitly out of scope.
    
    -   Documenting any types of issues you will not accept. For example, many organizations choose to not accept social engineering issues or attacks that require exfiltration.
    
    -   For web or enterprise testing, you may document what is considered out of scope or reports deemed to only have informational value such as clickjacking or open redirects without impact.
    
    -   It is critical to caveat report acceptance and determinations of reported findings happen at the sole discretion of your organization. This is to include if, how and when any vulnerability is publicly disclosed.

### **Prioritizing your Products or Infrastructure**

Prioritization of your products or infrastructure goes hand-in-hand when developing your eligibility criteria. As mentioned above, it helps to manage reporter expectations by defining products that are explicitly in and out of scope for your program. Having a clearly defined scope can focus the researcher’s attention on certain technologies by including it in your program scope. How products and technologies are prioritized should contain many different inputs but should be guided by executive leadership and vision. The ultimate goal of a bug bounty program is the long term maturing of policy, procedures, and products of your organization. This should not be seen as a single tool to discover and solve all issues.

### **End of Security Support Considerations**

We recommend including a statement regarding your stance on end of security support for products or assets. Would these be in or out of scope for your program? Generally, we would recommend keeping EoSS products or assets out of a Bug Bounty program to focus attention on actively supported technologies. The effort required to remediate products no longer supported can be significant.

## **Budget and Resource Planning**

For companies just starting out in this space, it is best to understand what Bug Bounty programs look like in your space, so reaching out to peers that have similar businesses that already have a program will inform you about average bounty payments, average run rates of findings in your particular space, and hopefully some scale based off of severity or specific business targets your hoping to achieve. Private Bug Bounty programs can offer the opportunity to develop data points for narrowly scope testing.

We suggest looking to your existing vulnerability disclosure program (VDP) to understand the number of reported issues as a measure of what is to come with a Bug Bounty program. A Bug Bounty program will increase your reporting temporarily, so it is worth planning for at least double the number of reports that come through your existing VDP.

### **Starting from Scratch**

If you’re at this point in our missive, odds are good you have *some* funding and now you’ve got to plan out how best to spend it. If not, refer back to our earlier chapters that speak to developing your pitch to leadership about the “why” a bug bounty program is necessary for your company.

You start off with some chunk of money or funding model from your business. What’s the scope of your program: One product or product line? Private or public event? Just hardware or just software? Or do you need to cover the whole enchilada of everything under your organization’s “roof”?). You need to understand this to estimate how much of your limited funds you want to spend during the year (unless you’ve been commissioned for a special one-time-style event, like a “Hack the <THING>” targeted program). Peer data on volume and rough estimates on payments will be helpful for you.

Payouts are just one factor to consider (obviously the most exciting, but not the ONLY). Every program, bug-related or not, runs off of a people-process-tools structure. Are you partnering with a third-party to host and/or run the program for you? Will you be marketing the program outside of corporate web pages or blogs? Do you need to invest in tools to track or test the findings given to you? Do you expect to have attorneys’ fees or other business-related expenses to pay out over the course of the program? Are you a one-person show as the program kicks off, or did you have plans to add additional people to help and of what levels or skill sets will there be?

Thankfully there are a lot of options out there for you. Sadly there are a lot of options out there for you. The most basic program can be run off of an email mailbox, a checkbook, and a notepad if that’s the route you’re funded to roll at (…and we’re VERY sorry to hear that!), but each of the three pillars of the program – people, process, tools- has a spectrum of levels you can invest in. There are open source bug tracking tools that can be used, or even securing an instance within an existing defect tracking system within your organization can help stretch the few resources/budget you have.

### **Projecting Spend after Year 1**

Thankfully, after the first year, you should have better insights into how and how many researchers might participate in your program, what the volume of work will look like for your particular company’s offerings, and how well you guessed…estimated your annual expenses and run-rate. From there, adjustments are much easier. Talking to your business or understanding the technological space you inhabit, you can project X% increase based on new product launches or changes in underpinning software, or you happen to be in a space that perhaps is garnering a lot of public and media attention, or that is becoming more regulated.

The benefit of that previous year of experience will inform you of course corrections or investments you want to make to improve your services and capabilities. It also gives you room to experiment with hackathons or adjustments on your payment scale. You’ve learned a lot over that year, put it to good use by making your program more efficient and capable.

### **Funding Models**

How you are funded can take several different models. Echoing the PSIRT Services Framework, generally, bug bounty programs can be either centrally run and funded, or that funding is distributed across several engineering or product/business lines. In centralized models, either every business unit ponies up a set amount of funds, or some overarching corporate authority pays for the program to operate. This model reduces rework in that typically there is one centralized person/authority to report out to or make new requests of, but because of the generic centralized nature of it, they may not understand unique nuances of a particular offering or area of the business. Additional time may be needed to persuade the centralized stakeholder that a minority stakeholder’s needs require additional funding or attention.

In a distributed model, each business unit or product line might need to be engaged for varying levels of funding support. Larger or busier (or riskier) groups may pay large amounts to the bounty program, some more risk averse units may not participate at all (a problem you’ll need to work out beforehand on how you want to deal with if reports for these “out-of-scope” offerings are given to the program). Distributed funding generally will require more investment for the program to caretake individual stakeholders, report out, and solicit funding requests.

Regardless of the funding model that supports you, being able to record and articulate the value the program brings will be critical for the continuance of that funding. We spoke in previous chapters about setting your strategic goals and objectives. Careful record-keeping will assist you in displaying how well or how poorly you are tracking to those objectives.

### **Budget Contingency Planning**

Hope for the best, but plan for the worst is a universal maxim within security, and your budgeting and run-rate are no exception. There never will be enough money, time, or people to completely deal with all the risks, reports, and research; some compromises will have to be made. Much like the people-process-tools triad, there is a sister triangle of quality-time-cost that needs to be balanced.

Expect that you do not have enough funds. Having a plan in place will help you weather this event. Do you maximize your payouts in hope of luring in higher-quality and more impactful reports? Do you lower your payouts to try and capture as many reports as possible and stretch out the budget? What happens when that well runs dry? Do you have a plan to request additional disbursements during the calendar year [not a great idea]? Do you just close up shop until the next year [another not-great idea]?

While it *may* be an option to get back in the middle of the budget cycle and request more, you should be cautioned this could erode management confidence in your ability to maintain the program. There may be legitimate factors that lead you to consider this path (an overwhelming response from researchers delivering ultra-high quality defect reports to you), but just be aware of the potential leadership impression of your lack of ability or maturity to manage a program of this magnitude. Build a strong evidence-based case for this new request prior to putting it forward.

It’s best to build in some cushion into your initial round of funding to account for unplanned overages. Now needlessly doubling requests or bloating the budget has its own risks, but a simple, transparent pad of 10-15% overage demonstrates your grasp of the unpredictability of vulnerabilities and discoveries. If those funds are not used during the budget cycle, they are either given back to the business or are rolled in as part of the next cycle’s request.

## **Final Notes**

Sometimes, it takes a village to make a successful Bug Bounty program. Wherever possible, lean into and leverage your community of peers. Bug Bounty programs have existed for years, and chances are you know people already involved in the practice that are willing to share. Don’t expect detailed numbers or corporate confidential information, but community members generally are willing to share “war-stories’ ‘ and show their battle-scars they’ve earned in standing up and running their programs. In many cases, industry average spends or volumes can be publicly available to you to help better inform your request as you are formulating your budget.

If available, you can always lean on Crowdsourced providers for scoping advice and budgeting information that has worked for other programs.

---

## **Next Chapter: All Things Incentives and Payments**

We decided to dedicate an entire chapter to incentives and payments rather than just a section in [Chapter 4](./chapter-4.md)). In the next chapter, we will take a deep dive into incentive models, payments, ways to encourage researchers to report into your program, and so on. We will highlight common problems that Bug Bounty programs face, possible solutions, and where programs are heading next.