# Hemanth Portfolio (Static Site)

This is a **no-build** portfolio website (HTML/CSS/JS). You can deploy it in minutes using GitHub Pages.

## What's inside
- `index.html` — page layout
- `styles.css` — styling (dark/light theme)
- `app.js` — your content (projects/experience/research/skills) + rendering
- `assets/` — resume + PDFs (already copied)

## Customize
Open `app.js` and edit the `DATA` object:
- `projects`: add/edit cards (GitHub links, tags, highlights)
- `experience`: update roles/bullets
- `research`: add papers / PDFs
- `skills`: update skill groups

## Deploy on GitHub Pages
1. Create a repo like `hemanth-portfolio`
2. Upload all files in this folder
3. GitHub repo → Settings → Pages
4. Source: **Deploy from a branch**
5. Branch: `main` and folder `/root`
6. Save — GitHub will give you a public URL

## Local preview
Just open `index.html` in your browser.
(Or run a tiny server: `python -m http.server 8000`)
