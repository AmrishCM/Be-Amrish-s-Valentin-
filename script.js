const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Papa pavam, please...",
    "oru vate think about me!",
    "If you say no, I will be really sad...",
    "Y Di This kola veri..",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
function handleinstaClick() {
    window.location.href = "https://www.instagram.com/_i._.amrish/";
}
