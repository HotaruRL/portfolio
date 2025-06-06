// select everything of the class section
const sections = document.querySelectorAll('.section');
// select everything of the parent class controls (all buttons)
const sectBtns = document.querySelectorAll('.controls');
// select everything of the class control (each button)
const sectBtn = document.querySelectorAll('.control');
// select everything of the class main-content (the body)
const allSections = document.querySelector('.main-content')[0];


function PageTransitions(){
    // click the button make it turns into active
    for(let i  = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

PageTransitions();