// Countdown Timer
const weddingDate = new Date("July 13, 2025 00:00:00").getTime();
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

 document.addEventListener("DOMContentLoaded", function() {
    // Allowed Secret Codes
    const secretCodes = ["Love2025", "YujiRosannaWedding", "SecretGuest2025"];

    // Get form element
    const form = document.getElementById("rsvp-form");

    // Only run if the form exists (avoid errors on other pages)
    if (form) {
        form.addEventListener("submit", function(event) {
            let codeInput = document.getElementById("code").value;

            if (!secretCodes.includes(codeInput)) {
                alert("Invalid secret code. Please enter the code from your invitation.");
                event.preventDefault(); // Stop the form submission
            } else {
                console.log("✅ Valid secret code. Form will submit.");
            }
        });
    }

    // Function to show/hide +1 name field
    function togglePlusOneName() {
        let plusOneSelect = document.getElementById("plusone");
        let plusOneNameContainer = document.getElementById("plusone-name-container");

        if (plusOneSelect.value === "yes") {
            plusOneNameContainer.style.display = "block";
            document.getElementById("plusone_name").setAttribute("required", "true");
        } else {
            plusOneNameContainer.style.display = "none";
            document.getElementById("plusone_name").removeAttribute("required");
        }
    }

    // Expose the function to the global scope so that the inline event works
    window.togglePlusOneName = togglePlusOneName;

    // You can also attach the event listener here (optional)
    const plusOneSelect = document.getElementById("plusone");
    if (plusOneSelect) {
        plusOneSelect.addEventListener("change", togglePlusOneName);
    }
});
