//  Sections ease in the first time they scroll into view.
//  Needs the "js" class on <html>, set by the tiny inline script in <head> (see notes).
const revealTargets = document.querySelectorAll(".work, .progress, .about, .skills, .contact");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { rootMargin: "0px 0px -10% 0px" });

    revealTargets.forEach(section => {
        section.classList.add("reveal");
        observer.observe(section);
    });
}


//  Smooth Web dev / Design switch: the whole page crossfades (where the browser supports view transitions).
//  This re-runs your existing switch handler inside the transition, so web-dev.js stays untouched.
const switchBar = document.querySelector(".switch");
const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let replaying = false;

if (switchBar && document.startViewTransition && !calm) {
    switchBar.addEventListener("click", event => {
        const btn = event.target.closest(".switch-btn");
        if (replaying || !btn || btn.getAttribute("aria-pressed") === "true") return;

        event.stopPropagation();
        document.startViewTransition(() => {
            replaying = true;
            btn.click();
            replaying = false;
        });
    }, true);
}