function openGift() {
    const welcome = document.querySelector(".welcome");
    const birthday = document.getElementById("birthday");

    welcome.style.display = "none";
    birthday.style.display = "flex";
}

function showMessage() {
    const message = document.getElementById("message");

    message.innerHTML = `
        <div class="love-letter">
            <div class="letter-heart">❤️</div>

            <h2>Dear Payal,</h2>

            <p>
                Today is a very special day because someone
                incredibly special was born. 🌸
            </p>

            <p>
                I hope your birthday is filled with beautiful
                moments, endless smiles, and lots of happiness. 💕
            </p>

            <p>
                You deserve all the wonderful things life has
                to offer. May every dream in your heart come true
                and may your smile never fade. ✨
            </p>

            <p>
                Thank you for being such a beautiful person.
                Always keep smiling, keep shining, and keep being
                the amazing person you are. 🥰
            </p>

            <p class="special-line">
                Happy Birthday, Payal! 🎂❤️
            </p>

            <p class="ending">
                With lots of love,<br>
                Someone who wishes you the very best 💖
            </p>

            <div class="letter-decoration">
                🌸 ✨ ❤️ ✨ 🌸
            </div>
        </div>
    `;

    // Create floating hearts
    createHearts();
}

function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");

        heart.className = "floating-heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 3 + "s";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}
let currentPhoto = 0;

const photos = [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg",
    "images/photo5.jpeg",
    "images/photo6.jpeg",
    "images/photo7.jpeg",
    "images/photo8.jpeg",
    "images/photo9.jpeg",
    "images/photo10.jpeg",
    "images/photo11.jpeg",
    "images/photo12.jpeg",
    "images/photo13.jpeg",
    "images/photo14.jpeg",
    "images/photo15.jpeg",
    "images/photo16.jpeg"
];
const captions = [
    "That beautiful smile ❤️",
    "A beautiful moment 🌸",
    "You look absolutely beautiful ✨",
    "One of my favorite memories 💕",
    "That smile is everything 🥰",
    "A moment to remember forever ❤️",
    "Simply beautiful 🌷",
    "You make every moment special 💖",
    "Such a lovely memory ✨",
    "Always keep smiling 😊",
    "Beautiful inside and out ❤️",
    "A memory worth keeping forever 🌸",
    "You look amazing 💕",
    "Another beautiful moment ✨",
    "Forever a special memory 🥰",
    "Happy memories with you ❤️"
];

function openPhoto(photo) {

    // Find which photo was clicked
    currentPhoto = photos.indexOf(photo.src.split(window.location.origin + "/")[1]);

    // If the browser path is different, find it another way
    if (currentPhoto === -1) {
        const filename = photo.src.split("/").pop();
        currentPhoto = photos.findIndex(item => item.includes(filename));
    }

    showPhoto();

    document.getElementById("photoPopup").style.display = "flex";
}


function showPhoto() {

    const popupImage = document.getElementById("popupImage");
    const photoCaption = document.getElementById("photoCaption");

    popupImage.src = photos[currentPhoto];

    photoCaption.innerHTML = captions[currentPhoto];
}


function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto();
}


function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    showPhoto();
}


function closePhoto() {

    document.getElementById("photoPopup").style.display = "none";
}
function toggleMusic() {

    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicButton");

    if (music.paused) {

        music.play();

        button.innerHTML = "⏸️ Pause Music";

    } else {

        music.pause();

        button.innerHTML = "🎵 Play Music";
    }
}