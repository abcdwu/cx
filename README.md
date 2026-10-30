# Chao Xu — personal professional website

A responsive English-language profile for **chaoxu.me**. Buildless HTML, CSS, and JavaScript; no dependencies, analytics, external fonts, or tracking.

## Preview

From the repository root, run `python3 -m http.server 8080` and open `http://localhost:8080`.

**Save profile as PDF** opens the browser print dialog. Choose Save as PDF; all experience entries expand for printing and are restored afterward. Contact links open an email to `cx@chaoxu.me`.

## Deployment

Host the repository root on any static host. For GitHub Pages, select **Settings → Pages → Deploy from a branch → main / (root)**. `CNAME` declares `chaoxu.me`; it does not configure DNS or enable hosting by itself. Point the domain to the chosen host using its DNS instructions, then enable HTTPS after verification.

## Content and privacy

- Retains the supplied institutions, employers, roles, and professional experience.
- Omits named clients and granular transaction details; only the user-approved email is public.
- Describes PRC Legal Professional Qualification without claiming a current practicing license.
- UCLA uses the supplied anticipated completion date pending confirmation of graduation.
- California Bar information is omitted at the user's request.

Edit `index.html` for content, `styles.css` for appearance, and `script.js` for print and navigation behavior. Update canonical/Open Graph URLs, `CNAME`, `robots.txt`, and `sitemap.xml` together if the domain changes.
