const enterBtn = document.getElementById("enterBtn");
const loader = document.getElementById("loader");
const music = document.getElementById("music");

enterBtn.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);

    music.play().catch(() => {});
});

const targetDate = new Date("August 9, 2026 18:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById("countdown").innerHTML =
        "<h2>💍 To'y boshlandi! 💍</h2>";

    }

}

updateCountdown();

const timer = setInterval(updateCountdown,1000);/* ===========================
SCROLL ANIMATION
=========================== */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .parents, footer").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1s ease";
    observer.observe(el);
});

/* ===========================
SMOOTH MUSIC START
=========================== */

music.volume = 0.6;

/* ===========================
PREVENT DOUBLE CLICK
=========================== */

enterBtn.addEventListener("click", () => {
    enterBtn.disabled = true;
});/* ===========================
GOLD PARTICLES
=========================== */

function createParticle() {

    const particle = document.createElement("div");

    particle.className = "gold-particle";

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.animationDuration = (4 + Math.random() * 4) + "s";

    particle.style.opacity = Math.random();

    particle.style.transform = `scale(${0.5 + Math.random()})`;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 8000);

}

setInterval(createParticle, 250);/* ===========================
SAKURA PETALS
=========================== */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*window.innerWidth+"px";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.animationDuration=(6+Math.random()*6)+"s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},12000);

}

setInterval(createPetal,700);/* ===========================
METEOR
=========================== */

function createMeteor(){

const meteor=document.createElement("div");

meteor.className="meteor";

meteor.style.top=Math.random()*200+"px";

meteor.style.left=(window.innerWidth+100)+"px";

document.body.appendChild(meteor);

setTimeout(()=>{
meteor.remove();
},2500);

}

setInterval(createMeteor,4000);/* ===========================
PAGE LOADED
=========================== */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});