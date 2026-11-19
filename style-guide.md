# Style Guide — Web Builder Multi-Agent System

Ce document sert de référence stylistique transversale pour les projets générés. Les choix précis (couleurs, polices, rayons, ombres) sont définis pour chaque projet dans `docs/design-spec.md` à partir de `docs/project-spec.md`.

## 1. Principes visuels
- **Clarté** : l'utilisateur comprend l'offre et l'action attendue en moins de 5 secondes.
- **Hiérarchie** : un `<h1>` fort par page, des sous-titres lisibles, des CTA bien contrastés.
- **Cohérence** : utiliser des tokens CSS (`--color-*`, `--space-*`, `--radius-*`) plutôt que des valeurs isolées.

## 2. Icônes (Règle stricte)
- Utiliser exclusivement la librairie d'icônes vectorielles choisie (`Bootstrap Icons`, `Font Awesome` ou `Lucide`).
- **Aucun emoji** dans les cartes, boutons, titres ou listes.

## 3. Responsivité & Accessibilité
- Mobile-first de `320px` à `1920px+`, zéro overflow horizontal.
- Contraste WCAG AA minimum (4.5:1 texte courant, 3:1 grands titres).
- États `:hover`, `:focus-visible` et `:active` distincts sur tous les éléments interactifs.
- Motion design piloté par `data-motion="none|moderate|high"` + `@media (prefers-reduced-motion: reduce)`.
