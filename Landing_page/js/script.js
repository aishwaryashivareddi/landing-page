const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

        navLinks.classList.remove("active");
    });
});