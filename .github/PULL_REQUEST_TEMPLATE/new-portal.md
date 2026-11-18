<!--
Template for adding a new portal to the OntoPortal Alliance website.
Use it by opening your PR with: https://github.com/ontoportal/website/compare?template=new-portal.md
Ideally the PR is prepared (or at least reviewed) by the portal's own team.
Please branch from an up-to-date `main`: the map and `_data/portals.json` change often.
-->

## Portal

- **Name / acronym:**
- **URL:**
- **Organisation(s) running it:**
- **Status:** production / upcoming
- **Contact person (reviewed this PR):**

## Checklist

- [ ] **Review by the portal team**: the portal's contact reviewed the wording, logo and links.
- [ ] **Portals list**: entry added to `_data/portals.json` (acronym, name, link, description, status, `federation`), with the logo in `images/alliance_member_logos/` and a background `color` that suits it.
- [ ] **Our sponsors**: funders / projects added to `sponsors:` in `_config.yml` (`portals:` set to the new portal), with logos in `images/sponsor_logos/`.
- [ ] **Alliance diagram**: node added to `images/ontoportal-alliance-map.html` and the portal count updated; both PNGs regenerated, `images/ontoportal-alliance-map-light.png` (default) and `images/ontoportal-alliance-map.png` (`?theme=dark`), as 1400x1000. Check that accents and symbols render correctly.
- [ ] **Blog post**: announcement added in `_posts/` (`YYYY-MM-DD-title.md`), or agreed with the maintainers that none is needed.
- [ ] **Local check**: site built with `bundle exec jekyll serve`; the portals page, home page, About page and the post look right.

## Notes

<!-- Anything reviewers should know: open points, pending logos, related PRs touching the same files... -->
