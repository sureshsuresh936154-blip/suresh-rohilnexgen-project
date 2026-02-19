

console.log("Script is running")
// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
        });
    });
});


// ===== Resume Button =====
document.getElementById("resumeBtn").addEventListener("click", function () {
    alert("Resume Downloading...");
    // You can replace with:
    // window.open("resume.pdf", "_blank");
});


// ===== View Projects Button =====
document.getElementById("projectBtn").addEventListener("click", function () {
    const projectsSection = document.getElementById("projects");
    window.scrollTo({
        top: projectsSection.offsetTop - 60,
        behavior: "smooth"
    });
});


// ===== Active Navbar Highlight on Scroll =====
window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document
                    .querySelector("nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
});


// ===== Typing Effect for Name =====
const text = "SURESH";
let index = 0;
const speed = 150;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typingName").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

window.onload = typeEffect;
