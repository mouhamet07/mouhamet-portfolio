# Design Specification — Portfolio de Mouhamet Thiam

> Version 1.1 — spécification UX/UI consolidée à partir de l'état actuel du projet
> et des audits disponibles.
>
> Ce document guide les agents HTML, CSS et JavaScript. Il ne remplace pas le
> contenu vérifié du projet et n'autorise pas l'invention de technologies, de
> résultats, de liens ou de visuels.

## 1. Analyse de l'existant

### Éléments conservés

- Portfolio one-page en HTML5, CSS3 et JavaScript vanilla.
- Identité personnelle **Mouhamet THIAM** et positionnement **Software & Systems Engineer**.
- Direction claire déjà engagée : fond papier clair, encre sombre, accent bleu navy,
  typographie sans-serif et JetBrains Mono pour les métadonnées techniques.
- Navigation fixe avec menu mobile, `aria-expanded`, `aria-hidden`, `inert`, gestion
  de l'échappement et piège de focus.
- Sections actuelles : Hero, À propos, Projets, Expertise, Approche, Parcours et Contact.
- Projets actuels : ImmoSN, EduCRM, Brasil Burger, CI/CD Pipeline, Infrastructure &
  Monitoring et Network Infrastructure.
- Formations ISM, UNCHK, baccalauréat et certifications Cisco déjà présentes.
- Coordonnées existantes : email, téléphone, LinkedIn et GitHub.
- Un seul fichier CV présent dans `site/assets/CV/`.

### Diagnostic

1. Le positionnement est globalement cohérent, mais le sous-titre du Hero doit
   présenter le développement backend/full stack comme une orientation du profil,
   pas comme une identité concurrente.
2. Les trois axes principaux doivent être lisibles dans l'ordre suivant :
   **Software Engineering**, **Systems & Infrastructure**, **DevOps**.
   Les réseaux restent une compétence complémentaire.
3. ImmoSN doit être traité comme le projet principal et décrit par son cycle de
   développement uniquement lorsque les éléments sont réellement présents.
4. Brasil Burger doit expliquer son architecture multi-module au lieu de juxtaposer
   ses technologies.
5. Aucun screenshot de projet n'a été trouvé dans les assets. Les visuels doivent
   donc rester explicitement marqués `[NEEDS ASSET]` jusqu'à validation.
6. Le menu fixe doit conserver une marge d'ancrage suffisante pour que les titres
   de section ne soient pas masqués.
7. Les grands marqueurs typographiques de projet doivent éviter les coupures de mots
   artificielles sur les petits écrans.
8. Le formulaire de contact ne doit pas être ajouté : le contact est direct.
9. Le fichier CV confirmé conserve exactement le nom
   `CV_Mouhamet_THIAM_2026.pdf` dans `site/assets/CV/`.

## 2. Décisions de direction artistique

### Positionnement

La direction est **Editorial × Engineering × Premium** :

- éditoriale par la typographie, les grands titres et les espaces blancs ;
- engineering par les grilles, séparateurs, index, métadonnées et workflow ;
- premium par la retenue, la précision et l'absence d'effets gratuits.

Priorité de conception : **crédibilité > hiérarchie > lisibilité > expérience >
esthétique**.

### Palette

Conserver une palette courte, issue du CSS actuel :

| Rôle | Valeur actuelle | Usage |
| --- | --- | --- |
| Papier | `#f7f5f0` | fond principal |
| Papier profond | `#ece9e1` | surfaces et projet principal |
| Encre | `#202321` | titres, identité |
| Graphite | `#3f4541` | texte courant |
| Muted | `#6f756f` | texte secondaire |
| Ligne | `#d5d4cd` | séparateurs |
| Ligne sombre | `#aeb2aa` | limites structurantes |
| Accent navy | `#16466b` | CTA, labels, liens, repères |
| Accent navy sombre | `#0d304b` | métadonnées renforcées |

`--color-muted` sert au texte secondaire courant. `--color-faint` ne doit être
conservé que pour des informations réellement moins prioritaires (par exemple
une mention de pied de page) ; sinon il faut le fusionner avec `--color-muted`.
Les contrastes doivent rester vérifiables sur papier clair.

### Typographie et formes

- Plus Jakarta Sans : texte courant, titres et boutons.
- JetBrains Mono : labels, dates, index, technologies et micro-métadonnées.
- Les titres utilisent une taille fluide, un poids modéré et une interlettrage
  resserré ; éviter les titres entièrement en capitales.
