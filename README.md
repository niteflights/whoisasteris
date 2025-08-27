# Original site — edits applied

Changes requested:
- Default **light theme** (white background). Dark mode still available via toggle.
- **Removed CV download** link.
- **Fixed profile photo**: ensured the path is `./assets/headshot.jpg` (case-sensitive). Added `<link rel="preload">` to help loading.
- Updated subtitle under your name to: **“Research & Innovation • Aviation & Aerospace • Tech & AI”**.
- **Removed email** from Contact; kept LinkedIn & Google Scholar.
- **Added Selected Photos** section: put images in `/photos` and list them in `photos/photos.json`.

## Add your career photos
1. Drop images into `/photos` (e.g., `photos/aviation-summit-2024.jpg`).
2. Edit `photos/photos.json` and add entries like:
```json
[
  { "src": "photos/aviation-summit-2024.jpg", "alt": "Keynote at Aviation Summit", "caption": "Keynote — Aviation Summit", "year": "2024" },
  { "src": "photos/engine-lab.jpg", "alt": "In the engine lab", "caption": "Diagnostics R&D", "year": "2023" }
]
```
3. Commit & deploy. The gallery will render automatically.

## If your headshot shows a question mark
- Confirm the file exists at `assets/headshot.jpg` in the **published branch** and that the path in `index.html` is exactly `./assets/headshot.jpg` (case matters on GitHub Pages).
- If you used a different file name, rename it and update the HTML.
- Avoid uppercase/lowercase mismatches and make sure the image is included in the repo.
