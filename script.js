// ===============================
// 4-THEME TOGGLE
// ===============================

const toggle = document.getElementById("theme-toggle");

const themes = [
    {
        name: "morning",
        icon: "🌅"
    },
    {
        name: "afternoon",
        icon: "☁️"
    },
    {
        name: "evening",
        icon: "🌧️"
    },
    {
        name: "night",
        icon: "🌌"
    }
];

let currentTheme = 0;

function changeTheme() {

    document.body.classList.remove(
        "morning",
        "afternoon",
        "evening",
        "night",
        "light-mode"
    );

    const selectedTheme = themes[currentTheme];

    document.body.classList.add(selectedTheme.name);

    toggle.textContent = selectedTheme.icon;

    currentTheme++;

    if (currentTheme >= themes.length) {
        currentTheme = 0;
    }
}

toggle.addEventListener("click", changeTheme);

// ===============================
// TYPING EFFECT
// ===============================

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

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typing.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .skill, .stat").forEach(element => {
    observer.observe(element);
});


// ===============================
// SMOOTH NAVIGATION
// ===============================

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-6px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});

