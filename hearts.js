const container = document.getElementById("falling-container");

// correct photo names
const photos = [
    "./photos/pic1.jpg",
    "./photos/pic2.jpg",
    "./photos/pic3.jpg",
    "./photos/pic4.jpg",
    "./photos/pic5.jpg",
    "./photos/pic6.jpg",
    "./photos/pic7.jpg",
    "./photos/pic8.jpg"
];


function createPhoto() {

    const img = document.createElement("img");

    // pick random photo
    img.src = photos[Math.floor(Math.random() * photos.length)];
    img.className = "falling-photo";

    // random horizontal position
    img.style.left = Math.random() * 100 + "vw";

    // random size
    const size = Math.random() * 80 + 60;
    img.style.width = size + "px";

    // random starting rotation
    img.style.transform = `rotate(${Math.random() * 360}deg)`;

    // random falling speed
    const duration = Math.random() * 5 + 6;
    img.style.animationDuration = duration + "s";

    container.appendChild(img);

    // remove after fall
    setTimeout(() => {
        img.remove();
    }, duration * 1000);
}

// continuously create photos
setInterval(createPhoto, 700);

// second code //
const birthdayBtn = document.getElementById('birthdayBtn');
const popup = document.getElementById('birthdayPopup');
const closeBtn = document.getElementById('closePopup');

// Show popup when button is clicked
birthdayBtn.addEventListener('click', function() {
    popup.style.display = 'block';
});

// Hide popup when Close button is clicked
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Adding Timer //
document.addEventListener("DOMContentLoaded", function() {
    // Birthday date
    const birthDate = new Date("2009-02-24T00:00:00");

    // Function to calculate age
    function updateAgeCountdown() {
        const now = new Date();
        let diff = now - birthDate; // difference in milliseconds

        const seconds = Math.floor(diff / 1000) % 60;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

        const countdownDiv = document.getElementById("ageCountdown");
        if (countdownDiv) { // check if element exists
            countdownDiv.innerHTML = `Age: ${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        }
    }

    // Start countdown immediately and update every second
    updateAgeCountdown();
    setInterval(updateAgeCountdown, 1000);

    // Popup show/hide
    const birthdayBtn = document.getElementById('birthdayBtn');
    const popup = document.getElementById('birthdayPopup');
    const closeBtn = document.getElementById('closePopup');

    birthdayBtn.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});




