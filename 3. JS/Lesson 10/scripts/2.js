const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));

function Clicked(selector){
let Btn = document.querySelector(selector);
let Result = Btn.classList.contains('is-toggled');
  if( !Result ){ 
    Btn.classList.add('is-toggled');
  }
  else if(Result) Btn.classList.remove('is-toggled');


// const button = document.querySelector(selector);
//   if (!button.classList.contains('is-toggled')) {
//     button.classList.add('is-toggled');
//   } else {
//     button.classList.remove('is-toggled');
//   }
}