    let Result = '';
    let Score = loadScore();

    function loadScore() {
      let saved = localStorage.getItem('SavedScore');
      try {
        return saved ? JSON.parse(saved) : { Wins: 0, Losses: 0, Ties: 0 };
      } catch {
        return { Wins: 0, Losses: 0, Ties: 0 };
      }
    }

    function saveScore() {
      localStorage.setItem('SavedScore', JSON.stringify(Score));
    }

    function WhichMove() {
      let random = Math.random();
      if (random < 1 / 3) return 'Rock';
      if (random < 2 / 3) return 'Paper';
      return 'Scissors';
    }

    function PlayerMove(playermove) {
      let ComputerMove = WhichMove();

      if (playermove === ComputerMove) {
        Result = 'Tie';
      } else if (
        (playermove === 'Rock' && ComputerMove === 'Paper') ||
        (playermove === 'Paper' && ComputerMove === 'Scissors') ||
        (playermove === 'Scissors' && ComputerMove === 'Rock')
      ) {
        Result = 'You Lose';
      } else {
        Result = 'You Win';
      }

      document.getElementById('Result').innerHTML =
        `You Chose <span class='Player'>${playermove}</span>, 
         Computer Chose <span class="Computer">${ComputerMove}</span>. 
         The Result Is: <span class="result">${Result}</span>`;

      UpdateScore();
    }

    function UpdateScore() {
      if (Result === 'Tie') Score.Ties++;
      else if (Result === 'You Win') Score.Wins++;
      else if (Result === 'You Lose') Score.Losses++;

      saveScore();
      ShowScore();
    }

    function ShowScore() {
      document.getElementById('Score').innerHTML =
        `Score: ${Score.Wins} Wins, ${Score.Losses} Losses, ${Score.Ties} Ties.`;
    }

    function ResetScore() {
      Score = { Wins: 0, Losses: 0, Ties: 0 };
      saveScore();
      ShowScore();
      document.getElementById('Result').innerHTML = 'Result:';
    }

    // Event Listeners (Mouse)
    document.getElementById('btnRock').addEventListener('click', () => PlayerMove('Rock'));
    document.getElementById('btnPaper').addEventListener('click', () => PlayerMove('Paper'));
    document.getElementById('btnScissors').addEventListener('click', () => PlayerMove('Scissors'));
    document.getElementById('btnReset').addEventListener('click', ResetScore);

    // Event Listener (Keyboard)
    document.addEventListener('keydown', (event) => {
      let key = event.key.toLowerCase();
      if (key === 'r') PlayerMove('Rock');
      if (key === 'p') PlayerMove('Paper');
      if (key === 's') PlayerMove('Scissors');
      if (key === '0') ResetScore();
    });

    // Initial display
    ShowScore();