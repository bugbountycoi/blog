---
title: "Chapter 6: Handling Disputes"
date: 2024-07-22
authors: [
  "Logan MacLaren",
  "Chris Holt",
  "Adam Bacchus"
]
tags: [
  "bug bounty",
  "security",
  "framework",
  "vulnerability disclosure",
  "program management",
  "dispute resolution",
  "mediation",
  "researcher relations",
  "communication"
]
menu:
  framework:
    weight: 7
---

Like any scenario involving human interaction, you’re going to have to deal with disputes over severity assignments and payment amounts for your Bug Bounty Program.

<!--more-->
{{< toc style="block" >}}

These disputes often boil down to one single point – the researcher believes the severity assessment is incorrect. While this may sound like a very simple problem, the reality is that if the severity assessment  _is_  incorrect, it will also affect:

-   Acceptance of the report
-   The award for the report
-   The noted severity and impact in public disclosures (e.g., CVEs, report disclosure, etc)
-   Vendor/customer interpretation of risk

It is important to be able to identify scenarios where the researcher’s concerns are legitimate and act upon them quickly – doubling down on a mistake is  _not_  a good idea and will not reflect well on your program in the court of public opinion. Mistakes happen and that is OK. Take the high road, always, and when a mistake is identified you and your program must accept and admit to the mistake before attempting to remediate it.

We’ll explore two scenarios here – one in which a receiving Bug Bounty program made an error in judgment, and one in which the researcher’s assessment of severity is inaccurate.



### Most Common Scenarios

#### Scenario 1: Program Made a Mistake

Early on in your program’s life you will need to be additionally conscious of the precedent that your decisions will make since many, if not all, of your reports will be setting new precedent for your program. With this in mind, it’s entirely possible that you will make incorrect judgment calls when setting, or referencing, precedent.

In a scenario where your program  _has_  made a mistake, it is important to clarify how and why the mistake was made (either documented internally, or shared with the researcher if appropriate) and make the necessary changes in your assessment to reflect this scenario. This does not necessarily mean that you must fully agree with the researcher who is disputing your assessment – if you’ve marked a report as having no risk and the researcher says it’s a “crit” the reality is likely somewhere in between.

Remember that in all of these scenarios you, as the program owner/operator, will have context about your business processes, customers, and operations that outside researchers do not. What may seem, on the outside, like a very significant problem may actually have mitigations in place that significantly reduce the actual impact. We’ll talk more about this in the next scenario.

A situation you want to avoid, as noted earlier, is “doubling down” on a mistake. Examples of this can range from blindly citing precedent without understanding their context, to closing multiple reports as duplicates of each other when they are actually unique issues requiring unique fixes. While these may save you money, they can heavily tarnish your reputation. When faced with a dispute for situations like these, it’s important to understand what led to the decisions made and reevaluate whether or not they were the right ones. Some questions to ask internally are:

-   Did we make this decision to save money, or because it aligns with the scope and rules that we’ve defined for our program?
-   Did all of the issues we marked as duplicates actually share a singular fix that was unaffected by further input from other reports?
-   If these reports had been submitted in series (i.e., report 2 was submitted after report 1 was fixed) would they have been handled differently assuming they were technically valid?
-   Is the precedent cited both relevant and accurate? If so, has your security posture changed since that decision was made?

Based on these answers, aim to work with the researcher to make a more accurate assessment. Request specific details on why they believe your assessment is incorrect, and start a dialogue that can lead to a more accurate end state.

In the most extreme cases, many platforms have a “make it right” fund which can result in a payout  _by the platform_  to the party who opened a dispute. See: Third-Party Mediation.

#### Scenario 2: Researcher’s Assessment is Inaccurate

For clarity, the discussion here will not be touching on “beg bounty”. “Beg bounty” can largely be summed up with reports of dubious or no value being submitted to your program followed by repeated pleas for rewards, or scenarios where a researcher is arguing for completely unrealistic severity assignments. There’s a lot of opinionated discussion on this topic in the blogosphere, so we’re not going to dive into it any further.

As referenced in the previous paragraphs, it is extremely common that security researchers will *not* have the full context of an issue, or ability to accurately gauge its impact, when acting ethically and/or within their skill set.

To use a hypothetical example, assume that an application has a perceived SSRF vulnerability. At face value, SSRF vulnerabilities are often very high severity issues given the level of access they can provide to an attacker and should be dealt with accordingly. How would you deal with this for a system that is designed to make requests to external targets?

A researcher may argue that since they can force your application to make a request to another system that they’ve achieved SSRF and it should be considered a High severity (or Critical, etc). What may not have been considered, or has otherwise been dismissed by the researcher, are scenarios that your program will have context for:

-   Does the attacker actually control the content of these requests and/or can they perform otherwise undesirable actions with them?
-   Can these requests  _only_  originate from the affected system (e.g., can these requests reach internal targets, or only targets that are otherwise publicly accessible on the same interface this system would reach)?
-   Is this vulnerability part of a broader chain of vulnerabilities that can lead to a more significant problem?

The answers to these questions can help you not only make/reinforce your decision, but can be communicated back to the disputing party as specific justification for the decisions made. In many cases a dispute can be positively resolved by providing context and already-in-place mitigations that the reporter was otherwise unaware of.

