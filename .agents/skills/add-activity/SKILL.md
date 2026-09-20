---
name: add-activity
description: How to log a new activity on this Hugo site - a summit or attempt, a multi-summit trip, an ultramarathon or other race, or a trip report. Use whenever the user wants to add, log or record an ascent, run or trip, or to create a missing objective or attach a trip-report PDF.
---

# Adding an activity

An **activity** is one dated entry in the log: one ascent, one race, or an attempt at either. Everything else on the site is derived from activities, so most of the work is getting the links right.

```
list (alps-4000ers, ultramarathons, ...)  <-  objective  <-  activity  ->  trip report (PDF)
                                             Peak/Pass/Run   one dated
                                                             visit
```

- **Every activity has exactly one objective**, linked through `objectives:`. The objective must exist first. An objective is the thing you attempt: a peak, a pass, or a distance in a specific race (type `Run`).
- An objective may **belong to a list** through `lists:`. The list progress ("50 / 82 summited"), the "My ascents" / "My runs" tables and the Activities table are computed from the activity files. Never edit them by hand.
- Activities and objectives are not in the sidebar. Nothing needs registering; the files are picked up automatically.

## 1. Collect the facts

Ask the user for anything missing. Do not invent it.

- Date (`YYYY-MM-DD`). It must not be in the future: Hugo silently skips future-dated pages.
- Which peak, pass or race.
- Whether it succeeded: the summit was reached, or the race finished. An attempt is a valid activity.
- Partners, route or trip name, and any notes worth keeping. All optional.
- For a race: finishing time, ranking, ITRA points, and the actual distance and elevation gain (ITRA or tracker).
- A trip-report PDF, if one exists.

## 2. Find or create the objective

```bash
ls content/docs/objectives | grep -i <name>
```

Objective files are named by group:

| Prefix | Meaning | Add new ones? |
|---|---|---|
| `alps-4000m-NNN-` | UIAA Alps 4000ers (82) | No, the list is complete |
| `tatra-8000ft-NNN-` | Tatra 8000fters (14) | No |
| `snow-leopard-` | Snow Leopard peaks (5) | No |
| `other-` | Peaks and passes not on a list | Yes |
| `run-` | Races and other runs | Yes |

If the objective is not found, create it. The slug is lowercase ASCII with diacritics stripped and hyphens; the `title` keeps the proper spelling.

**Every objective must have `objective_type`**: `Peak`, `Pass` or `Run`. The build fails if it is missing or unknown. The Objectives page has one table per type.

### A peak or pass: `other-<slug>.md`

```markdown
---
title: "Kala Patthar"
elevation: 5644
range: "Mahalangur Himal"
objective_type: "Peak"          # "Peak" or "Pass"
country: "Nepal"
latitude: 27.9958
longitude: 86.8284
---

## Description

What it is and where it sits (one short paragraph).

How it is usually climbed (one short paragraph).
```

- `elevation` (metres), `range`, `country`, `latitude` and `longitude` are all needed. Coordinates are decimal degrees, and the Coordinates row only appears when both are set.
- Look elevation, range and coordinates up from a reliable source. If you cannot verify them, ask the user rather than guess.
- Optional: `access_huts`, `normal_route`. List objectives also carry `rank` and `lists: ["/docs/lists/<list>/"]`.
- Match the tone and length of neighbouring objective pages: two short factual paragraphs, no marketing language.

### A race: `run-<slug>.md`

An objective is *one distance in one race*, not one edition of it. If the user runs the same race again, reuse the objective. If the same event has several distances (say an 80 km and a 40 km), each is its own objective, so put the distance in the slug and the title.

The objective's `distance_km` is the **nominal** distance, the one in the race's name (80 for an "80km" race). The distance and elevation gain that were actually covered vary by edition (route changes, permits), so they go on each activity, not here.

```markdown
---
title: "Vilnius Trail Run – Vilnius Trail 108KM"
objective_type: "Run"
country: "Lithuania"
category: "100K"
distance_km: 108                        # nominal, as in the name
elevation_gain_m: 3114
lists: ["/docs/lists/ultramarathons/"]
---
```

Use `lists: ["/docs/lists/ultramarathons/"]` for ultramarathons, since that is what puts the race on the Ultramarathons page. Only add a description if the user supplies facts about the race.

