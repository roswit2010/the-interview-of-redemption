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
// ===============================
// Book Purchase + EmailJS
// ===============================

const bookForm = document.getElementById("bookForm");

if (bookForm) {

    bookForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !email) {
            alert("Please enter your Name and Email.");
            return;
        }

        emailjs.send(
            "service_p8u8g7c",
            "template_hd6jnck",
            {
                name: name,
                email: email,
                time: new Date().toLocaleString()
            }
        )
        .then(function () {

    alert("Your details have been sent successfully.\n\nPlease click the payment button below to complete your ₹20 purchase.");

document.getElementById("paymentHeading").style.display = "block";
document.getElementById("paymentButton").style.display = "block";
document.getElementById("paymentNotice").style.display = "block";
document.getElementById("securityNotice").style.display = "block";

})
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert("Sorry, something went wrong while sending your details. Please try again.");

        });

    });

}
