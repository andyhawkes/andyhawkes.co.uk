# Docusaurus v3 Website / Blog Improvement Action Plan

## Scope
Targeted improvements for personal site built with Docusaurus v3.
Focus on:
- Information architecture
- Content clarity
- Machine readability
- SEO / metadata
- Minimal structural changes

---

## 1. Homepage (src/pages/index.*)

### Add sections
- Add "Current focus" section (2–3 sentences)
- Add "Selected posts" or "Recent thinking" section (3–5 posts)

### Implementation
- Modify homepage component in `src/pages/index.*`
- Pull blog posts using Docusaurus blog plugin APIs
- Sort by date, filter by tag if needed

---

## 2. New Page: /thinking (or /current)

### Create
- File: `src/pages/thinking.md` (or .tsx if custom)

### Content
- List 3–5 core ideas
- Link to related blog posts
- Keep concise and structured

---

## 3. Blog Structure (blog/)

### Front matter standardisation
Ensure all posts include:
```
title:
slug:
date:
tags:
description:
authors:
```

### Tag taxonomy
Use consistent tags:
- engineering
- delivery
- ai
- product
- systems
- personal

### Archive handling
- Tag older posts as `archive` or `legacy`
- Exclude from main blog listing if needed
- Option: create `/blog/archive` page using tag filtering

---

## 4. Blog Listing Customisation

### Modify blog list page
- Override theme component if needed:
  `src/theme/BlogListPage/*`

### Behaviour
- Show recent posts first
- Optionally filter out `archive` tagged posts
- Add summaries (use `description` field)

---

## 5. Metadata and SEO (docusaurus.config.*)

### Global config
- Set:
  - `title`
  - `tagline`
  - `url`
  - `baseUrl`
- Configure navbar with:
  - Home
  - Thinking
  - Blog
  - Projects
  - Writing

### Per-page metadata
Ensure:
- unique `<title>`
- meta description
- canonical URL

### Blog plugin config
- Enable reading time
- Enable RSS feed
- Configure sitemap plugin

---

## 6. Structured Data (optional but recommended)

### Add JSON-LD
- Inject via custom component or layout
- Types:
  - BlogPosting
  - Person

---

## 7. Semantic HTML

Ensure components render:
- `<main>`
- `<article>`
- `<section>`
- `<nav>`

Review custom components in:
- `src/theme/*`

---

## 8. Navigation and UX

### Navbar
- Keep minimal and clear
- Prioritise:
  - Thinking
  - Blog

### Homepage
- Ensure recent content is visible above the fold

---

## 9. Performance

- Optimise images in `/static`
- Ensure fast page load
- Avoid unnecessary client-side JS

---

## 10. Consistency Rules

- Use direct, observational tone
- Avoid jargon and abstract terminology
- Prefer concrete examples
- Keep posts focused on a single idea

---

## 11. Optional Enhancements

- Enable RSS feed
- Verify `sitemap.xml`
- Verify `robots.txt`
- Add privacy-friendly analytics

---

## Target Files

- `src/pages/index.*`
- `src/pages/thinking.*`
- `blog/*.md`
- `docusaurus.config.*`
- `src/theme/BlogListPage/*` (if overriding)
- `src/theme/Layout/*` (if adding structured data)

