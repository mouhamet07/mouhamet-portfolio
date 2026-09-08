# Audit JavaScript — Portfolio Mouhamet THIAM

## 1. Périmètre

Audit du JavaScript réellement chargé par `site/index.html`, avec lecture des
documents de référence, du HTML/CSS et des assets présents. Seuls
`site/scripts/script.js` et ce rapport sont concernés par cette mission.

## 2. État initial

- **P1 — FR/EN incomplet :** le texte de Brasil Burger, placé dans
  `.project-story__pending`, n'était pas ciblé par les traductions locales. En
  anglais, il restait donc en français.
- **P1 — Libellé ARIA incohérent :** l'ouverture et la fermeture du menu
  réécrivaient `aria-label` du burger en français, même lorsque `lang="en"`.
- **P1 — Changement de largeur :** un drawer ouvert à 390 px restait ouvert
  après passage à 1024 px ; le body restait verrouillé et `main` inert alors
  que le burger n'était plus affiché.
- Le formulaire de contact est absent conformément à la spécification ; aucune
  logique de formulaire n'a été ajoutée.

## 3. Corrections appliquées

- Ajout des deux cibles de traduction locales du bloc confirmé Brasil Burger.
- Ajout d'un choix de libellé FR/EN pour `aria-label` du burger.
- Synchronisation du drawer avec le breakpoint `768 px` via `matchMedia` :
  passage en desktop ferme le drawer, restaure les états `inert`/body et rend
  le focus au logo si nécessaire.
- Aucun framework, URL, contenu confirmé, formulaire ou dépendance externe
  n'a été ajouté.

## 4. Navigation mobile

**Test navigateur Chromium local à 390 px : PASS.** État initial fermé
(`aria-expanded="false"`, `aria-hidden="true"`, `inert`). L'ouverture active
le drawer, l'overlay, le verrouillage du body et le focus sur le bouton fermer.
`Escape` ferme le drawer, restaure le focus au burger et rétablit les états
ARIA/inert. Un clic sur un lien ferme également le drawer.

Le passage testé de 390 à 1024 px ferme désormais le drawer et retire
`menu-open`/`inert` de la page.

## 5. Navigation / ancres

**Test navigateur : PASS.** Les liens internes existants conservent leurs
URLs et leurs ancres (`#parcours` vérifié), utilisent le défilement existant et
ferment le drawer mobile. Le `scroll-margin-top` CSS reste utilisé. Les liens
externes, mailto, téléphone et CV n'ont pas été modifiés.

## 6. FR / EN

**Test navigateur : PASS.** Le français reste le repli par défaut ; le bouton
EN met à jour `document.documentElement.lang`, `aria-pressed`, les textes
locaux et les libellés du menu. Le texte confirmé de Brasil Burger est
désormais traduit sans valider son contenu.

## 7. LocalStorage

**Test navigateur : PASS.** La clé `portfolio-language` persiste le choix EN
après reload. Une valeur inattendue revient à FR sans exception. Les accès
`localStorage` restent protégés par `try/catch`, conformément au repli sûr
existant.

## 8. Reveal / animations

**Test navigateur : PASS.** `IntersectionObserver` et son fallback existant
restent inchangés. Avec `prefers-reduced-motion: reduce`, les 33 éléments
`.reveal` sont immédiatement visibles. Aucun timer de reveal ni nouveau
listener de scroll n'a été ajouté.

## 9. Accessibilité

**Test navigateur : PASS.** Les états `aria-expanded`, `aria-hidden`,
`aria-pressed`, `inert`, le focus initial du drawer, le piège Tab et Escape
ont été vérifiés. Le libellé du burger reste maintenant cohérent avec la
langue active.

## 10. Console

**PASS.** Le chargement, les interactions testées et les reloads Chromium
local n'ont produit aucune `pageerror` ni erreur console. `node --check
site/scripts/script.js` passe également.

## 11. Responsive

**Test navigateur : PASS** aux largeurs 320, 360, 375, 390, 430, 768, 834,
1024, 1280, 1440 et 1920 px : aucun débordement horizontal détecté, un seul
`h1`, drawer fermé après chargement.

## 12. Performance

Le traitement de scroll déjà regroupé par `requestAnimationFrame` est conservé.
La correction responsive utilise un seul listener `MediaQueryList`; aucun
listener resize, timer ou reconstruction DOM supplémentaire n'a été introduit.

## 13. Points bloqués

- **[BLOCKED — HTML]** Aucun défaut JS observé ne nécessite de modifier la
  structure HTML. Le formulaire reste volontairement absent.
- **[BLOCKED — CSS]** Aucun correctif CSS n'est nécessaire pour les bugs JS
  identifiés. Les états visuels et le `scroll-margin-top` restent la
  responsabilité du CSS existant.
- **[NEEDS ASSET]** Screenshots vérifiés des six projets.
- **[NEEDS DECISION]** URL canonique, image sociale et favicon réels.
- Toute modification de l'adresse email existante doit rester confirmée avant
  implémentation.

Ces points n'ont pas été implémentés ni transformés en faits par JavaScript.

## 14. Vérifications finales

- Syntaxe Node : PASS.
- Chromium local : chargement, menu, Escape, navigation mobile, FR/EN,
  persistance, valeur LocalStorage invalide, reduced motion et responsive :
  PASS.
- URLs, assets, contenu éditorial confirmé et progressive enhancement :
  conservés.
- Aucun fichier hors périmètre n'a été modifié par cette mission.

## 15. Conclusion

Les trois bugs JavaScript reproduits ont été corrigés sans refonte :
traduction du bloc Brasil Burger, libellés ARIA du burger selon la langue et
fermeture cohérente du drawer lors du passage en desktop. Le support FR/EN,
le drawer accessible, les ancres, le reveal, le reduced motion et les liens
existants sont préservés.
