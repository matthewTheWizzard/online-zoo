const input = document.querySelector('.form__money');
const dots = document.querySelectorAll(".feed-scroller__dots > input[type=radio]")

dots.forEach(el => {
    el.addEventListener('click', ()=>{
        input.value = el.value
    }) 
})

let result;

input.addEventListener('input', (e)=>{
    if(input.value.length > 4){
        input.value = input.value.slice(0,4);
    }
    if(input.value == ''){
        dots.forEach(el =>{
            el.checked = false
        })
    }
    result = input.value
    dots.forEach(el =>{
        el.checked = false
        if(el.value === result){
            el.checked = true
        }
    })
})

