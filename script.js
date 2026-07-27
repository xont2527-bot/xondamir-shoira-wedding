/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.opacity="0";

setTimeout(() => {

document.getElementById("loader").style.display="none";

},600);

},1800);

});


/* ==========================
   MUSIC
========================== */

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

musicBtn.onclick=function(){

if(music.paused){

music.play();

musicBtn.innerHTML="⏸ Musiqani to'xtatish";

}else{

music.pause();

musicBtn.innerHTML="🎵 Musiqa";

}

};


/* ==========================
   COUNTDOWN
========================== */

const weddingDate=new Date("2026-06-20T18:00:00").getTime();

const timer=setInterval(function(){

const now=new Date().getTime();

const distance=weddingDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

if(distance<0){

clearInterval(timer);

document.getElementById("countdown").innerHTML="<h2>🎉 To'y muborak bo'lsin! 🎉</h2>";

}

},1000);


/* ==========================
   SCROLL ANIMATION
========================== */

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-80){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s";

});/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(15+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,700);


/* ==========================
   FLOWER PETALS
========================== */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petal.style.fontSize=(18+Math.random()*18)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,1200);


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/* ==========================
   TITLE ANIMATION
========================== */

const title=document.querySelector(".hero h1");

let grow=true;

setInterval(()=>{

title.style.transform=grow?"scale(1.03)":"scale(1)";

grow=!grow;

},1200);