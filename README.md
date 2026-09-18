# Quantum Technologies Club @ URI

Single-page club site for **QTC@URI**.

Official URI page: https://web.uri.edu/engineering/quantum-technologies-club/

## Run it

```bash
python3 -m http.server 5173
```

Open `http://localhost:5173` (needed so `data/*.json` can load).

## Update the next meeting

Edit **one file**: `data/meetings.json`

```json
{
  "meetings": [
    {
      "title": "Workshop: Intro to Qiskit",
      "datetime": "2026-10-01T18:00:00-04:00",
      "location": "Fascitelli 240"
    }
  ]
}
```

The site automatically picks the next upcoming meeting for the hero countdown.

## Feedback quotes

Quotes load from `data/feedback.json` (starts empty), or from a live Google Apps Script feed.

**Automated + moderated setup:** see [docs/FEEDBACK_AUTOMATION.md](docs/FEEDBACK_AUTOMATION.md)

```json
{
  "quotes": [
    { "quote": "I showed up knowing nothing...", "meta": "First-year member" }
  ]
}
```

Optional live feed: set `SITE.links.feedbackFeed` in `script.js` to your Apps Script web app URL.

## Other content

- Layout / sections: `index.html`
- Design: `styles.css`
- Club email, Instagram, forms, URI page: `SITE` in `script.js`
- Partner logos / headshots: `assets/`
