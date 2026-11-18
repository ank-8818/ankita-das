//  Getting variables
const designGrid = document.querySelector("#design-grid");
const designTabs = document.querySelector("#design-tabs");
const designEmpty = document.querySelector("#design-empty");

const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxLink = lightbox.querySelector(".lightbox-shop");
const lightboxNav = lightbox.querySelector(".lightbox-nav");
const lightboxCount = lightbox.querySelector(".lightbox-count");

//Sections, in order they appear on the page
const categories = [
    {
        id: "brand",
        title: "Brand identity",
        lead: "Two concept brands, each with a logo system, mockups and guidelines."
    },

    {
        id: "social",
        title: "Social media",
        lead: "Concept post sets for each brand. Stock photos are credited in the captions."
    },

    {
        id: "illustration",
        title: "Illustration",
        lead: "Character illustration, card design and more to come in future."
    },
    
    {
        id: "patterns",
        title: "Patterns",
        lead: "Seamless patterns, shown flat and in use."
    }
];


//  Edit this list to add or change design pieces.
//  category: brand | social | illustration | patterns
//  Social pieces also need  set: "Brand name"   Brand pieces also need  summary, tags, link
const designPieces = [
    
    // --------------------------------------- Brand Identity  -----------------------------
    {
        category: "brand",
        title: "The Daily Crumb",
        kind: "Brand identity",
        summary: "A café and bakery identity that changes with the seasons without losing its sunrise.",
        tags: ["Logo suite", "Menu", "Stamps", "Stationery"],
        link: "./assets/case-studies/the-daily-crumb.pdf",
        linkLabel: "View case study",
        note: "Concept project: seasonal logo editions, menu, loyalty card, stationery and packaging.",
        image: "./images/design/brand/daily-crumb/dc-board-preview.webp",
        alt: "Brand board for The Daily Crumb with the main and winter logo suites, business and loyalty cards, stamp variations and supporting elements",
        gallery: [
            { image: "./images/design/brand/daily-crumb/dc-board-01.webp", alt: "Brand board with the main and winter logo suites, business and loyalty cards, stamp variations and supporting elements", caption: "Logo suites, cards and stamps" },
            { image: "./images/design/brand/daily-crumb/dc-board-02.webp", alt: "Brand board with main and winter greeting cards and two colour palettes", caption: "Greeting cards and colour palettes" },
            { image: "./images/design/brand/daily-crumb/dc-board-03.webp", alt: "A closeup of the menu pages", caption: "The menu pages" },
            { image: "./images/design/brand/daily-crumb/dc-mockup-menu.webp", alt: "Menu cover on a clipboard with business cards and coffee beans", caption: "The menu in context" },
            { image: "./images/design/brand/daily-crumb/dc-mockup-loyalty.webp", alt: "Front and back of the Sunrise loyalty card with seasonal stamps", caption: "The Sunrise Card" },
            { image: "./images/design/brand/daily-crumb/dc-mockup-packaging.webp", alt: "Printed menu card, paper bag and bakery packaging on a table with pastries", caption: "Packaging and printed promotions" }
        ]
    },

    {
        category: "brand",
        title: "Drizzle & Dot",
        kind: "Brand identity",
        summary: "A gifting-focused honey brand: logo system, patterns, jar labels, gift box and guidelines.",
        tags: ["Logo suite", "Patterns", "Packaging", "Guidelines"],
        link: "./assets/case-studies/drizzle-and-dot.pdf",
        linkLabel: "View case study",
        note: "Concept project: logo suite, three patterns, seals, mockups and brand guidelines.",
        image: "./images/design/brand/drizzle-and-dot/dd-board-01.webp",
        alt: "Brand board for Drizzle & Dot with logo lockups, a brand seal, bee icons, wordmark variations, stacked logos and an ampersand submark on dark brown",
        gallery: [
            { image: "./images/design/brand/drizzle-and-dot/dd-board-01.webp", alt: "Brand board on dark brown with logo lockups, a brand seal, bee icons, wordmark variations, stacked logos and an ampersand submark", caption: "Logo suite on dark" },
            { image: "./images/design/brand/drizzle-and-dot/dd-board-02.webp", alt: "The same logo suite on a cream background", caption: "Logo suite on light" },
            { image: "./images/design/brand/drizzle-and-dot/dd-board-03.webp", alt: "Brand board with hero patterns, outline variations, honeycomb and stripes in light and dark", caption: "Hero and supporting patterns" },
            { image: "./images/design/brand/drizzle-and-dot/dd-mockup-jars.webp", alt: "Two honey jars, 500 g and 250 g, with the Drizzle & Dot label and a patterned tamper strip", caption: "Jar labels, 500 g and 250 g" },
            { image: "./images/design/brand/drizzle-and-dot/dd-mockup-gift-box.webp", alt: "The Sweet Hello Box with patterned wrapping, tissue and bee seals", caption: "The Sweet Hello Box" },
            { image: "./images/design/brand/drizzle-and-dot/dd-mockup-cards-letter.webp", alt: "Business card and letter of authenticity with batch details and a note from the beekeeper", caption: "Business card and letter" }
        ]
    },


    // ---------- Social media ----------
    {
        category: "social", set: "The Daily Crumb",
        title: "Winter Edition", kind: "Feed post",
        note: "An illustrated window onto a snowy scene, keeping the sunburst rays from the logo.",
        image: "./images/design/social/daily-crumb/dc-winter-edition.webp",
        alt: "Social post showing an illustrated window with curtains pulled aside onto a snowy scene, with the headline Cold outside, warm inside."
    },

    {
        category: "social", set: "The Daily Crumb",
        title: "Warm chai", kind: "Feed post",
        note: "A seasonal chai promotion: headline, price tag and opening hours over a photo. Photo: Aditya Mara on Pexels.",
        image: "./images/design/social/daily-crumb/dc-warm-chai.webp",
        alt: "Social post with a cup of masala chai on a wooden tray, a cloud-shaped headline and the café logo"
    },

    {
        category: "social", set: "The Daily Crumb",
        title: "The Sunrise Card", kind: "Story",
        note: "A story introducing the loyalty card, with both rewards laid out so the offer reads at a glance.",
        image: "./images/design/social/daily-crumb/dc-sunrise-card.webp",
        alt: "Instagram story introducing the Sunrise Card loyalty card on dark green"
    },

    {
        category: "social", set: "Drizzle & Dot",
        title: "Three ways to drizzle",
        kind: "Carousel · 5 slides",
        note: "A five-slide carousel: a cover, three illustrated serving ideas and a call to action. The illustrations are mine; the jars on the last slide are a mockup.",
        image: "./images/design/social/drizzle-and-dot/dd-carousel-01.webp",
        alt: "Carousel cover on dark brown with two bees on dotted flight paths and a swipe prompt",
        gallery: [
            { image: "./images/design/social/drizzle-and-dot/dd-carousel-01.webp", alt: "Carousel cover on dark brown: Three ways to drizzle, with two bees on dotted flight paths and a swipe prompt", caption: "Cover" },
            { image: "./images/design/social/drizzle-and-dot/dd-carousel-02.webp", alt: "Illustrated honey drizzle over buttered toast with a bee flying past", caption: "On warm toast" },
            { image: "./images/design/social/drizzle-and-dot/dd-carousel-03.webp", alt: "Illustrated teacup with a spoon and a bee flying above it", caption: "In your evening tea" },
            { image: "./images/design/social/drizzle-and-dot/dd-carousel-04.webp", alt: "Illustrated bowl of yoghurt with berries, banana and almonds under a honey drizzle", caption: "Over cold yoghurt" },
            { image: "./images/design/social/drizzle-and-dot/dd-carousel-05.webp", alt: "Two Wildflower Honey jars, 250 g and 500 g, with an order via link in bio prompt", caption: "Your turn" }
        ]
    },

    {
        category: "social", set: "Drizzle & Dot",
        title: "Now in two sizes", kind: "Feed post",
        note: "A product announcement for the 250 g and 500 g jars. The jars are mockups.",
        image: "./images/design/social/drizzle-and-dot/dd-product.webp",
        alt: "Post on a honeycomb-patterned beige background showing a large 500 g and a smaller 250 g jar of Wildflower Honey, a round Drizzle & Dot seal, and the text Now in two sizes: 250 g and 500 g"
    },

    {
        category: "social", set: "Drizzle & Dot",
        title: "Honey tastes better when it is shared", kind: "Feed post",
        note: "A lifestyle post with the jar label placed onto a photo as a mockup. The headline and layout are mine.",
        image: "./images/design/social/drizzle-and-dot/dd-lifestyle.webp",
        alt: "Hands holding an open jar of Wildflower Honey and lifting a spoon dripping with honey, with the headline Honey tastes better when it is shared, the bee logo and the handle @drizzleanddot"
    },

    {
        category: "social",
        set: "Leafling",
        title: "Water less than you think",
        note: "A plant-care tip in a calm green palette, with one terracotta word for emphasis.",
        kind: "Feed post",
        image: "./images/design/social/leafling/lf-water-less.webp",
        alt: "Plant-care quote post in sage green with outline leaves and the word LESS in terracotta"
    },



    //  ----------------------- Illustration ------------------------------------
    {
        category: "illustration",
        title: "Aries",
        kind: "Illustration",
        note: "My first zodiac piece — I spent more time figuring out the palette than drawing the actual thing.",
        image: "./images/design/illustration/aries.webp",
        alt: "Illustrated portrait of a woman with dark ram horns, galaxy-colored eyes and white flowers in her hair, against a night sky"
    },

    {
        category: "illustration",
        title: "Taurus",
        kind: "Illustration",
        note: "Second in the series — I spent a lot of time figuring out how light sits on skin before letting the colors take over.",
        image: "./images/design/illustration/taurus.webp",
        alt: "Illustrated portrait of a woman with red and plum hair, dark horns and gold earrings, framed by wheat motifs"
    },

    {
        category: "illustration",
        title: "Queen of Diamonds",
        kind: "Card design",
        note: "Decided to design a playing card on a whim. The diamonds do most of the talking.",
        image: "./images/design/illustration/queen-of-diamonds.webp",
        alt: "Playing-card illustration of a queen in a red dress holding a glowing diamond, in grey and black with red accents"
    },


    //  -------------------- Patterns ----------------------------

    {
        category: "patterns",
        title: "Tonal leaves",
        kind: "Seamless pattern",
        shop: "https://patterntheoryshop.gumroad.com/l/tonal-leaves",
        note: "Wanted autumn without the orange — ended up somewhere between late summer and the first cold night.",
        image: "./images/design/patterns/boards/tonal-leaves-board.webp",
        alt: "Seamless pattern of scattered green, rust and gold leaves on cream",
        gallery: [
            { image: "./images/design/patterns/boards/tonal-leaves-board.webp", alt: "Seamless pattern of scattered green, rust and gold leaves on cream", caption: "Pattern board" },
            { image: "./images/design/patterns/mockups/tonal-leaves/fabric-bolt-mockup.webp", alt: "Folded fabric bolts printed with the leaf pattern in full-color and outline versions, alternating with plain charcoal and rust cloth", caption: "Fabric bolts with solid coordinates" },
            { image: "./images/design/patterns/mockups/tonal-leaves/laptop-stickers-mockup.webp", alt: "Five green leaf and sprig stickers on a silver laptop trackpad", caption: "Leaf and sprig stickers" },
            { image: "./images/design/patterns/mockups/tonal-leaves/tote-bag-mockup.webp", alt: "Canvas tote bag with the leaf pattern and rust handles lying on grass", caption: "Canvas tote" },
            { image: "./images/design/patterns/mockups/tonal-leaves/wrapped-gift-mockup.webp", alt: "A gift wrapped in leaf-pattern paper and tied with dark string, with a tag reading Leaf it to us to keep things pretty and three more tags beside it", caption: "Wrapping paper and gift tags" }
        ]
    },

    {
        category: "patterns",
        title: "Citrus Botanica",
        kind: "Pattern collection · 6 designs",
        shop: "https://patterntheoryshop.gumroad.com/l/citrus-botanica",
        note: "Three citrus hero repeats and three blossom coordinates.",
        image: "./images/design/patterns/boards/citrus-botanica-board.webp",
        alt: "Collection board with six citrus and blossom seamless patterns",
        gallery: [
            { image: "./images/design/patterns/boards/citrus-botanica-board.webp", alt: "Collection board with six citrus and blossom seamless patterns", caption: "Collection board" },
            { image: "./images/design/patterns/mockups/citrus-botanica/fashion-mockup.webp", alt: "Flat lay of a silk scarf in an orange and blossom pattern with a white shopping bag, a knotted headband, a green wallet, sunglasses and a card holder", caption: "Silk scarf and accessories" },
            { image: "./images/design/patterns/mockups/citrus-botanica/juice-carton-mockup.webp", alt: "Three Pure Grove juice cartons on a wooden stand: lime and mint, Valencia orange and Amalfi lemon, each covered in its own citrus and blossom pattern", caption: "Juice cartons, one pattern per flavor" },
            { image: "./images/design/patterns/mockups/citrus-botanica/gift-box-mockup.webp", alt: "Two Citra Atelier confectionery boxes in a lemon-blossom pattern, one with its drawer open, beside a sheet of round lemon stickers and a gray ribbon", caption: "Confectionery boxes and stickers" },
            { image: "./images/design/patterns/mockups/citrus-botanica/skincare-mockup.webp", alt: "Aura Botanica skincare set on white blocks: a coral cleanser tube, a frosted balm jar, a dropper serum bottle and a serum box printed with the blossom pattern", caption: "Skincare packaging" },
            { image: "./images/design/patterns/mockups/citrus-botanica/perfume-mockup.webp", alt: "A clear perfume bottle with a white Cédrat Vert label beside its box, framed by a border of white blossoms and green leaves", caption: "Perfume bottle and box" }
        ]
    },
];


