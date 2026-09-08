# QA Report — Portfolio Mouhamet THIAM

**Date :** 8 septembre 2026  
**Périmètre :** `site/index.html`, `site/css/style.css`, `site/scripts/script.js`,
`site/assets/` et les liens réellement déclarés.

## 1. Résumé exécutif

Le parcours recruteur est compréhensible en moins de 30 secondes : identité,
positionnement Software & Systems Engineer, projets, expertise et contact sont
immédiatement identifiables. Aucun défaut bloquant ou important n'a été reproduit.

**Verdict : ⚠️ PASS WITH WARNINGS** — validation technique et fonctionnelle,
avec des décisions éditoriales/assets encore bloquées.

## 2. Environnement de test

- Chromium intégré via navigateur, page locale `file:///…/site/index.html`.
- Viewports testés : 320, 375, 390, 430, 768, 820, 1024, 1280, 1440 et 1920 px.
- Hauteur de référence : 800 px.
- Vérifications CLI : `node --check site/scripts/script.js`,
  `git diff --check`.

## 3. Tests fonctionnels

| Contrôle | Résultat |
| --- | --- |
| Chargement initial, titre, document HTML | PASS |
| Un seul `h1`, sections et IDs | PASS |
| CTA projets et CV | PASS |
| Menu mobile, overlay, fermeture et Escape | PASS |
| Fermeture du menu après navigation | PASS |
| Passage mobile → desktop avec drawer ouvert | PASS |
| Contact direct sans faux formulaire/envoi | PASS |
| Six projets et six placeholders uniques | PASS |

## 4. Responsive

Tous les viewports demandés ont été testés. `scrollWidth` ne dépasse pas
`clientWidth` ; aucun débordement horizontal n'a été observé. Le burger est
présent sous 768 px et la navigation desktop au-dessus. Les CTA, marqueurs
typographiques, grilles, timeline et footer restent dans le viewport.

## 5. Accessibilité

- Navigation clavier, focus visible, `Tab`, `Shift+Tab` et `Escape` : PASS.
- Ouverture du drawer : focus placé sur le bouton de fermeture ; retour du focus
  au burger à la fermeture : PASS.
- `aria-expanded`, `aria-hidden`, `aria-controls`, `aria-pressed` et `inert` :
  PASS.
- SVG décoratifs masqués avec `aria-hidden` : PASS.
- Hiérarchie `h1` → `h2` → `h3` cohérente : PASS.
- `prefers-reduced-motion: reduce` : toutes les reveals sont visibles,
  le scroll devient automatique et les transitions sont réduites : PASS.

## 6. HTML

DOCTYPE, `lang`, viewport, title, description, `main`, sections sémantiques,
IDs uniques et ancres existantes : PASS. Les liens externes ouverts dans un
nouvel onglet utilisent `rel="noopener noreferrer"`.

## 7. CSS

La direction `Editorial × Engineering × Premium` est respectée : papier clair,
accent navy, typographie sans-serif/mono, séparateurs et hiérarchie sobre.
`Network Fundamentals` reste visuellement secondaire. Aucun correctif CSS
objectivement nécessaire n'a été identifié pendant cette passe.

## 8. JavaScript

La syntaxe passe. Les sélecteurs ciblent des éléments présents. Le drawer,
le focus trap, l'état de scroll, les reveals, les ancres et le changement de
langue fonctionnent. Le hash est conservé après navigation (`#parcours`
vérifié).

## 9. FR / EN

FR et EN ont été activés dans le navigateur. `document.documentElement.lang`,
les textes, les libellés ARIA et `aria-pressed` suivent la langue active.
La préférence est persistée par `localStorage`. L'architecture confirmée de
Brasil Burger est traduite en anglais sans marqueur `[NEEDS DECISION]`.

## 10. Navigation

Les ancres déclarées (`#accueil`, `#projets`, `#competences`, `#parcours`,
`#contact`) ont toutes une cible existante. Navigation desktop, CTA, drawer
mobile et rafraîchissement avec hash sont conformes. `scroll-margin-top`
préserve le titre de section sous la navigation fixe.

Le contrôle HTTP ciblé confirme GitHub (200) et la plateforme Render (200 en
GET). LinkedIn répond 999 depuis l'environnement de test (blocage
anti-bot) ; aucun lien mort n'a été confirmé.

## 11. SEO

Title, meta description, auteur, viewport, `lang` et Open Graph de base sont
présents. Canonical, `og:url`, `og:image`, favicon et Twitter Card sont déclarés
avec placeholders explicites en attente des valeurs réelles.

## 12. Assets

Le CV référencé existe : `site/assets/CV/CV_Mouhamet_THIAM_2026.pdf`
(109030 octets). Les six projets possèdent exactement un emplacement
`[NEEDS ASSET]`. Aucun faux screenshot ni asset inventé n'a été créé.

## 13. Performance

Le site reste vanilla, sans dépendance applicative. Le script est différé,
le scroll est regroupé via `requestAnimationFrame`, les reveals utilisent
`IntersectionObserver` et aucune animation continue n'a été observée.
Les seules ressources distantes sont les Google Fonts.

## 14. Problèmes corrigés

- **P1 fonctionnel — corrigé avant cette passe :** navigation contrôlée sans
  hash ; `history.pushState` conserve désormais l'ancre.
- **P1 i18n/accessibilité — corrigé avant cette passe :** traduction du bloc
  Brasil Burger et libellés ARIA du menu FR/EN.
- **P1 responsive — corrigé avant cette passe :** fermeture/restauration du
  drawer lors du passage à 768 px.
- **P2 contenu confirmé — réconcilié pendant cette passe :** Vue.js est confirmé
  dans ImmoSN ; Brasil Burger est documenté avec ses modules, fonctionnalités,
  base SQL manuelle partagée, branches et déploiement Render, avec traduction
  FR/EN synchronisée.
- **P2 contenu confirmé — finalisé pendant cette passe :** le cycle complet
  d'ImmoSN, ses technologies, ses responsabilités et sa traduction FR/EN sont
  désormais synchronisés.

Les corrections ont été reproduites comme conformes dans le navigateur.

## 15. Problèmes restants

### P2 — [BLOCKED — NEEDS DECISION] Captures projets

Les six captures restent des placeholders. Impact : la preuve visuelle des
réalisations est incomplète pour un recruteur. Fournir au maximum une capture
vérifiée par projet ou confirmer explicitement le maintien des placeholders.

### P3 — [BLOCKED — NEEDS DECISION] Métadonnées SEO enrichies

Canonical, URL Open Graph, image sociale et favicon nécessitent une URL de
publication ou des assets confirmés.

## 16. [NEEDS DECISION]

- Capture vérifiée pour chacun des six projets.
- URL canonique, image sociale et favicon de publication.

## 17. Vérifications finales

- Console/page errors et requêtes échouées au chargement : **aucune**.
- `node --check site/scripts/script.js` : **PASS**.
- `git diff --check` : **PASS**.
- IDs dupliqués et ancres manquantes : **aucun**.
- Réconciliation appliquée à `site/index.html` et aux cinq documents d'audit/
  spécification ; `site/scripts/script.js` n'a pas été modifié.

## 18. Verdict

**⚠️ PASS WITH WARNINGS**

Le portfolio est stable, accessible, responsive et présentable. Aucun P0/P1
ne bloque la livraison technique. Les éléments restant à traiter sont des
preuves/assets et décisions de publication, explicitement marqués
`[BLOCKED — NEEDS DECISION]` plutôt que supposés.
