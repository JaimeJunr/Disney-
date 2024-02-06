// Inicia a func no Load do DOM
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        // Adiciona a func Click nos tab-Bottons
        buttons[i].addEventListener('click', function(btn){
            const tabTarget = btn.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${tabTarget}]`);
            TabsDisplay();
            aba.classList.add('show__list--is-active');
            removeBtnActive();
            btn.target.classList.add('show__tabs__button--is-active');
        })
    }
})

function removeBtnActive() {
    const buttons = document.querySelectorAll('[data-tab-button');

    for (let i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('show__tabs__button--is-active')
    }
}

function TabsDisplay() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('show__list--is-active')
    }
}