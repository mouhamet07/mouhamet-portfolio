# Design Specification — Mouhamet THIAM Portfolio V2

> Spécification UI/UX et Direction Artistique produite par le **`design-agent`** à partir de `docs/project-spec.md`.

---

## 1. Identité visuelle & Direction artistique

- **Concept** : **ARCHITECTURAL EDITORIAL**
- **Personnalité** : Contemporaine, rigoureuse, sculpturale et technologique. Inspirée des grilles de presse architecturale et des portfolios Creative Developer primés (Awwwards / CSSDA).
- **Principe directeur** : `Typographie monumentale + Asymétrie maîtrisée + Filets architecturaux + Mouvement intentionnel`
- **À proscrire absolument** : Dark-mode néon générique, dégradés violet/bleu, glassmorphism systématique, cartes arrondies répétitives, emojis UI.

---

## 2. Palette de couleurs (Tokens `:root`)

Contraste WCAG AA validé sur fond `#F5F2EB` et `#EAE5DA` :

```css
:root {
  --color-paper: #F5F2EB;        /* Fond principal — papier minéral chaud */
  --color-paper-deep: #EAE5DA;   /* Surface secondaire / alternance d'actes */
  --color-paper-card: #FAF8F3;   /* Surface éditoriale surélevée subtile */
  --color-ink: #121413;          /* Noir charbon — titres et fort contraste */
  --color-graphite: #4A4F4B;     /* Texte courant (contraste > 7.5:1 sur #F5F2EB) */
  --color-muted: #5E645F;        /* Métadonnées secondaires (contraste >= 4.8:1) */
  --color-line: #D4CFC3;         /* Filet architectural fin */
  --color-line-dark: #9B978B;    /* Filet structurel fort */
  --color-accent: #123C5D;       /* Bleu pétrole — identité principale & CTA */
  --color-accent-dark: #0A253B;  /* Hover / état actif */
  --color-terracotta: #C4532D;   /* Accent secondaire — marqueurs d'actes, progression */
  --color-error: #A13226;        /* États d'erreur accessibles */
}
```

---

## 3. Typographie

- **Titres (Display / Monumental)** : `'Syne', sans-serif` (weights `600`, `700`, `800`) — caractère architectural fort, tracking serré (`-0.03em`).
- **Corps de texte & UI** : `'Plus Jakarta Sans', sans-serif` (weights `400`, `500`, `600`, `700`) — lisibilité optimale.
- **Métadonnées & Index d'actes** : `'JetBrains Mono', monospace` (weights `400`, `500`, `600`) — numérotation `01`–`06`, stacks, dates.
- **Échelle fluide (`clamp`)** :
  - `h1` : `clamp(2.6rem, 6.2vw + 0.5rem, 5.75rem)` (`line-height: 0.94`)
  - `h2` : `clamp(1.85rem, 3.6vw + 0.5rem, 3.5rem)` (`line-height: 1.04`)
  - `h3` : `clamp(1.35rem, 2vw + 0.4rem, 2.25rem)` (`line-height: 1.12`)
  - `body` : `clamp(0.98rem, 0.25vw + 0.92rem, 1.08rem)` (`line-height: 1.65`)

---

## 4. Compositions & Rythme Spatial

- **Container** : `min(calc(100% - 32px), 1280px)` sur mobile, `min(calc(100% - 80px), 1280px)` sur desktop.
- **Filets architecturaux** : Séparation des actes par `1px solid var(--color-line)` et colonnes structurées par filets verticaux sur desktop.
- **Alternance des actes** :
  - Acte 01 (Hero) : Composition asymétrique `12 colonnes` — titre monumental + bloc méta/CTA décalé + repère graphique animé.
  - Acte 02 (Journey) : Colonne gauche sticky (titre + certifications) + colonne droite timeline avec rail de progression animé au scroll.
  - Acte 03 (Kiki Traiteur) : Mise en scène en **étude de cas prioritaire** sur fond `--color-paper-deep` avec workflow en 6 étapes numérotées.
  - Acte 04 (The Craft) : Matrice interactive par domaine avec onglets/filtres + panneau de détail montrant les projets associés à chaque technologie.
  - Acte 05 (Selected Works) : Compositions variées (Feature full-width pour LAWTAN & ImmoSN, Split asymétrique pour Pointage NFC & Brasil Burger, Grille éditoriale pour EduCRM & Pipeline CI/CD, Archive compacte pour BadWallet & Réseau).
  - Acte 06 (Contact) : Grille 2 colonnes (coordonnées cliquables + copie 1 clic | formulaire avec validation + fallback `mailto:`).

---

## 5. Calibrage du Motion Design (`data-motion="high"`)

- **Attribut** : `<html lang="fr" data-motion="high">`
- **Moteur** : `GSAP 3` + `ScrollTrigger` + transitions CSS natives (`cubic-bezier(0.22, 1, 0.36, 1)`).
- **Chorégraphie** :
  1. **Indicateur de lecture** : Barre `2px` `--color-terracotta` en haut de l'écran (`scaleX` piloté par le scroll).
  2. **Hero Entry (< 900ms, non bloquant)** : Révélation progressive par lignes (`clip-path` / `translateY` + `opacity`) du H1, suivie du sous-titre et des CTAs en stagger (`70ms`).
  3. **Scroll Reveals & Stagger** : `[data-reveal]` et `[data-stagger]` animés via GSAP ScrollTrigger (fallback `IntersectionObserver` si GSAP indisponible).
  4. **Timeline Acte 02** : Trait vertical qui se dessine progressivement (`scaleY`) au fil du scroll.
  5. **Projets** : Parallaxe subtile (`yPercent`) sur les visuels desktop + zoom contenu doux (`scale(1.03)`) au survol.
  6. **Interactions Desktop (`@media (hover: hover) and (pointer: fine)`)** : Boutons magnétiques subtils (amplitude max `6px`), curseur architectural minimaliste optionnel qui s'adapte sur les visuels projets (`VIEW`).
- **Règle mobile & accessibilité** :
  - Désactivation complète du curseur personnalisé et des boutons magnétiques sur écrans tactiles.
  - `@media (prefers-reduced-motion: reduce)` force `opacity: 1`, `transform: none` et désactive toutes les animations GSAP/CSS.

---

## 6. Responsivité & Accessibilité

- **Breakpoints** : Mobile-first `320px` → `768px` (tablette) → `1024px` (laptop) → `1280px+` (desktop).
- **Cibles tactiles** : Minimum `44px × 44px` sur tous les boutons, liens de navigation et filtres.
- **Navigation clavier** : Skip-link `#main-content`, `:focus-visible` `2px solid var(--color-terracotta)`, drawer mobile avec `inert` + focus trap + `Escape`.
