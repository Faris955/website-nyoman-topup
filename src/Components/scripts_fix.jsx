import React, { useEffect } from "react";

const Scripts = () => {
  useEffect(() => {
    // Load Bootstrap JS
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        });
      });

      // Navbar background on scroll
      const handleScroll = () => {
        const navbar = document.querySelector(".navbar-custom");
        if (navbar) {
          if (window.scrollY > 50) {
            navbar.style.background = "rgba(10, 10, 15, 0.98)";
            navbar.style.boxShadow = "0 2px 20px rgba(0, 212, 255, 0.1)";
          } else {
            navbar.style.background = "rgba(10, 10, 15, 0.95)";
            navbar.style.boxShadow = "none";
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Fade in animation on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, observerOptions);

      document.querySelectorAll(".fade-in").forEach((el) => {
        observer.observe(el);
      });

      // Initialize animations on page load
      setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("visible");
          }, index * 100);
        });
      }, 200);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Scripts;
