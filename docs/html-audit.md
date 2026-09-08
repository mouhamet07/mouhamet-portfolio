# HTML Audit — Portfolio de Mouhamet Thiam

## Mission

Audit et implémentation HTML réalisés selon [docs/design-spec.md](./design-spec.md),
sans modifier le CSS ou le JavaScript existants.

## Corrections réalisées

- Conservé le document one-page et tous les identifiants utilisés par JavaScript :
  `accueil`, `projets`, `competences`, `parcours` et `contact`.
- Clarifié le Hero : le positionnement principal reste `Software & Systems
  Engineer`, avec l'orientation backend/full stack en contexte secondaire.
- Ajouté le CTA de téléchargement vers le fichier réellement présent :
  `site/assets/CV/CV_Mouhamet_THIAM_2026.pdf`.
- Conservé un seul `h1` et la hiérarchie existante `h2`/`h3`.
- Restructuré l'expertise autour de trois axes principaux
  (Software Engineering, Systems & Infrastructure et DevOps) ; Network Fundamentals
  est désormais un `aside` secondaire avec une classe dédiée.
- Conservé tous les projets existants.
- Synchronisé Brasil Burger avec les informations confirmées : modules C# ASP.NET
  MVC, Java Console et Symfony, base SQL partagée créée manuellement, branches
  Git confirmées et déploiement Render.
- Synchronisé ImmoSN avec son cycle complet confirmé, ses technologies et ses
  responsabilités de Product Owner, Lead Developer, développeur Full Stack et
  Backend, DevOps et gestion de la base de données.
- Ajouté exactement un emplacement de capture principale par projet. Aucun fichier
  image inexistant n'est référencé ; chaque emplacement affiche `[NEEDS ASSET]`.
- Corrigé ImmoSN : le visuel ne contient plus `01 /` ; l'index est une métadonnée
  discrète distincte du marqueur typographique.
- Conservé les coordonnées et liens existants sans inventer d'URL.
- Préservé la navigation mobile, les attributs ARIA, `inert`, les classes CSS et
  les attributs `data-*` utilisés par `script.js`.

## Vérifications

- Le HTML contient un seul `h1`.
- Les six projets disposent chacun d'un emplacement unique de capture principale.
- Le lien CV cible un fichier existant dans `site/assets/`.
- Aucun formulaire de contact n'est présent.
- Les liens externes conservent `target="_blank"` et
  `rel="noopener noreferrer"`.
- Préparé les balises favicon, canonical, `og:url`, `og:image` et Twitter Card
  avec placeholders explicites, sans inventer de valeur.

## Points restant à traiter

### CSS Agent

- Donner un poids visuel secondaire à `.skill-row--secondary` et vérifier
  l'intégration de `.project-story__meta-group` / `.project-story__index`.

### JS Agent

- Les traductions locales de Brasil Burger et la métadonnée ImmoSN sont
  synchronisées en FR/EN.

### [NEEDS ASSET]

- Une capture principale vérifiée pour chacun des six projets.

### [NEEDS DECISION]

- Fournir les six screenshots réels.
- Fournir l'URL canonique, l'image sociale et le favicon réels.
