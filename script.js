/*=====================================
LOADER
=====================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }, 1000);

});

/*=====================================
ELEMENTS
=====================================*/

const welcome = document.getElementById("welcome");

const invitation = document.getElementById("invitation");

const envelope = document.getElementById("envelope");

const openBtn = document.getElementById("openBtn");

/*=====================================
OPEN INVITATION
=====================================*/

openBtn.addEventListener("click", () => {

    openBtn.disabled = true;

    envelope.classList.add("open");

    openBtn.textContent = "Ochilmoqda...";

    setTimeout(() => {

        welcome.style.opacity = "0";

        welcome.style.pointerEvents = "none";

    }, 1400);

    setTimeout(() => {

        welcome.style.display = "none";

        invitation.style.display = "block";

        invitation.style.opacity = "0";

        requestAnimationFrame(() => {

            invitation.style.transition = "opacity .8s ease";

            invitation.style.opacity = "1";

        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 2100);

});/*=====================================
COUNTDOWN ELEMENTS
=====================================*/

const weddingDate = new Date(
    "2026-08-09T18:00:00"
).getTime();

const days = document.getElementById("days");

const hours = document.getElementById("hours");

const minutes = document.getElementById("minutes");

const seconds = document.getElementById("seconds");

/*=====================================
COUNTDOWN FUNCTION
=====================================*/

function updateCountdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance <= 0){

        clearInterval(timer);

        days.textContent = "00";

        hours.textContent = "00";

        minutes.textContent = "00";

        seconds.textContent = "00";

        document.querySelector(
            ".countdown-section h2"
        ).textContent =
        "🎉 To'y muborak bo'lsin!";

        return;

    }

    const day = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hour = Math.floor(

        (distance %
        (1000 * 60 * 60 * 24))

        /

        (1000 * 60 * 60)

    );

    const minute = Math.floor(

        (distance %
        (1000 * 60 * 60))

        /

        (1000 * 60)

    );

    const second = Math.floor(

        (distance %
        (1000 * 60))

        /

        1000

    );

    days.textContent =
        String(day).padStart(2,"0");

    hours.textContent =
        String(hour).padStart(2,"0");

    minutes.textContent =
        String(minute).padStart(2,"0");

    seconds.textContent =
        String(second).padStart(2,"0");

}/*=====================================
START COUNTDOWN
=====================================*/

updateCountdown();

const timer = setInterval(
    updateCountdown,
    1000
);

/*=====================================
PAPER ANIMATION
=====================================*/

const observer = new MutationObserver(() => {

    if (invitation.style.display === "block") {

        const elements = invitation.querySelectorAll(
            ".bismillah, h1, .gold-line, .couple, .subtitle, .event-card, .countdown-section, .girls-party, .closing-message"
        );

        elements.forEach((element, index) => {

            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition =
                "opacity .7s ease, transform .7s ease";

            setTimeout(() => {

                element.style.opacity = "1";
                element.style.transform = "translateY(0)";

            }, index * 180);

        });

    }

});

observer.observe(invitation, {
    attributes: true,
    attributeFilter: ["style"]
});

/*=====================================
BUTTON EFFECT
=====================================*/

openBtn.addEventListener("mouseenter", () => {

    openBtn.style.boxShadow =
        "0 15px 35px rgba(212,175,55,.45)";

});

openBtn.addEventListener("mouseleave", () => {

    openBtn.style.boxShadow =
        "0 10px 25px rgba(212,175,55,.30)";

});/*=====================================
PREVENT DOUBLE CLICK
=====================================*/

let invitationOpened = false;

openBtn.addEventListener("click", () => {

    if(invitationOpened){

        return;

    }

    invitationOpened = true;

});

/*=====================================
SCROLL TO TOP
=====================================*/

window.addEventListener("pageshow", () => {

    window.scrollTo(0,0);

});

/*=====================================
SMOOTH BUTTON PRESS
=====================================*/

openBtn.addEventListener("mousedown", () => {

    openBtn.style.transform = "scale(.96)";

});

openBtn.addEventListener("mouseup", () => {

    openBtn.style.transform = "scale(1)";

});

openBtn.addEventListener("touchstart", () => {

    openBtn.style.transform = "scale(.96)";

});

openBtn.addEventListener("touchend", () => {

    openBtn.style.transform = "scale(1)";

});

/*=====================================
AUTO YEAR CHECK
=====================================*/

const currentYear = new Date().getFullYear();

if(currentYear > 2026){

    console.log(
        "Taklifnoma sanasi o'tib ketgan."
    );

}

/*=====================================
FINISH
=====================================*/

console.log(
    "Xondamir ❤️ Shoira taklifnomasi yuklandi."
);