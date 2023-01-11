// -----------Efeito Header---------

var menu = document.querySelector('header'); // colocar em cache
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        menu.classList.remove('bg-header');
        menu.classList.add('header-fixed');
    } else {
        menu.classList.remove('header-fixed');
        menu.classList.add('bg-header');
    }
});

// -------------Script Menu Responsivo--------------

var closeIcon = document.querySelector('.close-icon')
var menuMobile = document.querySelector('.mobile-menu')
var menuIcon = document.querySelector('.mobile-menu-icon')

closeIcon.addEventListener('click', () => {
    menuMobile.style.display = 'none'   
})

menuMobile.addEventListener('click', () => {
    menuMobile.style.display = 'none'   
})

menuIcon.addEventListener('click', () => {
    menuMobile.style.display = 'block'
})

// -------------Efeito Scroll-----------

const target = document.querySelectorAll('[data-anime]')

function animateScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight *4 )/4)
    target.forEach((element) => {
        if(windowTop > element.offsetTop) {
            element.classList.add('animate')
        }else {
            element.classList.remove('animate')
        }
    })
}

animateScroll()

window.addEventListener('scroll', function() {
    animateScroll()

})

// ---------Theme Mode-------

const btnTheme = document.querySelector('.change-theme')
const header = document.querySelector('header')

// Toggle Dark Mode
function toggleDarkTheme() {
    header.classList.toggle('dark')
    document.body.classList.toggle('dark')
}
// Load Theme
function loadTheme() {
    const darkMode = localStorage.getItem("dark")

    if(darkMode) {
        toggleDarkTheme()
    }
}
loadTheme()

btnTheme.addEventListener('change', () => {
    toggleDarkTheme()

    
    this.localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }
})


