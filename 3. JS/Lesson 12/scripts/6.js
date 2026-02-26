let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
}; // || default op i.e if 1st part is false save 2nd part to score

// if(score === null){    //shortcut !score means if score is null then !score will be !falsy = true
//   score = {
//     wins:0,
//     losses:0,
//     ties:0
//   }
// }

updatScoreELement();

document.querySelector('.js-autoplay-btn')
  .addEventListener('click', ()=>{
     autoPlay();
  });


document.querySelector('.js-reset-btn')
  .addEventListener('click', () => {
    let HTML = '';
    const reset_html = `<p>Are you sure you want to reset the score?
    <button class = 'js-btn'>Yes</button>
    <button class = 'js-btn'>No</button>
    `
    HTML += reset_html;

    document.querySelector('.js-reset-confirmMsg').innerHTML = HTML;

    document.querySelector('.js-btn').addEventListener('click', ()=>{
    if(document.querySelector('.js-btn').innerHTML === 'Yes'){
         score.wins = 0;
        score.losses = 0;
        score.ties = 0;

        localStorage.removeItem('score');

        updatScoreELement();
    }else{
     document.querySelector('.js-reset-confirmMsg').innerHTML = '<p></p>';
    }
  })
     
  });

  

document.body.addEventListener('keydown' , (event) =>{
  if(event.key === 'Backspace'){
      score.wins = 0;
        score.losses = 0;
        score.ties = 0;

        localStorage.removeItem('score');

        updatScoreELement();
  }
})
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval( () => {
      const playerMove = pickCompMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.js-autoplay-btn')
      .innerHTML = 'Stop Playing';

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-autoplay-btn')
    .innerHTML = 'Auto Play';
  }






}
//  .addEventListener('click', playGame('rock'));  - playGame('rock') this will run the function and here we need to give function 

document.querySelector('.js-Rock-btn')
 .addEventListener('click', () => {
    playGame('Rock');
 });


 document.querySelector('.js-Paper-btn')
 .addEventListener('click', () => {
    playGame('Paper');
 });

 
 document.querySelector('.js-Scissors-btn')
 .addEventListener('click', () => {
    playGame('Scissors');
 });

 document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('Rock');
  }else if(event.key === 'p'){
     playGame('Paper');
  }else if(event.key === 's'){
     playGame('Scissors');
  }else if(event.key === 'a'){
     autoPlay();
  }
 })


function playGame(playerMove) {
  const CompMove = pickCompMove();

  let result = "";
  if (playerMove === "Rock") {
    if (CompMove === "Rock") result = "Tie";
    else if (CompMove === "Paper") result = "You lose";
    else result = "You win";
  } else if (playerMove === "Paper") {
    if (CompMove === "Rock") result = "You win";
    else if (CompMove === "Paper") result = "Tie";
    else result = "You lose";
  } else if (playerMove === "Scissors") {
    if (CompMove === "Rock") result = "You lose";
    else if (CompMove === "Paper") result = "You win";
    else result = "Tie";
  }

  if (result === "You win") score.wins++;
  else if (result === "You lose") score.losses++;
  else if (result === "Tie") score.ties++;

  // localStorage.setItem('message', 'hello'); //this will save hello to message in localstorage

  localStorage.setItem("score", JSON.stringify(score));
  updatScoreELement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You 
      <img src="Images/${playerMove}-emoji.png" alt="rock emoji" class="move-icon">
      <img src="Images/${CompMove}-emoji.png" alt="paper" class="move-icon">
      Computer`;
}

function updatScoreELement() {
  document.querySelector(".js-score").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickCompMove() {
  let RandomNum = Math.random();
  let CompMove = " ";
  if (RandomNum >= 0 && RandomNum < 1 / 3) CompMove = "Rock";
  else if (RandomNum >= 1 / 3 && RandomNum < 2 / 3) CompMove = "Paper";
  else CompMove = "Scissors";

  return CompMove;
}
