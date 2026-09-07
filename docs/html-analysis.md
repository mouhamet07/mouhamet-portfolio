# HTML Analysis

## Objectif du document

Ce document analyse la structure HTML du portfolio et définit les règles à respecter lors de sa reconstruction ou de son évolution.

Il sert de référence aux différents agents du projet afin de maintenir :

- une structure HTML propre ;
- une hiérarchie sémantique cohérente ;
- une bonne accessibilité ;
- une navigation claire ;
- une séparation correcte entre contenu, présentation et comportement ;
- une structure facilement maintenable.

Le HTML doit servir le contenu et l'expérience utilisateur.

Il ne doit pas être construit uniquement pour obtenir un rendu visuel particulier.

---

# Contexte

Le portfolio est un site personnel professionnel présentant le profil de Mouhamet Thiam.

Le positionnement principal est :

**Software & Systems Engineer**

Le profil couvre principalement :

- Software Engineering ;
- développement Backend / Full Stack ;
- développement web ;
- DevOps ;
- Docker & CI/CD ;
- systèmes ;
- réseaux ;
- infrastructure.

Le site est développé avec :

- HTML5 ;
- CSS3 ;
- JavaScript vanilla.

Aucun framework frontend n'est requis pour la structure, le style ou les interactions du portfolio.

# Structure générale attendue

La structure principale doit suivre une organisation similaire à :

```text
html
├── head
└── body
    ├── header / nav
    ├── main
    │   ├── Hero
    │   ├── À propos
    │   ├── Approche / Engineering mindset
    │   ├── Compétences
    │   ├── Projets
    │   ├── Parcours
    │   ├── Méthode de travail
    │   └── Contact
    └── footer