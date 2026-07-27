/* ===========================================
   Xondamir ❤️ Shoira
   Premium Wedding Invitation
=========================================== */

// MUSIC

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");

// INTRO

enterBtn.addEventListener("click",()=>{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

},1200);

music.play();

});

// MUSIC BUTTON

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="🎵";

}else{

music.pause();

musicBtn.innerHTML="🔇";

}

});

// ===========================================
// COUNTDOWN
// ===========================================

const weddingDate=new Date(

"August 9, 2026 18:00:00"

).getTime();

function updateCountdown(){

const now=new Date().getTime();

const distance=weddingDate-now;

const days=Math.floor(

distance/(1000*60*60*24)

);

const hours=Math.floor(

(distance%(1000*60*60*24))

/

(1000*60*60)

);

const minutes=Math.floor(

(distance%(1000*60*60))

/

(1000*60)

);

const seconds=Math.floor(

(distance%(1000*60))

/

1000

);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();/* ===========================================
   ORIGINAL PETALS
=========================================== */

const petalsContainer=document.getElementById("petals");

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(8+Math.random()*10)+"s";

petal.style.animationDelay=Math.random()*5+"s";

petal.style.opacity=0.4+Math.random()*0.6;

const size=14+Math.random()*18;

petal.style.width=size+"px";
petal.style.height=size+"px";

petal.style.transform=
"rotate("+Math.random()*360+"deg)";

petalsContainer.appendChild(petal);

setTimeout(()=>{

petal.remove();

},18000);

}

setInterval(createPetal,300);

/* ===========================================
   GOLD DUST
=========================================== */

const goldContainer=document.getElementById("goldDust");

function createGold(){

const gold=document.createElement("div");

gold.className="gold";

gold.style.left=Math.random()*100+"vw";

gold.style.top=(90+Math.random()*20)+"vh";

const size=2+Math.random()*5;

gold.style.width=size+"px";

gold.style.height=size+"px";

gold.style.animationDuration=(10+Math.random()*10)+"s";

gold.style.opacity=Math.random();

goldContainer.appendChild(gold);

setTimeout(()=>{

gold.remove();

},20000);

}

setInterval(createGold,180);

/* ===========================================
   SPARKLES
=========================================== */

const sparkContainer=document.getElementById("sparkles");

function createSpark(){

const spark=document.createElement("div");

spark.className="spark";

spark.style.left=Math.random()*100+"vw";

spark.style.top=Math.random()*100+"vh";

spark.style.animationDuration=(1+Math.random()*3)+"s";

sparkContainer.appendChild(spark);

setTimeout(()=>{

spark.remove();

},3500);

}

setInterval(createSpark,120);

/* ===========================================
   FLOATING HEARTS
=========================================== */

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="fHeart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(8+Math.random()*6)+"s";

heart.style.fontSize=(12+Math.random()*20)+"px";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},14000);

}

setInterval(createHeart,1200);/* ===========================================
   SCROLL ANIMATIONS
=========================================== */

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(

".event-card,.dua-box,.countdown-section,.photo-frame"

).forEach((el)=>{

observer.observe(el);

});

/* ===========================================
   GOLD BUTTON RIPPLE
=========================================== */

