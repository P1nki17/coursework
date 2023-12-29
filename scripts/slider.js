const images = document.querySelectorAll('.slider .slider-line img')
const sliderLine = document.querySelector('.slider .slider-line')
let count = 0
let width = 0

function init() {
    console.log('resize')
    width = document.querySelector('.slider').offsetWidth
    sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = 'auto'
    })
    rollSlider()
}

init();
window.addEventListener('resize', init)

if (document.querySelector('.slider__left') === null) {
    document.querySelector('.slider__arrow_left').addEventListener('click', function () {
        count--
        if (count < 0) {
            count = images.length - 1
        }
        rollSlider()
    });    
}
else {
    document.querySelector('.slider__left').addEventListener('click', function () {
        count++
        if (count >= images.length) {
            count = 0
        }
        rollSlider()
    });
}

if (document.querySelector('.slider__right') === null) {
    document.querySelector('.slider__arrow_right').addEventListener('click', function () {
        count++
        if (count >= images.length) {
            count = 0
        }
        rollSlider()
    });  
}
else {
    document.querySelector('.slider__right').addEventListener('click', function () {
        count--
        if (count < 0) {
            count = images.length - 1
        }
        rollSlider()
    });
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'

}