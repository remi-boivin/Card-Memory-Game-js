const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.add('flip');
}

// In order to invoke the shuffle function, let’s make it a Immediately Invoked
// Function Expression (IIFE), which means it will execute itself right after
// its declaration. (for more info please visit https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);

    card.style.order = ramdomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));