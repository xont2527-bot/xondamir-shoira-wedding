//==========================
// COUNTDOWN
//==========================

const weddingDate = new Date("July 26, 2026 17:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        clearInterval(timer);

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    days.innerHTML = String(d).padStart(2, "0");
    hours.innerHTML = String(h).padStart(2, "0");
    minutes.innerHTML = String(m).padStart(2, "0");
    seconds.innerHTML = String(s).padStart(2, "0");

}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);