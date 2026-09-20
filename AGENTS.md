# AGENTS.md

Personal website of Linas Smalakys, live at https://smalakys.com. It is a static [Hugo](https://gohugo.io) site on the [hugo-book](https://github.com/alex-shpak/hugo-book) theme (dark), deployed to GitHub Pages by `.github/workflows/hugo.yaml` on every push to `main`.

## What the site is for

1. **A personal log, first and foremost.** Linas's mountaineering and running record: activities, the objectives they belong to, and progress on lists such as the Alps 4000ers.
2. **A resource for fellow alpinists.** The calculators under Tools, the lists, and trip reports (PDFs).
3. **A short professional profile.** Resume and publications.

## Principles

Minimalism, clean design and speed come before anything fancy. When in doubt, do less.

- Plain content and plain tables. Prefer text and a table over a widget, chart or card layout.
- No new JavaScript frameworks, dependencies, web fonts, animations, tracking, or decorative images. The site ships almost no JavaScript; keep it that way. A small inline script is fine when a page genuinely needs it (the calculators).
- Keep pages light. Do not add markup or data that every page has to carry, such as long lists in the sidebar, which is deliberately limited to top-level sections.
- Reuse the theme's variables and the existing styles in `assets/_custom.scss`. Do not add new colours, fonts or one-off styles. For anything visual, follow the **Design reference** below.
- Pages must read well on a phone, and content pages must be readable without JavaScript (only search and the calculators need it).
- Do not add a feature, page or section that was not asked for. Avoid changing URLs; if a page must move, add an `aliases` entry so old links keep working.

## Design reference

The design is modelled on [GitHub Docs](https://docs.github.com) and on github.com itself (both built on GitHub's [Primer](https://primer.style) design system), in dark mode. When a styling question comes up (sizes, spacing, callouts, buttons, tables, code), look at how GitHub does it and match it, rather than inventing something. A good page to compare against is [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), which has headings, callouts, tables and code. Its [source file on github.com](https://github.com/github/docs/blob/main/content/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax.md) shows the same content rendered the github.com way.

**Where docs.github.com and github.com differ, follow github.com**, which has the softer `#0d1117` dark theme the site wants (docs.github.com is pure black). The exceptions the owner has chosen are the heading sizes (docs) and the link colour (docs), listed below.

Do not guess from memory or from the theme's defaults: hugo-book's sizes differ from GitHub's. Open the GitHub page, inspect the element, and read the computed values (`font-size`, `line-height`, `margin`, and `box-shadow` for rules drawn as shadows), then put them in `assets/_custom.scss`. Emulate dark mode in the browser first, since the light values differ.

Values already matched, measured from docs.github.com article pages:

| Element | Size | Weight | Line height |
|---|---|---|---|
| Body text, page intro | 16px | 400 | 1.6 |
| Page title (`h1`) | 40px | 600 | 1.2 |
| `h2` | 24px | 600 | 1.3 |
| `h3` | 20px | 600 | 1.3 |
| `h4` | 16px | 600 | 1.3 |
| `h5` | 14px | 600 | 1.3 |
| `h6` | 13.6px | 600 | 1.3 |

Deliberate differences from GitHub Docs; keep them:

- The font is the system stack, not Mona Sans, because of the no-web-fonts rule. That is also why the `h1` is weight 600; GitHub's 460 only works with a variable font.
- On phones (below `$breakpoint-mobile`) the `h1` drops to 32px, because long activity titles wrap to four lines at 40px. Primer also steps its `h1` down on mobile.
- `h2` keeps the thin rule underneath, as in Primer's README-style `markdown-body`; docs.github.com article pages omit it.
- Colours are github.com's dark palette (`#0d1117` background and so on). The one exception is links, which use docs.github.com's softer blue `#a2daff` instead of `#58a6ff`. Take new colours from Primer, never from elsewhere.
- Links in body text are underlined, as on docs.github.com, so they do not rely on colour alone. Buttons and heading anchors are not.
- Tables keep hugo-book's own look: 16px, a full grid and striped rows, with header cells in bold. The owner tried docs.github.com's borderless 14px tables and rejected them, so do not restyle tables to match Docs.
- Callouts (`> [!NOTE]`) are github.com's: no fill, square corners, a 4px left border in Primer's darker emphasis colour, and a title in weight 500. docs.github.com rounds them to 8px.

The theme resets every heading to `line-height: 1` and leaves `h4`-`h6` unbolded and larger than GitHub's. `assets/_custom.scss` overrides both, so put heading changes there, under `.book-article`.

## Layout of the repo

| Path | What it holds |
|---|---|
| `content/docs/activities/` | One file per dated activity (an ascent, an attempt or a race) |
| `content/docs/objectives/` | Peaks, passes and runs that activities point at |
| `content/docs/lists/` | Lists (Alps 4000ers, Tatra 8000fters, Snow Leopard, Ultramarathons, trip reports) |
| `content/docs/tools/` | Calculators (altitude and oxygen, stove fuel) |
| `content/docs/work/`, `content/docs/links/` | Resume, publications, external profile links |
| `layouts/` | Template overrides for the theme, including the activity, objective and list pages |
| `assets/_custom.scss` | All custom styling |
| `data/trip-reports.yaml`, `static/reports/` | Trip-report metadata and PDFs |
| `hugo.toml` | Site configuration |

Do not edit `themes/hugo-book`; it is a git submodule. Override with files in `layouts/` or `assets/` instead. `public/` and `resources/` are build output and are gitignored.

## Data model

```
list  <-  objective (Peak, Pass or Run)  <-  activity  ->  trip report (PDF)
```

Every activity links to exactly one objective, and objectives may belong to lists. List progress and the Activities and Objectives tables are computed from these files, so never hand-edit them. To log something, follow the **add-activity** skill in `.agents/skills/add-activity/SKILL.md`; it has the front matter, naming rules and the checks to run.

## Working on the site

```bash
git submodule update --init      # first time only, fetches the theme
hugo server                      # live preview
hugo build --gc --minify         # the same build CI runs; must pass with no errors
```

Before finishing a change, build the site and look at the pages you touched, including at phone width.

## Content rules

- Do not invent facts. Elevations, coordinates, names, times and distances come from the user or a source you have checked. If you are unsure, ask.
- No placeholder text such as "to be added". An empty page body is fine.
- Keep the user's own wording in notes. Do not translate or "improve" it.
- Calculators are physics-based and must state their limitations. They are not medical or safety advice.

## Git

- Work on a branch named `smalakys-<topic>`; never push to `main`, which deploys the site.
- Commit and open a PR only when asked, and fill in `.github/pull_request_template.md` in your own words.
