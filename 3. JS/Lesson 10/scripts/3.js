
function Clicked(selector){
let Btn = document.querySelector(selector);
let Result = Btn.classList.contains('is-toggled');
  if( !Result ){ 
    turnOffPrevBtn(); //this will check if any button is toggled or not
    Btn.classList.add('is-toggled');
  }
  else if(Result) Btn.classList.remove('is-toggled');

}

function turnOffPrevBtn(){
    const prevBtn = document.querySelector('.is-toggled');
    if(prevBtn) prevBtn.classList.remove('is-toggled') ;
}


// amazon project task
function handleCostKeydown(event){
         if(event.key === 'Enter') cal();
      }
function cal(){
        const inputElement = document.querySelector('.js-input');
        let cost = Number(inputElement.value);
            if( cost < 40) {
                cost+=10;
                document.querySelector('.js-calCost').innerHTML = `$${cost}`;
            }else document.querySelector('.js-calCost').innerHTML = `$${cost}`
}

function handleNeg(){
    if(document.querySelector('.js-input').value < 0) document.querySelector('.js-calCost').innerHTML = `Error: cost cannot be less than $0`
    else document.querySelector('.js-calCost').innerHTML = ``;
}