let testimonialPopupWrapper = document.querySelector('.testimonial-popup__wrapper')
let testimonialTarget = document.querySelector('.testimonial')
let testimonial = document.querySelector('.testimonial-popup')
const popupTemplate = document.querySelector('.testimonial-card_popup')
const mediaQuery = window.matchMedia('(max-width: 980px)')
const closeTestimonial = document.querySelector('#close-test-popup')

function showTestimonial(mediaQuery){
    if(mediaQuery.matches){
        testimonialTarget.addEventListener('click', e => {
            let newCard = e.target.closest('.testimonial-card').cloneNode(true);
            testimonialPopupWrapper.classList.add('testimonial-popup__wrapper_active');
            popupTemplate.innerHTML = newCard.innerHTML;
        })
    }
}

function hideTestimonial(e){
        testimonialPopupWrapper.classList.remove('testimonial-popup__wrapper_active')
}

testimonialPopupWrapper.addEventListener('click', (e)=>{
    if(e.target.className.includes('testimonial-popup__wrapper')){
            hideTestimonial()
        }
})

closeTestimonial.addEventListener('click', hideTestimonial)
showTestimonial(mediaQuery)
mediaQuery.addListener(showTestimonial)
