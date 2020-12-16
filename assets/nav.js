window.onload = () => {    
    const hamburger = document.querySelector(".burger-container"),
        navLinks = document.querySelector(".nav-links"),
        links = document.querySelector(".nav-links li")


    hamburger.addEventListener('click', (e) => {
        navLinks.classList.toggle('open'); 
        hamburger.classList.toggle('open');
    });

};