//  Form endpoint here
const FORM_ENDPOINT = "https://formspree.io/f/mzedewyj";

//  Shown if sending fails
const FALLBACK_EMAIL = "ankitadas25600@gmail.com";

const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");
const contactSubmit = contactForm.querySelector("button[type='submit']");

contactForm.addEventListener("submit", async event => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;      //browser shows what is missing

    contactSubmit.disabled = true;
    contactStatus.textContent = "Sending";

    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: "POST",
            body: new FormData(contactForm),
            headers: { Accept: "application/json" }
        });

        if (!response.ok) throw new Error("Request failed");

        contactForm.reset();
        contactStatus.textContent = "Thank you, your message has been sent. I'll reply soon.";
    } catch (error) {
        contactStatus.textContent = `Sorry, that didn't send. Please email me at ${FALLBACK_EMAIL} isntead.`;
    } finally {
        contactSubmit.disabled = false;
    }
});