# Quantum Club — one-page website

This folder is a **single-page** club website with:

- **Scroll reveal animations** and a sticky “story” section (Apple-ish scrolling feel)
- **Pop-up modals** for mission, E-board bios, involvement, resources, etc.
- **Count-up stats** (members/projects/meetings/workshops)

## Run it

Simplest: open `index.html` in your browser.

If your browser blocks some features when opening a file directly, run a tiny local server:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Customize content

Most content is editable in **one place**:

- `script.js`
  - Update `SITE.numbers` (member counts, etc.)
  - Update `SITE.links` (email, Discord, Instagram, interest form)
  - Update modal text in `MODALS`

The page layout/sections are in:

- `index.html`

The design/animations are in:

- `styles.css`

## What to send me next (so I can refine it with real details)

- **Mission**: 2–4 sentences (or bullets)
- **E-board**: names + roles + 2–3 sentence bios (and photos if you have them)
- **How to get involved**: meeting time/place + Discord + interest form
- **Member opinions**: 3–8 short quotes (name optional)
- **Stats**: active member count + meetings/workshops per semester

