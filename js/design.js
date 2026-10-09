//  Getting variables
const designGrid = document.querySelector("#design-grid");
const designEmpty = document.querySelector("#design-empty");

const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxCaption = document.querySelector(".lightbox-caption");

const shopLink = lightbox.querySelector(".lightbox-shop");


//  Edit this list to add or change design pieces.
const designPieces = [
    {
        title: "Aries",
        kind: "Illustration",
        note: "My first zodiac piece — I spent more time figuring out the palette than drawing the actual thing.",
        image: "./images/design/aries.webp",
        alt: "Illustrated portrait of a woman with dark ram horns, galaxy-colored eyes and white flowers in her hair, against a night sky"
    },

    {
        title: "Taurus",
        kind: "Illustration",
        note: "Second in the series — I spent a lot of time figuring out how light sits on skin before letting the colors take over.",
        image: "./images/design/taurus.webp",
        alt: "Illustrated portrait of a woman with red and plum hair, dark horns and gold earrings, framed by wheat motifs"
    },

    {
        title: "Queen of Diamonds",
        kind: "Card design",
        note: "Decided to design a playing card on a whim. The diamonds do most of the talking.",
        image: "./images/design/queen-of-diamonds.webp",
        alt: "Playing-card illustration of a queen in a red dress holding a glowing diamond, in grey and black with red accents"
    },

    {
        title: "Botanical leaf",
        kind: "Pattern",
        note: "I wanted to see how far I could take simple leaves, so I played with different shapes, directions, and line weights to build the pattern.",
        image: "./images/design/botanical-leaf.webp",
        alt: "Seamless pattern of scattered green, rust and gold leaves on cream"
    },

    {
        title: "Leaf scatter",
        kind: "Seamless pattern",
        shop: "https://patterntheoryshop.gumroad.com/l/tonal-leaves",
        note: "Wanted autumn without the orange — ended up somewhere between late summer and the first cold night.",
        image: "./images/design/pattern-leaves.webp",
        alt: "Seamless pattern of scattered green, rust and gold leaves on cream"
    },

    {
        title: "Citrus orange",
        kind: "Seamless pattern",
        shop: "https://patterntheoryshop.gumroad.com/l/citrus-botanica",
        note: "For this one, I leaned into the warmth of summer with oranges, soft blossoms, and plenty of leafy shapes.",
        image: "./images/design/orange-citrus.webp",
        alt: "Seamless pattern of orange slices, white blossoms and green leaves on cream"
    },

    {
        title: "Citrus lemon",
        kind: "Seamless pattern",
        shop: "https://patterntheoryshop.gumroad.com/l/citrus-botanica",
        note: "I wanted to capture summer in its brightest form, so I paired lemon slices with their blossoms and leaves.",
        image: "./images/design/lemon-citrus.webp",
        alt: "Seamless pattern of lemon slices, white blossoms and green leaves on cream"
    },
    {
        title: "Citrus lime",
        kind: "Seamless pattern",
        shop: "https://patterntheoryshop.gumroad.com/l/citrus-botanica",
        note: "I kept this one fresh and lively, using limes, their florals, and different leaf shapes to bring in a cooler summer mood.",
        image: "./images/design/lime-citrus.webp",
        alt: "Seamless pattern of lime slices, white blossoms and green leaves on pale blush"
    }
];


designEmpty.hidden = designPieces.length > 0;

designGrid.innerHTML = designPieces.map((p, i) => `
    <figure class="piece">
        <button class="piece-btn" type="button" data-index="${i}" aria-label="View larger: ${p.title}">
            <img class="piece-img" src="${p.image}" alt="${p.alt}" loading="lazy">
        </button>
        <figcaption class="piece-cap">
            <span class="piece-title">${p.title}</span>
            <span class="piece-kind">${p.kind}</span>
        </figcaption>
    </figure>
`).join("");


//  ---------------- Lightbox --------------------
designGrid.addEventListener("click", event => {
    const button = event.target.closest(".piece-btn");
    if (!button) return;

    const piece = designPieces[button.dataset.index];
    lightboxImg.src = piece.image;
    lightboxImg.alt = piece.alt;
    lightboxCaption.textContent = piece.note ? `${piece.title}. ${piece.note}` : piece.title;
    
    shopLink.style.display = piece.shop ? "inline-block" : "none";
    if (piece.shop) shopLink.href = piece.shop;
    lightbox.showModal();       //Esc closes it, and focus returns to the piece clicked
});


//  close on the close button or a click on the dark backdrop
lightbox.addEventListener("click",event => {
    if (event.target === lightbox || event.target.closest(".lightbox-close")) {
        lightbox.close();
    }
});