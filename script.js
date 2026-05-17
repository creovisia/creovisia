/* =========================================================
FILE: script.js
========================================================= */

// Loader

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 1000);

});

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// Close Mobile Menu

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});

// Header Scroll

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if (window.scrollY > 50) {

    header.style.background = "rgba(11,16,32,.95)";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

  } else {

    header.style.background = "rgba(11,16,32,.8)";
    header.style.boxShadow = "none";

  }

});

const routeMap = {
  "/": "home",
  "/home": "home",
  "/about": "about",
  "/services": "services",
  "/why-us": "why-us",
  "/portfolio": "portfolio",
  "/founder": "founder",
  "/faq": "faq",
  "/contact": "contact"
};

const normalizePath = path => path.replace(/\/+$|^\/|\/$/g, "") ? `/${path.replace(/^\/+|\/+$/g, "")}` : "/";

const getSectionId = path => {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return routeMap[normalized] || null;
};

const scrollToRouteSection = (path, replaceState = false) => {
  const sectionId = getSectionId(path);
  if (!sectionId) return;
  const section = document.getElementById(sectionId);
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  if (replaceState) {
    history.replaceState({ section: sectionId }, "", sectionId === "home" ? "/" : `/${sectionId}`);
  }
};

const handleRoute = (path, replaceState = false) => {
  const sectionId = getSectionId(path);
  if (!sectionId) return;
  if (document.getElementById(sectionId)) {
    scrollToRouteSection(path, replaceState);
  }
};

window.addEventListener("load", () => {
  handleRoute(window.location.pathname, true);
});

window.addEventListener("popstate", () => {
  handleRoute(window.location.pathname, true);
});

document.querySelectorAll("a[href]").forEach(link => {
  try {
    const url = new URL(link.href, window.location.origin);
    const path = url.pathname.replace(/\/+$/g, "") || "/";
    if (routeMap[path]) {
      link.addEventListener("click", e => {
        if (!document.getElementById(routeMap[path])) return;
        e.preventDefault();
        if (window.location.pathname !== path) {
          history.pushState({ section: routeMap[path] }, "", path);
        }
        scrollToRouteSection(path);
        navLinks.classList.remove("active");
      });
    }
  } catch (error) {
    // ignore invalid URLs
  }
});

// Contact Form

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const button = form.querySelector("button");

  button.innerHTML = "Sending...";

  setTimeout(() => {

    button.innerHTML = "Message Sent ✔️";

    form.reset();

    setTimeout(() => {

      button.innerHTML = "Send Message";

    }, 2000);

  }, 1500);

});