- Les composants restent presque rectangulaires (`border-radius` faible) afin de
  conserver une sensation d'outil professionnel.
- Les séparateurs fins, la barre verticale du Hero et les index numériques sont
  des éléments de structure, pas de la décoration.

## 3. Hiérarchie et structure UX

Ordre recommandé :

1. Hero / identité et proposition de valeur.
2. À propos / positionnement.
3. Projets / preuves concrètes.
4. Expertise / trois axes.
5. Approche / workflow.
6. Parcours / formations et certifications.
7. Contact.

La navigation principale peut rester courte : Travail, Expertise, Parcours,
Contact. L'À propos et l'Approche restent accessibles dans le défilement sans
alourdir le menu.

## 4. Hero

Le Hero doit répondre en quelques secondes à : qui est Mouhamet, que fait-il et
pourquoi consulter la suite ?

- Identité : `Mouhamet THIAM`.
- Eyebrow : `SOFTWARE & SYSTEMS ENGINEER`.
- Proposition : logiciel fiable, backend/full stack, automatisation et
  infrastructure.
- CTA primaire : `Voir les projets`.
- CTA secondaire : `Télécharger le CV`.
- Informations de contexte : Dakar, Sénégal et disponibilité, uniquement si ces
  informations restent exactes.
- NEXTERRA ne remplace jamais l'identité personnelle dans le Hero.

Le Hero reste court : pas de mur de technologies, pas de photo obligatoire,
pas d'animation dominante.

## 5. À propos

Présenter le développement logiciel comme le coeur du profil, complété par les
systèmes, l'infrastructure et le DevOps. Utiliser une formulation cohérente avec
le Hero ; `Développeur Backend / Full Stack Junior` est une orientation, non un
second branding.

La section doit expliquer la vision de cycle de vie sans promettre une expertise
senior. Les tags peuvent résumer : développement, administration système,
réseaux, déploiement et monitoring.

## 6. Expertise

Utiliser trois lignes ou blocs de poids comparable, sans mur de logos :

1. **Software Engineering** — Backend Development, API/REST, architecture,
   bases de données, frontend et testing.
2. **Systems & Infrastructure** — Linux, Windows Server, Active Directory,
   administration système, infrastructure, virtualisation et supervision.
3. **DevOps** — Docker, CI/CD, Jenkins, GitHub Actions, Kubernetes,
   automatisation et monitoring.

**Network Fundamentals** est une connaissance complémentaire, présentée en
ligne secondaire ou sous-liste : TCP/IP, VLAN, routage, OSPF, RIPv2, EIGRP,
NAT, ACL, STP, EtherChannel, GNS3 et Cisco Packet Tracer. Ne pas lui donner le
poids d'un quatrième axe principal.

## 7. Projets et preuves visuelles

Chaque projet conserve exactement **un emplacement de screenshot principal**.
Ne pas créer de galerie. Tant qu'aucun fichier réel n'est fourni, afficher
`[NEEDS ASSET]` dans la spécification ou dans un état visuel discret ; ne pas
fabriquer d'image ni de mockup présenté comme une capture.

### ImmoSN — projet principal

- Label : `Software Engineering — Full Lifecycle`.
- Priorité visuelle la plus forte.
- Décrire le cycle complet confirmé : analyse/conception, modélisation PostgreSQL,
  développement Spring Boot et Vue.js, API REST, JWT et gestion des rôles, tests,
  Docker, CI/CD, déploiement et monitoring.
- Présenter les responsabilités confirmées : Product Owner, Lead Developer,
  développeur Full Stack et Backend, DevOps et gestion de la base de données.

### EduCRM

- Preuve de développement web/backend Python.
- Mentionner Flask et Blueprint uniquement comme technologies confirmées.
- Mettre l'usage et la valeur fonctionnelle avant la liste technique.

### Brasil Burger

- Le présenter comme une architecture multi-module confirmée combinant une
  application Java Console pour les ressources, une application Symfony pour les
  managers et une application ASP.NET MVC/C# pour les clients.
- Le déploiement Render, la base commune créée manuellement via un script SQL et
  les branches `modelisation`, `java`, `csharp` et `symfony` sont confirmés.
- Un schéma simple en trois modules peut remplacer une liste de logos.
- Les fonctionnalités confirmées incluent le catalogue, les commandes, les
  compléments, les modes de consommation, le paiement Wave / Orange Money,
  l'authentification, le suivi, le filtrage manager, les zones et l'affectation
  des livraisons, ainsi que les statistiques quotidiennes confirmées.

