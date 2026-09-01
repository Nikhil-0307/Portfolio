// ===============================
// 4 THEME SYSTEM
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

function applyTheme() {

    document.body.classList.remove(
        "morning",
        "afternoon",
        "evening",
        "night",
        "light-mode"
    );

    const theme = themes[currentTheme];

    document.body.classList.add(theme.name);

    toggle.textContent = theme.icon;
}


// Start with Morning
applyTheme();


// Change theme when button is clicked
toggle.addEventListener("click", () => {

    currentTheme++;

    if (currentTheme >= themes.length) {
        currentTheme = 0;
    }

    applyTheme();

});
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
// ===============================
// MESSAGE ME POPUP
// ===============================

const messageButton = document.getElementById("message-button");
const messageModal = document.getElementById("message-modal");
const closeMessage = document.getElementById("close-message");
const messageForm = document.getElementById("message-form");


// Open popup

messageButton.addEventListener("click", () => {

    messageModal.classList.add("active");

});


// Close popup

closeMessage.addEventListener("click", () => {

    messageModal.classList.remove("active");

});


// Close when clicking outside the box

messageModal.addEventListener("click", (event) => {

    if (event.target === messageModal) {

        messageModal.classList.remove("active");

    }

});


// Send message

messageForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("message-name").value;
    const email = document.getElementById("message-email").value;
    const message = document.getElementById("message-text").value;


    const subject = encodeURIComponent(
        "Portfolio Message from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );


    window.location.href =
        "mailto:nikhil0307k@gmail.com?subject=" +
        subject +
        "&body=" +
        body;

});
