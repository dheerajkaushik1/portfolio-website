const Menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

navLinks.style.transition = 'all 0.5s ease';

Menu.addEventListener('click', ()=>{
    if(navLinks.style.display === "none"){
        navLinks.style.display = "flex";
        navLinks.style.transform = "translateX(0)";
        navLinks.style.opacity = "1";
    } else{
        navLinks.style.transform = "translateX(-100%)";
        navLinks.style.opacity = "0";
        navLinks.addEventListener('transitionend',()=>{
            navLinks.style.display = "none";
        }, {once: true});
    }
});

function loader(){
    document.getElementById('PreLoader').style.display = "none";
}

const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 10){
        navbar.classList.add('scrolled');
    } else{
        navbar.classList.remove('scrolled');
    }
})

function hireMe(){
    alert("Please contact me at +91 9306479470");
}


