// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    // Basic alert for now, you can create a full-screen overlay
    alert("Mobile menu clicked. You can expand this into a full-screen menu!");
});

// Navigation scroll background change
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("py-3");
        nav.classList.remove("py-5");
    } else {
        nav.classList.add("py-5");
        nav.classList.remove("py-3");
    }
});

// Smooth reveal effect for sections
const observerOptions = {
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});
