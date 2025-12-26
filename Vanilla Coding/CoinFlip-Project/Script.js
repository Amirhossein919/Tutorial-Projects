let Score = {
  Wins: 0,
  Losses: 0,
}

LoadScore = () => {
  let Saved = localStorage.getItem('SavedScore');
  try{
    return Saved ? JSON.parse(Saved) : {Wins: 0, Losses: 0}
  }
  catch{
    return console.log('No Saved Score');
  }
}

let Loaded = LoadScore();

if(Loaded){
  Score = Loaded;
  document.getElementById('Score').innerHTML = `Score: ${Score.Wins} Wins, ${Score.Losses} Losses`;;
}


let Guess = undefined;
let Coin = '';
Flip = () =>{
  let flip = Math.random();
  flip <= 0.5 ? Coin = 'Heads' :  Coin = 'Tails';   
  console.log(`${Coin} Has Chosen`);
}

ShowGuess = () => {
  document.getElementById('Guess').innerHTML = `You Guessed: ${Guess}`;
  console.log(`${Guess} Has Chosen`);
}

let result = '';

Result = () =>{
  if(!Coin){
    alert('Coin Has Not Flipped');
  }
  else{
    if(!Guess){
      alert(`Please Choose An Option!`);
    }
    else{
      if(Guess == Coin){
        document.getElementById('Result').innerHTML = `You Guessed ${Guess},\nCoin Side Is: ${Coin},\nYou Guessed Right!`;
        result = 'You Win';
      }
      else if (Guess !== Coin){
        document.getElementById('Result').innerHTML = `You Guessed ${Guess},\nCoin Side Is: ${Coin},\nYou Guessed Wrong!`;
        result = 'You Lose';
      }
    }
  }  
  localStorage.setItem('SavedScore', JSON.stringify(Score));
  Coin = '';
  Guess = '';
  UpdateScore();
}
UpdateScore = () => {
  if(result == 'You Win'){
    Score.Wins++;
    document.getElementById('Score').innerHTML = `Score: ${Score.Wins} Wins, ${Score.Losses} Losses`;
  }
  else if(result == 'You Lose'){
    Score.Losses++;
    document.getElementById('Score').innerHTML = `Score: ${Score.Wins} Wins, ${Score.Losses} Losses`;
  }
}
ResetScore = () => {
  alert('Score Has Been Reset');
  Score = {Wins: 0, Losses: 0};
  localStorage.removeItem('SavedScore');
  document.getElementById('Score').innerHTML = `Score: ${Score.Wins} Wins, ${Score.Losses} Losses`;
}