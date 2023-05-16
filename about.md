---
title: OntoPortal Alliance
description: Dedicated to promoting semantic services.
---
<!---
<div style="text-align: center; margin: 5px"> 
	<img src="{{ site.baseurl }}/images/alliance_logo.png" style="height: 150px; width: 150px">
</div>

<p class="subtext editable">  </p>
<a href="" target="_blank"> ... </a> 
-->


## Our <strong>mission</strong>
<p class="subtext editable">The <strong>OntoPortal Alliance</strong> is a consortium of several research and infrastructure teams and a company dedicated to promoting the development ontology repositories ––in science and other disciplines–– based on the open, collaboratively developed <strong>OntoPortal</strong> software.</p>

<p class="subtext editable">Teams in the Alliance develop and maintain several openly accessible ontology repositories and semantic artefact catalogues. These ontology repositories include BioPortal, the primary and historical source of OntoPortal code, but also AgroPortal, EcoPortal, MatPortal and more...</p>

<div>
	<img src="{{ site.baseurl }}/images/OntoPortalInstances_v3.png" alt="Screenshot" />
</div>

<p class="subtext editable"> Many researchers use services of the OntoPortal virtual appliance in dozens of local installations with content and capabilities tailored to their own research needs. Several teams also use OntoPortal to host public <strong>semantic artefact catalogues</strong> and are banding together to advance development and community support for this key semantic tool. </p>

## Our <strong>motivation</strong>

<p class="subtext editable"> The OntoPortal Alliance's <strong><a href="https://hal.science/lirmm-02360625" target="_blank">original motivation and vision</a></strong> was to reuse outcomes and experiences obtained in the biomedical domain ––an area where the use of ontologies has always been important–– to serve and advance other scientific disciplines.</p>

<p class="subtext editable"> The OntoPortal Alliance has a main goal of <strong>synchronizing and sharing</strong> research and development efforts. <br> The group’s motivations are:</p>

<p class="subtext editable"> 
	- to represent OntoPortal adopters and end users; <br> 
	- to maximize the OntoPortal state-of-the-art service portfolio; <br>
	- to improve OntoPortal software while managing several parallel and different installations; <br>
	- to increase semantic uptake in science communities; <br>
	- to improve OntoPortal software while managing several parallel and different installations.<br>
</p>

## Our <strong>values</strong>

<p class="subtext editable"> The Alliance is committed to be an open community. <br>
 By setting up a common repository on GitHub for the OntoPortal open source software, and by creating other shared resources for technical and strategic collaboration, the community can contribute to OntoPortal’s development, dissemination, and documentation. Together the Alliance plans the software’s improvements, adoption strategies, and long term growth and sustainability. </p>

<p class="subtext editable"> The code packaged and running within the appliance is available on the OntoPortal GitHub and licensed BSD-2, so every administrator or developer can easily get the relevant branches or forks and redeploy the code in the appliance. We strongly encourage Alliance partners (and other open-source contributors) to fork the OntoPortal GitHub repositories to enable traceability and collaborative contributions via their pull requests. </p>

<p class="subtext editable"> Besides code sharing, we use GitHub for issues, discussions, decision-making and overall project management. </p>

## Our <strong>roadmap</strong>

<p class="subtext editable"> In 2022, we launched an annual 3-day-workshop that we see as key to fostering our growing community.<br> <a href="https://hal.science/hal-04087929" target="_blank"> See the report of the 2022 edition. </a> </p>

<p class="subtext editable"> The Alliance relies on the support provided by each project deploying an installation. We have implemented a free licensing system that we use to trace the many applications of the technology. In some cases, if the Alliance collaborates with industry or the private sector, we discuss the appropriate terms and conditions and possible financial participation. </p>

## Our <strong>community</strong>
<div>
	<img src="{{ site.baseurl }}/images/workshop2022-group-photo.png" alt="Screenshot" />
</div>

<ul class="staff">
				{% for portal in site.alliance_members %}
				<li>
					<div style="height: 100px;background-color:{{portal.color}}" class="square-image"><img src="{% include relative-src.html src=portal.logo %}" alt="{{ portal.name }}" style="object-fit: contain;width: 200px; height: 100px"/></div>
					<div class="name"><a target="_blank" href="{{ portal.link }}" style="color: black">{{ portal.name }}</a></div>
					<div class="position">{{ portal.description }}</div>
				</li>
				{% endfor %}
			</ul>

<p class="subtext editable"> Beyond the domain-specific portals, the OntoPortal technology is deployed by many external parties with other objectives. For instance, hospitals reuse the technology in-house to use services such as the Annotator on sensitive data. <br>
Through 2015, the virtual appliance file was downloaded or deployed more than 140 times. Since version 3.0 (2020), 98 unique accounts have registered 135 OntoPortal appliances and in 2022, 60 unique appliance IDs called home including 19 running in Amazon Machine Instances.
 </p>

 




