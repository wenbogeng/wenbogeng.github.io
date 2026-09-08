# Prototype Instructions

- Run and visually verify the local app before handoff.
- Keep hosting support files intact: `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs`.
- The selected visual direction is the dark-sidebar, ivory-reading-canvas “专注复习阅读器” concept.
- Keep the interface calm, editorial, and reading-first; avoid turning it into a generic card dashboard.
- Store complete real company interview sessions in `src/companyExperiences.js` without splitting them into questions; keep generic reference questions in `src/questions.js`.
- The owner is a quantitative developer. Keep all sample content focused on C++, high-frequency low-latency systems, networking, algorithms, and quantitative trading; do not add frontend interview content.
- Quantitative strategy notes use `trackProgress: false` and do not count toward the core review progress.
- Preserve responsive mobile behavior and local browser persistence for mastery/favorite state.
