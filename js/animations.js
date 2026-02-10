const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("active");
  });
},{threshold:0.15});

document.querySelectorAll(
  ".animate-up,.animate-left,.animate-right"
).forEach(el => observer.observe(el));
