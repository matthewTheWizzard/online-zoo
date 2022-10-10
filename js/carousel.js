const ARROW_LEFT = document.querySelector(".arrow_left");
const ARROW_RIGHT = document.querySelector(".arrow_right");
const CAROUSEL = document.querySelector(".carousel");
const ITEM_LEFT = document.querySelector(".carousel-item-left");
const ITEM_RIGHT = document.querySelector(".carousel-item-right");
const ITEM_ACTIVE = document.querySelector(".carousel-active");

// the array of unique cards
let cards =  [`<div class="pets-card">
                <img src="assets/images/pets/pandas.jpg" alt="panda">
                <div class="pets-wrapper">
                    <div class="pets__info">
                        <strong>GIANT PANDAS</strong>
                        <span>Native to Southwest China</span>
                    </div>
                        <span class="pets-logo pets-logo_herbivore"></span>
                </div>
               </div>`,
            `<div class="pets-card">
                <img src="assets/images/pets/eagle.jpg" alt="eagle">
                <div class="pets-wrapper">
                    <div class="pets__info">
                        <strong>EAGLES</strong>
                        <span>Native to South America</span>
                    </div>
                    <span class="pets-logo pets-logo_carnivore"></span>
                </div>
            </div>`,
            `<div class="pets-card">
                <img src="assets/images/pets/gorilla.jpg" alt="gorrila">
                <div class="pets-wrapper">
                    <div class="pets__info">
                        <strong>GORILLAS</strong>
                        <span>Native to Congo</span>
                    </div>
                    <span class="pets-logo pets-logo_herbivore"></span>
                </div>
            </div>`,
            `<div class="pets-card">
                <img src="assets/images/pets/sloth.jpg" alt="sloth">
                <div class="pets-wrapper">
                    <div class="pets__info">
                        <strong>TWO-TOED SLOTH</strong>
                        <span>Mesoamerica, South America</span>
                    </div>
                    <span class="pets-logo pets-logo_herbivore"></span>
                </div>
            </div>`,
            `<div class="pets-card">
                <img src="assets/images/pets/cheetah.jpg" alt="cheetah">
                <div class="pets-wrapper">
                    <div class="pets__info">
                        <strong>CHEETAHS</strong>
                        <span>Native to Africa</span>
                    </div>
                    <span class="pets-logo pets-logo_carnivore"></span>
                </div>
            </div>`,
            `<div class="pets-card">
                <img src="assets/images/pets/penguin.jpg" alt="penguin">
                <div class="pets-wrapper">
                    <div class="pets__info">
                        <strong>PENGUINS</strong>
                        <span>Native to Antarctica</span>
                    </div>
                    <span class="pets-logo pets-logo_carnivore"></span>
                </div>
            </div>`,
            `<div class="pets-card">
                <img src="assets/images/pets/aligator.png" alt="aligatos">
                <div class="pets-wrapper">
                    <div class="pets__info">
                        <strong>ALIGATORS</strong>
                        <span>Native to South America</span>
                    </div>
                    <span class="pets-logo pets-logo_carnivore"></span>
                </div>
            </div>`
            ]

// START THE CAROUSEL (random unique cards on each)
ITEM_ACTIVE.innerHTML = getRandomCards(cards, 6).join('');
ITEM_LEFT.innerHTML = getRandomCards(cards, 6).join('');
ITEM_RIGHT.innerHTML = getRandomCards(cards, 6).join('');
// Random set of indexes for cards. quantity is the amount of indexes, max is the 
// maximum value of the index. returns an array
// getRandomSet(3,50) -> [4, 3, 50]
function getRandomSet(quantity, max){
  const arr = []
  while(arr.length < quantity){
    let randomCard = Math.floor(Math.random() * max) 
    if(arr.indexOf(randomCard) === -1) arr.push(randomCard)
  }
return(arr)
}

// get random sets of cards. Array is an array of cards(templates)
// number is the number of cards in a carousel
function getRandomCards(array, number){
    let arr = [];
    let indexes = getRandomSet(number, array.length);
    for (let i = 0; i < indexes.length; i++){
        arr.push(array[indexes[i]])
    }    
    return arr
}

// move carousel to the left
const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  ARROW_LEFT.removeEventListener("click", moveLeft);
  ARROW_RIGHT.removeEventListener("click", moveRight);
}

// move carousel to the right
const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  ARROW_LEFT.removeEventListener("click", moveLeft);
  ARROW_RIGHT.removeEventListener("click", moveRight);
}

// removing unnecesarry classes after the animation
CAROUSEL.addEventListener("animationend", (e) => {
  let changedItem;
  
  if (e.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_RIGHT;
    ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_LEFT;
    ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;
  }

  changedItem.innerHTML = getRandomCards(cards, 6).join('');

  ARROW_LEFT.addEventListener("click", moveLeft);
  ARROW_RIGHT.addEventListener("click", moveRight);
})

ARROW_LEFT.addEventListener("click", moveLeft);
ARROW_RIGHT.addEventListener("click", moveRight);


console.log('Welcome to Rolling Scopes!')