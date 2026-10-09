//Defining status
const statusText = { doing: "In progress", planned: "Planned" };

//Getting variables
const tlList = document.querySelector("#timeline");


//Defining future projects and ongoing projects
const timelines = {

    // ------------------- Web dev projects -------------------
    web: [

        //  ongoing projects
        


        // planned projects
        {
            title: "Thought Dump",
            status: "doing",
            when: "Oct 2026",
            note: "A user-generated thought-dump space built with Node.js and Express, with emoticons, stickers, tags, and a deliberately personal, scrapbook-like interface. Currently building design assets."
        },

        {
            title: "Text RPG",
            status: "planned",
            when: "Coming soon",
            note: "A text-based RPG where choices shape stats, relationships, story paths, and ultimately the ending — from disastrous outcomes to the perfect ending."
        }

    ],




    // --------------------- Design projects ------------------
    design: [

        //ongoing projects
        {
            title: "Gemini",
            status: "doing",
            when: "Oct 2026",
            note: "Line work, coloring and detailing."
        },

        {
            title: "Tomatoes & mushrooms pattern",
            status: "doing",
            when: "Oct 2026",
            note: "Coloring and detailing."
        }


        //planned projects


    ]
};


//rendering timeline section
function renderTimeline(side) {
    const items = timelines[side];

    tlList.innerHTML = items.map(item => `
        <li class="tl-item tl-item--${item.status}">
            <div class="tl-head">
                <h3 class="tl-title">${item.title}</h3>
                <span class="tl-status">${statusText[item.status]}</span>
            </div>
            ${item.when ? `<p class="tl-when">${item.when}</p>` : ""}
            ${item.note ? `<p class="tl-note">${item.note}</p>` : ""}
        </li>
    `).join("");
}

renderTimeline(document.documentElement.dataset.theme === "design" ? "design" : "web");

document.querySelectorAll(".switch-btn").forEach(button => {
    button.addEventListener("click", () => renderTimeline(button.dataset.side));
});   