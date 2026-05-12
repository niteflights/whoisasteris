ASTERIS LOGO PACKAGE

Files included
--------------
assets/logo-dr-asteris-apostolidis.png
    Main full logo / wordmark

assets/logo-aa-simple.png
    Simple AA monogram

assets/logo-aa-framed.png
    Framed AA monogram

assets/favicon.ico
assets/favicon-16x16.png
assets/favicon-32x32.png
assets/apple-touch-icon.png
assets/android-chrome-192x192.png
assets/android-chrome-512x512.png
    Favicon/app icon files based on the simple AA monogram


Where to place them
-------------------
1. Put the three logo files in your website's /assets/ folder.

2. Put the favicon files either:
   - in the same /assets/ folder, OR
   - in the repo root if that is how your current site is set up.

Recommended approach:
keep everything inside /assets/ and point your HTML to those files.

Recommended HTML for favicons
-----------------------------
Place this inside the <head> of index.html:

<link rel="icon" href="./assets/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./assets/favicon-16x16.png">
<link rel="apple-touch-icon" href="./assets/apple-touch-icon.png">

Recommended use on the page
---------------------------
Top of page / hero logo:
<img src="./assets/logo-dr-asteris-apostolidis.png" alt="Dr Asteris Apostolidis">

Small header mark:
<img src="./assets/logo-aa-simple.png" alt="AA">

Alternative small mark:
<img src="./assets/logo-aa-framed.png" alt="AA">

Notes
-----
- The simple AA monogram is usually the best one for a favicon because it stays readable at very small sizes.
- The framed AA version works well for a header icon, badge, or square profile mark.
