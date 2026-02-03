let step = 0;

const questions = [
    "Do you believe in cute surprises? 💫",
    "Do you like someone who thinks about you a lot? 🥺",
    "Can I be the reason behind your smile every day? 😊",
    "Okay Kritika… one last question ❤️"
];

const questionEl = document.getElementById("question");
const messageEl = document.getElementById("message");
const buttonsEl = document.getElementById("buttons");
const music = document.getElementById("music");

function nextStep() {
    // Start music safely after user click
    if (music.paused) {
        music.volume = 0.4;
        music.play().catch(() => {});
    }

    if (step < questions.length) {
        questionEl.textContent = questions[step];
        messageEl.textContent = "";
        step++;
    } else {
        showFinalQuestion();
    }
}

function showFinalQuestion() {
    questionEl.textContent = "Kritika, will you be my Valentine? 💖";
    messageEl.textContent = "";
    buttonsEl.innerHTML = "";

    const yesBtn = document.createElement("button");
    yesBtn.textContent = "YES 😍";
    yesBtn.onclick = showLove;
    buttonsEl.appendChild(yesBtn);

    const noBtn = document.createElement("button");
    noBtn.textContent = "NO 🙈";
    noBtn.style.marginLeft = "10px";
    noBtn.onmouseover = () => {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 80 + "%";
        noBtn.style.top = Math.random() * 80 + "%";
    };
    buttonsEl.appendChild(noBtn);
}

function showLove() {
    alert("I Love You ❤️");

    const box = document.getElementById("box");
    box.innerHTML = `
        <h1>❤️ I Love You, Kritika ❤️</h1>
        <p>
            Thank you for being the most beautiful part of my life.<br>
            My heart will always choose you.
        </p>
        <p>🌹 Forever Yours 🌹</p>
    `;
}

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 400);
