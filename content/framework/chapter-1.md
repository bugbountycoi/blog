---
title: "Chapter 1: What is a Bug Bounty Program?"
date: 2021-05-04
authors: [
    "Deana Shick", 
    "Johnathan Kuskos", 
    "Kathleen Trimble-Noble"
    ]
tags: [
  "bug bounty",
  "vulnerability disclosure",
  "security",
  "framework",
  "program management",
  "reporting",
  "disclosure policy"
]
menu:
  framework:
    weight: 2
---

Bug Bounty programs (or, “Bug Bounties”) have quickly become a mainstay in many security programs. Bug Bounties encourage [reporters](https://vuls.cert.org/confluence/display/CVD/3.2.+Reporter) (including vulnerability finders, researchers, ethical hackers, and so on) to submit vulnerabilities to an organization for rewards. This chapter covers the basics of what Bug Bounties are, the types of programs, requirements for success, and how Bug Bounties differ from other kinds of security testing. 

<!--more-->
{{< toc style="block" >}}


## What is a Bug Bounty?
Simply, a Bug Bounty program is a supporting function to an existing Vulnerability Disclosure Program (VDP). It encourages the reporting and disclosure of security vulnerabilities found in software and/or infrastructure by incentivizing vulnerability reporters with rewards or compensation. Organizations reap the benefits of VDPs and Bug Bounty programs since they allow for a diverse group of folks outside of an organization to test for vulnerabilities. 

In general, VDPs enable organizations to find and mitigate vulnerabilities in a manner that minimizes the risk that malicious actors learn of the vulnerability before mitigation is available or applied. In the absence of a VDP, an organization is likely to respond reactively if a situation arises where a malicious actor exploits a previously unknown vulnerability. A reactive response is usually much more costly than proactively identifying vulnerabilities and addressing them early in the Software Development Lifecycle (SDL). It is only after there is a well defined VDP program with established vulnerability response and management processes should organizations consider implementing a Bug Bounty program.

Within the security community, the term “hacking” is vaguely defined, difficult to explain, and it is common for organizations to view hacking as an illegal act. VDPs and Bug Bounties provide a means of legal protection for researchers to disclose security vulnerabilities without fear of legal recourse. The premise is simple; there are always going to be malicious actors attacking organizations at any given time, so why discourage good faith actors who are willing to find the same flaws and privately disclose them? 

## Types of Bug Bounty Programs
There are many types of Bug Bounties depending on the needs of an organization. Some organizations may be interested in only testing their web infrastructure, while some may opt for product testing. Scope varies by organizations, industry vertical, and should be defined appropriately when evaluating whether a Bug Bounty is right for your organization. 

### Infrastructure Testing 
A Bug Bounty can be used to incentivize testing of organizational infrastructure. For example, a Bug Bounty could be implemented for reporters to test the entire web presence of an organization, or a particular range of subdomains associated with the organization. In this example, analysts are more likely to receive bugs in the form of server misconfigurations or OWASP Top 10 issues. These programs may receive the occasional product-specific Zero-Day, which may require coordination with the Product Security Incident Response Team (PSIRT) responsible for the vulnerable technology.

### Product Testing 
Organizations may opt for a Bug Bounty focusing on the organization’s products rather than the IT infrastructure. For example, a Bug Bounty could be used to test all products developed by an organization or only a select few products. These programs are more likely to receive Zero-Day vulnerabilities from reporters. The Bug Bounty program may also receive misconfigurations or OWASP Top 10 issues, though these may be a limited amount. Industry verticals could influence the types of bugs received. Industrial Control System (ICS) or Operational Technology (OT) organizations may receive increased reporting about insecure protocols, for example, more frequently than an Information Technology (IT) focused organization. 

### Private and Public Bug Bounty Programs
When organizations open their programs for testing, they can choose to do it privately or publicly. A private Bug Bounty allows an organization to invite specific researchers into the program. Since there are a limited number of reporters at any given time, the volume of vulnerability reports is typically lower. Organizations just starting out may opt for a private program before a public program due to the volume of reporting. 

Public programs, on the other hand, are open to any vulnerability reporter as these are not invitation-only. Organizations should be prepared for a spike in reports if they move from a private to public program. 

### Continuous Programs and Time-Restrained Challenges 
Organizations typically opt for a continuous, or a long standing Bug Bounty program to incentivize reporters. This is the most common type of program, and it is not limited to a certain period of time. 

Time-Restrained challenges, on the other hand, do have time limitations for vulnerability reporters. Organizations entering into the Bug Bounty space may opt for a time-restrained challenge to understand the interest of reporters and ticket volume. Some organizations with continuous programs may also host time-restrained challenges to further incentivize certain communities of reporters, or to focus testing on a particular product or infrastructure. 

## Requirements for a Successful Bug Bounty Program
A successful Bug Bounty program relies on a foundational VDP with mature vulnerability management and response processes in place. These processes should be in compliance with ISO/IEC 29147 and 30111 for vulnerability handling and disclosure. 

Reporters look to the public documentation around a VDP for the guard rails around vulnerability submission, legal considerations, and disclosure. At minimum, a Vulnerability Disclosure Policy, or the public documentation for a VDP, requires a program scope, safe harbor clause, and method of remediation. 

### Public Vulnerability Disclosure Policy
The policy should define your security pledge that you are committing to your customers and stakeholders who may be potentially impacted by the security breach or vulnerabilities impacting your organization or products.

### Scope
What products and services are in scope that are eligible for security reporters to find and report security vulnerabilities.

### Safe Harbor
A statement that assures vulnerability reporters that your organization will not penalize or take any legal action against them for reporting vulnerabilities against your product or services. 

### Vulnerability Handling and Disclosure process
It is helpful for organizations to clearly communicate how vulnerability reporters submit reports and what to expect as the report is processed. This is a required step for any VDP, but it is even more important to define what reporters should expect when involved in your Bug Bounty. At minimum, organizations should provide the following:

* Approved methods for reporters to submit vulnerability reports 
* Required information for submission
* Evaluation criteria for the submitted report
* The expected timeline for vulnerability triage and mitigation 
* How response time could vary depending on the complexity of the security finding
* When and what can the finders disclose publicly when they find vulnerabilities
* How will they receive updates from organizations when they submit a report

### Public Disclosure vs. Private Disclosure
Disclosure, or the process of communicating vulnerability information and any associated mitigations to our customers and the public, can take many forms. Disclosure allows for customers to assess risk based on their organizational needs. Since Bug Bounties are an auxiliary function of a VDP, they also support Coordinated Vulnerability Disclosure (CVD) if the impacted organization/s and vulnerability reporter disclose the issue in lockstep.

A Bug Bounty aims to be a positive reinforcement mechanism to encourage the disclosure of security vulnerabilities. Consequently, organizations own the responsibility addressing vulnerability reports, which results in making the overall product or infrastructure healthier. During disclosure, organizations can deliver a software remediation or mitigation, the product can move to End-of-Life (EOL), and so on. 

There’s no right or wrong answer to how organizations disclose, but the north star guiding the program should be honesty, transparency, and good faith from both the reporter submitting the report and the organization receiving it. The end goal is to take the acknowledged risk and reduce it to an acceptable level.  

#### Private Disclosure
Private disclosure refers to when an organization chooses to only notify impacted customers of the vulnerability and mitigation information using a private means. Organizations may prefer this option depending on the type and severity of the vulnerability in question. 

#### Public Disclosure 
Public disclosure, on the other hand, refers to when an organization chooses to notify impacted customers and the public of vulnerability and mitigation information. Typically, organizations will not disclose all information surrounding the vulnerability, as to not aid malicious actors in exploitation. 

It’s important to note that both forms of disclosure will put different pressures on the organization receiving the report when it comes to prioritizing the mitigation of submitted vulnerabilities.  

Public disclosure may seem “scary” at first, but ultimately it enables network defense efforts, and allows others to make calculated decisions for their defensive posture. More and more organizations are moving to a public-disclosure-only model to be as transparent with the public as possible. Whether it’s right or wrong, good or bad, beneficial or harmful, etc, the different types of disclosure is a topic for discussion when beginning or continuing your Bug Bounty program. 

## A Bug Bounty is Not a Penetration Test
Mature companies typically run internal and/or external penetration tests to identify security vulnerabilities in their infrastructure or products. Often, penetration tests have blind spots originating from limited scopes, testing environments, and not appropriately mirroring production environments. VDPs and subsequent Bug Bounties differ from a penetration test in that the flaws found through a VDP and/or Bug Bounty almost always exist, in production, and could reveal real risk that the vulnerability could be exploitable. 

From a reporter perspective, there is no “checkbox” to hit or limited scope security assessment that creates security theater, nor a false sense of security robustness. The risks identified through VDPs and Bug Bounty Programs are real, quantifiable, and identify all of the flaws that slip past internal and external security due diligence. 

The Bug Bounty Framework is for organizations Bug Bounty and need to be aware of the factors that will make or break it. Different resources should be prioritized based on your own unique situation, and we hope to identify those throughout the chapters. 

---

## Next chapter: Getting started. Are you ready?
In the next chapter, “**[Chapter 2: Are you ready for a Bug Bounty program?](./chapter-2.md)**” we discuss some prerequisites you may want to consider when determining if your organization is ready to launch a Bug Bounty program. We discuss topics like: objectives and capabilities,critical success factors, determining executive leadership buy-in, and some advice on things NOT to do.