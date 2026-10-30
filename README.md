# Chao Xu — personal professional website

A responsive English-language profile for **chaoxu.me**. Buildless HTML, CSS, and JavaScript; no dependencies, analytics, external fonts, or tracking.

## Preview

From the repository root, run `python3 -m http.server 8080` and open `http://localhost:8080`.

**Print / Save PDF** opens the browser print dialog. Choose Save as PDF; all experience entries expand for printing and are restored afterward. Contact links open an email to `xucc2026@lawnet.ucla.edu` or dial `+1 (559) 900-1888`.

## Deployment

Host the repository root on any static host. For GitHub Pages, select **Settings → Pages → Deploy from a branch → main / (root)**. `CNAME` declares `chaoxu.me`; it does not configure DNS or enable hosting by itself. Point the domain to the chosen host using its DNS instructions, then enable HTTPS after verification.

## Content and privacy

- Retains the supplied institutions, employers, roles, and professional experience.
- Omits named clients and granular transaction details; only the user-approved email and telephone number are public.
- Describes PRC Legal Professional Qualification without claiming a current practicing license.
- UCLA uses the supplied anticipated completion date pending confirmation of graduation.
- California Bar information is omitted at the user's request.

Edit `index.html` for content, `styles.css` for appearance, and `script.js` for print and navigation behavior. Update canonical/Open Graph URLs, `CNAME`, `robots.txt`, and `sitemap.xml` together if the domain changes.

## Chao identity

The full outlined Chao wordmark appears in the header, footer, and every icon. A raised blue dot at the upper right of the final o is the signature detail. Graphite, white, and blue match the site's restrained design. SVG outlines avoid external font dependencies. Browser icons include a multi-size ICO and SVG; Apple touch and Android icons are included. Versioned icon URLs refresh cached favicons.

Brand sources: `assets/chao-mark.svg` (square icon) and `assets/chao-wordmark.svg` (horizontal wordmark). The favicon and PNG exports use the full Chao name.

## University emblems

Education entries use local university emblem images instead of letter placeholders. The original colors and proportions are preserved; assets are sized with `object-fit: contain`. UCLA uses its campus seal with UCLA at the bottom, rather than the generic UC seal. Source references and asset provenance are recorded in `assets/schools/SOURCES.md`.

## Responsive design

The introduction leads directly to Experience, followed by Education, Areas of Focus, and Contact. The compact layout includes a native expandable navigation menu with all section links, Escape dismissal, and focus restoration. Screen body text is 16px with 13–15px secondary text, and interactive targets are at least 44px tall. Enlarged text can wrap without hiding content.

Both Print / Save PDF controls open the browser print dialog; this is not a direct résumé-file download. Print styles include every experience entry. The page honors reduced-motion, reduced-transparency and higher-contrast preferences. The light design, full Chao wordmark and original university emblems are retained.

When editing CSS or JavaScript, update their version query in index.html so returning visitors receive matching markup and styles.
