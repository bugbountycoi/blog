---
title: "Case Study: How Intel is Challenging the Norms of Bug Bounty Retesting"
date: 2024-08-16
authors: [
  "Chris Holt"
]
tags: [
  "bug bounty",
  "security",
  "program management",
  "retesting",
  "case study",
  "researcher engagement",
  "incentives",
  "strategy",
  "intel"
]
draft: false
summary: "A case study on Intel's innovative approach to bug bounty retesting. This post explores the challenges of incentivizing researchers to retest mitigations and details a successful experiment that used a collaborative, results-based model to significantly increase participation and validation coverage."
---

Author: Chris Holt, Intel Bug Bounty Program Manager

## Background
Bug Bounty programs are structured to take reports from external security researchers, route them to product and development teams for mitigation, and then offer rewards for verified findings. Standard program operations only leverage development team’s time to test the mitigation and confirm that it sufficiently addresses the vulnerability reported. Vulnerability management programs that go above-and-beyond will perform a root cause analysis into the vulnerability so that knowledge (how to identify the vulnerability and/or prevent it from occurring) can be built into the security development lifecycle (SDL), protecting existing and future products.

Occasionally, some bug bounty programs will ask the original researcher for additional testing to confirm the mitigation was effective. In my experience, researchers are hesitant to provide anything more than superficial testing, if they re-engage at all, when retest requests come their way.

To validate my that perception, I tracked data for six months asking researchers to retest when their vulnerability was fixed. We did not offer rewards. Generalizing the results across more than 500 and less than 1000 reports, the outcomes looked like this:

For every 10 requests to retest
-   4 received no response
-   6 said that it is fixed

Of those 6 responses,
-   4 simply replied “it is fixed”
-   1 had a more complex reply stating “I tested things again, it is fixed”
-   1 showed their work and sometimes were able to show a bypass

## Problem
Why would researchers go through the effort of retesting? Typical incentives don’t support the investment for the average bounty hunter. Most are doing this because their skillset is rewarded, so there must be sufficient incentive to generate retesting. Even still, it breaks the Bug Bounty model to offer rewards for retesting. “Bug Bounty” exists explicitly as a pay-for-results model: rewards are granted when results are achieved. Contrast this with a pay-for-effort model: up-front payment for a set period, often with a specific output like a report.

On the one hand, companies may want to generate more testing to verify that a mitigation is effective, but on the other hand a company has a program that is seemingly designed to only reward if the mitigation is not effective. These two things cannot be reconciled.

Asking for a retest could actually incentivize the opposite outcome, where the researcher says “yep, this looks fixed,” encouraging the product team that their work has addressed, and the vulnerability is gone. If the researcher can in fact bypass the mitigation, they can wait a safe period (one, two, three days, weeks, or months) then report the same vulnerability again and earn a new bounty. We don’t want to incent this approach as it violates the spirit of a Bug Bounty program, degrades trust in the researcher and possibly the community, and lowers the average quality of work produced by all researchers engaging through the program.

## Knights of Elektron Retest Experiment
That raises some interesting questions. What if we changed the retest incentives while retaining the “pay-for-results” model? Could we have in-depth mitigation testing done by bounty hunters while only granting rewards if bypasses are proven? If new incentives work, can they scale? These are some of the thoughts that went into the design of our retest event that followed our Knights of Elektron live hacking event (LHE) with Intigriti.

This idea was developed through careful consideration of program, platform, and researcher concerns, with representatives from each group helping shape the plan.

-   Intel (program) wants retesting to prove a mitigation work, and if not, identify ways to improve the mitigation.
-   Intigriti (platform) wants to keep program stability high and maintain strong researcher relations; uninformed experiments risk sending researchers away from a program they are working with.
-   Bug Bounty Hackers (researchers) have varied sets of interests, including:
    -   Exclusivity of opportunities to earn rewards
    -   Controlling privacy and intellectual property of their research
    -   Resource requirements to engage a program experiment
    -   Being rewarded for their time

Working with those representatives for input, the Intel® Bug Bounty Program addressed these concerns while leaving control with the concerned party. The Intel product team provided a list of reports that passed internal mitigation and testing to participants from the original event with opportunities to earn additional rewards:

1.  Researchers can earn a new bounty on their own reports* by showing they can bypass the mitigations.
2.  Researchers can opt-in to disclose their reports* privately to other researchers and encourage someone else to find a bypass to claim the bounty. If another researcher succeeds, the original researcher earns a partial bonus above and beyond the bounty.
3.  Researchers able to show unique and different ways of bypassing the mitigation for their disclosed reports* can earn a smaller bounty.

(*) *Limited to the list of included reports*

This structure encourages collaboration but leaves the decision to participate power in the hands of the original researcher; nobody is forced to disclose or present new information not already shared with other researchers. Sharing creates more testing opportunities, which is a chance for researchers to claim bounties, and it also provides Intel with more testing time to ensure effective mitigations. Managing retesting through normal program operations means minimal risk to standard program work. Researchers only engage if they want the chance. Those who don’t choose to participate in the actual retesting still have a strong reason to opt-in to disclosure allowing others to earn the bounty from which they themselves will earn a bonus!

## Results
Intel operated this experiment for a total of 22 days during March- and the results were promising.

### Participation
-   56% of targeted researchers (23% of all researchers) actively engaged in retesting
-   50% of eligible researchers opted to disclose at least one eligible report
-   44% of eligible researchers engaged in attempts to bypass their own reports
-   40% of eligible reports were optioned-in for private disclosure

### Coverage
-   81% total coverage of eligible reports
-   52% of reports were confirmed to have been tested with negative results (meaning the original mitigation fully addressed the issue and it could not be bypassed)
-   5% of reports were able to be bypassed, resulting in more robust mitigation deployments

## Conclusion

I expected less than 10% participation (56% actual), and below 25% coverage (81% actual) so this format worked incredibly well. Total cost (<5% of the max) was far lower than anticipated (25% of the max) so we offered a small participation bonus to everyone who engaged in some amount of testing during this event. When offering incentives, it is important to look at the “maximum potential cost,” and this experiment might have ended up costing more than 35% of what the original event did in terms of bounties alone. Then again, if we had received that much engagement and testing, showing many ways to bypass the mitigations put in place- it would be well worth the cost in learning.

Overall, everyone said this was a successful experiment. Researchers could earn extra bounties and bonuses, and the product team received confirmation testing to validate remediations without the Intel and Intigriti program teams having to manage a full-scale retest event. This incentive structure was Intel’s first cut at retesting for live hacking events and based on the participation and coverage data, it was a huge success.

*Interested in providing more feedback to the Project Circuit Breaker team? Our [2024 hacker survey is open](https://www.projectcircuitbreaker.com/hacker-survey-2024/) now!*