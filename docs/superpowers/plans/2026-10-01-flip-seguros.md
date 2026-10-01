# Flip Seguros Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deliver the approved institutional redesign using all original commercial information.

**Architecture:** Build a static site in `site/dist` with local photos and independent catalogue data, presentation styles, and browser behavior. Preserve external quotation and purchase flows; publish a private Sites preview.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node test runner, local HTTP server.

**Spec:** `docs/superpowers/specs/2026-10-01-flip-seguros-design.md`.

## Global Constraints

- Preserve all eighteen products, actual company presentation, contacts, social links and privacy information.
- Do not invent awards, metrics, prices, opening hours, reviews or WhatsApp support.
- Real photography, blue brand, responsive layout, accessible controls.
- External quotation form and official purchase links; no simulated submissions.

## Review Focus

- Mobile navigation must close after selecting a section and support Escape.
- Filters must preserve access to every original product and explain empty results.
- Detail dialogs must preserve keyboard focus and close with Escape.
- Phones, emails, purchases and proposal links must retain actual destinations.
- Reduced motion, narrow screens and failed image loads must leave readable content.

### Task 1: Content and filtering

**Files:** `site/dist/catalog.js`, `site/tests/catalog.test.mjs`, `site/dist/assets/*`.
**Interfaces:** Export `products`, `categories`, and `filterProducts(category, query)` from catalog.js; each product has id, name, category, description, and optional purchase URL.

- [ ] Write behavioral tests for full catalogue, category filtering, accent insensitive search and empty results; run and observe missing implementation.
- [ ] Extract company and product descriptions from original pages and save source notes outside public assets.
- [ ] Implement catalogue and filtering; run Node tests and confirm success.
- [ ] Download and inspect real photography and brand logo.

### Task 2: Complete visitor experience

**Files:** `site/dist/index.html`, `site/dist/styles.css`, `site/dist/app.js`, `site/dist/privacidade.html`, `site/dist/assets/favicon.svg`.
**Interfaces:** app.js consumes catalogue module; semantic section anchors, native dialog, filter buttons and search field form browser interface.

- [ ] Build coherent first viewport with original brand and working quotation action; show local preview.
- [ ] Complete product presentation and catalogue, company overview, contact, footer and privacy page.
- [ ] Implement catalogue filtering, product dialog, accessible mobile navigation and progressive motion.
- [ ] Verify syntax, asset references and product tests; manually check desktop and mobile browser interactions including focus restoration and reduced motion.

### Task 3: Review and handoff

**Files:** `site/.openai/hosting.json`, `site/README.md`.

- [ ] Review commercial information against original source and verify responsive layout.
- [ ] Commit site source, use Sites workflow to push and package exact source, deploy privately and confirm successful status.
- [ ] Open completed result and deliver link, mentioning preserved external quotation flow.

## Execution record

User explicitly instructed “faça” after scope review; proceed in this session without another approval request. Presentation changes are reversible and will use direct browser verification; automated tests cover the meaningful catalogue logic.

## Scope and verification updates

- User expanded scope to six native main pages. Quote/contact forms now prepare email messages directly in the new site; do not falsely claim delivery.
- User requested stronger visual design and removal of text arrows. Reworked contact composition, typography, product page and shared styling; removed unicode arrows across all pages.
- Catalogue and message tests: 7 passing. Six local routes and all referenced local assets verified.
- Browser: category filtering, detail loading, Escape/focus restoration, mobile navigation, contact preparation and 390px overflow verified. No errors in browser console.
- Independent static review: no important bugs or missing captured content.
