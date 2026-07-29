/* ==========================================
ELEMENTS
========================================== */

const envelopeSection = document.getElementById("envelopeSection");
const openButton = document.getElementById("openInvitation");
const loading = document.getElementById("loading");
const website = document.getElementById("website");
const music = document.getElementById("music");

/* ==========================================
OPEN INVITATION
========================================== */

openButton.addEventListener("click", () => {

    envelopeSection.style.opacity = "0";
    envelopeSection.style.pointerEvents = "none";

    setTimeout(() => {

        envelopeSection.style.display = "none";

        loading.style.display = "flex";

    },600);

    setTimeout(() => {

        loading.style.display = "none";

        website.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        AOS.init({
            duration:1000,
            once:true
        });

        music.play().catch(() => {});

    },3000);

});

/* ==========================================
COUNTDOWN
========================================== */

const weddingDate = new Date("August 09, 2026 18:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent =
days < 0 ? "00" : String(days).padStart(2,"0");

document.getElementById("hours").textContent =
hours < 0 ? "00" : String(hours).padStart(2,"0");

document.getElementById("minutes").textContent =
minutes < 0 ? "00" : String(minutes).padStart(2,"0");

document.getElementById("seconds").textContent =
seconds < 0 ? "00" : String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/* ==========================================
MUSIC BUTTON
========================================== */

const musicButton = document.createElement("button");

musicButton.id = "musicControl";

musicButton.innerHTML = "🎵";

document.body.appendChild(musicButton);

musicButton.addEventListener("click",()=>{

if(music.paused){

music.play();

musicButton.innerHTML="🎵";

}else{

music.pause();

musicButton.innerHTML="🔇";

}

});/* ==========================================
FLOATING FLOWERS
========================================== */

function createFlower(){

const flower = document.createElement("div");

flower.className = "flower";

const flowers = ["🌸","🌺","🌼","💮"];

flower.innerHTML =
flowers[Math.floor(Math.random()*flowers.length)];

flower.style.left = Math.random()*100 + "vw";

flower.style.fontSize =
(18 + Math.random()*18) + "px";

flower.style.animationDuration =
(8 + Math.random()*6) + "s";

flower.style.opacity =
0.5 + Math.random()*0.5;

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},14000);

}

setInterval(createFlower,800);

/* ==========================================
SCROLL TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.id = "topButton";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================================
CARD HOVER EFFECT
========================================== */

document.querySelectorAll(".event-card,.time-box").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/* ==========================================
PAGE LOADED
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

console.log("Xondamir ❤️ Shoira Wedding Invitation");/* ==========================================
PREMIUM GOLD PARTICLES
========================================== */

const particlesContainer = document.getElementById("particles");

function createParticle(){

    if(!particlesContainer) return;

    const particle = document.createElement("span");

    particle.style.position = "absolute";
    particle.style.width = (2 + Math.random()*4) + "px";
    particle.style.height = particle.style.width;
    particle.style.borderRadius = "50%";
    particle.style.background = "#d4af37";

    particle.style.left = Math.random()*100 + "%";
    particle.style.top = "100%";

    particle.style.opacity = Math.random();

    const duration = 6000 + Math.random()*5000;

    particle.animate([
        {
            transform:"translateY(0) scale(1)",
            opacity:0
        },
        {
            opacity:1,
            offset:0.2
        },
        {
            transform:`translateY(-${window.innerHeight+200}px)
            translateX(${(Math.random()-0.5)*200}px)
            scale(0)`,
            opacity:0
        }

    ],{

        duration:duration,
        easing:"linear"

    });

    particlesContainer.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },duration);

}

setInterval(createParticle,250);

/* ==========================================
BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll("button,.map-button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.5)";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.style.pointerEvents="none";

ripple.style.transform="scale(0)";

ripple.style.transition=".6s";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(4)";

ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ==========================================
IMAGE PROTECTION
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});

/* ==========================================
END
========================================== */

console.log("%cWedding Invitation Ready",
"font-size:18px;color:#d4af37;font-weight:bold;");envelopeSection.classList.add("envelope-open");