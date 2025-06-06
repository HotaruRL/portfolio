// select everything of the class
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); // parent class - all buttons
const sectBtn = document.querySelectorAll('.control'); // individual button
const allSections = document.querySelector('.main-content'); // body

// change the class of the button when clicked on to active-btn
function PageTransitions(){

    // TUTORIAL LOGIC
    // click the button make it turns into active
    // for(let i  = 0; i < sectBtn.length; i++){
    //     sectBtn[i].addEventListener('click', function(){
    //         let currentBtn = document.querySelectorAll('.active-btn');
    //         currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
    //         this.className += ' active-btn';
    //     })
    // }

    // // turn section into active class
    // allSections.addEventListener('click', (e) =>{
    //     // target the dataset of the element being clicked on
    //     const id = e.target.dataset.id;
    //     if(id){
    //         // remove selected from the other buttons
    //         sectBtns.forEach((btn) => {
    //             btn.classList.remove('active')
    //         })
    //         e.target.classList.add('active')

    //         // hide other sections
    //         sections.forEach((sections) => {
    //             sections.classList.remove('active')
    //         })

    //         const element = document.getElementById(id);
    //         element.classList.add('active');
    //     }
    // })

    // REVISED LOGIC
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){

            // 1. Manage 'active-btn' class for buttons
            let currentActiveBtn = document.querySelector('.active-btn');
            if (currentActiveBtn){
                currentActiveBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn'); // this refers to the clicked on button (the div.control element)
        
            // 2. Manage 'active' class for sections
            const id = this.dataset.id; // get the id from the button's data-id attribute
            if(id){
                sections.forEach((section) => {
                    section.classList.remove('active');
                });

                // show the target section
                const element = document.getElementById(id);
                if (element){
                    element.classList.add('active');
                }
            }
        })
    }
}

PageTransitions();