# Global Guidelines — Web Builder Multi-Agent

## 1. Objectif

Ce document définit les règles transversales applicables à **tout site construit avec ce système** (site vitrine, portfolio, landing page, site corporate, etc.).

Il complète :
- `AGENTS.md` (workflow et stack) ;
- `docs/project-spec.md` (spécification du projet générée par `project-analyzer`) ;
- `docs/design-spec.md` (direction artistique définie par `design-agent`).

---

## 2. Principes de Qualité

Chaque site livré doit être :
1. **Unique** : conçu sur mesure selon le secteur, la cible et le cahier des charges (jamais un clone générique).
2. **Clair & Orienté conversion** : compréhension immédiate de l'offre dès le Hero (< 5 secondes), CTA visibles et cohérents.
3. **Vivant mais maîtrisé** : motion design calibré via `data-motion="none|moderate|high"` (`moderate` par défaut) et respect strict de `prefers-reduced-motion`.
4. **Accessible** : sémantique HTML5, contrastes WCAG AA, navigation clavier, `alt` descriptifs, focus visibles.
5. **Optimisé SEO** : balisage sémantique, métadonnées complètes, Open Graph, JSON-LD, `robots.txt` et `sitemap.xml`.

---

## 3. Vérité des informations

> **Règle fondamentale : ne jamais inventer une information factuelle.**

Ne jamais fabriquer :
- de faux clients, partenaires, certifications ou témoignages ;
- de fausses statistiques, années d'expérience ou nombres de projets ;
- de fausses adresses, emails ou numéros de téléphone.

Si une information manque dans le cahier des charges ou le prompt, utiliser `[À compléter : ...]` et le signaler dans le récapitulatif final.

---

## 4. Icônes & Médias

- **Priorité absolue aux icônes vectorielles** (**Bootstrap Icons**, **Font Awesome**, **Lucide**).
- **Zéro emoji dans l'interface utilisateur** (cartes, boutons, badges, listes, titres), sauf demande explicite du client.
- **Images** : privilégier des visuels optimisés (`WebP`/`AVIF` ou SVG propres), avec `width`/`height` ou `aspect-ratio` pour éviter le layout shift (CLS), et `loading="lazy"` sous la ligne de flottaison.
- **Formulaires statiques** : prévoir la validation côté client + indiquer clairement le connecteur d'envoi si statique (Web3Forms, Formspree, Netlify Forms ou fallback `mailto:`).

---

## 5. Langues & Traductions

- Déclarer l'attribut `lang` exact sur `<html>` (`lang="fr"`, `lang="en"`, etc.).
- Si le site est multilingue, traduire naturellement (sans mot-à-mot littéral) tout en gardant exactement les mêmes faits, services et coordonnées entre les versions, et ajouter les balises `hreflang`.
