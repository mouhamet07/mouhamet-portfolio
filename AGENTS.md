# AGENTS.md

## Web Builder Multi-Agent System — Instructions Globales

Ce fichier constitue le point d'entrée global pour tous les agents IA travaillant sur la création ou l'amélioration d'un site web moderne (site vitrine, portfolio, landing page, site corporate, etc.) dans ce dépôt.

Il définit le workflow de bout en bout, les règles communes, les sources de vérité et les responsabilités de chaque agent.

Les agents doivent lire ce document avant toute intervention significative.

---

# 1. Philosophie & Objectif

Ce système multi-agents permet de passer **d'un cahier des charges ou d'un simple prompt** à un site web moderne, attrayant, vivant, accessible et optimisé pour le SEO.

Chaque site produit doit être :

- **fidèle au besoin** (analysé en amont sans inventer de fausses informations) ;
- **moderne et vivant** (design soigné, hiérarchie claire, motion design calibré) ;
- **techniquement propre** (HTML5 sémantique, CSS maintenable, JS léger et robuste) ;
- **optimisé pour la conversion et le SEO**.

---

# 2. Stack Technique Autorisée

La stack est légère, moderne et adaptable selon `docs/project-spec.md` :

- **Structure** : HTML5 sémantique
- **Style** : CSS3 vanilla, **Bootstrap 5**, et/ou **Tailwind CSS** (selon le choix validé dans `docs/project-spec.md`)
- **Interactivité & Motion** : JavaScript vanilla (ES6+)
- **Icônes (Règle impérative)** :
  - Utiliser une librairie d'icônes vectorielles professionnelle : **Bootstrap Icons**, **Font Awesome** ou **Lucide**.
  - **Prioriser systématiquement les icônes aux emojis** : les emojis (`🚀`, `✨`, `📞`, etc.) sont interdits dans l'interface utilisateur, les cartes, les boutons et les listes (sauf demande explicite du client).

Les agents ne doivent pas introduire de framework JS lourd (React, Vue, etc.) sans justification explicite.

---

# 3. Système de Motion Design Configurable

Un site vitrine moderne doit être vivant sans jamais nuire à la lisibilité ni aux performances.

Le niveau de motion design est défini dans `docs/project-spec.md` et piloté via l'attribut `data-motion` sur `<html>` :

- `data-motion="none"` (**Aucun**) : aucune animation d'entrée ou de scroll ; uniquement les transitions minimales d'accessibilité (`:focus`, `:hover` discrets).
- `data-motion="moderate"` (**Modéré — Recommandé par défaut**) : site vivant et fluide sans surcharge. Micro-interactions sur boutons/cartes, apparitions douces au scroll (`IntersectionObserver`, 200–450ms), navbar dynamique.
- `data-motion="high"` (**Riche / Expressif**) : animations chorégraphiées (stagger sur grilles), transitions hero marquées, compteurs animés, parallaxe légère, effets avancés GPU-accelerated (`transform`, `opacity`).

**Règle d'accessibilité obligatoire** : Quel que soit le niveau choisi, `@media (prefers-reduced-motion: reduce)` doit toujours désactiver les animations non essentielles.

---

# 4. Workflow & Pipeline des Agents

L'ordre recommandé de construction d'un site est :

1. **`project-analyzer`** (`.github/agents/project-analyzer.md`)
   - Point d'entrée. Analyse le cahier des charges ou le prompt utilisateur.
   - Identifie les pages, sections, textes, stack (CSS / Bootstrap / Tailwind), librairie d'icônes et niveau de motion design (`none` / `moderate` / `high`).
   - Produit `docs/project-spec.md`.
2. **`content-agent` & `copy-agent`** *(si affinage éditorial nécessaire)*
   - Vérifient la véracité des informations et optimisent l'accroche, le ton et les CTA.
3. **`html-agent`**
   - Réalise l'intégration HTML5 sémantique des pages et sections définies dans `docs/project-spec.md`, avec les icônes vectorielles (sans emojis).
4. **`design-agent` → `css-agent` → `js-agent`**
   - `design-agent` fixe/valide la direction artistique, la palette, la typographie et le calibrage du motion design (`docs/design-spec.md`).
   - `css-agent` implémente le style (CSS3 / Bootstrap / Tailwind), le responsive et les animations CSS.
   - `js-agent` implémente les interactions, la navigation, la validation de formulaires et le motion design JS (`IntersectionObserver`, compteurs, etc.).
5. **`seo-agent`**
   - Implémente et audite le SEO technique (balises meta, Open Graph, Twitter Cards, JSON-LD, `sitemap.xml`, `robots.txt`, hiérarchie Hn).
6. **`qa-agent`**
   - Audit final : responsive (320px à 1920px), accessibilité, absence d'emojis UI, respect du niveau de motion design + `prefers-reduced-motion`, SEO et zéro erreur console.
7. **`github-agent`**
   - Vérification Git, propreté du dépôt et commit.

---

# 5. Structure du projet

```text
project-root/
├── AGENTS.md
├── README.md
├── .gitignore
├── style-guide.md
│
├── .github/
│   └── agents/
│       ├── project-analyzer.md
│       ├── design-agent.md
│       ├── content-agent.md
│       ├── copy-agent.md
│       ├── html-agent.md
│       ├── css-agent.md
│       ├── js-agent.md
│       ├── seo-agent.md
│       ├── qa-agent.md
│       └── github-agent.md
│
├── docs/
│   ├── project-spec-template.md
│   ├── project-spec.md          # Généré par project-analyzer
│   ├── global-guidelines.md
│   ├── design-spec.md
│   ├── html-analysis.md
│   └── reports/
│
└── site/
    ├── index.html
    ├── css/
    │   └── index.css
    ├── js/
    │   └── script.js
    └── assets/
        └── img/
```

*(Si un projet existant possède des conventions spécifiques comme `site/scripts/` ou des pages supplémentaires, se référer à `docs/project-spec.md`.)*
