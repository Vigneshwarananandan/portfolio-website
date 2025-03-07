const text = ["Turning Data into Insights", "AI & ML Enthusiast", "Data Storyteller", "Solving Problems with Data", "Future AI Leader"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Function to reveal sections on scroll
function revealSections() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
}

// Run on scroll and on page load
document.addEventListener("DOMContentLoaded", revealSections);
window.addEventListener("scroll", revealSections);
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    sections.forEach((section) => {
        const top = section.offsetTop - 50;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            navLinks.forEach(link => link.classList.remove("active"));
            document.querySelector(`nav ul li a[href="#${section.id}"]`).classList.add("active");
        }
    });
});
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