To ensure consistency of decisions across your team, it can be helpful to create a repository of ambiguous or edge case issues. For example, a researcher submits a report that you find valuable, but isn’t accounted for in your current reward structure and ruleset. You’ll likely discuss this with your team to determine what to do (pay it? at what amount? reject the issue as out of scope?). It’s a good idea to log these decisions in case similar reports come through in the future, so you can refer back to determine what you did in the past and provide a consistent experience for researchers participating in your program.

### Problems and Tools

Successful dispute resolution requires that participants set aside their personal feelings, be willing to be vulnerable to negotiation and growth, and open up to enable honest communication.

#### Paying-Customer Bias

It is incredibly difficult for a platform provider to honestly be objective. Their incentives often align with the company/program and not the hacker, so their opinions are likely to skew towards the company when pressed. Highly skilled or trustworthy mediators bring their own background to the table and are able to defeat this natural bias, but it is a risky proposition to rely on a platform provider who is paid by one of the parties (but not both) to perform an objective mediation.

#### Self-Advocacy Bias

_Note: This is not a solution. It is intended to make you aware of a problem that we as program managers face so that you can attempt to make yourself and your program better._

There are so many people involved in taking a report from initial research through to remediation and payment, that it is statistically unlikely that everyone gets all the decisions correct in most scenarios. Now, aggravate this problem just a little more by saying that all of the decisions are out of the hands of the only person to whom the decisions matter. That is to say, all the decisions are made by platform, company, engineer, etc and none of them are made by the researcher, but the researcher is the only one negatively impacted by an incorrect decision. Therefore it is always in the best interest of the researcher to dispute any decision which might have an outcome that negatively impacts them or could, down the road, be leveraged to a better personal result.

Therefore we have created an environment where disputes must occur, and they must occur regularly. The researcher must advocate for their work in order to receive fair and reasonable rewards. Much of the conversation around self-advocacy relates to  [gender inequality or disability inequity](https://pressbooks.library.torontomu.ca/ediinpractice/chapter/now-you-3/), which can reasonably be applied to Bug Bounty disputes. The researcher is unable to reward themselves, they are entirely reliant on the program to understand their work and fairly reward it. Women who work as Bug Bounty researchers are even more likely to skip this critical step in the process because r[esearch has shown](https://www.indeed.com/career-advice/career-development/women-self-advocacy#:~:text=In%20general%2C%20women%20believe%20that,advocacy%20by%20men%20of%20color.)  that men are more likely to self-advocate than women, in basically everything.

Programs should be aware of this need for self-advocacy and the  [mental](https://therapyforblackgirls.com/2023/08/18/how-advocating-for-yourself-affects-your-mental-health/#:~:text=Advocating%20for%20yourself%20can%20be,beliefs%2C%20values%2C%20and%20desires.) and  [emotional anxiety](https://livingwithfinesse.com/anxiety/)  that it likely causes the researcher so that we can more appropriately respond with transparency, honesty, and most importantly: compassion. If you treat every dispute as an honest attempt to improve communication about the work provided, you will be in a better place to understand the human behind the work; you also are more likely to build a lasting relationship with a person who begins to feel understood. That kind of relationship building makes you a better person, your program seems more trustworthy, the researcher more likely to come back to you, and probably will result in better communications (and less disputes) in the future with this individual (not just for you, but for all programs).

#### Third-Party Mediation

Many, if not all, Bug Bounty specific platforms (e.g. Intigriti, HackerOne, BugCrowd etc…) offer mediation services to act as a go-between for programs and researchers. For minor disputes, like those that can be resolved through a small number of communications it is likely that your interaction with their mediation services will be limited, but for more complex disputes (i.e., those spanning multiple reports, policy or code of conduct-type violations, or where there’s significant merit to the researcher’s complaint) these conversations may be significantly more involved.

The role of the third-party mediator is to be a conversation broker and make sure that each side is accurately hearing the other side. Sometimes this includes providing a third-party expert opinion on the situation or specific claims from each party within the dispute.

#### Make-it-Right Funds

Many platforms have a “make-it-right” fund which can result in a payout by the platform provider to the researcher if the third-party mediation managed by the platform reaches a conclusion that the program has made an incorrect assessment that has material value to the researcher. This is not a de facto thing, and it should not be relied upon. It may not even be funded at any given time, or supported by the program’s platform of choice if they even use a platform. It is a service created to maintain hacker relations at the direct expense of the platform. This is not a mechanic that your program should rely on, historical analysis shows it is inherently biased toward self-advocacy, and it is purely at the discretion of the platform to implement.

## Final Notes

Disputes around severity assignments, and as a result payments, are inevitable. Researchers will often push for higher values, and programs (often, but not always, having more information) tend to apply downward pressure. Having a solid foundation for your payout structure, as discussed in Chapter 5.1 “All Things Payment”, can help you ensure that you’re able to communicate with your researchers with a common language.

Understanding the tools and processes that researchers and programs have available, as well as the techniques to de-escalate these situations, can be pivotal for ensuring long-term relationships and avoiding PR mishaps.

Remember that at the end of the day your program’s success relies on researchers working with you! Fair play is the way to go.

---

## Next Chapter ...
Coming soon.