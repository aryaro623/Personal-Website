# Aryan Portfolio V4

Updates:
- Site scaled down to feel closer to Chrome 80% zoom without using global transform scaling.
- Added About / Operator Profile section with photo placeholder.
- Swapped font system to Space Grotesk + IBM Plex Mono + Special Elite.
- Added more animation polish: card tilt, link scan hover, section label pulse, operator profile hover.
- Kept live demo, GitHub, and case study placeholders in script.js.

To add a photo:
1. Put your image in this folder, e.g. `profile.jpg`.
2. In `index.html`, replace the contents of `<div class="photo-placeholder">...</div>` inside `operator-photo` with:
   `<img src="profile.jpg" alt="Portrait of Aryan Arora" />`

To add links:
- Open `script.js`
- For each project, replace:
  demo: "#"
  github: "#"
  caseStudy: "#"
with your real URLs.


V5 patch:
- Section reveal animations now reset when scrolling away and replay when scrolling back.
- The intro SYSTEM STATUS line has been moved slightly upward and spaced away from LOCKED.
- Photo was not present in the execution folder during this patch; upload it again and replace the operator placeholder with `profile.jpg`.


V6 patch:
- Added profile.jpg to the Operator Profile card.


V7 patch:
- Fixed reveal reset logic so sections reappear reliably while still replaying animations.
- Rebalanced LOCKED intro spacing by moving LOCKED down and spacing the status line more evenly.


V8 patch:
- Moved the Operator Profile photo crop upward.


V9 patch:
- Moved the Operator Profile photo crop significantly higher.


V10 patch:
- Corrected photo crop direction. Higher object-position percentage shifts the portrait upward inside the card.


V11 patch:
- Stronger Operator Profile photo crop using image height + translateY instead of object-position alone.


V12 patch:
- Adjusted Operator Profile photo crop from translateY(-18%) to translateY(-10%) for a more balanced face position.


V13 patch:
- Adjusted Operator Profile photo crop from translateY(-10%) to translateY(-7%).


V14 patch:
- Adjusted Operator Profile photo crop from translateY(-7%) to translateY(-4%).


V15 patch:
- Zoomed Operator Profile photo out slightly while preserving current vertical crop.
- Added stronger spacing between SYSTEM STATUS, LOCKED, and the authorization copy.


V16 patch:
- Reserved more bottom space in project cards so OPEN_FILE footer no longer overlaps link buttons.
- Moved LOCKED text down slightly more with improved status-line spacing.


V17 patch:
- Replaced redundant hero LIVE_PROFILE panel with BUILD_RECEIPTS panel focused on portfolio evidence.


V18 patch:
- Added Instacart live demo and GitHub link.
- Added ARYVIS GitHub link and marked it private in the UI.
- Added Green Bean / ARY_OS live demo and GitHub link.
- Left missing live demos and case studies disabled.


V19 patch:
- Adjusted Operator Profile photo crop from translateY(-4%) to translateY(-5%).


V20 patch:
- Adjusted Operator Profile photo crop from translateY(-5%) to translateY(-8%).


V21 patch:
- Added WATCH_DEMO buttons to every project card and modal.
- Added `demoVideo` fields inside each project's `links` object in `script.js`.
- Added a `/videos` folder with expected walkthrough filenames.

To replace placeholders:
1. Put your compressed MP4 files inside the `/videos` folder.
2. Use the exact filenames already referenced in `script.js`, or change the `demoVideo` path for that project.
3. Example:
   "demoVideo": "videos/aryvis-walkthrough.mp4"

Recommended video format:
- `.mp4`
- H.264 video codec
- AAC audio codec
- 1080p maximum resolution
- 30 fps
- 2–4 minutes
- under 50 MB each, ideally under 25 MB


V22 patch:
- Connected ARYVIS WATCH_DEMO button to Google Drive walkthrough video.


V23 patch:
- Connected Budget Flow WATCH_DEMO button to Google Drive walkthrough video.


V24 patch:
- Link truthfulness pass: cards/modals now render only buttons that lead somewhere real. Disabled LIVE_DEMO / CASE_STUDY placeholders removed; broken WATCH_DEMO links to nonexistent local videos removed (re-add by filling demoVideo in script.js when videos exist).
- GITHUB_PRIVATE is now a non-clickable badge (was a link to a GitHub 404). ary_os repo added to the private list since it 404s publicly.
- Contact LinkedIn/GitHub/Resume placeholders marked as *_PENDING and disabled instead of dead "#" links.
- Added ECOSYSTEM_ARCHITECTURE scroll-activated section between featured and secondary projects: ARY_OS and Instacart Intelligence activate first, connectors route inward, ARYVIS activates as the central intelligence/orchestration layer, then a restrained SYSTEM ONLINE moment. Pure CSS/JS, replays on scroll, honors prefers-reduced-motion.
- Reworked ARYVIS project copy: repositioned as the intelligence and orchestration layer of the personal ecosystem (Brain / Heart / SYNAPSE / Hands, ToolExecutor + guardrails, knowledge-index sync, Whisper, SYNAPSE visual layer). WATCH_DEMO now renders before GitHub.
- Bug fixes: missing </section> for #about (all later sections were nested inside it), Escape no longer unlocks page scroll during the intro, Space key on a focused project card no longer scrolls the page.
- CSS cleanup: removed superseded V5/V7/V8/V11 override rules whose final values live in V15/V16 (no visual change).


V25 patch:
- Added EVIDENCE_PIPELINE scroll-scrubbed section between the hero and Operator Profile. Desktop: the panel pins (sticky) while scrolling and a rail fill + faint coordinate grid build with scroll progress; six stages (RAW_FRICTION → OBSERVATION → WORKFLOW → PROTOTYPE → REAL_USE → RECEIPT) activate as the fill reaches their dots, each tagged with the real projects that live at that stage. Ends with an EVIDENCE_INDEX: COMPLETE status line. Scrubbing is fully reversible (scroll back up and it unbuilds). Mobile: vertical rail, no pinning, same progress logic. Pure CSS/JS, no libraries.
- Replaced native Windows scrollbars with slim theme-matched scrollbars (dark track, subtle thumb, green hover) for the page, modal, and nav overflow — Chromium via ::-webkit-scrollbar, Firefox via scrollbar-width/scrollbar-color. Scrollbars remain visible for usability; switch to fully hidden only if explicitly desired.
