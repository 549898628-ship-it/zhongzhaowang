const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -48px 0px",
  },
);

document.querySelectorAll("[data-reveal]").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll("[data-print]").forEach((element) => {
  element.addEventListener("click", () => {
    window.print();
  });
});
