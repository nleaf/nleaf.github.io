---
title: 'What Steps Have You Left Out of Your Disaster Recovery Strategy?'
date: Fri, 05 Oct 2018 13:52:21 +0000
draft: false
tags: [Disaster Recovery, disaster recovery, DRaaS, DRaaS, Doug Theis, business continuity, disaster recovery planning, disaster recovery testing]
---

Disaster recovery is usually a subset of activities around a larger business continuity initiative in an organization.  For this article, we will describe disaster recovery, or DR, as the activities required to restore availability of the computing environment to the organization. IT teams inside organizations have been practicing DR for years, often by implementing do-it-yourself (DIY) DR in the form of a second stack of equipment located somewhere off site.  Often these DIY efforts are missing key elements.  One or more of the following 10 steps are commonly left out of the DIY DR process:

1.  **Aligning with an existing business continuity plans** from the operations and leadership team: Yes, we are assuming that [a business continuity effort](https://www.expedient.com/blog/create-a-business-continuity-plan-for-data-disasters/) exists in the organization. If it does, the [IT team’s DR plan](https://www.expedient.com/blog/data-disasters-are-you-ready/) needs to align well with the steps and timing of the business continuity plan to bring the business back from an outage.

 

2.  **Inventorying applications** and assigning into two tiers -- critical and non-critical: While many companies define unique recovery times and recovery points for each application, a two-tier approach can simplify the IT recovery effort by simplifying conversations with the business. Additional tiers can be added as the DR plan is implemented, tested and refined.

 

3.  **Discussing application usage, RPOs, and RTOs with the operational team’s individual contributors** as well as the leaders: This must be done from a business perspective as well as an IT perspective. Leaders often do not understand the daily usage of critical business applications and the hidden dependencies that the usage patterns create.  Individual contributors often have the best insight into what a recovery should look like.

 

4.  **Understanding system and application dependencies**: The DR plan must define the applications that need to be available first, second, third and so-on, based on both business and technical requirements. Too many times we have seen hidden dependencies torpedo an actual DR scenario because the dependencies were not defined or not tested up front.

 

5.  **Clearly understanding the IT staff effort required** to recover the top tier applications: Will it take 36 hours or 360 hours? Do you understand the most critical points in the process?  What if the IT staff is unavailable?  Staff effort is almost universally underestimated.  Make sure your team’s expectations are realistic.

 

6.  **Building as much automation into the disaster recovery process** as your company can afford: Data replication has become easier over the last few years, with dozens of tools available to make sure you have copies of your data assets. But network failover is still very difficult.  The location of the primary and secondary facilities and the availability of your network engineers all play a role in the complexity of failing over the network.  Automating both the data and the network failover is critical to reliable DR.   Depending on heroics from your IT staff in a post-disaster environment is simply bad planning.

 

7.  **Testing, testing and more testing**: [The DR environment should be tested multiple times per year](https://www.expedient.com/blog/with-push-button-dr-disaster-recovery-testing-doesnt-have-to-be-a-four-letter-word/) with full post-mortems on the outcomes. Lack of testing is a huge contributor to failure in the DR environment.

 

8.  **Including disaster recovery in all business discussions:** Disaster recovery belongs in all application conversations, whether discussing new applications or changes to existing systems.  Complexity, risks, and costs can increase if disaster recovery is left out of the planning process.

 

9.  **Updating the secondary environment EVERY TIME a change is made** to the primary compute environment: Your DR plan won’t work without it.

 

10.  **Ensuring DR process continuity when IT staff changes:** Is the DR process documented, or is it all in one person’s head?  Is there internal or external continuity of expertise for the DR process?  The easiest way to reduce risk is to test after a staff change.

How are companies addressing these overlooked disaster recovery steps?  By using [industry-recognized](https://www.expedient.com/2018-magic-quadrant/) **Disaster Recovery as a Service** ([DRaaS](https://www.expedient.com/services/managed-services/disaster-recovery/)) to automate the DR process, drive complexity out, and facilitate easier testing multiple times per year to ensure successful recoveries.  Read about how **Bouchard Insurance used DRaaS** to preemptively avoid the ravages of a hurricane and keep their critical systems up and running [here](https://www.expedient.com/resources/professional-services-case-study-bouchard-insurance/).  If you want to know more about how DRaaS might help your company reduce risk, contact [me](mailto:doug.theis@expedient.com). _Doug Theis is the Director of Market Strategy in Expedient’s Indianapolis market focused on engaging with and improving the regional IT community through planning, sponsoring and attending community events, facilitating IT-focused continuing education opportunities, and sharing strategies, tactics, and research to help IT professionals stay abreast of best practices and industry trends. Connect with Doug at [doug.theis@expedient.com](mailto:doug.theis@expedient.com), and follow him on [Twitter](https://twitter.com/dougtheis)._