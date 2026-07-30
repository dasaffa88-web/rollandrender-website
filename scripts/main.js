/* Roll & Render Studio — Navbar Logic */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".navbar-burger");
    var links = document.querySelector(".navbar-links");

    if (burger && links) {
      burger.addEventListener("click", function () {
        burger.classList.toggle("is-open");
        links.classList.toggle("is-open");
      });

      // Close menu when a link is clicked (mobile)
      links.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          burger.classList.remove("is-open");
          links.classList.remove("is-open");
        });
      });
    }

    // Highlight active nav link based on current page
    var path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar-links a").forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        link.classList.add("is-active");
      }
    });
  });
})();
