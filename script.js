"use strict";

/* ===========================
   ELEMENTLAR
=========================== */

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const petals = document.getElementById("petals");
const goldParticles = document.getElementById("goldParticles");
const meteorContainer = document.getElementById("meteorContainer");

/* ===========================
   INTRO
=========================== */

if (enterBtn && intro) {

    enterBtn.addEventListener("click", () => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

        }, 800);

        if (music) {

            music.play().catch(() => {});

        }

    });

/* ===========================
   COUNTDOWN
=========================== */

const weddingDate = new Date("2026-08-09T18:00:00").getTime();

function updateCountdown() {

    if (!(days && hours && minutes && seconds)) return;

    const now = Date.now();

    const distance = weddingDate - now;

    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }

    days.textContent = String(Math.floor(distance / 86400000)).padStart(2, "0");
    hours.textContent = String(Math.floor((distance % 86400000) / 3600000)).padStart(2, "0");
    minutes.textContent = String(Math.floor((distance % 3600000) / 60000)).padStart(2, "0");
    seconds.textContent = String(Math.floor((distance % 60000) / 1000)).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);/* ===========================
   SAKURA
=========================== */

if (petals) {

    setInterval(() => {

        const petal = document.createElement("span");

        petal.className = "petal";

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (6 + Math.random() * 5) + "s";

        petals.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 12000);

    }, 400);

}

/* ===========================
   GOLD PARTICLES
=========================== */

if (goldParticles) {

    setInterval(() => {

        const dot = document.createElement("span");

        dot.className = "gold-dot";

        dot.style.left = Math.random() * 100 + "vw";
        dot.style.top = Math.random() * 100 + "vh";

        goldParticles.appendChild(dot);

        setTimeout(() => {
            dot.remove();
        }, 6000);

    }, 300);

}

/* ===========================
   METEOR
=========================== */

if (meteorContainer) {

    setInterval(() => {

        const meteor = document.createElement("span");

        meteor.className = "meteor";

        meteor.style.left = Math.random() * 100 + "vw";

        meteorContainer.appendChild(meteor);

        setTimeout(() => {
            meteor.remove();
        }, 2500);

    }, 5000);

}

/* ===========================
   PHOTO GLOW
=========================== */

const photo = document.querySelector(".photo-frame");

if (photo) {

    setInterval(() => {

        photo.classList.toggle("photo-glow");

    }, 2000);

}

/* ===========================
   TITLE SHINE
=========================== */

document.querySelectorAll(".section-title, .couple-name").forEach(title => {

    setInterval(() => {

        title.classList.toggle("shine");

    }, 3000);

});

/* ===========================
   SCROLL ANIMATION
=========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".event-card, .countdown, .invite-text").forEach(el => {

    observer.observe(el);

});
