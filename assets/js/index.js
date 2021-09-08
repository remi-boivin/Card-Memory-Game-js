const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let [firstCard, secondCard] = [null, null];

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

var shuffle_cards = 6;

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  shuffle_cards -= 1;
  console.log(shuffle_cards)
  if (shuffle_cards == 0){
  alert('congrat')
  }
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// In order to invoke the shuffle function, let’s make it a Immediately Invoked
// Function Expression (IIFE), which means it will execute itself right after
// its declaration. (for more info please visit
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);

    card.style.order = ramdomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

function start() {
  board = document.getElementById('memory-game');
  menu = document.getElementById('main-menu');
  back_menu = document.getElementById('back');
  menu.style.visibility = "hidden";  
  board.style.visibility = "visible";
  back_menu.style.visibility = "visible";
}

function back() {
  document.location.reload();
}