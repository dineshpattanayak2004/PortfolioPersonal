// ==========================
// TYPING EFFECT
// ==========================

const text = "Hello, I'm Dinesh";
let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);
    }
}

typeWriter();


// ==========================
// HIRE ME BUTTON
// ==========================

document.getElementById("hireBtn")
.addEventListener("click", () => {

    document.getElementById("contact")
    .scrollIntoView({
        behavior: "smooth"
    });

});


// ==========================
// CONTACT FORM SUBMIT
// ==========================

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let message =
    document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("⚠ Please fill all fields.");

        return;
    }

    document.getElementById("popup")
    .style.display = "flex";

    this.reset();

});


// ==========================
// CLOSE POPUP
// ==========================

function closePopup(){

    document.getElementById("popup")
    .style.display = "none";

}


// ==========================
// SCROLL REVEAL
// ==========================

const sections =
document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position =
        section.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});


// ==========================
// PROJECT CARD ANIMATION
// ==========================

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-15px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});


// ==========================
// SKILL CARD ANIMATION
// ==========================

const skillCards =
document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.08)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});


// ==========================
// ACTIVE NAVBAR
// ==========================

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    document
    .querySelectorAll("section")
    .forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(window.pageYOffset >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


// ==========================
// PAGE LOADED
// ==========================

window.addEventListener("load", () => {

    console.log(
    "Portfolio Loaded Successfully 🚀"
    );

});