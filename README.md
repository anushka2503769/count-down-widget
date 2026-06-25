# Aesthetic Countdown Widget for Notion

A lightweight, responsive live countdown matrix widget designed for dark-themed, earthy Notion workspaces. This component tracks target times from seconds up to days and years, applying a deep velvet emerald color scheme inspired by High Renaissance tapestry background work.

---

## Features
* **Dynamic Parameter Customization**: Accepts custom date goals and uppercase text labels directly through URL parameter query variables without modifying the backend file sheets.
* **Automated Fallbacks**: Automatically instances a baseline target exactly 365 days into the future if no query parameters are provided.
* **Velvet Emerald Aesthetic**: Implements a rich forest-mineral backdrop integrated with soft gold-leaf borders.
* **Fluid Container Queries**: Leverages container sizing adjustments to shrink text fonts, margins, and columns instantly when dropped into narrow sidebar lanes or massive top banners.
* **Anti-Flicker Engineering**: Matches browser iframe layers instantly to bypass white startup screen anomalies.

---

## Project Structure
Ensure your workspace directory contains these three files named exactly as shown:
```text
├── index.html   # Main numeric structural layout grids
├── style.css    # Typography scale, responsive constraints, and colors
└── script.js    # Metric calculation engines and query string string selectors
```

---

## Step-by-Step Setup Guide

### 1. Save Your Source Files
1. Copy the code blocks for index.html, style.css, and script.js provided into separate plain text files using any standard code editor (such as VS Code, Notepad, or TextEdit).
2. Save them into a dedicated directory on your system.

### 2. Host the Code Online via GitHub Pages
Because Notion requires an active internet URL link to register embed components, web hosting is necessary:
1. Navigate to GitHub.com and access your account profile.
2. Select the New button to instantiate a fresh project repository. Assign a title such as notion-countdown-widget.
3. Configure the visibility parameters to Public.
4. Finalize the repository creation.
5. Click the option to upload an existing file, then drag and drop index.html, style.css, and script.js into the staging field.
6. Commit the structural file updates.
7. Navigate to the repository Settings panel from the horizontal menu header, locate Pages in the lateral sidebar menu, and select it.
8. Locate Build and deployment, verify the deployment branch is locked to main (or master), and click Save.
9. Allow up to two minutes for structural builds, then refresh the dashboard interface. Copy the active live URL displaying at the header of the page.

---

## Integrating with Notion

1. Copy the live webpage URL destination string from your GitHub Pages portal.
2. Navigate directly to your active Notion canvas dashboard interface.
3. Select an empty line grid element space, type /embed, and choose the embed option module.
4. Insert your live repository deployment link into the input destination path bar.
   * To append custom markers, attach tracking properties like so: `?date=2028-12-25&title=EXAM%20END`
5. Confirm the action to initialize the live viewport module.
6. Scale and organize the layout grid boundary handles to match your preferred workspace columns.

---

## Customization Variations

### Modifying the Canvas Palette
To alter the color tokens to match another classical painting aesthetic variation, modify the hex color keys at the absolute top of style.css:
```css
:root {
  --bg-dark: #191919;       /* Matches Notion canvas backgrounds */
  --card-bg: #0B1A12;       /* Velvet Emerald backdrop framework */
  --accent-gold: #D4B26F;   /* Updates structural borders and text titles */
  --muted-sage: #5A7A68;    /* Sets date tags and horizontal separator ornaments */
  --text-parchment: #ECE6DC; /* Controls numeric number node brightness standards */
}
```

---

## License
Permission is granted to modify, personalize, and integrate this script engine structure into your personal workspace environment layouts.
