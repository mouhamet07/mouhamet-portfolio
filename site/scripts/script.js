(function () {
  "use strict";

  document.documentElement.classList.add("js-ready");

  /* ---------- 1. COMPLETE FR / EN I18N ---------- */
  var I18N = {
    fr: {
      "skip.link": "Aller au contenu principal",
      "doc.title": "Mouhamet Thiam — Full Stack Developer | Web, Mobile & Software Engineering",
      "nav.aria": "Navigation principale",
      "nav.mobileAria": "Navigation mobile",
      "nav.openMenu": "Ouvrir le menu",
      "nav.closeMenu": "Fermer le menu",
      "lang.aria": "Choisir la langue",
      "nav.menuLabel": "Navigation",
      "nav.journey": "Parcours",
      "nav.experience": "Expérience",
      "nav.craft": "Savoir-faire",
      "nav.works": "Projets",
      "nav.contact": "Contact",
      "hero.eyebrow": "INTRODUCTION — FULL STACK DEVELOPER",
      "hero.title": "Des idées métier aux produits numériques fiables.",
      "hero.subtitle": "Web · Mobile · PWA · Software Engineering",
      "hero.desc": "Développeur Full Stack à Dakar. Conception d'applications web, mobiles et PWA, du cahier des charges au déploiement.",
      "hero.ctaProjects": "Découvrir mes projets",
      "hero.ctaContact": "Me contacter",
      "hero.ctaCv": "Télécharger le CV",
      "hero.scrollCue": "Défiler pour explorer",
      "hero.metaLocLabel": "Localisation",
      "hero.metaLocVal": "Dakar, Sénégal",
      "hero.metaStatusLabel": "Statut",
      "hero.metaStatusVal": "Ouvert aux opportunités",
      "hero.metaLangLabel": "Langues",
      "hero.metaLangVal": "Français · Anglais · Wolof",
      "journey.eyebrow": "THE JOURNEY",
      "journey.title": "Parcours logiciel, systèmes & terrain.",
      "journey.lead": "Formation en génie logiciel et réseaux, mise en pratique en entreprise.",
      "journey.certsTitle": "Certifications Cisco",
      "journey.certCyber": "Cisco: Introduction à la cybersécurité",
      "journey.certHacker": "Cisco: Hacker éthique",
      "journey.socialTitle": "Engagements & Ateliers",
      "journey.coachTitle": "Coach & Jury — Semaines d'Entrepreneuriat (Groupe ISM)",
      "journey.coachDesc": "Accompagnement des étudiants (thème, livrables, pitch), sélection des groupes et jury de demi-finale.",
      "journey.socialHumanitarian": "Projet Humanitaire (Pouponnière de Médina)",
      "journey.socialWorkshop": "Atelier « Build Your Business » (ISM)",
      "journey.item1Period": "10/2026 — Aujourd'hui",
      "journey.item1Title": "Stagiaire développeur — Web & Mobile",
      "journey.item1Org": "Kiki Traiteur · Dakar",
      "journey.item1Desc": "Applications web, mobiles, PWA et API REST.",
      "journey.item2Period": "2024 — Aujourd'hui",
      "journey.item2Title": "Licence Développement Web & Mobile",
      "journey.item2Desc": "Architectures web modernes et mobile.",
      "journey.item3Title": "Licence Génie Logiciel, Réseaux & Systèmes",
      "journey.item3Org": "ISM Dakar · Mention Très Bien",
      "journey.item3Desc": "UML, POO, SOLID, bases de données, Linux et réseaux Cisco.",
      "journey.item4Title": "Baccalauréat L2",
      "exp.eyebrow": "THE EXPERIENCE",
      "exp.title": "Kiki Traiteur — Développement multi-domaines.",
      "exp.role": "Stagiaire développeur",
      "exp.date": "Octobre 2026 — Aujourd'hui · Dakar",
      "exp.contextTitle": "Périmètre d'intervention",
      "exp.contextText": "Intervention sur plusieurs domaines techniques (web, mobile, PWA et backend) en autonomie ou en collaboration, à partir de cahiers des charges.",
      "exp.hl1": "Analyse de cahiers des charges et adaptation technique.",
      "exp.hl2": "Interfaces web responsive, mobile et PWA.",
      "exp.hl3": "API REST, logique backend et tests fonctionnels.",
      "exp.hl4": "Versioning et collaboration via Git / GitHub.",
      "exp.stackLabel": "Stack",
      "exp.processTitle": "Workflow de livraison",
      "exp.step1Title": "Analyse du cahier des charges",
      "exp.step2Title": "Développement frontend",
      "exp.step3Title": "Développement backend",
      "exp.step4Title": "Déploiement",
      "exp.step5Title": "Tests des fonctionnalités",
      "exp.step6Title": "Passage en production",
      "craft.eyebrow": "THE CRAFT",
      "craft.title": "Une maîtrise technique reliée à des architectures réelles.",
      "craft.filterAll": "Tous les domaines",
      "craft.filterMobile": "Mobile & PWA",
      "craft.filterDb": "Bases de données",
      "craft.filterDevops": "DevOps & Systèmes",
      "craft.frontendDesc": "Interfaces réactives, architectures modulaires et design responsive.",
      "craft.backendDesc": "API REST sécurisées, architectures multi-tenant et logique métier.",
      "craft.mobileDesc": "Applications cross-platform, interfaces tactiles et PWA installables.",
      "craft.dbDesc": "Modélisation relationnelle, schémas partagés et isolation des données.",
      "craft.devopsDesc": "Conteneurisation, chaînes CI/CD, supervision, Linux et réseaux.",
      "craft.proofLabel": "Appliqué sur :",
      "works.eyebrow": "SELECTED WORKS",
      "works.title": "Études de cas sélectionnées : de la conception à l'exploitation.",
      "works.filterAll": "Tous",
      "works.filterDevops": "DevOps & Systèmes",
      "works.mockupTag": "Mockup illustratif",
      "works.lawtanMock1": "Catalogue filière rizicole · Commandes",
      "works.lawtanMock2": "Demande directe & redirection",
      "works.lawtanMock3": "Gestion commandes & devis",
      "works.lawtanMeta": "Agro-industrie · Reprise & évolution",
      "works.lawtanStatus": "Projet clôturé",
      "works.lawtanSummary": "Reprise et enrichissement d'une plateforme numérique dédiée à la filière rizicole au Sénégal : compréhension d'une architecture existante et développement de nouvelles briques métier.",
      "works.labelProblem": "Problématique & Objectif",
      "works.lawtanProblem": "Poursuivre un projet existant pour doter la filière d'une vitrine publique, d'une marketplace et d'un circuit de devis fluide.",
      "works.labelSolution": "Solution & Fonctionnalités",
      "works.lawtanSolution": "Site vitrine public, marketplace, tunnel de commande, demandes de devis avec redirection WhatsApp et fonctionnalités back-office administrateur.",
      "works.nfcMeta": "SaaS RH · Multi-tenant",
      "works.nfcStatus": "Web NFC · Terminaux",
      "works.nfcSummary": "Application de gestion des ressources humaines et de suivi des présences conçue pour isoler les données de plusieurs entreprises au sein d'une même plateforme.",
      "works.nfcSolution": "Création d'entreprise, invitations par email, gestion des employés et catégories de travailleurs, tableau de bord RH et journal des présences.",
      "works.labelNote": "Précision technique",
      "works.nfcNote": "Lecture NFC opérationnelle via Web NFC Reader, avec support d'ajout et de connexion de terminaux dédiés.",
      "works.nfcMock1": "Espaces entreprises isolés & invitations email",
      "works.nfcMock2": "Journal des présences & catégories RH",
      "works.immoMeta": "Full Lifecycle · Immobilier",
      "works.immoSummary": "Plateforme de gestion immobilière centralisant annonces, utilisateurs, visites et contrats. Prise en charge complète de la modélisation à la supervision.",
      "works.labelRole": "Rôle & Périmètre",
      "works.immoRole": "Product Owner, Lead Developer, Full Stack & Backend, DevOps et gestion PostgreSQL (JWT avec rôles, tests, Docker, CI/CD).",
      "works.brasilTitle": "Gestion Resto",
      "works.brasilMeta": "Multi-module",
      "works.brasilStatus": "Déployé sur Render",
      "works.brasilSummary": "Architecture multi-module partageant une base SQL commune (branches modelisation, java, csharp, symfony) : client C# ASP.NET MVC, ressources Java Console et espace manager Symfony.",
      "works.brasilSolution": "Catalogue, commandes, retrait/livraison, paiement Wave / Orange Money, affectation des zones de livraison et statistiques journalières manager.",
      "works.eduMeta": "Backend Python · CRM Éducatif",
      "works.eduSummary": "Plateforme de gestion académique structurée avec Flask Blueprints : authentification, gestion des étudiants et tableau de bord statistique.",
      "works.cicdMeta": "DevOps & Supervision",
      "works.cicdSummary": "Automatisation complète build, tests et déploiement conteneurisé avec Docker, Jenkins et Kubernetes, couplée à une supervision Grafana & Prometheus.",
      "works.linkGithub": "Code source GitHub",
      "works.linkLive": "Démo en ligne",
      "works.archiveTitle": "Travaux complémentaires",
      "works.badwalletDesc": "Application mobile de portefeuille digital : consultation du solde, transferts, réception d'argent et historique des transactions.",
      "works.netTitle": "Topologie Réseau & Supervision",
      "works.netDesc": "Simulation d'infrastructures Cisco (VLAN, OSPF, sécurité, haute disponibilité) et déploiement de dashboards Zabbix / Grafana.",
      "contact.eyebrow": "LET'S BUILD SOMETHING",
      "contact.title": "Un projet en tête ? Construisons-le ensemble.",
      "contact.lead": "Disponible pour échanger autour d'une opportunité Full Stack, d'une collaboration produit ou d'un projet web et mobile.",
      "contact.copy": "Copier",
      "contact.copied": "Copié",
      "contact.phoneLabel": "Téléphone",
      "contact.cvDownload": "Télécharger le CV",
      "toast.formError": "Veuillez vérifier les champs en erreur.",
      "toast.formSuccess": "Client mail ouvert avec votre message.",
      "form.nameLabel": "Nom complet",
      "form.namePlaceholder": "Votre nom",
      "form.emailLabel": "Adresse email",
      "form.emailPlaceholder": "vous@entreprise.com",
      "form.subjectLabel": "Sujet",
      "form.subjectPlaceholder": "Opportunité Full Stack / Projet",
      "form.messageLabel": "Message",
      "form.messagePlaceholder": "Parlez-moi de votre contexte...",
      "form.submit": "Préparer l'envoi par email",
      "form.errRequired": "Ce champ est requis.",
      "form.errEmail": "Veuillez saisir une adresse email valide.",
      "form.opened": "Client mail prêt avec votre message.",
      "footer.role": "Full Stack Developer · Dakar, Sénégal",
      "footer.top": "Haut de page",
      "footer.copy": "© 2026 Mouhamet Thiam. Tous droits réservés."
    },
    en: {
      "skip.link": "Skip to main content",
      "doc.title": "Mouhamet Thiam — Full Stack Developer | Web, Mobile & Software Engineering",
      "nav.aria": "Main navigation",
      "nav.mobileAria": "Mobile navigation",
      "nav.openMenu": "Open menu",
      "nav.closeMenu": "Close menu",
      "lang.aria": "Choose language",
      "nav.menuLabel": "Navigation",
      "nav.journey": "Journey",
      "nav.experience": "Experience",
      "nav.craft": "Craft",
      "nav.works": "Projects",
      "nav.contact": "Contact",
      "hero.eyebrow": "INTRODUCTION — FULL STACK DEVELOPER",
      "hero.title": "Business ideas turned into reliable digital products.",
      "hero.subtitle": "Web · Mobile · PWA · Software Engineering",
      "hero.desc": "Full Stack Developer in Dakar. Designing web, mobile, and PWA applications from specs to deployment.",
      "hero.ctaProjects": "Explore projects",
      "hero.ctaContact": "Get in touch",
      "hero.ctaCv": "Download CV",
      "hero.scrollCue": "Scroll to explore",
      "hero.metaLocLabel": "Location",
      "hero.metaLocVal": "Dakar, Senegal",
      "hero.metaStatusLabel": "Status",
      "hero.metaStatusVal": "Open to opportunities",
      "hero.metaLangLabel": "Languages",
      "hero.metaLangVal": "French · English · Wolof",
      "journey.eyebrow": "THE JOURNEY",
      "journey.title": "Software, systems & field progression.",
      "journey.lead": "Academic foundations in software & networks, applied in production.",
      "journey.certsTitle": "Cisco Certifications",
      "journey.certCyber": "Cisco: Introduction to Cybersecurity",
      "journey.certHacker": "Cisco: Ethical Hacker",
      "journey.socialTitle": "Community & Workshops",
      "journey.coachTitle": "Coach & Jury — Entrepreneurship Weeks (Groupe ISM)",
      "journey.coachDesc": "Mentored students on theme, deliverables, and pitches; selected groups and served on the semi-final jury.",
      "journey.socialHumanitarian": "Humanitarian Project (Pouponnière de Médina)",
      "journey.socialWorkshop": "« Build Your Business » Workshop (ISM)",
      "journey.item1Period": "10/2026 — Present",
      "journey.item1Title": "Software Developer Intern — Web & Mobile",
      "journey.item1Org": "Kiki Traiteur · Dakar",
      "journey.item1Desc": "Web, mobile, PWA applications and REST APIs.",
      "journey.item2Period": "2024 — Present",
      "journey.item2Title": "Bachelor's in Web & Mobile Development",
      "journey.item2Desc": "Modern web architectures and mobile engineering.",
      "journey.item3Title": "Bachelor's in Software Engineering, Networks & Systems",
      "journey.item3Org": "ISM Dakar · Highest Honors",
      "journey.item3Desc": "UML, OOP, SOLID, databases, Linux, and Cisco networking.",
      "journey.item4Title": "L2 Baccalaureate",
      "exp.eyebrow": "THE EXPERIENCE",
      "exp.title": "Kiki Traiteur — Multi-domain engineering.",
      "exp.role": "Developer Intern",
      "exp.date": "October 2026 — Present · Dakar",
      "exp.contextTitle": "Scope of work",
      "exp.contextText": "Working across multiple technical domains (web, mobile, PWA, and backend) independently or in collaboration, driven by functional specs.",
      "exp.hl1": "Functional spec analysis and technical adaptation.",
      "exp.hl2": "Responsive web, mobile, and PWA interfaces.",
      "exp.hl3": "REST APIs, backend logic, and functional testing.",
      "exp.hl4": "Version control and collaboration via Git / GitHub.",
      "exp.stackLabel": "Stack",
      "exp.processTitle": "Delivery workflow",
      "exp.step1Title": "Specification analysis",
      "exp.step2Title": "Frontend development",
      "exp.step3Title": "Backend development",
      "exp.step4Title": "Deployment",
      "exp.step5Title": "Feature testing",
      "exp.step6Title": "Production release",
      "craft.eyebrow": "THE CRAFT",
      "craft.title": "Technical mastery anchored in real architectures.",
      "craft.filterAll": "All domains",
      "craft.filterMobile": "Mobile & PWA",
      "craft.filterDb": "Databases",
      "craft.filterDevops": "DevOps & Systems",
      "craft.frontendDesc": "Reactive interfaces, modular architectures, and responsive design.",
      "craft.backendDesc": "Secured REST APIs, multi-tenant architectures, and business logic.",
      "craft.mobileDesc": "Cross-platform mobile apps, touch interfaces, and installable PWAs.",
      "craft.dbDesc": "Relational modeling, shared schemas, and tenant data isolation.",
      "craft.devopsDesc": "Containerization, CI/CD pipelines, monitoring, Linux, and networking.",
      "craft.proofLabel": "Applied on:",
      "works.eyebrow": "SELECTED WORKS",
      "works.title": "Selected case studies: from design to operations.",
      "works.filterAll": "All",
      "works.filterDevops": "DevOps & Systems",
      "works.mockupTag": "Illustrative mockup",
      "works.lawtanMock1": "Rice sector catalogue · Orders",
      "works.lawtanMock2": "Direct quote & redirection",
      "works.lawtanMock3": "Order & quote management",
      "works.lawtanMeta": "Agro-industry · Handover & evolution",
      "works.lawtanStatus": "Completed",
      "works.lawtanSummary": "Took over and expanded a digital platform for Senegal's rice sector: understanding an existing architecture and delivering new business modules.",
      "works.labelProblem": "Problem & Objective",
      "works.lawtanProblem": "Continue an existing codebase to provide a public showcase, a marketplace, and a streamlined quote request workflow.",
      "works.labelSolution": "Solution & Features",
      "works.lawtanSolution": "Public showcase, marketplace, ordering flow, WhatsApp-redirected quote requests, and corresponding admin back-office features.",
      "works.nfcMeta": "HR SaaS · Multi-tenant",
      "works.nfcStatus": "Web NFC · Terminals",
      "works.nfcSummary": "Human resources and attendance tracking application designed to isolate data for multiple companies within a single platform.",
      "works.nfcSolution": "Company onboarding, email invitations, employee & worker category management, HR dashboard, and attendance logs.",
      "works.labelNote": "Technical note",
      "works.nfcNote": "NFC reading supported via Web NFC Reader, with support for adding and connecting dedicated terminals.",
      "works.nfcMock1": "Isolated company tenants & email invites",
      "works.nfcMock2": "Attendance logs & HR categories",
      "works.immoMeta": "Full Lifecycle · Real Estate",
      "works.immoSummary": "Real-estate management platform centralizing listings, users, visits, and contracts. Owned end-to-end from modeling to monitoring.",
      "works.labelRole": "Role & Scope",
      "works.immoRole": "Product Owner, Lead Developer, Full Stack & Backend, DevOps and PostgreSQL management (role-based JWT, testing, Docker, CI/CD).",
      "works.brasilTitle": "Restaurant Management",
      "works.brasilMeta": "Multi-module",
      "works.brasilStatus": "Live on Render",
      "works.brasilSummary": "Multi-module architecture sharing a unified SQL database (modelisation, java, csharp, symfony branches): C# ASP.NET MVC client, Java Console resources, and Symfony manager portal.",
      "works.brasilSolution": "Catalogue, orders, pickup/delivery modes, Wave / Orange Money payments, delivery zone assignment, and daily manager analytics.",
      "works.eduMeta": "Python Backend · EdTech CRM",
      "works.eduSummary": "Academic management platform structured with Flask Blueprints: authentication, student management, and statistical dashboard.",
      "works.cicdMeta": "DevOps & Monitoring",
      "works.cicdSummary": "End-to-end automated build, test, and containerized deployment pipeline using Docker, Jenkins, and Kubernetes with Grafana & Prometheus.",
      "works.linkGithub": "GitHub source",
      "works.linkLive": "Live demo",
      "works.archiveTitle": "Complementary work",
      "works.badwalletDesc": "Digital wallet mobile app built with Flutter: balance check, transfers, incoming funds, and transaction history.",
      "works.netTitle": "Network Topology & Monitoring",
      "works.netDesc": "Cisco network simulations (VLAN, OSPF, security, high availability) and Zabbix / Grafana monitoring dashboards.",
      "contact.eyebrow": "LET'S BUILD SOMETHING",
      "contact.title": "Have a project in mind? Let's build it.",
      "contact.lead": "Available to discuss Full Stack roles, product collaborations, or web and mobile engineering projects.",
      "contact.copy": "Copy",
      "contact.copied": "Copied",
      "contact.phoneLabel": "Phone",
      "contact.cvDownload": "Download CV",
      "toast.formError": "Please fix the highlighted fields.",
      "toast.formSuccess": "Mail client opened with your message.",
      "form.nameLabel": "Full name",
      "form.namePlaceholder": "Your name",
      "form.emailLabel": "Email address",
      "form.emailPlaceholder": "you@company.com",
      "form.subjectLabel": "Subject",
      "form.subjectPlaceholder": "Full Stack role / Project",
      "form.messageLabel": "Message",
      "form.messagePlaceholder": "Tell me about your context...",
      "form.submit": "Prepare email",
      "form.errRequired": "This field is required.",
      "form.errEmail": "Please enter a valid email address.",
      "form.opened": "Mail client ready with your message.",
      "footer.role": "Full Stack Developer · Dakar, Senegal",
      "footer.top": "Back to top",
      "footer.copy": "© 2026 Mouhamet Thiam. All rights reserved."
    }
  };

  var currentLang = "fr";
  try {
    currentLang = window.localStorage.getItem("portfolio-language") === "en" ? "en" : "fr";
  } catch (e) { /* storage unavailable */ }

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.fr && I18N.fr[key]) || "";
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "fr";
    document.documentElement.lang = currentLang;
    if (t("doc.title")) document.title = t("doc.title");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"));
      if (val) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-placeholder"));
      if (val) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-aria"));
      if (val) el.setAttribute("aria-label", val);
    });

    document.querySelectorAll("[data-language]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-language") === currentLang ? "true" : "false");
    });

    try { window.localStorage.setItem("portfolio-language", currentLang); } catch (e) { /* ignore */ }
  }

  document.querySelectorAll("[data-language]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-language"));
    });
  });
  applyLanguage(currentLang);

  /* ---------- 2. MOTION & PREFERENCES ---------- */
  var motionLevel = document.documentElement.dataset.motion || "moderate";
  var motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var effectiveMotion = (motionQuery && motionQuery.matches) ? "none" : motionLevel;

  /* ---------- 3. ACCESSIBLE MOBILE DRAWER ---------- */
  var drawer = document.getElementById("navDrawer");
  var burgerBtn = document.getElementById("burgerBtn");
  var drawerClose = document.getElementById("drawerClose");
  var overlay = document.getElementById("navOverlay");
  var iconOpen = document.getElementById("burgerIconOpen");
  var iconClose = document.getElementById("burgerIconClose");
  var pageTargets = [document.querySelector(".site-header"), document.querySelector("main"), document.querySelector(".footer")].filter(Boolean);
  var lastFocused = null;

  function setInert(el, state) {
    if (!el) return;
    el.inert = state;
    if (state) el.setAttribute("inert", "");
    else el.removeAttribute("inert");
  }

  function getDrawerFocusables() {
    if (!drawer) return [];
    return Array.prototype.slice.call(drawer.querySelectorAll('a[href], button:not([disabled])'));
  }

  function openDrawer() {
    if (!drawer || !burgerBtn) return;
    lastFocused = document.activeElement;
    pageTargets.forEach(function (el) { setInert(el, true); });
    setInert(drawer, false);
    drawer.setAttribute("aria-hidden", "false");
    drawer.classList.add("is-open");
    if (overlay) overlay.classList.add("is-open");
    document.body.classList.add("menu-open");
    burgerBtn.setAttribute("aria-expanded", "true");
    if (iconOpen) iconOpen.classList.add("is-hidden");
    if (iconClose) iconClose.classList.remove("is-hidden");
    var focusables = getDrawerFocusables();
    if (focusables.length) focusables[0].focus();
  }

  function closeDrawer(restore) {
    if (!drawer || !drawer.classList.contains("is-open")) return;
    drawer.classList.remove("is-open");
    if (overlay) overlay.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    setInert(drawer, true);
    pageTargets.forEach(function (el) { setInert(el, false); });
    document.body.classList.remove("menu-open");
    if (burgerBtn) burgerBtn.setAttribute("aria-expanded", "false");
    if (iconOpen) iconOpen.classList.remove("is-hidden");
    if (iconClose) iconClose.classList.add("is-hidden");
    if (restore !== false && lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }

  if (burgerBtn) {
    burgerBtn.addEventListener("click", function () {
      if (drawer && drawer.classList.contains("is-open")) closeDrawer();
      else openDrawer();
    });
  }
  if (drawerClose) drawerClose.addEventListener("click", function () { closeDrawer(); });
  if (overlay) overlay.addEventListener("click", function () { closeDrawer(); });

  document.addEventListener("keydown", function (e) {
    if (!drawer || !drawer.classList.contains("is-open")) return;
    if (e.key === "Escape") { e.preventDefault(); closeDrawer(); return; }
    if (e.key === "Tab") {
      var items = getDrawerFocusables();
      if (!items.length) return;
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest('a[href^="#"]');
    if (!link) return;
    var targetId = link.getAttribute("href").slice(1);
    var target = targetId && document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      closeDrawer(false);
      target.scrollIntoView({ behavior: effectiveMotion === "none" ? "auto" : "smooth", block: "start" });
      if (window.history && window.history.pushState) window.history.pushState(null, "", "#" + targetId);
    }
  });

  /* ---------- 4. SCROLL PROGRESS & ACTIVE NAV ---------- */
  var nav = document.getElementById("siteNav");
  var progressBar = document.getElementById("scrollProgress");
  var backToTopBtn = document.getElementById("backToTop");
  var footerEl = document.querySelector(".footer");
  var sectionIds = ["parcours", "experience", "competences", "projets", "contact"];
  var navLinks = document.querySelectorAll("[data-nav]");
  var rafPending = false;

  function onScrollUpdate() {
    rafPending = false;
    var scrollTop = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("is-scrolled", scrollTop > 32);

    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && docHeight > 0) {
      progressBar.style.transform = "scaleX(" + Math.min(1, Math.max(0, scrollTop / docHeight)) + ")";
    }

    var current = null;
    sectionIds.forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec && scrollTop >= sec.offsetTop - 160) current = id;
    });
    if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 24) {
      current = sectionIds[sectionIds.length - 1];
    }
    navLinks.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("data-nav") === current);
    });

    if (backToTopBtn) {
      var footerVisible = footerEl ? footerEl.getBoundingClientRect().top < (window.innerHeight || 800) : false;
      backToTopBtn.classList.toggle("is-visible", scrollTop > 360 && !footerVisible);
    }

    // Hero portrait scroll parallax (image moves inside fixed frame)
    var heroPortraitImg = document.getElementById("heroPortraitImg");
    if (heroPortraitImg && effectiveMotion !== "none") {
      var imgShift = Math.max(-42, Math.min(0, -scrollTop * 0.14));
      heroPortraitImg.style.transform = "translate3d(0, " + imgShift.toFixed(1) + "px, 0)";
    }

    // Acte 05: Native sticky horizontal track update (zero pin-spacer overlap bugs)
    if (typeof window.updateProjectsScroll === "function") {
      window.updateProjectsScroll();
    }

    // Acte 02: Progress bar starting at top (scaleY: 0 -> 1) + synchronized marker reveals
    var tEl = document.getElementById("journeyTimeline");
    var tBar = document.getElementById("timelineProgress");
    if (tEl && tBar && effectiveMotion !== "none") {
      var rect = tEl.getBoundingClientRect();
      var vh = window.innerHeight || 800;
      var startY = vh * 0.65;
      var totalSpan = rect.height || 1;
      var raw = (startY - rect.top) / totalSpan;
      var progress = Math.min(1, Math.max(0, raw));
      tBar.style.transform = "scaleY(" + progress.toFixed(4) + ")";

      document.querySelectorAll("[data-timeline-item]").forEach(function (item) {
        var iRect = item.getBoundingClientRect();
        if (iRect.top <= vh * 0.58) {
          item.classList.add("is-reached");
        } else {
          item.classList.remove("is-reached");
        }
      });
    }
  }

  window.addEventListener("scroll", function () {
    if (!rafPending) {
      rafPending = true;
      window.requestAnimationFrame(onScrollUpdate);
    }
  }, { passive: true });
  onScrollUpdate();

  /* ---------- 5. INTERACTIVE FILTERS (CRAFT & WORKS) ---------- */
  function setupFilter(btnAttr, itemAttr) {
    var buttons = document.querySelectorAll("[" + btnAttr + "]");
    var items = document.querySelectorAll("[" + itemAttr + "]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.getAttribute(btnAttr);
        buttons.forEach(function (b) {
          var active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-selected", active ? "true" : "false");
        });
        items.forEach(function (item) {
          var show = filter === "all" || item.getAttribute(itemAttr) === filter;
          item.classList.toggle("is-hidden", !show);
        });
        if (itemAttr === "data-work-cat" && typeof window.rebuildProjectsTrack === "function") {
          window.rebuildProjectsTrack();
        }
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      });
    });
  }
  setupFilter("data-craft-filter", "data-craft-cat");
  setupFilter("data-work-filter", "data-work-cat");

  /* ---------- 6. COPY EMAIL & CONTACT FORM ---------- */
  var copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener("click", function () {
      var text = copyBtn.getAttribute("data-copy");
      navigator.clipboard.writeText(text).then(function () {
        var span = copyBtn.querySelector("span");
        if (span) {
          span.textContent = t("contact.copied");
          window.setTimeout(function () { span.textContent = t("contact.copy"); }, 2000);
        }
      }).catch(function () { /* clipboard denied */ });
    });
  }

  var toastEl = document.getElementById("toast");
  var toastMsgEl = document.getElementById("toastMsg");
  var toastTimer = null;

  function showToast(message, type) {
    if (!toastEl || !toastMsgEl) return;
    if (toastTimer) window.clearTimeout(toastTimer);
    toastMsgEl.textContent = message;
    toastEl.classList.remove("toast--error", "toast--success", "is-visible");
    if (type === "error") toastEl.classList.add("toast--error");
    else if (type === "success") toastEl.classList.add("toast--success");
    void toastEl.offsetWidth;
    toastEl.classList.add("is-visible");
    toastTimer = window.setTimeout(function () {
      toastEl.classList.remove("is-visible");
    }, 3600);
  }

  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = [
        { el: document.getElementById("contactName"), err: document.getElementById("errorName"), type: "text" },
        { el: document.getElementById("contactEmail"), err: document.getElementById("errorEmail"), type: "email" },
        { el: document.getElementById("contactSubject"), err: document.getElementById("errorSubject"), type: "text" },
        { el: document.getElementById("contactMessage"), err: document.getElementById("errorMessage"), type: "text" }
      ];
      var valid = true;
      fields.forEach(function (f) {
        var val = f.el.value.trim();
        var msg = "";
        if (!val) msg = t("form.errRequired");
        else if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) msg = t("form.errEmail");
        f.err.textContent = msg;
        f.el.setAttribute("aria-invalid", msg ? "true" : "false");
        if (msg) valid = false;
      });
      if (!valid) {
        showToast(t("toast.formError"), "error");
        return;
      }

      var mailto = "mailto:mouhamethiam7@gmail.com?subject=" +
        encodeURIComponent(fields[2].el.value.trim()) +
        "&body=" + encodeURIComponent(fields[0].el.value.trim() + " (" + fields[1].el.value.trim() + ")\n\n" + fields[3].el.value.trim());
      window.location.href = mailto;
      showToast(t("toast.formSuccess"), "success");
      var status = document.getElementById("formStatus");
      if (status) status.textContent = t("form.opened");
    });
  }

  /* ---------- 7. MOTION DESIGN ENGINE (GSAP + FALLBACK) ---------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  var timelineItems = document.querySelectorAll("[data-timeline-item]");
  var processSteps = document.querySelectorAll("#processSteps .process-step");

  function showAllImmediately() {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
    timelineItems.forEach(function (el) { el.classList.add("is-reached"); });
    processSteps.forEach(function (el) { el.classList.add("is-entered", "is-active"); });
  }

  if (effectiveMotion === "none") {
    showAllImmediately();
    return;
  }

  // Acte 05: Bulletproof 3-state Horizontal Track + Difference-Blend Tick Ruler (independent of GSAP)
  var projectsOuter = document.getElementById("projectsTrackOuter");
  var projectsStage = document.getElementById("projectsStage");
  var projectsRail = document.getElementById("projectsRail");
  var rulerTicks = document.getElementById("projectsRulerTicks");
  var rulerNeedle = document.getElementById("projectsRulerNeedle");
  var rulerCounter = document.getElementById("projectsRulerCounter");
  var projectsMaxX = 0;
  var projectsTotalCount = 1;

  if (rulerTicks && !rulerTicks.children.length) {
    for (var ti = 0; ti <= 24; ti++) {
      var tick = document.createElement("span");
      tick.className = "projects-ruler__tick" + (ti % 4 === 0 ? " projects-ruler__tick--major" : "");
      rulerTicks.appendChild(tick);
    }
  }

  function padTwo(n) { return n < 10 ? "0" + n : String(n); }

  window.updateProjectsScroll = function () {
    if (!projectsOuter || !projectsStage || !projectsRail || projectsMaxX <= 0) return;
    var navHeight = 72;
    var outerRect = projectsOuter.getBoundingClientRect();
    var raw = (navHeight - outerRect.top) / projectsMaxX;
    var progress = Math.min(1, Math.max(0, raw));

    if (outerRect.top > navHeight) {
      projectsStage.classList.remove("is-pinned", "is-after");
      projectsStage.style.top = "";
    } else if (outerRect.top >= navHeight - projectsMaxX) {
      projectsStage.classList.add("is-pinned");
      projectsStage.classList.remove("is-after");
      projectsStage.style.top = "";
    } else {
      projectsStage.classList.remove("is-pinned");
      projectsStage.classList.add("is-after");
      projectsStage.style.top = projectsMaxX + "px";
    }

    projectsRail.style.transform = "translate3d(" + (-progress * projectsMaxX).toFixed(1) + "px, 0, 0)";

    var trackEl = rulerNeedle ? rulerNeedle.parentElement : null;
    if (rulerNeedle && trackEl) {
      var travel = Math.max(0, trackEl.clientWidth - rulerNeedle.offsetWidth);
      rulerNeedle.style.transform = "translateX(" + (progress * travel).toFixed(1) + "px)";
    }
    if (rulerCounter) {
      var idx = Math.min(projectsTotalCount, Math.max(1, Math.round(progress * (projectsTotalCount - 1)) + 1));
      rulerCounter.textContent = padTwo(idx) + " / " + padTwo(projectsTotalCount);
    }
  };

  window.rebuildProjectsTrack = function () {
    if (!projectsOuter || !projectsStage || !projectsRail) return;
    projectsStage.classList.remove("is-pinned", "is-after");
    projectsStage.style.top = "";
    projectsRail.style.transform = "translate3d(0, 0, 0)";

    var visibleStops = Array.prototype.filter.call(
      projectsRail.querySelectorAll(".project-stop"),
      function (el) { return !el.classList.contains("is-hidden"); }
    );
    projectsTotalCount = visibleStops.length || 1;
    projectsMaxX = Math.max(0, projectsRail.scrollWidth - projectsStage.clientWidth);

    if (projectsMaxX > 0) {
      projectsOuter.style.height = (projectsStage.offsetHeight + projectsMaxX) + "px";
    } else {
      projectsOuter.style.height = "auto";
    }

    if (rulerCounter) rulerCounter.textContent = "01 / " + padTwo(projectsTotalCount);
    if (rulerNeedle) rulerNeedle.style.transform = "translateX(0px)";
    window.updateProjectsScroll();
  };

  window.rebuildProjectsTrack();
  window.addEventListener("resize", window.rebuildProjectsTrack, { passive: true });
  window.addEventListener("load", window.rebuildProjectsTrack);

  if (projectsRail) {
    projectsRail.querySelectorAll(".project-stop").forEach(function (stop) {
      stop.addEventListener("focus", function () {
        if (!projectsOuter || projectsMaxX <= 0) return;
        var visibleStops = Array.prototype.filter.call(
          projectsRail.querySelectorAll(".project-stop"),
          function (el) { return !el.classList.contains("is-hidden"); }
        );
        var idx = visibleStops.indexOf(stop);
        if (idx < 0 || visibleStops.length <= 1) return;
        var ratio = idx / (visibleStops.length - 1);
        var outerTop = window.scrollY + projectsOuter.getBoundingClientRect().top - 72;
        window.scrollTo({ top: outerTop + ratio * projectsMaxX, behavior: "smooth" });
      });
    });
  }

  // Native IntersectionObserver for [data-reveal] (always active so sections reveal progressively even without GSAP CDN)
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Acte 03: Diagonal bottom-right -> top-left pipeline entry (works with or without GSAP)
  var processContainer = document.getElementById("processSteps");
  if (processContainer && processSteps.length && "IntersectionObserver" in window) {
    var pipeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        processSteps.forEach(function (step, idx) {
          step.style.transitionDelay = (idx * 110) + "ms";
          step.classList.add("is-entered");
          window.setTimeout(function () {
            step.classList.add("is-active");
          }, 260 + idx * 110);
        });
        pipeObserver.unobserve(entry.target);
      });
    }, { threshold: 0.18 });
    pipeObserver.observe(processContainer);
  } else {
    processSteps.forEach(function (el) { el.classList.add("is-entered", "is-active"); });
  }

  if (window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);

    // Hero kinetic entrance (< 950ms, clip-path + line draw)
    var heroTl = window.gsap.timeline({ defaults: { ease: "power4.out" } });
    heroTl.from("[data-hero-anim]", {
      y: 28,
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
      duration: 0.8,
      stagger: 0.09,
      clearProps: "transform,opacity,clipPath"
    }).from(".hero__rule", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.7
    }, "-=0.45");

    // Acte 04: Craft Matrix cascade
    var craftRows = document.querySelectorAll(".craft-row");
    if (craftRows.length) {
      window.gsap.from(craftRows, {
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#craftMatrix",
          start: "top 82%",
          once: true
        }
      });
    }
  } else if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          entry.target.classList.add("is-reached");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
    timelineItems.forEach(function (el) { io.observe(el); });
  } else {
    showAllImmediately();
  }

  /* ---------- 8. DESKTOP INTERACTIONS (POINTER: FINE ONLY) ---------- */
  var finePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (finePointer && effectiveMotion === "high") {
    document.querySelectorAll(".magnetic").forEach(function (btn) {
      var leaveTimer = null;

      btn.addEventListener("mousemove", function (e) {
        if (leaveTimer) {
          window.clearTimeout(leaveTimer);
          leaveTimer = null;
        }
        var rect = btn.getBoundingClientRect();
        var dx = Math.max(-20, Math.min(20, (e.clientX - (rect.left + rect.width / 2)) * 0.45));
        var dy = Math.max(-14, Math.min(14, (e.clientY - (rect.top + rect.height / 2)) * 0.45));
        if (window.gsap) {
          window.gsap.to(btn, { x: dx, y: dy, duration: 0.2, ease: "power2.out", overwrite: "auto" });
        } else {
          btn.style.transition = "transform 80ms linear";
          btn.style.transform = "translate3d(" + dx.toFixed(1) + "px, " + dy.toFixed(1) + "px, 0)";
        }
      });

      btn.addEventListener("mouseleave", function (e) {
        var rect = btn.getBoundingClientRect();
        var ex = Math.max(-24, Math.min(24, (e.clientX - (rect.left + rect.width / 2)) * 0.55));
        var ey = Math.max(-18, Math.min(18, (e.clientY - (rect.top + rect.height / 2)) * 0.55));

        if (window.gsap) {
          var tl = window.gsap.timeline({ overwrite: "auto" });
          tl.to(btn, { x: ex, y: ey, duration: 0.12, ease: "power2.out" })
            .to(btn, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.38)" });
        } else {
          btn.style.transition = "transform 110ms ease-out";
          btn.style.transform = "translate3d(" + ex.toFixed(1) + "px, " + ey.toFixed(1) + "px, 0)";
          leaveTimer = window.setTimeout(function () {
            btn.style.transition = "transform 450ms cubic-bezier(0.34, 1.56, 0.64, 1)";
            btn.style.transform = "translate3d(0, 0, 0)";
          }, 110);
        }
      });
    });

    var cursor = document.getElementById("customCursor");
    var cursorLabel = document.getElementById("customCursorLabel");
    if (cursor && cursorLabel) {
      var xTo = window.gsap ? window.gsap.quickTo(cursor, "left", { duration: 0.16, ease: "power3" }) : null;
      var yTo = window.gsap ? window.gsap.quickTo(cursor, "top", { duration: 0.16, ease: "power3" }) : null;

      document.addEventListener("mousemove", function (e) {
        cursor.classList.add("is-visible");
        if (xTo && yTo) {
          xTo(e.clientX);
          yTo(e.clientY);
        } else {
          cursor.style.left = e.clientX + "px";
          cursor.style.top = e.clientY + "px";
        }
      }, { passive: true });
      document.addEventListener("mouseleave", function () { cursor.classList.remove("is-visible"); });

      document.querySelectorAll("[data-cursor]").forEach(function (el) {
        el.addEventListener("mouseenter", function () {
          cursor.classList.add("is-badge");
          cursorLabel.textContent = el.getAttribute("data-cursor");
        });
        el.addEventListener("mouseleave", function () {
          cursor.classList.remove("is-badge");
          cursorLabel.textContent = "";
        });
      });
    }
  }
})();
