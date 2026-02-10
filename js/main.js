document.addEventListener("DOMContentLoaded", () => {
  // Activate hero immediately
  document
    .querySelectorAll(".hero .animate-up, .hero .animate-left, .hero .animate-right")
    .forEach(el => el.classList.add("active"));

  // Animate other sections on scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(".animate-up, .animate-left, .animate-right")
    .forEach(el => observer.observe(el));
});

