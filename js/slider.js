const scroller = document.querySelector('.scroller');
const mediaQuery = window.matchMedia('(max-width: 1440px)')
const testimonials = document.querySelector('.testimonials__layout')
import data from "../testimonials.json" assert {type: 'json'};


function getWidth(mediaQuery){
    if(mediaQuery.matches){
        return scroller.value * 321
    }
    else{
        return scroller.value * 296
    }
}

mediaQuery.addListener(getWidth);

scroller.addEventListener('input', ()=>{
    let width = getWidth(mediaQuery);
    testimonials.style.right = `${width}px`
})

let testimonialIndexes = getRandomSet(12, 12);
let testimonialCards = [];
for(let i = 0; i < testimonialIndexes.length; i++){
    let testimonial =` <div class="testimonial-card">
         <div class="testimonial__profile">
             <span class="profile-icon profile-icon_lass" style="background: url(${data[testimonialIndexes[i]].icon})"></span>
             <div class="profile__info">
                 <p class="profile-name">${data[testimonialIndexes[i]].name}</p>
                 <span class="profile-location">${data[testimonialIndexes[i]].location}</span>
                 <span class="profile-dot">.</span>
                 <span class="profile-time">${data[testimonialIndexes[i]].Online}</span>
             </div>
         </div>
         <small class="testimonial__message">${data[testimonialIndexes[i]].message}</small>
     </div>`;
    testimonialCards.push(testimonial)
}

testimonials.innerHTML = testimonialCards.join('');
