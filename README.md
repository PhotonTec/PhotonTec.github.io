# Tianyi Xu's personal homepage

A self-contained English academic homepage inspired by the typography and layout of Chengxuan Zhu's homepage. Profile information comes from CV-Tianyi.pdf; publication author lists are checked against public academic sources.

## Edit content

- Biography, news, experience, education, and honors: `index.html`.
- Publications and their four resource links: `assets/js/site.js`.
- Styling: `assets/css/style.css`.
- Supplied profile photo and favicon: `assets/img/`.

In each publication's `links` object, replace `null` with the appropriate URL:

```js
links: {
  pdf: 'https://example.com/paper.pdf',
  arxiv: 'https://arxiv.org/abs/0000.00000',
  website: 'https://example.com/project/',
  code: 'https://github.com/owner/project'
}
```

All four icons remain visible before links are added. Placeholder buttons display “link coming soon”; they do not navigate to fake URLs.

The Google Scholar icon currently uses a targeted Scholar search because a verified personal Scholar profile was not found. Replace the `href` on `#scholar-link` in `index.html` with the profile URL when available.

## Preview

Open `index.html`, or run `python3 -m http.server 8000` from this directory and visit http://localhost:8000.

## GitHub Pages

Push to `PhotonTec/PhotonTec.github.io` on the `main` branch, then select **GitHub Actions** as the source in **Settings → Pages**. The included workflow deploys updates automatically.

## Sources

- Design reference: https://freebutuselesssoul.github.io/
- Section reference: https://guesss2022.github.io/
- Local CV: CV-Tianyi.pdf (not published with this site).
- ECCV paper authors: https://ci.idm.pku.edu.cn/publication
- AdaptiveAE: https://arxiv.org/abs/2508.13503
- AdaptiveISP: https://arxiv.org/abs/2410.22939
- ICRA paper's conference author order: https://doi.org/10.1109/ICRA57147.2024.10610593

The CV describes Tianyi Xu as the fourth author of the ICRA paper. The published conference author list instead places Tianyi Xu sixth; the homepage follows that list and omits author-rank claims. The earlier arXiv version has a different author list.

Interface icons: Feather (MIT) and Simple Icons (CC0); typography: Google Roboto (SIL Open Font License). These are locally hosted; no third-party runtime libraries, trackers, or analytics are required.
