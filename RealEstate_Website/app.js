// Change Background Header
function scrollHeader(){
    const header = document.getElementById('header')
    //when the scroll is greater than 50vh height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

//Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }
    else{
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
    })
}
window.addEventListener('scroll', scrollActive)

//Show Scroll Up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    }
    else{
        scrollUp.classList.remove('show-scroll')
    } 
}
window.addEventListener('scroll', scrollUp)

// Dark Light Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(dark-theme) ? 'dark' : 'light'
const getCurentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-regular fa-moon' : 'fa-regular fa-sun'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-regular fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})