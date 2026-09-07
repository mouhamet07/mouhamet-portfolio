(function () {
  "use strict";

  var requestFrame = function (callback) {
    if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);
    return window.setTimeout(callback, 16);
  };

  function scrollToId(id) {
    var element = document.getElementById(id);
    if (!element) return false;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }

  /* ---------- NAVIGATION ---------- */
  var drawer = document.getElementById("navDrawer");
  var burgerButton = document.getElementById("burgerBtn");
  var drawerClose = document.getElementById("drawerClose");
  var overlay = document.getElementById("navOverlay");
  var iconOpen = document.getElementById("burgerIconOpen");
  var iconClose = document.getElementById("burgerIconClose");
  var lastFocusedElement = null;

  function getDrawerFocusableElements() {
    if (!drawer) return [];
    return Array.prototype.slice.call(drawer.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ));
  }

  function closeDrawer(restoreFocus) {
    if (!drawer || !overlay || !burgerButton) return;
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    drawer.setAttribute("inert", "");
    burgerButton.setAttribute("aria-expanded", "false");
    burgerButton.setAttribute("aria-label", "Ouvrir le menu");
    if (iconOpen) iconOpen.classList.remove("is-hidden");
    if (iconClose) iconClose.classList.add("is-hidden");
    document.body.classList.remove("menu-open");

    if (restoreFocus !== false && lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
    lastFocusedElement = null;
  }

  function openDrawer() {
    if (!drawer || !overlay || !burgerButton) return;
    lastFocusedElement = burgerButton;
    drawer.classList.add("is-open");
    overlay.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    drawer.removeAttribute("inert");
    burgerButton.setAttribute("aria-expanded", "true");
    burgerButton.setAttribute("aria-label", "Fermer le menu");
    document.body.classList.add("menu-open");
    if (iconOpen) iconOpen.classList.add("is-hidden");
    if (iconClose) iconClose.classList.remove("is-hidden");
    if (drawerClose) drawerClose.focus();
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

  document.querySelectorAll("[data-goto]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = link.getAttribute("data-goto");
      if (scrollToId(targetId)) event.preventDefault();
    });
  });

  document.querySelectorAll("[data-nav]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = link.getAttribute("data-nav");
      if (scrollToId(targetId)) event.preventDefault();
      closeDrawer(false);
    });
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
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  /* ---------- SCROLL STATE ---------- */
  var nav = document.getElementById("siteNav");
  var sectionIds = ["accueil", "a-propos", "competences", "projets", "parcours", "contact"];
  var navLinks = document.querySelectorAll("[data-nav]");
  var scrollPending = false;

  function setActiveSection(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("data-nav") === id);
    });
  }

  function updateScrollState() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 40);
    var currentSection = sectionIds[0];
    sectionIds.forEach(function (sectionId) {
      var section = document.getElementById(sectionId);
      if (section && window.scrollY >= section.offsetTop - 140) currentSection = sectionId;
    });
    setActiveSection(currentSection);
    scrollPending = false;
  }

  function handleScroll() {
    if (scrollPending) return;
    scrollPending = true;
    requestFrame(updateScrollState);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  updateScrollState();

  /* ---------- REVEAL ON SCROLL ---------- */
  var revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach(function (element) { observer.observe(element); });
    window.setTimeout(function () {
      revealElements.forEach(function (element) {
        element.classList.add("is-visible");
      });
    }, 1500);
  } else {
    revealElements.forEach(function (element) { element.classList.add("is-visible"); });
  }

  /* ---------- LOCAL FORM VALIDATION ---------- */
  var form = document.getElementById("contactForm");
  if (!form) return;

  var submitLabel = document.getElementById("cfSubmitLabel");
  var fields = Array.prototype.slice.call(form.querySelectorAll("input, textarea"));

  function getErrorMessage(field) {
    if (field.validity.valueMissing) return "Ce champ est obligatoire.";
    if (field.validity.typeMismatch) return "Veuillez renseigner une adresse email valide.";
    return "";
  }

  function setFieldError(field, showError) {
    var errorId = field.id + "-error";
    var error = document.getElementById(errorId);
    var message = showError ? getErrorMessage(field) : "";
    field.setAttribute("aria-invalid", showError ? "true" : "false");

    if (message && !error) {
      error = document.createElement("p");
      error.id = errorId;
      error.className = "form-error";
      error.setAttribute("role", "alert");
      field.parentNode.appendChild(error);
    }
    if (error) {
      error.textContent = message;
      error.hidden = !message;
    }
    if (message) field.setAttribute("aria-describedby", errorId);
    else field.removeAttribute("aria-describedby");
  }

  fields.forEach(function (field) {
    field.addEventListener("input", function () {
      if (field.getAttribute("aria-invalid") === "true") setFieldError(field, !field.checkValidity());
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstInvalidField = null;
    fields.forEach(function (field) {
      var invalid = !field.checkValidity();
      setFieldError(field, invalid);
      if (invalid && !firstInvalidField) firstInvalidField = field;
    });
    if (firstInvalidField) {
      firstInvalidField.focus();
      return;
    }
    if (submitLabel) {
      submitLabel.setAttribute("aria-live", "polite");
      submitLabel.textContent = "Validation réussie. Envoi non configuré.";
    }
  });
})();
