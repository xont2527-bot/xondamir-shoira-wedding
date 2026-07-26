/* Xondamir ❤️ Shoira Wedding */


/* TO'YGA QOLGAN VAQT */

const weddingDate = new Date("August 9, 2026 18:00:00").getTime();


function updateTimer(){

    const now = new Date().getTime();

    const distance = weddingDate - now;


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}


updateTimer();

setInterval(updateTimer,1000);



/* MUSIQA */

const musicBtn =
document.getElementById("musicBtn");

const audio =
document.getElementById("audio");


let playing = false;


if(musicBtn){

musicBtn.addEventListener("click",()=>{


    if(!playing){

        audio.play();

        musicBtn.innerHTML =
        "⏸ Musiqani to'xtatish";

        playing=true;


    }else{

        audio.pause();

        musicBtn.innerHTML =
        "▶ Musiqani yoqish";

        playing=false;

    }


});

}/* TEPAGA QAYTISH */

window.addEventListener("scroll",()=>{

    const btn = document.getElementById("topBtn");

    if(btn){

        if(window.scrollY > 400){

            btn.style.display="block";

        }else{

            btn.style.display="none";

        }

    }

});


const topBtn = document.getElementById("topBtn");


if(topBtn){

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

}



/* YURAKLAR UCHISHI */

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="fixed";

    heart.style.bottom="-20px";

    heart.style.left=
    Math.random()*100+"%";

    heart.style.color="#d6336c";

    heart.style.fontSize=
    (15+Math.random()*25)+"px";

    heart.style.zIndex="999";

    heart.style.animation=
    "heartMove 6s linear";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },6000);

}


setInterval(createHeart,2500);/* YUKLANISH EFFEKTI */

window.addEventListener("load",()=>{

    const loader =
    document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },500);

        },1000);

    }

});


/* SAYT TAYYOR */

console.log(
"💍 Xondamir ❤️ Shoira Wedding Invitation tayyor!"
);