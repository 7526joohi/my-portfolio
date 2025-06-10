'use strict';

// Toggle element visibility
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar toggle for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// Contact form activation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  });
});

// Page navigation (this fixes resume/contact toggle issue)
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetPage = link.textContent.trim().toLowerCase();

    pages.forEach(page => {
      page.classList.toggle("active", page.dataset.page === targetPage);
    });

    navigationLinks.forEach(nav => {
      nav.classList.toggle("active", nav === link);
    });

    window.scrollTo(0, 0);
  });
});
