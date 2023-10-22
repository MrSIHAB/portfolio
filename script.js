const changingText = document.getElementById("changingText");
const cngArray = ['Graphix Desiner', 'YouTuber', 'Web Developer', 'Logo Maker', 'Web Designer', 'Frontent Developer', 'Digital Marketer'];
let currentIndex = 0

function Slider() {
    changingText.textContent = cngArray[currentIndex];
    currentIndex = (currentIndex + 1) % cngArray.length;
}

setInterval(Slider, 2000);





// Skill > Circle --------------//-----------///------------///

const circle = document.querySelectorAll('.circle');
const skill = document.querySelectorAll(".skill");

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

circle.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var parcent = Math.floor(dots * marked / 100)
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg;"></div>`

    }

    elem.innerHTML = points;

    function handleScroll(){
        circle.forEach(element => {
            if (isElementInViewport(element)) {
                const pointMarked = elem.querySelectorAll('.points');
                for (let s = 0; s < parcent; s++) {
                    pointMarked[s].classList.add('marked');
                    console.log(pointMarked[s])
                }
            }
        });
    }
    window.addEventListener('scroll' , handleScroll)
})

const bar = document.querySelectorAll(".fillBar");
function handleScroll2() {
    bar.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('run')

        }
    })
}

window.addEventListener("scroll", handleScroll2);




// navigation button -------------------//-------------//------------------//-------------/------------------//----

const navbtn = document.getElementById("navbtn");
const navli = document.querySelector('.navlist');

function togglehide() {
    if (navli.style.display == 'none') {
        navli.style.display = 'block'
    } else {
        navli.style.display = 'none'
    }
}

navbtn.addEventListener('click', togglehide);

window.addEventListener('scroll', navhide = ()=>{
    if (navli.style.display === 'block') {
        navli.style.display = 'none';
    }
});
