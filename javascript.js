let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });

    /*sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-container, .achievements-container, .skills-container, .contact form, .contact-info', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .about-heading', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Aspiring Software Engineer', 'Frontend Web Developer', 'Problem Solver', 'Tech Explorer', 'Team Player', 'Fast Learner', 'Resilient', 'Hardworking Professional'],
    typeSpeed: 60,        // slower typing for clarity
    backSpeed: 30,        // slower backspacing
    backDelay: 2500,      // longer pause between phrases
    startDelay: 500,      // small initial delay
    smartBackspace: true,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});