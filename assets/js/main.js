``` javascript
// ==========================================================
// Portfolio Website v1.0
// main.js
// ==========================================================

// Update footer year
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Highlight active navigation link
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", event => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Mobile menu
const nav = document.querySelector("nav");
const navList = document.querySelector("nav ul");

if (nav && navList) {

    const button = document.createElement("button");
    button.className = "mobile-menu-button";
    button.textContent = "☰";

    nav.insertBefore(button, navList);

    const updateMenu = () => {
        if (window.innerWidth > 768) {
            navList.style.display = "flex";
            button.style.display = "none";
        } else {
            button.style.display = "block";
            navList.style.display = "none";
        }
    };

    button.addEventListener("click", () => {
        navList.style.display =
            navList.style.display === "flex" ? "none" : "flex";

        navList.style.flexDirection = "column";
    });

    updateMenu();
    window.addEventListener("resize", updateMenu);
}

console.log("Portfolio Website v1.0 loaded.");
```
