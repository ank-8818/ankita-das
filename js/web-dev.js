// Getting elements

const root = document.documentElement;
const switchButtons = document.querySelectorAll(".switch-btn");

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector("#nav-links");

const webGrid = document.querySelector("#work-grid");



// ----------------- Collection of Web dev projects (Edit this to add more projects) -----------------
const webProjects = [

    {
        title: "Dear Me,",
        text: "A private-by-default journaling site with accounts, moods, moderation and a hardened backend.",
        tags: ["Node.js", "Express", "EJS", "SQLite"],
        image: "./images/web-dev/desktop/dear-me-desktop.png",
        mobile:"./images/web-dev/mobile/dear-me-mobile.png",
        alt: "Screenshot of the Dear Me, website",
        live: "https://dear-me-production.up.railway.app",
        code: "https://github.com/ank-8818/dear-me"
    },

    {
        title: "Bloom & Co.",
        text: "An appointment-only salon and spa site where booking actually thinks: pick a bundle and it finds its slot, and the times adapt to each service's length and the salon's opening hours.",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "./images/web-dev/desktop/bloom-and-co-desktop.webp",
        mobile:"./images/web-dev/mobile/bloom-and-co-mobile.webp",
        alt: "Screenshot of the Bloom & Co. website",
        live: "https://ank-8818.github.io/bloom-and-co/",
        code: "https://github.com/ank-8818/bloom-and-co"
    },

    {
        title: "Which Star Are You",
        text: "Six questions, one star. Every answer adds to your score, ties are settled by a fixed order, and each option has its own sound. On desktop, even the cursor is a star.",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "./images/web-dev/desktop/which-star-are-you-desktop.webp",
        mobile:"./images/web-dev/mobile/which-star-are-you-mobile.webp",
        alt: "Screenshot of the Which Star Are You quiz",
        live: "https://ank-8818.github.io/which-star-are-you/",
        code: "https://github.com/ank-8818/which-star-are-you"
    },

    {
        title: "Pulp & Peel",
        text: "A playful juice and smoothie bar site, and my first experiment with Bootstrap, with JavaScript validating the form.",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        image: "./images/web-dev/desktop/pulp-and-peel-desktop.webp",
        mobile:"./images/web-dev/mobile/pulp-and-peel-mobile.webp",
        alt: "Screenshot of the Pulp & Peel website",
        live: "https://ank-8818.github.io/pulp-and-peel/",
        code: "https://github.com/ank-8818/pulp-and-peel"
    }
    
];


// ------------------- To switch sides between the web dev and design------------
switchButtons.forEach(button => {
  button.addEventListener('click', () => {
    const side = button.dataset.side;
    root.dataset.theme = side;

    document.querySelectorAll('[data-panel]').forEach(panel => {
      panel.hidden = panel.dataset.panel !== side;
    });

    switchButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  });
});

// ----------------- Mobile Menu ------------------------
function setMenu(open) {
    links.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
}

toggle.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
links.addEventListener("click", event => {
    if (event.target.matches("a")) setMenu(false);
});



// --------------------- For rendering the web dev projects ----------------------
webGrid.innerHTML = webProjects.map(p => `
    <article class="card">
        <div class="card-media">
            <img class="card-shot card-shot--desktop" src="${p.image}" alt="${p.alt}" loading="lazy">
            ${p.mobile ? `<img class="card-shot card-shot--mobile" src="${p.mobile}" alt="Mobile view of ${p.title}" loading="lazy">` : ""}
        </div>

        <div class="card-body">
            <h3 class="card-title">${p.title}</h3>
            <p class="card-text">${p.text}</p>
            <ul class="card-tags">
                ${p.tags.map(tag => `<li class="card-tag">${tag}</li>`).join("")}
            </ul>
            <div class="card-links">
                ${p.live ? `<a class="btn btn-small" href=${p.live} target="_blank" rel="noopener">Live site</a>` : ""}
                ${p.code ? `<a class="btn btn-small btn-soft" href=${p.code} target="_blank" rel="noopener">Code</a>` : ""}
            </div>
        </div>
    </article>
`).join("");