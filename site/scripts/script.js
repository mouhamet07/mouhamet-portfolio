(function () {
  "use strict";

  /* ---------- LOCAL FR / EN CONTENT ---------- */
  var translations = {};
  var languageTargets = [];
  function register(selector, fr, en, attribute) {
    var elements = document.querySelectorAll(selector);
    Array.prototype.forEach.call(elements, function (element, index) {
      var key = "i18n-" + languageTargets.length;
      translations[key] = { fr: fr[index] || fr[0], en: en[index] || en[0] };
      element.setAttribute("data-i18n", key);
      languageTargets.push({ element: element, key: key, attribute: attribute });
    });
  }
  function setVisibleText(element, value) {
    var textNodes = Array.prototype.filter.call(element.childNodes, function (node) {
      return node.nodeType === 3;
    });
    if (textNodes.length) textNodes[0].textContent = value;
    else element.textContent = value;
  }
  register(".nav__link, .nav__drawer-links a", ["Travail", "Expertise", "Parcours", "Contact", "Travail", "Expertise", "Parcours", "Contact"], ["Work", "Expertise", "Journey", "Contact", "Work", "Expertise", "Journey", "Contact"]);
  register(".lang-switch", ["Choisir la langue"], ["Choose language"], "aria-label");
  register(".hero__eyebrow", ["SOFTWARE & SYSTEMS ENGINEER"], ["SOFTWARE & SYSTEMS ENGINEER"]);
  register(".hero__title", ["Je construis des logiciels fiables et des systèmes qui tiennent dans le temps."], ["I build reliable software and systems that stand the test of time."]);
  register(".hero__desc", ["Ingénieur logiciel et systèmes, orienté backend / full stack, je travaille à l'intersection du code, de l'automatisation et de l'infrastructure."], ["Software and systems engineer focused on backend / full stack work at the intersection of code, automation and infrastructure."]);
  register(".hero__actions .btn:first-child", ["Voir les projets"], ["View projects"]);
  register(".hero__actions .btn:nth-child(2)", ["Télécharger le CV"], ["Download CV"]);
  register(".hero__location span", ["Dakar, Sénégal", "Disponible pour de nouvelles opportunités"], ["Dakar, Senegal", "Available for new opportunities"]);
  register(".section-label", ["Positionnement", "Travail / projets", "Expertise", "Approche", "Parcours", "Contact"], ["Positioning", "Work / projects", "Expertise", "Approach", "Journey", "Contact"]);
  register("#about-title", ["Du logiciel à l'infrastructure, je garde une vision complète de ce qui fait tenir un produit."], ["From software to infrastructure, I keep a complete view of what makes a product last."]);
  register(".about__text p:not(.about__tags)", ["Jeune ingénieur Software & Systems avec une forte appétence pour l'architecture logicielle, le développement backend, le DevOps, les systèmes Linux et les réseaux.", "Je conçois des applications robustes, automatise les pipelines de déploiement, administre des environnements Linux et travaille les fondamentaux des réseaux d'entreprise."], ["Young Software & Systems engineer with a strong interest in software architecture, backend development, DevOps, Linux systems and networks.", "I design robust applications, automate deployment pipelines, administer Linux environments and work with enterprise networking fundamentals."]);
  register(".about__tags", ["Développement · Administration système · Réseaux · Déploiement · Monitoring"], ["Development · Systems administration · Networking · Deployment · Monitoring"]);
  register("#projects-title", ["Des systèmes pensés pour être compris, construits et exploités."], ["Systems designed to be understood, built and operated."]);
  register(".project-story__meta", ["Software Engineering — Full Lifecycle", "Application web & backend Python", "Architecture multi-module", "DevOps", "Systems & DevOps", "Network Fundamentals"], ["Software Engineering — Full Lifecycle", "Web application & Python backend", "Multi-module architecture", "DevOps", "Systems & DevOps", "Network Fundamentals"]);
  register("article.project-story .project-story__content > p:not(.project-story__meta):not(.project-story__tech)", ["Plateforme de gestion immobilière permettant de centraliser les annonces, utilisateurs, visites et contrats.", "Prise en charge de l'analyse à la supervision : conception, modélisation PostgreSQL, développement backend Spring Boot et frontend Vue.js, API REST, authentification JWT avec gestion des rôles, tests, Docker, CI/CD et déploiement. Responsabilités : Product Owner, Lead Developer, développeur Full Stack et Backend, DevOps et gestion de la base de données.", "Plateforme de gestion académique avec authentification, gestion des étudiants et tableau de bord statistique.", "Application de gestion structurée en plusieurs modules : une application Java Console pour les ressources, une interface Symfony pour les managers et une application ASP.NET MVC / C# pour les clients.", "Mise en place d'une chaîne CI/CD automatisant les tests, la construction et le déploiement d'une application.", "Déploiement et supervision d'environnements Linux avec monitoring, dashboards et alertes.", "Conception et simulation d'infrastructures réseau avec routage, segmentation, sécurité et haute disponibilité."], ["Real-estate management platform centralizing listings, users, visits and contracts.", "Covered from analysis to supervision: design, PostgreSQL data modeling, Spring Boot backend and Vue.js frontend development, REST API, JWT authentication with role management, testing, Docker, CI/CD and deployment. Responsibilities included Product Owner, Lead Developer, Full Stack and Backend Developer, DevOps, and database management.", "Academic management platform with authentication, student management and a statistical dashboard.", "Management application structured into several modules: a Java Console application for resources, a Symfony interface for managers and an ASP.NET MVC / C# application for customers.", "A CI/CD pipeline automating application testing, building and deployment.", "Deployment and monitoring of Linux environments with dashboards and alerts.", "Design and simulation of network infrastructures with routing, segmentation, security and high availability."]);
  register(".project-story__pending > p:not(.project-story__tech)", ["Architecture multi-module de gestion : l'application cliente en C# ASP.NET MVC couvre les fonctionnalités client, Java Console gère les ressources et Symfony fournit l'espace manager pour les commandes, le suivi et les statistiques.", "Le projet couvre le catalogue, les détails, les commandes, les compléments, les modes de consommation, récupération ou livraison, le paiement Wave / Orange Money, l'authentification, le suivi, le filtrage manager, les zones et l'affectation des livraisons. Les statistiques incluent les commandes actuelles et validées du jour, le chiffre d'affaires quotidien, les burgers les plus vendus et les commandes annulées du jour. Les modules partagent une base SQL créée manuellement, le projet est déployé sur Render et structuré autour des branches modelisation, java, csharp et symfony."], ["Multi-module management architecture: the C# ASP.NET MVC client application covers customer features, Java Console manages resources, and Symfony provides the manager area for orders, tracking and statistics.", "The project covers the catalogue, product details, orders, extras, consumption, pickup or delivery options, Wave / Orange Money payments, authentication, order tracking, manager filtering, zones and delivery assignment. Statistics include current and validated orders for the day, daily revenue, best-selling burgers and cancelled orders for the day. The modules share a manually created SQL database, the project is deployed on Render and organized around the modelisation, java, csharp and symfony branches."]);
  register(".project-story__pending > .project-story__tech", ["C# · ASP.NET MVC · Java Console · Symfony · SQL · Render"], ["C# · ASP.NET MVC · Java Console · Symfony · SQL · Render"]);
  register(".project-list__item > p:not(.project-story__meta):not(.project-story__tech)", ["Mise en place d'une chaîne CI/CD automatisant les tests, la construction et le déploiement d'une application.", "Déploiement et supervision d'environnements Linux avec monitoring, dashboards et alertes.", "Conception et simulation d'infrastructures réseau avec routage, segmentation, sécurité et haute disponibilité."], ["A CI/CD pipeline automating application testing, building and deployment.", "Deployment and monitoring of Linux environments with dashboards and alerts.", "Design and simulation of network infrastructures with routing, segmentation, security and high availability."]);
  register(".project-story__asset figcaption", ["[NEEDS ASSET] Capture principale du projet", "[NEEDS ASSET] Capture principale du projet", "[NEEDS ASSET] Capture principale du projet", "[NEEDS ASSET] Capture principale du projet", "[NEEDS ASSET] Capture principale du projet", "[NEEDS ASSET] Capture principale du projet"], ["[NEEDS ASSET] Main project screenshot", "[NEEDS ASSET] Main project screenshot", "[NEEDS ASSET] Main project screenshot", "[NEEDS ASSET] Main project screenshot", "[NEEDS ASSET] Main project screenshot", "[NEEDS ASSET] Main project screenshot"]);
  register("article.project-story a, .project-list__item a", ["Profil GitHub", "Profil GitHub", "Profil GitHub", "Voir la plateforme", "Profil GitHub", "Profil GitHub", "Profil GitHub"], ["GitHub profile", "GitHub profile", "GitHub profile", "View platform", "GitHub profile", "GitHub profile", "GitHub profile"]);
  register(".project-list", ["Autres travaux"], ["Other work"], "aria-label");
  register("#skills-title", ["Une pratique qui relie conception, code et exploitation."], ["A practice connecting design, code and operations."]);
  register(".skill-row p", ["Backend Development, API / REST, architecture, bases de données, frontend et testing : Java, Spring Boot, Symfony, PHP, Python, Flask, C#, ASP.NET, POO, MVC, SOLID et UML.", "Linux, Ubuntu, Kali Linux, Windows Server, Active Directory, administration système, LAMP, virtualisation, PostgreSQL, MySQL, Oracle, SQL et supervision.", "Docker, Docker Compose, Jenkins, GitHub Actions, CI/CD, Kubernetes, automatisation, Grafana et Prometheus.", "Connaissances complémentaires : TCP/IP, Cisco, Packet Tracer, GNS3, VLAN, routage, OSPF, EIGRP, NAT, ACL, STP et EtherChannel."], ["Backend development, API / REST, architecture, databases, frontend and testing: Java, Spring Boot, Symfony, PHP, Python, Flask, C#, ASP.NET, OOP, MVC, SOLID and UML.", "Linux, Ubuntu, Kali Linux, Windows Server, Active Directory, systems administration, LAMP, virtualization, PostgreSQL, MySQL, Oracle, SQL and monitoring.", "Docker, Docker Compose, Jenkins, GitHub Actions, CI/CD, Kubernetes, automation, Grafana and Prometheus.", "Complementary knowledge: TCP/IP, Cisco, Packet Tracer, GNS3, VLAN, routing, OSPF, EIGRP, NAT, ACL, STP and EtherChannel."]);
  register("#approach-title", ["Une méthode lisible, de l'idée à la production."], ["A clear method, from idea to production."]);
  register(".approach-list h3", ["Comprendre", "Concevoir", "Développer", "Tester", "Déployer"], ["Understand", "Design", "Develop", "Test", "Deploy"]);
  register(".approach-list p", ["Clarifier les besoins et les contraintes avant de choisir une direction technique.", "Architecture logicielle, UML, POO, MVC, SOLID et modélisation.", "Applications web, APIs REST, backend, bases de données et interfaces modernes.", "Automatiser les contrôles et vérifier la qualité avant la mise en ligne.", "Docker, CI/CD, Jenkins, GitHub Actions, systèmes Linux et monitoring."], ["Clarify needs and constraints before choosing a technical direction.", "Software architecture, UML, OOP, MVC, SOLID and modeling.", "Web applications, REST APIs, backend, databases and modern interfaces.", "Automate checks and verify quality before going live.", "Docker, CI/CD, Jenkins, GitHub Actions, Linux systems and monitoring."]);
  register("#education-title", ["Formation et repères."], ["Education and milestones."]);
  register(".timeline-item h3", ["Licence en Informatique appliquée à la gestion des entreprises — Génie Logiciel, Réseaux & Systèmes", "Licence Développement d'applications Web et Mobile", "Baccalauréat L2 — Sciences Sociales et Humaines"], ["Bachelor's degree in Computer Science applied to business management — Software Engineering, Networks & Systems", "Bachelor's degree in Web and Mobile Application Development", "L2 Baccalaureate — Social and Human Sciences"]);
  register(".timeline-item p:not(.timeline-item__period)", ["Institut Supérieur de Management — ISM, Dakar, Sénégal", "Mention Très Bien", "Université Numérique Cheikh Hamidou Kane — UNCHK", "Lycée d'Excellence Publique Blaise Diagne"], ["Higher Institute of Management — ISM, Dakar, Senegal", "Highest honors", "Cheikh Hamidou Kane Digital University — UNCHK", "Blaise Diagne Public Lycée of Excellence"]);
  register(".timeline-item__period", ["2023 — 2026", "2024 — Aujourd'hui", "2022 — 2023"], ["2023 — 2026", "2024 — Present", "2022 — 2023"]);
  register(".certs h3", ["Certifications"], ["Certifications"]);
  register(".certs li", ["Cisco IT Essentials", "Cisco Introduction à la Cybersécurité"], ["Cisco IT Essentials", "Cisco Introduction to Cybersecurity"]);
  register("#contact-title", ["Parlons d'un logiciel ou d'un système utile."], ["Let's talk about useful software or systems."]);
  register(".contact__grid .section-sub", ["Un projet, une opportunité ou un besoin autour du logiciel et des systèmes ? Échangeons directement.", "Je serai heureux de découvrir votre contexte et de voir comment contribuer de manière concrète."], ["A project, opportunity or need around software and systems? Let's talk directly.", "I would be glad to learn about your context and see how I can contribute in a concrete way."]);
  register(".contact-row__label", ["Email", "Téléphone", "LinkedIn", "GitHub"], ["Email", "Phone", "LinkedIn", "GitHub"]);
  register(".contact__grid .btn", ["Me contacter"], ["Contact me"]);
  register(".footer__brand-tag", ["Software & Systems Engineer"], ["Software & Systems Engineer"]);
  register(".footer__bottom", ["© 2026 Mouhamet Thiam. Tous droits réservés."], ["© 2026 Mouhamet Thiam. All rights reserved."]);
  register(".nav", ["Navigation principale"], ["Main navigation"], "aria-label");
  register(".nav__drawer", ["Navigation mobile"], ["Mobile navigation"], "aria-label");
  register("#burgerBtn", ["Ouvrir le menu"], ["Open menu"], "aria-label");
  register("#drawerClose", ["Fermer le menu"], ["Close menu"], "aria-label");
  register(".project-story__visual", ["Repère typographique du projet ImmoSN"], ["Typographic marker for the ImmoSN project"], "aria-label");
  function applyLanguage(language) {
    var selected = language === "en" ? "en" : "fr";
    languageTargets.forEach(function (target) {
      var value = translations[target.key][selected];
      if (target.attribute) target.element.setAttribute(target.attribute, value);
      else setVisibleText(target.element, value);
    });
    document.documentElement.lang = selected;
    document.querySelectorAll("[data-language]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-language") === selected ? "true" : "false");
    });
    try { window.localStorage.setItem("portfolio-language", selected); } catch (error) { /* storage can be unavailable */ }
  }
  var savedLanguage = "fr";
  try { savedLanguage = window.localStorage.getItem("portfolio-language") || "fr"; } catch (error) { /* storage can be unavailable */ }
  document.querySelectorAll("[data-language]").forEach(function (button) {
    button.addEventListener("click", function () { applyLanguage(button.getAttribute("data-language")); });
  });
  applyLanguage(savedLanguage);

  var requestFrame = function (callback) {
    if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);
    return window.setTimeout(callback, 16);
  };
  var motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var desktopQuery = window.matchMedia ? window.matchMedia("(min-width: 768px)") : null;
  var drawer = document.getElementById("navDrawer");
  var burgerButton = document.getElementById("burgerBtn");
  var drawerClose = document.getElementById("drawerClose");
  var overlay = document.getElementById("navOverlay");
  var iconOpen = document.getElementById("burgerIconOpen");
  var iconClose = document.getElementById("burgerIconClose");
  var pageHeader = document.querySelector(".site-header");
  var main = document.querySelector("main");
  var pageFooter = document.querySelector(".footer");
  var lastFocusedElement = null;
  var pageInertState = [];

  function prefersReducedMotion() {
    return Boolean(motionQuery && motionQuery.matches);
  }

  function menuLabel(french, english) {
    return document.documentElement.lang === "en" ? english : french;
  }

  function scrollToId(id) {
    var element = id && document.getElementById(id);
    if (!element) return false;
    element.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    return true;
  }

  function setInert(element, value) {
    if (!element) return;
    element.inert = value;
    if (value) element.setAttribute("inert", "");
    else element.removeAttribute("inert");
  }

  function getPageInertTargets() {
    return [pageHeader, main, pageFooter].filter(Boolean);
  }

  function getDrawerFocusableElements() {
    if (!drawer) return [];
    return Array.prototype.slice.call(drawer.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(function (element) {
      return element.getAttribute("aria-hidden") !== "true" && element.offsetParent !== null;
    });
  }

  function closeDrawer(restoreFocus) {
    if (!drawer) return;
    drawer.classList.remove("is-open");
    if (overlay) overlay.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    setInert(drawer, true);
    pageInertState.forEach(function (entry) { setInert(entry.element, entry.wasInert); });
    pageInertState = [];
    if (burgerButton) {
      burgerButton.setAttribute("aria-expanded", "false");
      burgerButton.setAttribute("aria-label", menuLabel("Ouvrir le menu", "Open menu"));
    }
    if (iconOpen) iconOpen.classList.remove("is-hidden");
    if (iconClose) iconClose.classList.add("is-hidden");
    if (document.body) document.body.classList.remove("menu-open");
    if (restoreFocus !== false && lastFocusedElement && document.contains(lastFocusedElement)) {
      lastFocusedElement.focus();
    }
    lastFocusedElement = null;
  }

  function openDrawer() {
    if (!drawer || !burgerButton || drawer.classList.contains("is-open")) return;
    lastFocusedElement = document.activeElement === burgerButton ? burgerButton : burgerButton;
    pageInertState = getPageInertTargets().map(function (element) {
      return { element: element, wasInert: element.inert || element.hasAttribute("inert") };
    });
    pageInertState.forEach(function (entry) { setInert(entry.element, true); });
    drawer.classList.add("is-open");
    if (overlay) overlay.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    setInert(drawer, false);
    burgerButton.setAttribute("aria-expanded", "true");
    burgerButton.setAttribute("aria-label", menuLabel("Fermer le menu", "Close menu"));
    if (document.body) document.body.classList.add("menu-open");
    if (iconOpen) iconOpen.classList.add("is-hidden");
    if (iconClose) iconClose.classList.remove("is-hidden");
    var focusableElements = getDrawerFocusableElements();
    if (focusableElements.length) focusableElements[0].focus();
  }

  if (drawer) {
    drawer.setAttribute("aria-hidden", "true");
    setInert(drawer, true);
  }
  if (burgerButton && drawer) {
    burgerButton.setAttribute("aria-controls", drawer.id);
    burgerButton.addEventListener("click", function () {
      if (drawer.classList.contains("is-open")) closeDrawer();
      else openDrawer();
    });
  }
  if (overlay) overlay.addEventListener("click", function () { closeDrawer(); });
  if (drawerClose) drawerClose.addEventListener("click", function () { closeDrawer(); });

  function closeDrawerOnDesktop(event) {
    if (!event.matches || !drawer || !drawer.classList.contains("is-open")) return;
    var focusWasInDrawer = drawer.contains(document.activeElement);
    closeDrawer(false);
    if (focusWasInDrawer) {
      var logo = document.querySelector(".nav__logo");
      if (logo) logo.focus();
    }
  }

  if (desktopQuery) {
    if (desktopQuery.addEventListener) desktopQuery.addEventListener("change", closeDrawerOnDesktop);
    else if (desktopQuery.addListener) desktopQuery.addListener(closeDrawerOnDesktop);
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest('a[href^="#"]');
    if (!link) return;
    var href = link.getAttribute("href") || "";
    var targetId = link.getAttribute("data-nav") || link.getAttribute("data-goto") || href.slice(1);
    var wasOpen = drawer && drawer.classList.contains("is-open");
    if (wasOpen) closeDrawer();
    if (scrollToId(targetId)) {
      event.preventDefault();
      if (href && href !== window.location.hash) {
        window.history.pushState({}, "", href);
      }
    }
  });

  document.addEventListener("keydown", function (event) {
    if (!drawer || !drawer.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeDrawer();
      return;
    }
    if (event.key !== "Tab") return;
    var focusableElements = getDrawerFocusableElements();
    if (!focusableElements.length) return;
    var firstElement = focusableElements[0];
    var lastElement = focusableElements[focusableElements.length - 1];
    if (event.shiftKey && (document.activeElement === firstElement || !drawer.contains(document.activeElement))) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && (document.activeElement === lastElement || !drawer.contains(document.activeElement))) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  /* ---------- SCROLL STATE ---------- */
  var nav = document.getElementById("siteNav");
  var sectionIds = ["projets", "competences", "parcours", "contact"];
  var navLinks = document.querySelectorAll("[data-nav]");
  var scrollFrame = null;

  function setActiveSection(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("data-nav") === id);
    });
  }

  function updateScrollState() {
    scrollFrame = null;
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 40);
    var currentSection = null;
    sectionIds.forEach(function (sectionId) {
      var section = document.getElementById(sectionId);
      if (section && window.scrollY >= section.offsetTop - 140) currentSection = sectionId;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 16) {
      currentSection = sectionIds[sectionIds.length - 1];
    }
    setActiveSection(currentSection);
  }

  window.addEventListener("scroll", function () {
    if (scrollFrame === null) scrollFrame = requestFrame(updateScrollState);
  }, { passive: true });
  updateScrollState();

  /* ---------- REVEAL ON SCROLL ---------- */
  var revealElements = document.querySelectorAll(".reveal");
  function showReveal(element) { element.classList.add("is-visible"); }
  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    revealElements.forEach(showReveal);
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          showReveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px 80px 0px" });
    revealElements.forEach(function (element) { observer.observe(element); });
  }
})();
