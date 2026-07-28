/* ==========================
LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }, 1200);

});

/* ==========================
ELEMENTS
========================== */

const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openInvitation");

const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");

/* ==========================
OPEN ENVELOPE
========================== */

openButton.addEventListener("click", () => {

    envelope.classList.add("open");

    openButton.disabled = true;

    openButton.innerText = "Ochilmoqda...";

    setTimeout(() => {

        welcome.style.opacity = "0";
        welcome.style.pointerEvents = "none";

        setTimeout(() => {

            welcome.style.display = "none";

            invitation.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 700);

    }, 1800);

});

/* ==========================
COUNTDOWN
========================== */

const weddingDate = new Date("August 9, 2026 18:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");/* ==========================
COUNTDOWN FUNCTION
========================== */

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        clearInterval(timer);

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        const countdown = document.getElementById("countdown");

        countdown.innerHTML = `
            <div class="time-box" style="width:100%;max-width:420px;">
                <span style="font-size:30px;">🎉</span>
                <small style="font-size:18px;">
                    To'y muborak bo'lsin!
                </small>
            </div>
        `;

        return;
    }

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minute = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const second = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    days.textContent = String(day).padStart(2, "0");
    hours.textContent = String(hour).padStart(2, "0");
    minutes.textContent = String(minute).padStart(2, "0");
    seconds.textContent = String(second).padStart(2, "0");

}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);

/* ==========================
FADE ANIMATION
========================== */

invitation.style.opacity = "0";

const observer = new MutationObserver(() => {

    if (invitation.style.display === "block") {

        setTimeout(() => {

            invitation.style.transition = "opacity .8s ease";

            invitation.style.opacity = "1";

        }, 100);

    }

});

observer.observe(invitation, {
    attributes: true,
    attributeFilter: ["style"]
});

/* ==========================
END
========================== */