document.querySelectorAll(

".gold-btn,.map-btn"

).forEach((btn)=>{

btn.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const size=Math.max(

btn.clientWidth,

btn.clientHeight

);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=

e.offsetX-size/2+"px";

ripple.style.top=

e.offsetY-size/2+"px";

ripple.className="ripple";

btn.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

/* ===========================================
   PHOTO GLOW
=========================================== */

const frame=document.querySelector(".photo-frame");

let angle=0;

setInterval(()=>{

angle+=0.5;

frame.style.boxShadow=

`0 0 35px rgba(212,175,55,.6),

0 0 80px rgba(212,175,55,.35),

${Math.sin(angle/10)*15}px

${Math.cos(angle/10)*15}px

40px rgba(255,215,0,.25)`;

},40);

/* ===========================================
   PARALLAX
=========================================== */

window.addEventListener("scroll",()=>{

const y=window.scrollY;

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPosition=

`center ${y*0.35}px`;

}

});

/* ===========================================
   TITLE SHINE
=========================================== */

setInterval(()=>{

const title=document.querySelector(".couple-name");

if(title){

title.classList.add("shine");

setTimeout(()=>{

title.classList.remove("shine");

},1800);

}

},6000);

/* ===========================================
   MUSIC VISUALIZER
=========================================== */

setInterval(()=>{

if(!music.paused){

musicBtn.style.transform=

`scale(${1+Math.random()*0.12})`;

}else{

musicBtn.style.transform="scale(1)";

}

},250);

/* ===========================================
   LOADING COMPLETE
=========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});/* ===========================
PREMIUM STARS
=========================== */

function createStars(){

const total = 70;

for(let i=0;i<total;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

star.style.animationDuration=(2+Math.random()*4)+"s";

document.body.appendChild(star);

}

}

createStars();

/* ===========================
BOKEH LIGHTS
=========================== */

function createBokeh(){

const total=35;

for(let i=0;i<total;i++){

const bokeh=document.createElement("div");

bokeh.className="bokeh";

const size=20+Math.random()*80;

bokeh.style.width=size+"px";

bokeh.style.height=size+"px";

bokeh.style.left=Math.random()*100+"%";

bokeh.style.animationDuration=(12+Math.random()*12)+"s";

bokeh.style.animationDelay=Math.random()*8+"s";

document.body.appendChild(bokeh);

}

}

createBokeh();/* ===========================
METEOR EFFECT
=========================== */

function createMeteor(){

const meteor=document.createElement("div");

meteor.className="meteor";

meteor.style.left=Math.random()*window.innerWidth+"px";

meteor.style.animationDuration=(2+Math.random()*2)+"s";

document.body.appendChild(meteor);

setTimeout(()=>{
meteor.remove();
},4000);

}

setInterval(createMeteor,5000);

/* ===========================
GOLD DUST
=========================== */

function createGoldDust(){

const dust=document.createElement("div");

dust.className="particle";

const size=2+Math.random()*6;

dust.style.width=size+"px";

dust.style.height=size+"px";

dust.style.left=Math.random()*100+"%";

dust.style.animationDuration=(8+Math.random()*8)+"s";

dust.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(dust);

setTimeout(()=>{
dust.remove();
},17000);

}

setInterval(createGoldDust,300);

for(let i=0;i<40;i++){

createGoldDust();

}/* ===========================
PREMIUM SAKURA PETALS
=========================== */

function createPetal(){

const petal=document.createElement("div");

const types=["type1","type2","type3"];

petal.className="petal "+types[Math.floor(Math.random()*types.length)];

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=(10+Math.random()*8)+"s";

petal.style.animationDelay=Math.random()*5+"s";

petal.innerHTML=`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<path fill="#ffd7e5"
d="M32 6
C42 6 54 18 54 30
C54 48 40 58 32 58
C24 58 10 48 10 30
C10 18 22 6 32 6Z"/>
<path fill="#fff4f8"
d="M32 12
C39 12 47 20 47 30
C47 43 38 52 32 52
C26 52 17 43 17 30
C17 20 25 12 32 12Z"
opacity=".55"/>
</svg>
`;

document.body.appendChild(petal);

petal.addEventListener("animationend",()=>{

petal.remove();

});

}

setInterval(createPetal,700);

for(let i=0;i<20;i++){

createPetal();

}/* ===========================
MOUSE LIGHT EFFECT
=========================== */

const cursorLight=document.createElement("div");

cursorLight.style.position="fixed";
cursorLight.style.width="180px";
cursorLight.style.height="180px";
cursorLight.style.borderRadius="50%";
cursorLight.style.pointerEvents="none";
cursorLight.style.background="radial-gradient(circle, rgba(255,215,0,.28), transparent 70%)";
cursorLight.style.filter="blur(10px)";
cursorLight.style.zIndex="999";
cursorLight.style.left="-200px";
cursorLight.style.top="-200px";

document.body.appendChild(cursorLight);

document.addEventListener("mousemove",(e)=>{

cursorLight.style.left=(e.clientX-90)+"px";
cursorLight.style.top=(e.clientY-90)+"px";

});

/* ===========================
PARALLAX EFFECT
=========================== */

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=(scroll*0.4)+"px";

}

});

/* ===========================
IMAGE FLOAT
=========================== */

const photo=document.querySelector(".photo-frame");

if(photo){

let angle=0;

setInterval(()=>{

angle+=0.02;

photo.style.transform=
`translateY(${Math.sin(angle)*8}px)`;

},30);

}/* ===========================
FIREFLIES
=========================== */

function createFirefly(){

const firefly=document.createElement("div");

firefly.style.position="fixed";
firefly.style.width="6px";
firefly.style.height="6px";
firefly.style.borderRadius="50%";
firefly.style.pointerEvents="none";
firefly.style.background="#FFD54F";
firefly.style.boxShadow="0 0 12px #FFD54F";
firefly.style.left=Math.random()*window.innerWidth+"px";
firefly.style.top=Math.random()*window.innerHeight+"px";
firefly.style.opacity="0";
firefly.style.transition="all .25s linear";

document.body.appendChild(firefly);

let x=parseFloat(firefly.style.left);
let y=parseFloat(firefly.style.top);

const timer=setInterval(()=>{

x+=(Math.random()-0.5)*20;
y+=(Math.random()-0.5)*20;

firefly.style.left=x+"px";
firefly.style.top=y+"px";

firefly.style.opacity=Math.random();

},250);

setTimeout(()=>{

clearInterval(timer);

firefly.remove();

},12000);

}

setInterval(createFirefly,600);