//  Pattern mockups for the carousel. Replace the TODO entries; leave the list empty to hide it.

const patternMockups = [];


//  ---------------- Rendering --------------------
designEmpty.hidden = designPieces.length > 0;

const imgButton = (p, i, extra = "") => `
    <button class="piece-btn" type="button" data-index="${i}" aria-label="${p.gallery ? 'Open gallery' : 'View larger'}: ${p.title}">
        <img class="piece-img ${extra}" src="${p.image}" alt="${p.alt}" loading="lazy">
        ${p.gallery && p.category === "social" ? `<span class="slide-badge">${p.gallery.length} slides</span>` : ""}
    </button>`;

const figure = (p, i) => `
    <figure class="piece">
        ${imgButton(p, i)}
        <figcaption class="piece-cap">
            <span class="piece-title">${p.title}</span>
            <span class="piece-kind">${p.kind}</span>
        </figcaption>
    </figure>`;

const brandCard = (p, i) => `

    <article class="card">
        <div class="card-media"${p.tint ? style="--tint:${p.tint}" : ""}>${imgButton(p, i, "card-shot")}</div>
        <div class="card-body">
            <h4 class="card-title">${p.title}</h4>
            <p class="card-text">${p.summary}</p>
            <ul class="card-tags">${p.tags.map(t => `<li class="card-tag">${t}</li>`).join("")}</ul>
            <div class="card-links">${p.gallery ? `<button class="btn btn-small btn-soft open-gallery" type="button" data-index="${i}">View ${p.gallery.length} images</button>` : ""}<a class="btn btn-small" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel}</a></div>
        </div>
    </article>`;

