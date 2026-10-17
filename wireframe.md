# Wireframe (Text Sketch)

One page. Sections in order: Header → Hero → About → Services → Projects → Contact → Footer.

---

## Phone (360px)

Everything is in one column. Sections are stacked from top to bottom.

```
+------------------------------+
| Mustapha                 [☰] |  <- header (menu opens nav links)
+------------------------------+
|                              |
|   Hi, I'm Mustapha.          |  <- HERO
|   I build simple, fast       |
|   websites that help small   |
|   businesses get more        |
|   customers.                 |
|                              |
|   [ See my work ]            |  <- full-width buttons
|   [ Contact me  ]            |
|                              |
+------------------------------+
| ABOUT                        |
| 3-4 short sentences...       |
+------------------------------+
| SERVICES                     |
| +--------------------------+ |
| | One-page websites        | |
| | short text               | |
| +--------------------------+ |
| +--------------------------+ |
| | Mobile-friendly design   | |
| +--------------------------+ |
| +--------------------------+ |
| | Fixes and maintenance    | |
| +--------------------------+ |
+------------------------------+
| PROJECTS                     |
| +--------------------------+ |
| |      [ image ]           | |
| | Project 1 title          | |
| | one-line description     | |
| | View live →              | |
| +--------------------------+ |
| +--------------------------+ |
| |      [ image ]           | |
| | Project 2 title          | |
| | View live →              | |
| +--------------------------+ |
+------------------------------+
| CONTACT                      |
| Let's work together          |
| [ Email me     ]             |
| [ WhatsApp me  ]             |
+------------------------------+
| © 2026 Mustapha              |  <- footer
+------------------------------+
```

---

## Desktop (1280px)

Content sits in a centered container (max ~1100px wide). Cards sit side by side.

```
+--------------------------------------------------------------------------+
|  Mustapha                          About  Services  Projects  Contact    |  <- header
+--------------------------------------------------------------------------+
|                                                                          |
|                          Hi, I'm Mustapha.                               |  <- HERO
|          I build simple, fast websites that help small businesses        |
|                          get more customers.                             |
|                                                                          |
|                   [ See my work ]   [ Contact me ]                       |
|                                                                          |
+--------------------------------------------------------------------------+
|                ABOUT                                                     |
|                3-4 short sentences in a narrow column (~650px)           |
+--------------------------------------------------------------------------+
|  SERVICES                                                                |
|  +--------------------+  +--------------------+  +--------------------+  |
|  | One-page websites  |  | Mobile-friendly    |  | Fixes and          |  |
|  | short text         |  | design             |  | maintenance        |  |
|  |                    |  | short text         |  | short text         |  |
|  +--------------------+  +--------------------+  +--------------------+  |
+--------------------------------------------------------------------------+
|  PROJECTS                                                                |
|  +-------------------------------+  +-------------------------------+    |
|  |          [ image ]            |  |          [ image ]            |    |
|  | Project 1 title               |  | Project 2 title               |    |
|  | one-line description          |  | one-line description          |    |
|  | View live →                   |  | View live →                   |    |
|  +-------------------------------+  +-------------------------------+    |
+--------------------------------------------------------------------------+
|                          CONTACT                                         |
|                    Let's work together                                   |
|                [ Email me ]   [ WhatsApp me ]                            |
+--------------------------------------------------------------------------+
|                          © 2026 Mustapha                                 |  <- footer
+--------------------------------------------------------------------------+
```

---

## Notes for later (Phase 2)

- **Mobile-first:** build the phone layout first, then add a media query for wider screens.
- **Max width:** content container about 1100px, centered, with 16px side padding on phones.
- **Nav anchors:** `#about`, `#services`, `#projects`, `#contact`.
- **Grid changes:** Services go from 1 column to 3. Projects go from 1 column to 2.
- **Buttons:** big enough to tap on phones (at least 44px tall).