for(let i=0;i<12;i++){

createFirefly();

}

/* ===========================
HEART BURST
=========================== */

document.addEventListener("click",(e)=>{

for(let i=0;i<8;i++){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";
heart.style.color="#ff4d8d";
heart.style.fontSize=(14+Math.random()*12)+"px";
heart.style.pointerEvents="none";
heart.style.transition="1.5s ease-out";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=
`translate(${(Math.random()-0.5)*120}px,-${80+Math.random()*120}px)
rotate(${Math.random()*360}deg)
scale(0)`;

heart.style.opacity="0";

},20);

setTimeout(()=>{

heart.remove();

},1600);

}

});/* ===========================
PREMIUM INTRO ANIMATION
=========================== */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

document.body.style.transition="opacity 1.8s ease";

setTimeout(()=>{

document.body.style.opacity="1";

},150);

});

/* ===========================
SCROLL REVEAL
=========================== */

const revealItems=document.querySelectorAll(

".hero,.countdown,.event-card,.photo-frame,.footer,.dua-box"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
entry.target.style.transition="1s ease";

}

});

},{threshold:.15});

revealItems.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";

revealObserver.observe(item);

});
/* ===========================
FLOATING HEARTS
=========================== */

function floatingHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-30px";
heart.style.fontSize=(16+Math.random()*18)+"px";
heart.style.color="rgba(255,105,180,.55)";
heart.style.pointerEvents="none";
heart.style.transition="all 8s linear";
heart.style.zIndex="999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=
`translateY(-110vh)
translateX(${(Math.random()-0.5)*120}px)
rotate(${Math.random()*720}deg)`;

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},8500);

}

setInterval(floatingHeart,2500);

/* ===========================
WINDOW RESIZE
=========================== */

window.addEventListener("resize",()=>{

document.querySelectorAll(".meteor").forEach(meteor=>{

meteor.remove();

});

});

/* ===========================
PREMIUM FINISH
=========================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.querySelectorAll("audio").forEach(audio=>{

audio.pause();

});

}

});/* ===========================
GOLD SPARK BURST
=========================== */

function sparkBurst(x,y){

for(let i=0;i<18;i++){

const spark=document.createElement("div");

spark.style.position="fixed";
spark.style.left=x+"px";
spark.style.top=y+"px";
spark.style.width="5px";
spark.style.height="5px";
spark.style.borderRadius="50%";
spark.style.background="#FFD54F";
spark.style.boxShadow="0 0 12px #FFD54F";
spark.style.pointerEvents="none";
spark.style.transition="1s ease-out";
spark.style.zIndex="9999";

document.body.appendChild(spark);

const dx=(Math.random()-0.5)*220;
const dy=(Math.random()-0.5)*220;

setTimeout(()=>{

spark.style.transform=
`translate(${dx}px,${dy}px) scale(0)`;

spark.style.opacity="0";

},20);

setTimeout(()=>{

spark.remove();

},1100);

}

}

document.addEventListener("dblclick",(e)=>{

sparkBurst(e.clientX,e.clientY);

});

/* ===========================
TITLE SHINE
=========================== */

setInterval(()=>{

document.querySelectorAll("h1,h2").forEach(title=>{

title.animate([

{filter:"brightness(1)"},

{filter:"brightness(1.5)"},

{filter:"brightness(1)"}

],{

duration:1800,
iterations:1

});

});

},5000);/* ===========================
LUXURY FINISH
=========================== */

// Smooth page fade
window.addEventListener("pageshow",()=>{

document.body.animate(

[
{opacity:0},
{opacity:1}
],

{
duration:1200,
fill:"forwards",
easing:"ease"
}

);

});

// Random title glow
setInterval(()=>{

document.querySelectorAll("h1,h2").forEach(el=>{

el.style.textShadow=
`0 0 ${10+Math.random()*20}px rgba(255,215,0,.9)`;

setTimeout(()=>{

el.style.textShadow="";

},900);

});

},6000);

// Smooth card hover
document.querySelectorAll(".event-card,.time-box").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".4s";

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

// Golden sparkle on click
document.addEventListener("click",(e)=>{

const dot=document.createElement("div");

dot.style.position="fixed";
dot.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";
dot.style.width="12px";
dot.style.height="12px";
dot.style.borderRadius="50%";
dot.style.pointerEvents="none";
dot.style.background="#FFD54F";
dot.style.boxShadow="0 0 25px #FFD54F";
dot.style.zIndex="9999";

document.body.appendChild(dot);

dot.animate([

{
transform:"scale(1)",
opacity:1
},

{
transform:"scale(5)",
opacity:0
}

],{

duration:700,
fill:"forwards"

});

setTimeout(()=>{

dot.remove();

},700);

});

// Console signature
console.log("%c💛 Xondamir ❤️ Shoira Wedding 💛",
"color:#FFD54F;font-size:18px;font-weight:bold;");