const socialSet = (name, items) => `
    <div class="set">
        <h4 class="set-title">${name}</h4>
        <div class="set-row">${items.map(x => figure(x.p, x.i)).join("")}</div>
    </div>`;

const carousel = () => patternMockups.length === 0 ? "" : `
    <div class="car" id="car" role="region" aria-roledescription="carousel" aria-label="Pattern mockups">
        <div class="car-track">
            ${patternMockups.map((m, n) => `
            <figure class="car-slide">
                <img src="${m.image}" alt="${m.alt}" ${n ? 'loading="lazy"' : ""}>
                <figcaption>${m.caption}</figcaption>
            </figure>`).join("")}
        </div>
        <button class="car-nav car-prev" type="button" aria-label="Previous slide">&#8249;</button>
        <button class="car-nav car-next" type="button" aria-label="Next slide">&#8250;</button>
        <div class="car-dots">
            ${patternMockups.map((m, n) => `<button type="button" data-i="${n}" aria-label="Go to slide ${n + 1}"></button>`).join("")}
        </div>
    </div>`;

function sectionHTML(cat) {
    const items = designPieces.map((p, i) => ({ p, i })).filter(x => x.p.category === cat.id);
    if (items.length === 0) return "";

    let body = "";

    if (cat.id === "brand") {
        body = `<div class="work-grid">${items.map(x => brandCard(x.p, x.i)).join("")}</div>`;
    } else if (cat.id === "social") {
        const sets = [...new Set(items.map(x => x.p.set))];
        body = sets.map(name => socialSet(name, items.filter(x => x.p.set === name))).join("");
    } else {
        body = (cat.id === "patterns" ? carousel() : "") +
               `<div class="gallery">${items.map(x => figure(x.p, x.i)).join("")}</div>`;
    }

    return `
    <section class="design-sec" data-cat="${cat.id}" aria-labelledby="sec-${cat.id}">
        <h3 class="design-sec-title" id="sec-${cat.id}">${cat.title}</h3>
        <p class="design-sec-lead">${cat.lead}</p>
        ${body}
    </section>`;
}

