// ==========================
// THEME TOGGLE
// ==========================

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});


// ==========================
// TYPING EFFECT
// ==========================

const roles = [
    "Full Stack Developer",
    "Front-End Developer",
    "Web Developer"
];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = roles[roleIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .skill").forEach(element => {
    observer.observe(element);
});


// ==========================
// CURSOR GLOW
// ==========================

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});