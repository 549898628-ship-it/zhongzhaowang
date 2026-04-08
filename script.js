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

const initHeroVideoLoop = () => {
  const video = document.querySelector("[data-hero-video]");
  if (!video) return;

  let rafId = 0;
  let fading = false;

  const fade = (from, to, duration, onComplete) => {
    const start = performance.now();
    cancelAnimationFrame(rafId);

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      video.style.opacity = String(from + (to - from) * progress);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
        return;
      }

      onComplete?.();
    };

    rafId = requestAnimationFrame(step);
  };

  const playLoop = () => {
    fading = false;
    video.currentTime = 0;
    video.style.opacity = "0";

    const playPromise = video.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }

    fade(0, 1, 500);
  };

  video.addEventListener("loadeddata", () => {
    playLoop();
  });

  video.addEventListener("timeupdate", () => {
    if (fading || !video.duration || video.duration - video.currentTime > 0.5) return;

    fading = true;
    fade(parseFloat(video.style.opacity || "1"), 0, 500, () => {
      video.pause();
      video.style.opacity = "0";
      window.setTimeout(playLoop, 100);
    });
  });

  video.addEventListener("ended", () => {
    if (fading) return;

    video.style.opacity = "0";
    window.setTimeout(playLoop, 100);
  });
};

initHeroVideoLoop();
