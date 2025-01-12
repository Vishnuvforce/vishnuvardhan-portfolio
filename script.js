document.getElementById('about-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('about-popup').style.display = 'block';
});

function closePopup() {
    document.getElementById('about-popup').style.display = 'none';
}

document.getElementById('contact-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('contact-popup').style.display = 'block';
});

function closeContact() {
    document.getElementById('contact-popup').style.display = 'none';
}

const words = [
    "Jyothy Institute of Technology under the governance of Jyothy Charitable Trust which is headquartered at Bengaluru mainly focuses on delivering quality education that equips students for life and career.",
    "We offer Undergraduate, Postgraduate and Research Programmes in various disciplines.",
    "Focused teaching facilities coupled with practical and forward-thinking programmes lend a hand to students throughout their academic period.",
    "A significant amount of emphasis is given for extracurricular activities through various clubs, technical chapters, sports, and cultural activities."
];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 20;
const typedTextSpan = document.getElementById("typed-text");

function type() {
    if (charIndex < words[wordIndex].length) {
        typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        charIndex = 0;
        wordIndex++;
        if (wordIndex < words.length) {
            typedTextSpan.textContent += ' '; // Add space between sentences
            setTimeout(type, typingSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingSpeed);
});
// NEW
