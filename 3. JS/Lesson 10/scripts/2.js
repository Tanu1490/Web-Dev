const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));

function Clicked(selector){
let GameBtn = document.querySelector(selector);
let GameResult = GameBtn.classList.contains('is-toggled');
  if(GameResult === false){ 
    GameBtn.classList.add('is-toggled');
  }
  else if(GameResult === true) GameBtn.classList.remove('is-toggled');


// const button = document.querySelector(selector);
//   if (!button.classList.contains('is-toggled')) {
//     button.classList.add('is-toggled');
//   } else {
//     button.classList.remove('is-toggled');
//   }
}