// ================== SHOW MENU ================== 
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// Menu show
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

// Menu hidden
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

// ================== REMOVE MENU MOBILE ==================
const navLink = document.querySelectorAll('.nav__link')

const linkAction =() =>{
    const navMenu = document.getElementById('nav-menu')
    // when click on each nav__link, remove the show-menu click
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// =============== ADD BLUR HEADER ===============
const blurHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50  ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
 

console.log('hello')
// =============== EMAIL JS ===============
const   contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_b31nic5','template_5n9ajn5','#contact-form','kOAci5pW9gbfSf-3K')
    .then(()=>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully'

        // Remove after 5 seconds
        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, ()=>{
        // show error message
        contactMessage.textContent = 'Message not sent (service error)'
    })
}

contactForm.addEventListener('submit', sendEmail);

// =============== SHOW SCROLL UP ===============
const scrollUp =() => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// =============== SCROLL SECTION ACTIVE LINK ===============
const section = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    section.forEach(current => {
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// =============== SCROLL REVEAL ANIMATION ===============

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true // Animation repeat
})

sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 800})
sr.reveal(`.work__card, .services__card`, {interval: 100})
sr.reveal(`.about__content`, {origin: 'right'})

      