export const smoothScrollToId = (id: string, offset = 0) => {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: prefersReduced ? "auto" : "smooth",
  });

  const previousTabIndex = target.getAttribute("tabindex");
  target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });

  window.setTimeout(() => {
    if (previousTabIndex === null) {
      target.removeAttribute("tabindex");
    } else {
      target.setAttribute("tabindex", previousTabIndex);
    }
  }, 1000);
};
