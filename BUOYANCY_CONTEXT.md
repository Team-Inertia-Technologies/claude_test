# Buoyancy Consultants — Project Context for Claude Code

## Client
**Buoyancy Consultants** — Marine engineering & design consultancy, India
**Current site:** https://www.buoyancyconsultants.com
**Agency:** Team Inertia Technologies, Panaji, Goa

---

## Design System (NON-NEGOTIABLE — do not deviate)

### Typography
- **Display / Headlines:** Playfair Display (400, 600, 700)
- **Body / UI:** Inter (300, 400, 500, 600)
- **Mono / Tags / Labels:** JetBrains Mono (400, 500)

### Color Palette
```css
--navy:   #0B2545;   /* primary bg, headers */
--teal:   #14818A;   /* accent, hover, sustainability */
--gold:   #C9A035;   /* CTA, featured, awards */
--steel:  #F4F6F9;   /* section bg, card fill */
--mid:    #D0D8E4;   /* borders, dividers */
--dark:   #1A2333;   /* headings on white */
--body:   #3A4556;   /* body copy */
--muted:  #7A8A9A;   /* labels, secondary text */
--white:  #FFFFFF;
```

### Design Philosophy
- "Precision engineered, story-driven" — every section earns its place
- Blueprint grid overlays on dark sections (navy bg)
- Ghost watermark text behind hero content (~2% opacity)
- Cinematic photography — real vessels, real shipyard, no stock
- Sections alternate: white → steel → navy → teal (never two navy in a row)

---

## Sitemap (20 pages, 8 L1 + 12 L2/templates)

| ID    | Page                        | URL                              | Priority | WF Status   |
|-------|-----------------------------|----------------------------------|----------|-------------|
| 01    | Home                        | /                                | P0       | WF-01 ✓    |
| 02    | About Us                    | /about                           | P0       | WF-02 ✓    |
| 02.1  | Our Team                    | /about/team                      | P1       | Pending     |
| 02.2  | Affiliations                | /about/affiliations              | P1       | Pending     |
| 02.3  | Awards & News               | /about/awards                    | P2       | Pending     |
| 02.4  | Careers                     | /about/careers                   | P1       | Pending     |
| 03    | Services Hub                | /services                        | P0       | WF-03 ✓    |
| 03.1  | Ship Design                 | /services/ship-design            | P0       | WF-04 ✓    |
| 03.2  | Offshore Engineering        | /services/offshore-engineering   | P0       | Pending     |
| 03.3  | Detailed Engineering & CAD  | /services/detailed-engineering   | P0       | Pending     |
| 03.4  | Retrofit & Conversion       | /services/retrofit-conversion    | P0       | Pending     |
| 03.5  | Project Management          | /services/project-management     | P1       | Pending     |
| 03.6  | Green Solutions             | /services/green-solutions        | P0       | Pending     |
| 04    | Projects Hub                | /projects                        | P0       | Pending     |
| 04.1  | Project Case Study          | /projects/[slug]                 | P0       | Pending     |
| 05    | Sustainability              | /sustainability                  | P1       | Pending     |
| 05.1  | CSR                         | /sustainability/csr              | P2       | Pending     |
| 06    | Insights Hub                | /insights                        | P1       | Pending     |
| 06.1  | Article Template            | /insights/[slug]                 | P1       | Pending     |
| 07    | Contact                     | /contact                         | P0       | Pending     |

---

## Wireframes Completed (HTML files — reference these for all build decisions)

All wireframes are mid-fidelity HTML files. They define exact section structure,
content hierarchy, component layout, and copy. **Do not invent new sections.**

| WF    | Page             | File                                      |
|-------|------------------|-------------------------------------------|
| WF-01 | Homepage         | buoyancy_homepage_wireframe.html          |
| WF-02 | About Us         | buoyancy_aboutus_wireframe.html           |
| WF-03 | Services Hub     | buoyancy_services_wireframe.html          |
| WF-04 | Ship Design      | buoyancy_shipdesign_service_wireframe.html|

---

## Homepage — Section Inventory (WF-01)

1. **NAV** — Sticky, transparent on hero / solid white on scroll. Logo left, 6 nav links, CTA right.
2. **HERO** — Navy bg, blueprint grid overlay, split: copy left / vessel image right. 4-stat strip anchored bottom.
3. **TICKER** — Teal scrolling capability strip (8 service tags, infinite loop).
4. **ABOUT STRIP** — White bg, 2-col: copy + floating accent card (founding year + markets).
5. **SERVICES** — Steel bg, 3×2 card grid. 6 service cards with icon, image ph, desc, link.
6. **PROJECTS** — White bg, bento mosaic grid. Featured project spans 2 rows. Filter tabs.
7. **SUSTAINABILITY** — Navy bg, 4 SDG cards (SDG 12/13/14/17) with official colour borders.
8. **PROCESS** — Steel bg, 6-step horizontal connector diagram.
9. **CLIENTS** — White bg, logo strip + 3 credential stats.
10. **INSIGHTS** — Steel bg, 3-col asymmetric article grid.
11. **CTA BAND** — Navy + gold grid. "Start a Project" + "Download Brochure".
12. **FOOTER** — 4-col + SDG badge strip.

---

## About Us — Section Inventory (WF-02)

