---
title: Allegrograph Inside!
categories:
 - About the Appliance
 - Happenings
 - News
author_staff_member: John graybeal
date: 2020-06-13
---

With the release of OntoPortal Version 3.0, you will be able to use Allegrograph as your RDF store for your OntoPortal Virtual Appliance! In this post we’ll tell you about this new (beta!) capability and why we’ve partnered with Franz, Inc. to provide it.

Want to just jump right in? Visit the [AllegroGraph Configuration section](https://ontoportal.github.io/administration/steps/allegrograph_configuration/) of our [OntoPortal Administration Manual](https://ontoportal.github.io/administration/) for details on configuring your Appliance to use Allegrograph as the RDF store.

What’s the RDF store?
---------------------

The RDF store is where the “RDF triples”—statements made following the Resource Description Framework specification—are stored. So, it’s a database of triples. Except that often, as with 4store (our existing RDF store) and Allegrograph, it’s a ‘quad store’, because it has more than 3 parts to each statement. So for SPARQL queries it’s a triple store, and for our purposes it’s an RDF store.

What’s different in the Appliance?
----------------------------------

There are two main changes to the Appliance distribution. (1) We now include a copy of the Allegrograph software in our packaged Virtual Appliance. (2) We have code in the OntoPortal Virtual Appliance software—and in BioPortal, for that matter—that knows how to talk to the Allegrograph software.

In BioPortal and the OntoPortal distribution, this code is not turned on by default, so those systems run with 4store as the standard RDF store. But now you can try switching to Allegrograph if you are interested to see how it works, or want to use its other tools to examine and work with your RDF data from OntoPortal. Some of those tools are pretty cool, by the way.

Why Allegrograph?
-----------------

When our principal expert on 4store left Stanford, we knew we needed to have a more supportable and supported RDF store at some point. The 4store software has been extraordinarily robust and scalable over time, and its always been free and open source, so we have made great use of it for a long time. Unfortunately, it has very few maintainers, so we have been concerned that any significant problems could be all but impossible for us to fix, whether in-house or through a contract.

We chose Allegrograph for several reasons: It has been the a leading RDF storage solution in its reliability and scalability since our first experience with it in 2006 (on [another ontology repository](https://mmisw.org), as it happens). Its customer service for odd edge case issues and personal hand-holding has been exemplary through the years, even for those smaller projects. And the Franz, Inc. leadership and technical team has been willing to work with us as we have slowly found time to integrate Allegrograph with BioPortal and OntoPortal code.

(After our OntoPortal software went to press, we learned of yet another advantage to Allegrograph, and that’s Gruff! We’ll tell you more about that later, or just hop over to the Franz web site to learn more about this graph visualization tool.)

Why now? And why ‘beta’?
------------------------

We started that integration over 4 years ago, and about 4 months ago we arrived at a major milestone: A version of BioPortal software running with an Allegrograph backend passed all of BioPortal’s unit and API tests. We were even able to run a development branch of BioPortal with the Allegrograph system, and speed tests—even without any Allegrograph optimization—showed comparable speeds between the two systems.

Unfortunately, that isn’t enough for us to use Allegrograph in our production BioPortal system. To do that, we really need to do some more heavy usage tests, approximating our 3,000,000 daily API rest calls, and maybe some even more careful timing tests to be sure the system won’t slow down in our Production environment. But this will take months at least. And meanwhile, other people are also interested in replacing the 4store backend, or experimenting with a powerful graph database as the OntoPortal backend.

Our OntoPortal Virtual Appliance 3.0 release provided us the answer. By putting our Allegrograph compatibility changes into the production BioPortal code—but leaving that integration turned off by default in our released product—we could provide Allegrograph compatibility to our Virtual Appliance users.

It was a rush, but finally we completed that integration, and now we have started rolling out that Allegrograph-compatible code! But only in beta at the moment, for two reasons. First, we still haven’t done a lot of testing ourselves. And second, in the migration from Allegrograph 6.4 to Allegrograph 6.6 and then 7.0, we ran into a test that no longer worked. So at the moment we’re Allegrograph-(6.4)-compliant, and that’s the distribution you’ll find in the OntoPortal 3.0.1 release. We’re working closely with Allegrograph to work out the remaining edge cases, and as soon as we’re compliant with Allegrograph’s latest and greatest release (7.0), we’ll be releasing another version of the OntoPortal Virtual Appliance.

Getting Started
---------------

To learn how to configure Allegrograph for your purposes, hop over to the [AllegroGraph Configuration section](https://ontoportal.github.io/administration/steps/allegrograph_configuration/) of our [OntoPortal Administration Manual](https://ontoportal.github.io/administration/), where detailed instructions are available.

If you need to store a large number of triples, please be aware that Allegrograph is a commercial product which requires a paid license for a larger number of triples. Please see the Franz, Inc. web site to learn