designGrid.innerHTML = categories.map(sectionHTML).join("");

designTabs.innerHTML = [{ id: "all", title: "All" }, ...categories]
    .map((c, n) => `<button class="design-tab" type="button" data-cat="${c.id}" aria-pressed="${n === 0}">${c.title}</button>`)
    .join("");

//  Category filter: show one section, or all of them
designTabs.addEventListener("click", event => {
    const tab = event.target.closest(".design-tab");
    if (!tab) return;

    designTabs.querySelectorAll(".design-tab").forEach(t => t.setAttribute("aria-pressed", String(t === tab)));
    designGrid.querySelectorAll(".design-sec").forEach(sec => {
        sec.hidden = !(tab.dataset.cat === "all" || sec.dataset.cat === tab.dataset.cat);
    });
});







//  ---------------- Lightbox --------------------
//  A piece with  gallery: [{ image, alt, caption }]  can be flipped through with the arrows.
let activePiece = null;
let slide = 0;

function showSlide(n) {
    const list = activePiece.gallery || [{ image: activePiece.image, alt: activePiece.alt, caption: activePiece.note }];
    slide = (n + list.length) % list.length;
    const s = list[slide];
    lightboxImg.src = s.image;
    lightboxImg.alt = s.alt;
    lightboxCaption.innerHTML = "";

    const titleEl = document.createElement("span");
    titleEl.className = "lightbox-title";
    titleEl.textContent = activePiece.title;
    lightboxCaption.appendChild(titleEl);

    if (s.caption) {
        const descEl = document.createElement("span");
        descEl.className = "lightbox-desc";
        descEl.textContent = s.caption;
        lightboxCaption.appendChild(descEl);
    }
    lightboxNav.hidden = list.length < 2;
    lightboxCount.textContent = `${slide + 1} / ${list.length}`;
}

designGrid.addEventListener("click", event => {
    const button = event.target.closest(".piece-btn, .open-gallery");
    if (!button) return;
    activePiece = designPieces[button.dataset.index];
    showSlide(0);
    const href = activePiece.link || activePiece.shop;
    lightboxLink.style.display = href ? "inline-block" : "none";
    if (href) {
        lightboxLink.href = href;
        lightboxLink.textContent = activePiece.linkLabel || "View in shop";
    }
    lightbox.showModal();       //Esc closes it, and focus returns to the piece clicked
});


//  arrows, close button, or a click on the dark backdrop
lightbox.addEventListener("click", event => {
    if (event.target.closest(".lightbox-next")) return showSlide(slide + 1);
    if (event.target.closest(".lightbox-prev")) return showSlide(slide - 1);
    if (event.target === lightbox || event.target.closest(".lightbox-close")) lightbox.close();
});


//  keyboard arrows while the lightbox is open

lightbox.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") showSlide(slide + 1);
    if (event.key === "ArrowLeft") showSlide(slide - 1);
});