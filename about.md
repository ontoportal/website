---
title: OntoPortal Alliance
description: A consortium of researchers dedicated to promoting semantic services in scientific research .
---
<div style="text-align: center; margin: 5px"> 
	<img src="{{ site.baseurl }}/images/alliance_logo.png" style="height: 150px; width: 150px">
</div>

## What?
OntoPortal Alliance logo with title
The OntoPortal Alliance is a consortium of researchers dedicated to promoting semantic services in scientific research based on shared domain-specific ontologies managed with the collaboratively developed OntoPortal software.

## Why?
Many researchers use services of the OntoPortal Virtual Appliance, based on the BioPortal ontology repository, in dozens of local installations with content and capabilities tailored to their own research needs. Several researchers use OntoPortal to host public repositories, and these hosts are banding together to advance development and community support for this key semantic tool.

## How?
By setting up a common repository on GitHub for the OntoPortal open source software, and by creating other shared resources for technical and strategic collaboration, the community will be able to contribute to OntoPortal’s development, dissemination, and documentation. Together the Alliance will plan the software’s improvements, adoption strategies, and long term growth and sustainability.
## When?
The founding members of the OntoPortal Alliance agreed to create this organization in 2019, and will hold a kickoff meeting (remotely!) in May 2020. Many things about the Alliance are still taking shape—like this web site—and we are pursuing funding to help us accelerate our collaboration. We have big hopes for a lot of achievements in 2020, which we will chronicle here, on the GitHub organization site, and in other to-be-established social channels.

## Who?
Below we show the people (and systems) founding the OntoPortal Alliance. We eagerly welcome more researchers, releasing their own OntoPortal-based public portals, as members in the Alliance.
<section>
		<div class="container flex" style="flex-direction: column; justify-content: center"  >
			<ul class="staff">
				{% for portal in site.alliance_members %}
				<li>
					<div style="height: 100px" class="square-image"><img src="{% include relative-src.html src=portal.logo %}" alt="{{ portal.name }}" style="object-fit: fill; width: 200px;; height: 100px"/></div>
					<div class="name"><a target="_blank" href="{{ portal.link }}" style="color: black">{{ portal.name }}</a></div>
					<div class="position">{{ portal.description }}</div>
				</li>
				{% endfor %}
			</ul>
		</div>
</section>

You will be able to participate in the Alliance in lots of other ways, too—as a company interested in guiding and/or using the OntoPortal software, as an individual using the system for your own research, or just someone wanting to contribute software, documentation, or ideas to our development. We’ll release more information soon about following and adding to in our work.



<div style="justify-content: center">
<h2>Members and Systems of the OntoPortal Alliance. </h2>
<p>
	Today Stanford University packages the OntoPortal Virtual Appliance software from BioPortal software, and the Alliance members above use the packaged software to host their own public web sites. With the establishment of the OntoPortal Alliance, members can work together to develop and maintain a shared repository for this critical software.
</p>
</div>
