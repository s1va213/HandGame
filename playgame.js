
// this is playgame.js
const firstChoice=new URLSearchParams(window.location.search);
const ch=firstChoice.get("choice")
const game=document.querySelector('.game');
game.innerHTML=`you ${ch} now`;

startGame(ch);
function startGame(ch){
  const gameDiv=document.querySelector('.game')
  gameDiv.innerHTML=`
  <div class="game">
    <button class="play" data-score='1'>1</button>
    <button class="play" data-score='2'>2</button>
    <button class="play" data-score='3'>3</button>
    <button class="play" data-score='4'>4</button>
    <button class="play" data-score='5'>5</button>
    <button class="play" data-score='6'>6</button>
    <button class="play" data-score='restart'>restart</button>

  </div>`
  const playbutton=document.querySelectorAll('.play');
  playbutton.forEach((currButton)=>{
    currButton.addEventListener('click',()=>{
      playGame(ch,currButton.getAttribute('data-score'),1);
    })
  })

}
let totalScore=0;
function pickComputerMove(){
const ranMove=Math.random();
const computerMove= ranMove<=(1/6) ? 1: ranMove<=(2/6) ? 2: ranMove<=(3/6) ? 3:ranMove<(4/6) ?4: ranMove<=(5/6) ?5 :6;

return computerMove;
}

function playGame(ch,score,innings){
  totalScore+=parseInt(score);
  const compMove=pickComputerMove();
  console.log(compMove);
  let res='';
  const resultElement=document.querySelector('.result');
  if(compMove===parseInt(score)) {
    res='OUT!!!'

    secondInnings(ch,totalScore);


  }

  resultElement.innerHTML=`you are ${ch} first,you scored-${totalScore} and Computer chosed ${compMove} ${res}`;
}
function secondInnings(){
const compMove=pickComputerMove();


}
