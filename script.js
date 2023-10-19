const changingText = document.getElementById("changingText");
const cngArray = ['Graphix Desiner', 'YouTuber', 'Web Developer', 'Logo Maker', 'Web Designer', 'Frontent Developer', 'Digital Marketer'];
let currentIndex = 0

function Slider() {
    changingText.textContent = cngArray[currentIndex];
    currentIndex = (currentIndex + 1) % cngArray.length;
}

setInterval(Slider , 2000);


// Skill > Circle --------------//-----------///------------///

const circle = document.querySelectorAll('.circle');
circle.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var parcent = Math.floor(dots*marked/100)
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg;"></div>`
        
    }

    elem.innerHTML = points;

    const pointMarked = elem.querySelectorAll('.points');
    for (let s = 0; s < parcent; s++) {
        pointMarked[s].classList.add('marked');
        console.log(pointMarked[s])
    }

})

////////////////////////////////////////////
