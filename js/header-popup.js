const hamburger = document.querySelector('.hamburger');
const headerPopup = document.querySelector('.header-popup__wrapper');
const closeIcon = document.querySelector('.header__close')


const showPopup = () =>{
    headerPopup.classList.add('header_show')
}

const hidePopup = () =>{
    headerPopup.classList.remove('header_show')
}

closeIcon.addEventListener('click', ()=>{
    hidePopup()
})
hamburger.addEventListener('click', ()=>{
    showPopup()
})

headerPopup.addEventListener('click', (e)=>{
    if(e.target.className.includes('header-popup__wrapper')){
            hidePopup()
        }
})