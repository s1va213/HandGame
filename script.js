console.log("loaded");

const tossElement = document.querySelectorAll('.js-toss');
tossElement.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.getAttribute('data-toss') == 'heads') putToss('heads');
    else putToss('tails');
  });
});

function putToss(s) {
  const ran = Math.random();
  let toss = ran <= 0.5 ? 'heads' : 'tails';

  if (toss == s) renderTossResult('win');
  else renderTossResult('loss');
}

function renderTossResult(s) {
  let tossResHTML;

  if (s == 'win') {
    tossResHTML = `
      <p>Congrats you won toss, Choose</p>
      <button class="js-toss-win win" data-choice="batting">Batting</button>
      <button class="js-toss-win win" data-choice="bowling">Bowling</button>
    `;
  } else {
    const rand = Math.random();
    let randSelection = rand <= 0.5 ? 'bowling' : 'batting';

    tossResHTML = `
      <p>You lose the toss</p>
      <p>Opponent chose ${randSelection} first</p>
      <button class="playgame">Start</button>
    `;

    
    setTimeout(() => start(randSelection), 0);
  }

  document.querySelector('.js-Toss-outcome').innerHTML = tossResHTML;


  const playerChoice = document.querySelectorAll('.js-toss-win');
  playerChoice.forEach((choice) => {
    choice.addEventListener('click', () => {
      if (choice.getAttribute('data-choice') === 'batting') playgame('batting');
      else playgame('bowling');
    });
  });
}

function playgame(choice) {
  const tossOutcome = document.querySelector('.js-Toss-outcome');
  tossOutcome.innerHTML = `You ${choice} now`;
  window.location.href = `playgame.html?choice=${choice}`;
}

function start(choice) {
  const startElement = document.querySelector('.playgame');
  if (startElement) {
    startElement.addEventListener('click', () => {
      playgame(choice);
    });
  }
}