### Autres projets

Conserver CI/CD Pipeline, Infrastructure & Monitoring et Network Infrastructure.
Les présenter comme preuves complémentaires, avec une hiérarchie visuelle plus
compacte que les trois projets principaux.

## 8. Workflow

Le workflow doit être une ligne éditoriale légère ou une suite de repères :

`Architecture → Development → Testing → CI/CD → Deployment → Monitoring`

Il sert à expliquer le raisonnement d'ingénierie, pas à créer un diagramme
complexe. Les étapes sont affichées uniquement lorsqu'elles sont supportées par
le contenu réel.

## 9. Parcours

Présenter une timeline lisible, avec période, établissement, intitulé et rôle
de la formation :

- **ISM — 2023–2026** : Licence en Informatique appliquée à la gestion des
  entreprises, option Génie Logiciel — Réseaux et Systèmes. Socle général :
  développement, systèmes, réseaux, bases de données, DevOps/infrastructure et
  sécurité.
- **UNCHK — 2024–en cours** : Licence orientée développement d'applications web
  et mobile. Formation complémentaire, sans la présenter comme une duplication
  de l'ISM.
- Baccalauréat et certifications Cisco en éléments secondaires.

Ne pas masquer le titre `#parcours` sous la navigation fixe : conserver
`scroll-margin-top` au moins égal à la hauteur effective de la navigation,
avec une marge supplémentaire.

## 10. CTA et contact

- CTA principal du Hero : projets.
- CTA secondaire du Hero : CV.
- CTA de contact : email.
- Liens secondaires : LinkedIn et GitHub.
- Aucun formulaire.
- Ne jamais inventer de coordonnées ou d'URL.

L'adresse actuellement présente dans le projet est
`contact.nexterra.07@gmail.com`. Elle peut être documentée comme coordonnée
existante ; elle ne doit pas être remplacée automatiquement. Toute décision
relative à une adresse personnelle définitive ou à un changement d'adresse doit
rester `[NEEDS DECISION]` jusqu'à confirmation.

Le fichier confirmé est `site/assets/CV/CV_Mouhamet_THIAM_2026.pdf` et son nom
ne doit pas être modifié.

## 11. Responsive

Mobile-first, testé aux largeurs 320, 360, 375, 390 et 430 px, puis tablette,
desktop et grands écrans.

- Les sections gardent une largeur latérale confortable sans provoquer de
  débordement horizontal.
- Les layouts en deux colonnes passent en une colonne avant que le texte ne
  devienne trop étroit.
- Les marqueurs `EDU CRM` et `BRASIL BURGER` utilisent des groupes de mots
  insécables ou une taille fluide ; aucun mot ne doit être cassé lettre par lettre.
- Les CTA restent empilables et leurs zones tactiles restent confortables.
- Le menu mobile conserve le focus trap, `inert`, Escape et la fermeture après
  sélection d'un lien.

## 12. Accessibilité et états

- Un seul `h1`, puis une hiérarchie `h2`/`h3` cohérente.
- Contraste texte/fond vérifiable.
- Focus visible sur les liens, boutons et champs éventuels.
- Les SVG décoratifs restent `aria-hidden`; les visuels informatifs ont un texte
  alternatif utile.
- Les liens externes indiquent leur destination et conservent
  `rel="noopener noreferrer"`.
- `prefers-reduced-motion` désactive ou réduit le smooth scroll et les reveals.
- Les états hover, focus, active, menu ouvert et lien actif doivent être
  distinguables sans dépendre uniquement de la couleur.

## 13. Animations

Les reveals actuels restent progressifs, courts et non indispensables à la
compréhension. Le contenu doit rester visible si JavaScript est indisponible ou
si l'utilisateur demande moins de mouvement. Aucun effet 3D, parallaxe,
compteur ou animation décorative continue.

## 14. FR / EN — fonctionnalité validée

Le support bilingue est une fonctionnalité validée et existante ; il ne doit ni
être supprimé, ni désactivé, ni rester `[NEEDS DECISION]`.

- Le français est la langue par défaut.
- L'anglais est disponible via le sélecteur `FR | EN` de la navigation.
- Les textes anglais sont locaux et contrôlés ; aucune traduction automatique
  externe ne doit être introduite.
