const changingText = document.getElementById("changingText");
const cngArray = ['Graphix Desiner', 'YouTuber', 'Web Developer', 'Logo Maker', 'Web Designer', 'Frontent Developer', 'Digital Marketer'];
let currentIndex = 0

function Slider() {
    changingText.textContent = cngArray[currentIndex];
    currentIndex = (currentIndex + 1) % cngArray.length;
}

setInterval(Slider , 2000);
