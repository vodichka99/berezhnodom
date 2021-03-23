new Swiper('.image-slider', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    }
})

new Swiper('.head', {
    navigation: {
        nextEl: '.head__buttons--right',
        prevEl: '.head__buttons--left',
    }
})
new Swiper('.third', {
    navigation: {
        nextEl: '.third__buttons--right',
        prevEl: '.third__buttons--left',
    }
})
new Swiper('.sixth', {
    navigation: {
        nextEl: '.sixth__buttons--right',
        prevEl: '.sixth__buttons--left',
    }
})


const el1 = document.getElementById('element1')
const el2 = document.getElementById('element2')
const el3 = document.getElementById('element3')
const el4 = document.getElementById('element4')

const elements = [el1, el2, el3, el4]

for(const key in elements){
    elements[key].addEventListener('click', function(){
        a = Number(key) + 1
        const elementActive = document.querySelector('.third__menu .active')
        const textActive = document.querySelector('.third__menu-content .active')
        const textSelected = document.getElementById(`menu${a}`)
        textActive.classList.remove('active')
        textSelected.classList.add('active')
        elementActive.classList.remove('active')
        elements[key].classList.add('active')
    })
}