- Les termes techniques, noms propres, noms de technologies, coordonnées et URL
  restent inchangés lors du changement de langue.
- Le changement met à jour le contenu éditorial, l'attribut `lang` du document
  et l'état accessible `aria-pressed`, de manière cohérente dans la navigation,
  le contenu et les libellés d'accessibilité.
- La préférence est persistée dans `localStorage` sous la clé
  `portfolio-language` lorsque le navigateur l'autorise ; à défaut, le français
  reste le repli sûr.
- Les boutons, labels et cartes tolèrent des libellés anglais plus longs ; aucune
  largeur fixe ne doit supposer la longueur française.

## 15. SEO et éléments non confirmés

Ne pas inventer de favicon, `og:image`, URL, données Schema.org, capture ou URL
de dépôt spécifique. Une information nécessaire mais absente doit être marquée
`[NEEDS ASSET]` si elle concerne un fichier visuel, ou `[NEEDS DECISION]` si
elle nécessite un choix ou une validation.

## 16. Assets

Chaque projet conserve exactement un emplacement de screenshot principal.
Jusqu'à fourniture d'un fichier vérifié, cet emplacement affiche
`[NEEDS ASSET]`. Aucune image, galerie ou mockup ne doit être fabriqué. Le CV
présent est `site/assets/CV/CV_Mouhamet_THIAM_2026.pdf`.

## 17. Coordination inter-agents

### HTML Agent

Préserver le contenu réel et la sémantique, ajouter les CTA manquants seulement
avec des chemins confirmés, prévoir un emplacement de screenshot unique par
projet et signaler les inconnues par `[NEEDS DECISION]`.

### CSS Agent

Implémenter la palette et la hiérarchie ci-dessus, corriger le wrapping des
marqueurs, maintenir `scroll-margin-top`, vérifier les contrastes et les
breakpoints mobiles sans ajouter d'effets gratuits.

### JS Agent

Préserver le menu accessible et le reveal progressif. Ne pas introduire de
traduction externe, de formulaire ou d'interaction qui rende le contenu
dépendant de JavaScript. Maintenir le support FR/EN validé, ses textes locaux,
son sélecteur, son changement de langue cohérent et sa persistance existante.

### QA Agent

Vérifier le parcours recruteur en 30 secondes, les ancres sous navigation fixe,
les largeurs mobiles, le clavier, `prefers-reduced-motion`, les liens et la
présence exacte des assets avant toute validation. Vérifier aussi que
`Network Fundamentals` reste visuellement secondaire par rapport aux trois axes
principaux ; toute correction d'implémentation est à transmettre aux agents
HTML/CSS.

## 18. Gouvernance et décisions

> **Un agent ne doit jamais implémenter une fonctionnalité ou prendre une
> décision explicitement marquée `[NEEDS DECISION]` sans confirmation préalable.**

`[NEEDS DECISION]` signifie que la décision est bloquée : un agent peut
documenter, analyser ou proposer, mais ne doit pas la transformer silencieusement
en implémentation. Lorsqu'une décision est nécessaire, elle doit rester
clairement identifiable. Après confirmation, la mention doit être retirée et la
décision devient une règle officielle du projet. Cette gouvernance s'applique à
tous les agents HTML, CSS, JavaScript, Design et QA.

## 19. Décisions en attente

- `[NEEDS DECISION]` Fournir au maximum un screenshot vérifié pour chacun des
  six projets, ou confirmer l'affichage temporaire `[NEEDS ASSET]`.
- Le cycle complet et les responsabilités d'ImmoSN sont confirmés.
- L'architecture, le déploiement Render, la base commune créée manuellement via
  SQL et les branches de Brasil Burger sont confirmés.
- Toute modification de la coordonnée email actuelle doit être précédée d'une
  confirmation ; l'adresse existante ne doit pas être remplacée implicitement.

## 20. Priorités d'exécution

- **P0 — Positionnement** : Hero, nom, Software & Systems Engineer et cohérence
  Backend/Full Stack.
- **P1 — Hiérarchie** : ordre des sections, trois axes d'expertise et parcours.
- **P2 — Projets** : ImmoSN prioritaire, Brasil Burger confirmé, une capture par
  projet.
- **P3 — Expertise** : trois axes dominants, Network Fundamentals secondaire.
- **P4 — UX** : navigation, ancres, responsive, clavier et réduction du mouvement.
- **P5 — Finition** : détails éditoriaux, séparateurs, micro-interactions.
