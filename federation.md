---
title: OntoPortal Federation
description: A technical and collaborative framework for federated Semantic Artefact Catalogues.
---

## Our <strong>mission</strong>

<p class="subtext editable">The <strong>OntoPortal Federation</strong> is a collaborative and technical framework enabling multiple <strong>OntoPortal-based Semantic Artefact Catalogues (SACs)</strong> to interoperate. Each portal remains autonomous and serves its own scientific community, while benefiting from shared infrastructure, services, and governance practices.</p>

<p class="subtext editable">The Federation is a <strong>sub-group of the OntoPortal Alliance</strong> whose members have committed to a stronger level of interdependence — both technically and organizationally. Participating in the Federation means agreeing to implement federation capabilities <em>and</em> to engage collaboratively in shared governance, content coordination, and community building.</p>

<div style="display: flex; gap: 2em; flex-wrap: wrap; justify-content: center; margin: 2em 0;">
  <div style="flex: 1; min-width: 260px; background: #f4f8ff; border-left: 4px solid #1a6aaa; padding: 1.2em 1.5em; border-radius: 4px;">
    <h3 style="margin-top: 0;">⚙️ Technical federation</h3>
    <p>Federated portals are interoperable at the API level because they share the same OntoPortal technology. This enables federation features to be implemented at the user interface level with relatively low effort — providing users with seamless access to distributed semantic artefacts across disciplines.</p>
  </div>
  <div style="flex: 1; min-width: 260px; background: #f4fff6; border-left: 4px solid #2a8a4a; padding: 1.2em 1.5em; border-radius: 4px;">
    <h3 style="margin-top: 0;">🤝 Governance & collaboration</h3>
    <p>The Federation operates a distributed, community-driven governance model with a <strong>Coordination Committee</strong>, an <strong>Editorial Board</strong>, and a <strong>Technical Team</strong>. Partners collectively define interoperability rules, metadata curation guidelines, onboarding processes, and shared development priorities.</p>
  </div>
</div>

## Federated <strong>portals</strong>

<p class="subtext editable">The OntoPortal Federation currently brings together <strong>four domain-specific portals</strong> covering environmental sciences, enabling unified access to semantic artefacts across agri-food, ecology, earth sciences, and biodiversity.</p>

<ul class="staff" style="justify-content: center;">
  {% assign federated = site.data.portals | where: "federation", true %}
  {% for portal in federated %}
  <li>
    <div style="height: 100px; background-color: {{ portal.color }}" class="square-image">
      <img src="{% include relative-src.html src=portal.logo %}" alt="{{ portal.name }}" style="object-fit: contain; width: 200px; height: 100px"/>
    </div>
    <div class="name"><a target="_blank" href="{{ portal.link }}" style="color: black">{{ portal.name }}</a></div>
    <div class="position">{{ portal.description }}</div>
  </li>
  {% endfor %}
</ul>

## What the Federation <strong>enables</strong>

<div style="display: flex; gap: 1.5em; flex-wrap: wrap; justify-content: center; margin: 2em 0;">
  <div style="flex: 1; min-width: 220px; text-align: center; padding: 1em;">
    <div style="font-size: 2em; margin-bottom: 0.3em;">🔍</div>
    <h3>Federated Browse</h3>
    <p>Users can discover ontologies and semantic artefacts not only from their current portal, but also from all other portals in the Federation — with a single browsing interface and shared category filters.</p>
  </div>
  <div style="flex: 1; min-width: 220px; text-align: center; padding: 1em;">
    <div style="font-size: 2em; margin-bottom: 0.3em;">🔎</div>
    <h3>Federated Search</h3>
    <p>Concept and class search extends across all federated portals simultaneously. Results from each portal are visually distinguished by their colour code and link back to the relevant portal for deeper exploration.</p>
  </div>
  <div style="flex: 1; min-width: 220px; text-align: center; padding: 1em;">
    <div style="font-size: 2em; margin-bottom: 0.3em;">🔗</div>
    <h3>Federated API</h3>
    <p>Each federated portal exposes a self-description endpoint and a shared API, enabling programmatic access to distributed semantic artefact content and metadata across the entire Federation.</p>
  </div>
</div>

<div>
  <img src="{{ site.baseurl }}/images/federation-portals-ui.jpg" alt="The four federated portals share a similar user interface and look and feel" style="width:100%; border-radius: 6px; margin: 1em 0;" />
  <p style="text-align: center; font-size: 0.85em; color: #666; margin-top: 0.3em;">The four federated portals share a consistent user interface and look and feel — AgroPortal, BiodivPortal, EarthPortal, EcoPortal.</p>
</div>

## Scientific <strong>scope</strong>

<p class="subtext editable">The four federated portals together cover a broad spectrum of <strong>environmental and life sciences</strong>:</p>

<p class="subtext editable">
  <strong>AgroPortal</strong> (INRAE, France) — agri-food, plant sciences, and agronomy<br>
  <strong>EcoPortal</strong> (LifeWatch ERIC, Italy) — ecology and related domains<br>
  <strong>EarthPortal</strong> (CNRS / Data Terra, France) — earth and environmental sciences<br>
  <strong>BiodivPortal</strong> (InfAI, Germany) — biodiversity and biological sciences
</p>

<p class="subtext editable">As of 2025, the four federated portals together provide access to several hundred semantic artefacts across these disciplines, with cross-domain browsing and search available in each portal's interface.</p>

## <strong>Cite us</strong>

<div style="background: #f4f8ff; border-left: 4px solid #1a6aaa; padding: 1.2em 1.6em; border-radius: 4px; max-width: 780px; margin: 1em auto; text-align: left;">
  <p style="margin: 0; line-height: 1.7;">
    Jonquet C., Bouazzouni S., Alviset G., Fiore N., Karam N., Kihal B., Pierkot C., Pulieri M., Rosati I. (2025).<br>
    <strong>Federated FAIR Semantic Artefacts Discovery and Search with OntoPortal Federation.</strong><br>
    In: <em>Proceedings of the 24th International Semantic Web Conference (ISWC 2025)</em>, Nara, Japan, pp. 434–450.<br>
    <span style="font-size: 0.9em;">
      <a href="https://hal.science/hal-05224287" target="_blank">Open access (HAL)</a> ·
      DOI: <a href="https://doi.org/10.1007/978-3-032-09530-5_25" target="_blank">10.1007/978-3-032-09530-5_25</a>
    </span>
  </p>
</div>

## Joining the <strong>Federation</strong>

<p class="subtext editable">The Federation is open to OntoPortal-based portals that are willing to commit to both its technical requirements and its collaborative governance model. Joining the Federation implies implementing federation capabilities and engaging actively in shared practices around metadata curation, duplicate management, and community coordination.</p>

<p class="subtext editable">Other Alliance members have already expressed interest in joining — including portals in the domains of biomedicine, cultural heritage, social sciences, and astronomy.</p>

<div style="text-align: center; margin: 2em 0;">
  <a href="https://ontoportal.github.io/documentation/administration/federation/" target="_blank" class="button">
    Technical documentation →
  </a>
  &nbsp;&nbsp;
  <a href="/about" class="button alt">
    Contact the Alliance
  </a>
</div>
