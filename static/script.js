document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"], a[href^="/"]');
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.target === "_blank" || link.href.startsWith("http")) return;
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const revealEls = document.querySelectorAll(".section-card, .project-card, .edu-item, .contact-card");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));
});
