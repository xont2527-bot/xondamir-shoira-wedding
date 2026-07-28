//==========================
// ENVELOPE ANIMATION
//==========================
const envelope = document.getElementById("envelopeOpen");
const openBtn = document.getElementById("openInvitation");
const loading = document.getElementById("loading");
const envelopeSection = document.getElementById("envelope");
const hero = document.getElementById("hero");

hero.style.display = "none";

openBtn.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(function () {

        const letter = document.querySelector(".envelope-letter");

        letter.style.transform = "translate(-50%,-180px)";

    }, 500);

    setTimeout(function () {

        envelopeSection.style.opacity = "0";
        envelopeSection.style.visibility = "hidden";

    }, 1700);

    setTimeout(function () {

        hero.style.display = "flex";
        hero.classList.add("show");

        hero.style.animation = "fadeHero 1.2s ease forwards";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 2000);

});

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {
        loading.classList.add("hide");
    }, 1800);

});