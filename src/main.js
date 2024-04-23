// Inicia a func no Load do DOM
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;


        
 
    
    

    //Header
    window.addEventListener('scroll', function(){

        
        const position = window.scrollY;
        if (position > heightHero){
            hiddenHeader();
            console.log(heightHero)
        } else{
            displayHeader();
        }
    })

    //FAQ
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', function(qu){
            const classe = 'faq__questions__item--is-open'
                const parentElem = qu.target.parentNode;
                
                parentElem.classList.toggle(classe);
            })
        }
    

    //Showns
    for (let i = 0; i < buttons.length; i++) {
            // Adiciona a func Click nos tab-Bottons
            buttons[i].addEventListener('click', function(btn){
                const tabTarget = btn.target.dataset.tabButton;
                const aba = document.querySelector(`[data-tab-id=${tabTarget}]`);
                tabsRemoveDisplay();
                aba.classList.add('show__list--is-active');
                removeBtnActive();
                btn.target.classList.add('show__tabs__button--is-active');
            })
        }
})


var image = document.getElementById("imageAlt"); 
var width = screen.width;


if (width <= 768){
    image.src = './dist/images/fundo_rei_leao_celular.png';
}if (width > 768) image.src = './dist/images/fundo_rei_leao.png';





function  hiddenHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function  displayHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function removeBtnActive() {
    const buttons = document.querySelectorAll('[data-tab-button');
    
    for (let i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('show__tabs__button--is-active')
    }
}

function tabsRemoveDisplay() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('show__list--is-active')
    }
}