1. PAGE HERO — "Engineers Who've Stood on the Deck" manifesto + stat pills + vessel image
2. ANCHOR TABS — Sticky: Our Story / Milestones / Capabilities / Team / Global / Affiliations / Awards
3. OUR STORY — 2-col: copy + pull quote (gold left border) + 4 value cards + floating 200+ badge
4. MILESTONES TIMELINE — 7-node horizontal, teal progress fill, 3 detail cards below
5. CAPABILITIES — Navy bg, 8-card grid, ghost numbers, software tool tags
6. STATS STRIP — Teal bg: 11+ yrs / 200+ projects / 97% retention / 4 markets / 15+ yrs avg exp
7. OUR TEAM — 4-col cards, founders in gold border, expertise pills, "Join" strip below
8. GLOBAL PRESENCE — SVG world map + 4 market cards (flag + name + desc + badge)
9. AFFILIATIONS — 12-logo grid (class societies + industry bodies + software partners)
10. AWARDS — Navy bg, 3-col award cards with trophy icons
11. CTA BAND

---

## Services Hub — Section Inventory (WF-03)

1. PAGE HERO — Quick-jump pills to each service + 3 credential cards
2. SERVICE TABS — Sticky, 6 tabs, Green Solutions distinguished with gold active state
3. SHIP DESIGN BLOCK — Visual left + copy right, deliverables checklist, mini process, tool chips, outcome card
4. OFFSHORE BLOCK — Reversed layout
5. DETAILED ENGINEERING BLOCK — "Designed to Fit" philosophy emphasis
6. RETROFIT BLOCK — Reversed layout, laser scanning emphasis
7. PROJECT MANAGEMENT BLOCK — Live model sharing emphasis
8. PROCESS OVERVIEW — 6-step vertical, timeline card (typical durations)
9. GREEN SOLUTIONS — Full dark section, 4 green cards, SDG badges, dedicated CTA
10. CAPABILITY MATRIX — 11 capabilities × 6 services comparison table
11. PROJECT EXAMPLES — 3-col cards
12. TESTIMONIAL BAND — Teal bg, client quote
13. FAQ — 6 questions (accordion)
14. CTA BAND

---

## Ship Design Service Detail — Section Inventory (WF-04)

1. HERO — Cinematic split, "Service 01 of 06", 3 inline stats, floating badge (97% class approval)
2. ANCHOR NAV — 6 tabs + inline "Get a Proposal" CTA (always visible)
3. OVERVIEW — 2-col + pull quote + 3 sidebar cards (summary, vessel types, class societies)
4. SCOPE & PHASES — 4-phase tab selector + 3-col phase cards with deliverable checklists
5. VESSEL TYPES — 4-col (featured spans 2), spec rows per card
6. DELIVERABLES — Navy bg, 2-col, 12 drawing disciplines, icon + description + badge
7. SOFTWARE & TOOLS — 6 tool rows + class rules overlay card
8. CASE STUDIES — Featured case + 4 list items
9. PROCESS DETAIL — 5-stage vertical timeline + 4 stat cards + philosophy quote
10. CLASS SOCIETIES — 6-col grid with experience badges
11. SUSTAINABILITY HOOK — Green design bridge to SDG narrative
12. FAQ — 6 ship-design-specific questions
13. RELATED SERVICES — 3 cards

---

## SDG Alignment

| SDG | Colour  | Buoyancy Engineering Practice                      |
|-----|---------|---------------------------------------------------|
| 12  | #C5192D | "Designed to Fit" — zero-waste production packages |
| 13  | #3F7E44 | EEDI/EEXI compliance, alt-fuel vessel design        |
| 14  | #0A97D9 | Hull noise reduction, MARPOL compliance             |
| 17  | #19486A | Class society & industry body partnerships          |

---

## Key Content Gaps (client to supply before hi-fi)

- CRITICAL: Vessel & project photography
- CRITICAL: Team headshots (shipyard context preferred)
- CRITICAL: Project case study data (name, class, LOA, client, year, outcome)
- High: Software tool logos (NAPA, AVEVA, ANSYS, Maxsurf, Rhino, AutoCAD)
- High: Class approval statistics (to validate 97% claim)
- High: SDG impact metrics (quantified)
- Medium: Client testimonials (2–3 minimum)
- Medium: Award names and dates

---

## Recommended Tech Stack

**Option A (recommended for this project):**
Webflow CMS — design fidelity, client content management, animation support

**Option B (if building in code):**
Next.js 14 (App Router) + Tailwind CSS + Sanity CMS
- Google Fonts: Playfair Display + Inter + JetBrains Mono
- Framer Motion for scroll animations
- Shadcn/ui for base components

**Option C (budget):**
WordPress + Elementor Pro + custom child theme

---

## Competitor References (for visual benchmark)

- VARD: https://www.vard.com — cinematic storytelling, vessel portfolio
- Damen: https://www.damen.com — product taxonomy, filterable projects
- NAPA: https://www.napa.fi — data visualisation, sustainability metrics
- naValue: https://navalue.de — values-first copy, boutique tone

---

## Deliverables Produced So Far

| # | Document | Format | Status |
|---|----------|--------|--------|
| 1 | Project Brief | .docx | ✓ Complete |
| 2 | Sitemap & IA | .docx | ✓ Complete |
| 3 | Homepage Wireframe | .html | ✓ Complete |
| 4 | About Us Wireframe | .html | ✓ Complete |
| 5 | Services Hub Wireframe | .html | ✓ Complete |
| 6 | Ship Design Service Page | .html | ✓ Complete |

---

*Prepared by Team Inertia Technologies, Goa — April 2026*
