// ===============================
// Rivalry That Buried Friendship
// Premium Website Script
// ===============================

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Floating Book Animation
const book = document.querySelector(".hero-image img");

if (book) {
    let angle = 0;

    setInterval(() => {
        angle += 0.02;
        book.style.transform =
            `translateY(${Math.sin(angle) * 10}px)`;
    }, 20);
}

// Back to Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#ffd369";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500)
        topBtn.style.display = "block";
    else
        topBtn.style.display = "none";

});

topBtn.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// Buy Form


// Mouse Glow
const glow = document.createElement("div");

document.body.appendChild(glow);

glow.style.position = "fixed";
glow.style.width = "180px";
glow.style.height = "180px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = "radial-gradient(circle,#ffd36955,transparent)";
glow.style.zIndex = "-1";

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 90 + "px";
    glow.style.top = e.clientY - 90 + "px";

});