## 3. Create the activity file

Path: `content/docs/activities/YYYY-MM-DD-<objective-slug>.md`. The slug is the objective's filename without `.md`, for example `2026-06-12-alps-4000m-021-dome-du-gouter.md`.

Write the file by hand. Do **not** use `hugo new`: the archetype produces a TOML draft, and drafts are not built.

```markdown
---
title: "2025-08-13 Pointe Walker"
date: 2025-08-13
objectives: ["/docs/objectives/alps-4000m-031-grandes-jorasses-pointe-walker/"]
route: "Grandes Jorasses traverse"      # optional, trip or route name
partners: ["Name Surname"]              # optional, only people the user named
success: true                           # false for an attempt or a DNF
report: "2025-some-trip.pdf"            # optional, see section 4
---

Optional body: only real facts the user gave you.
```

- `title` is the date, a space, then the objective's short common name ("Mont Blanc", "Pointe Walker"). For most objectives the objective's title is fine. Check neighbouring files for the style.
- `objectives` is a list of full paths, `"/docs/objectives/<slug>/"`, with a leading and trailing slash. A typo does **not** fail the build: the objective just silently disappears from the page. Always run the check in section 5.
- `success` means the summit was reached or the race was finished. `success: false` adds "(attempt)" after the title on the Activities page and shows ❌ on the objective page. On a peak list the attempt is counted in the bracketed number but the peak is not ticked.
- **Body:** leave it empty if there is nothing to say. Never write placeholders such as "Ascent details to be added". Keep the user's own wording for notes, and do not translate them.

### Repeat visits

Every visit is its own file with its own date, linked to the same objective. Never edit an old activity to record a second visit. The two Kernave Trail runs (2021 and 2022) are one objective with two activities.

### Several summits in one day or trip

One file per summit, each with its own objective. Give them the same `date`, `route`, `partners` and `report`. The filenames differ because the objective slugs differ. See the `2025-08-13-*` files for a worked example.

### Races

A race is an ordinary activity. Add the personal result and the **actual** distance and elevation gain, as fetched from ITRA or recorded by a tracker. They may differ from the objective's nominal figures. Category and country live on the objective.

```markdown
---
title: "2026-05-09 Vilnius Trail Run – Vilnius Trail 108KM"
date: 2026-05-09
objectives: ["/docs/objectives/run-vilnius-trail-108km/"]
success: true
distance_km: 109                        # actual, from ITRA or a tracker
elevation_gain_m: 3114
national_league: true                   # only when the race counts for it
endurance_points: "ITRA 4"
gender_ranking: 29
race_time: "15:04:26"
---
```

## 4. Trip reports (optional)

Trip reports are PDFs submitted to the Lithuanian Mountaineering Association.

1. Put the PDF in `static/reports/<year>-<slug>.pdf`. Keep it small; the existing ones are 4-11 MB, so compress before committing if you can.
2. Add an entry to `data/trip-reports.yaml` (fields: `title`, `detail`, `date`, `category`, `file`, and optionally `award` with `medal`, `title`, `category`).
3. Set `report: "<file>"` on **every** activity from that trip. The value must equal the entry's `file` exactly, otherwise the build fails with a clear error.

## 5. Verify

The build checks trip-report names and `objective_type`, but not links between activities, objectives and lists, so run both steps.

```bash
# 1. Every objective and list path used by an activity or objective must exist
grep -rhoE '"/docs/(objectives|lists)/[^"]+/"' content/docs/activities content/docs/objectives | sort -u | while read -r p; do
  p=${p//\"/}; [ -f "content${p%/}.md" ] || echo "missing: $p"
done

# 2. The site builds, and the activity appears on its objective page
hugo build --gc --minify
grep -c "<activity title>" public/docs/objectives/<objective-slug>/index.html
```

The first command prints nothing when everything is fine. The second should print `1` or more. For a list objective, also confirm the progress line on the list page changed as expected. `public/` and `resources/` are build output and are gitignored, so never edit them.

## 6. Committing

Only commit or open a PR when the user asks. Use a feature branch, not `main`, and fill in `.github/pull_request_template.md` (Summary, Changes, Testing) in your own words.
