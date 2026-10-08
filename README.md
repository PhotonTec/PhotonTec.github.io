# Tianyi Xu's personal homepage

A self-contained English academic homepage inspired by the typography and layout of Chengxuan Zhu's homepage. Profile information comes from CV-Tianyi.pdf; publication author lists are checked against public academic sources.

## Edit content

- Biography, news, experience, education, and honors: `index.html`.
- Publications and their resource links: `assets/js/site.js`.
- Styling: `assets/css/style.css`.
- Supplied profile photo and favicon: `assets/img/`.

In each publication's `links` object, replace `null` with the appropriate URL:

```js
links: {
  pdf: 'assets/pdf/paper-main-and-supp.pdf',
  arxiv: 'https://arxiv.org/abs/0000.00000',
  website: 'https://example.com/project/',
  code: 'https://github.com/owner/project'
}
```

Only resource keys present in a paper's `links` object produce buttons. Remove a key to hide that button; use an empty object to hide all resource buttons. Listed resources with a `null` URL display “link coming soon”; they do not navigate to fake URLs.

Current resource buttons: RefMover has none; Dual-view Reflection Removal has PDF; AdaptiveAE has PDF, arXiv, Website, and Video; AdaptiveISP and Articulated Object Manipulation each have PDF, arXiv, Website, and Code.

PDFs are hosted in `assets/pdf/` and use the HTML `download` attribute. Dual-view Reflection Removal contains the supplied main paper (21 pages) followed by its supplement (15 pages). AdaptiveAE contains the supplied ICCV main paper (10 pages) followed by its supplement (4 pages). AdaptiveISP uses the public 20-page arXiv PDF, whose appendices start on page 14. Articulated Object Manipulation currently uses the 7-page arXiv main paper; a supplementary PDF was not found on its project website or in its repository.

Set `pdfIncludesSupplement: true` only when the PDF includes supplementary material. AdaptiveAE’s Video button links to the video hosted by the official project website.

After editing publications, update the matching static markup in `index.html` so the same resources remain available without JavaScript.

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
- RefMover: https://doi.org/10.1109/TPAMI.2026.3731103 (published online in September 2026).
- AI² Robotics (智平方): https://ai2robotics.com/en/about/
- AdaptiveAE: https://arxiv.org/abs/2508.13503 and https://openimaginglab.github.io/AdaptiveAE/
- AdaptiveAE video: https://openimaginglab.github.io/AdaptiveAE/static/videos/video.mp4
- AdaptiveISP: https://arxiv.org/abs/2410.22939, https://openimaginglab.github.io/AdaptiveISP/, and https://github.com/OpenImagingLab/AdaptiveISP
- Articulated Object Manipulation: https://arxiv.org/abs/2402.18699, https://sites.google.com/view/coarse-to-fine/, and https://github.com/Suhan-Ling/Coarse-to-fine_Affordance
- ICRA paper's conference author order: https://doi.org/10.1109/ICRA57147.2024.10610593

The CV describes Tianyi Xu as the fourth author of the ICRA paper. The published conference author list instead places Tianyi Xu sixth; the homepage follows that list and omits author-rank claims. The earlier arXiv version has a different author list.

Interface icons: Feather (MIT), Simple Icons (CC0), and the Academicons 1.9.1 Google Scholar glyph used by the reference site (font: SIL Open Font License; code: MIT). Typography: Google Roboto (SIL Open Font License). These are locally hosted; no third-party runtime libraries, trackers, or analytics are required.
