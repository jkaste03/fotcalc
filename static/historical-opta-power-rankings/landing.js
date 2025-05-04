// landing.js

document.addEventListener("DOMContentLoaded", () => {
    const cta = document.querySelector(".btn-primary");

    // Simple click feedback
    cta.addEventListener("mousedown", () => {
        cta.style.transform = "scale(0.98)";
    });
    cta.addEventListener("mouseup", () => {
        cta.style.transform = "";
    });

    // Optional: smooth scroll to the tool
    cta.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector("#historical-tool"); // add id on your tool page
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location = cta.getAttribute("href");
        }
    });
});
