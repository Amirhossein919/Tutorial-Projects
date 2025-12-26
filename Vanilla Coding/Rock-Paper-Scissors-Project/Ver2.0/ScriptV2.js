let Score = {
  Wins: 0,
  Losses: 0,
  Ties: 0
}

/*
  let Loaded = localStorage.getItem('SavedScore');
  if(Loaded){
    Score = JSON.parse(Loaded);
    document.getElementById('Score').innerHTML = `Score: ${Score.Wins} Wins, ${Score.Losses} Losses, ${Score.Ties} Ties.`;
  }
*/

const LoadScore = () =>{
  let Saved = localStorage.getItem('SavedScore');
  try{
    return Saved ? JSON.parse(Saved) : { Wins: 0, Losses: 0, Ties: 0 };
  }
  catch{
    return { Wins: 0, Losses: 0, Ties: 0 };
  }
}

let Loaded = LoadScore();

if(Loaded){
  Score = Loaded;
  document.getElementById('Score').innerHTML = `Score: ${Score.Wins} Wins, ${Score.Losses} Losses, ${Score.Ties} Ties.`;
}

WhichMove = () =>{
  let Random = Math.random();

  if(Random >= 0 && Random <= 1/3) return 'Rock';
  else if(Random >= 1/3 && Random <= 2/3) return 'Paper';
  else if(Random >= 2/3 && Random <= 1) return 'Scissors';
  }

  let result = '';

Result = (Move) =>{
  let ComputerMove = WhichMove();

  if(Move === ComputerMove) result = 'Tie';
  else if(
    (Move === 'Rock' && ComputerMove === 'Scissors')||
    (Move === 'Paper' && ComputerMove === 'Rock')||
    (Move === 'Scissors' && ComputerMove === 'Paper')
  ) result = 'You Win';
  else result = 'You Lose';

  UpdateScore();

  document.getElementById('Result').innerHTML = 
    `You Chose <span class="Player">${Move}</span>, Computer Chose <span class="Computer">${ComputerMove}</span>.
    \nThe Result Is: <span class="result">${result}</span>`;
  }

UpdateScore  = () =>{
  if(result === 'Tie') Score.Ties ++;
  else if(result === 'You Win') Score.Wins ++;
  else if(result === 'You Lose') Score.Losses ++;

  document.getElementById('Score').innerHTML = 
    `Score: ${Score.Wins} Wins, ${Score.Losses} Losses, ${Score.Ties} Ties.`;
  localStorage.setItem('SavedScore', JSON.stringify(Score));
}
ShowScore = () =>{
  document.getElementById('Score').innerHTML = 
    `Score: ${Score.Wins} Wins, ${Score.Losses} Losses, ${Score.Ties} Ties.`;
}
ResetScore = () =>{
  Score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
  };
  ShowScore();
}
let isAuto = false;
AutoPlay = () =>{
  if(!isAuto){
    IntervalID = setInterval(() =>{
      let Move = WhichMove();
      Result(Move);
    },2000);
    isAuto = true;
  }
  else{
    clearInterval(IntervalID);
    isAuto = false;
  }
  UpdateScore();
}
ShowScore();