# ClearTrade AI implementation notes

- **Palette:** navy-black background, cool white text, muted slate text, electric blue primary accent, translucent elevated surfaces.
- **Typography:** Geist Sans for interface and display copy; Geist Mono for eyebrow labels and operational data.
- **Surfaces:** use `.glass` for elevated panels. Keep text contrast explicit on every translucent surface.
- **Layout:** mobile-first flex and grid; `.container-shell` is the shared max-width wrapper.
- **Motion:** one restrained rise-in sequence plus hover states; all motion is disabled under `prefers-reduced-motion`.
- **Prototype caveat:** metrics, testimonials, customer names, logos, and compliance references are illustrative placeholder content until validated by the product owner.
- **Accessibility:** semantic headings, labeled controls, focus rings, keyboard-safe mobile navigation, escape-to-close modal, and touch targets of at least 44px.
- **Dependencies:** Next.js App Router, React, Tailwind CSS v4, Geist, and Lucide React only. No persistence or external integrations are used in this prototype.
