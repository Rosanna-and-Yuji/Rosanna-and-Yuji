// Countdown Timer
const weddingDate = new Date("July 13, 2024 00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "The wedding has happened!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    countdownElement.innerHTML = `${days} days ${hours} hours left!`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
