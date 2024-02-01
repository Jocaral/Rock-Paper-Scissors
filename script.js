function getComputerChoice(){

  const choices=['rock','paper','scissors'];
  return (choices[(Math.floor(Math.random() * choices.length))]);
}


function playRound(playerSelection,computerSelection) {
    
    if (playerSelection == 'rock' && computerSelection=='paper'){
 return "You Lose! Paper beats Rock";
}
    else if (playerSelection == 'scissors' && computerSelection=='rock'){
 return "You Lose! Rock beats Scissors";
}
else if (playerSelection == 'paper' && computerSelection=='scissors'){
 return "You Lose! Scissors beats paper";
}
else if (playerSelection == 'rock' && computerSelection=='scissors'){
 return "You Win! Rock beats Scissors";
}
else if (playerSelection == 'scissors' && computerSelection=='paper'){
 return "You Win! Scissors beats Paper";
}
else if (playerSelection == 'paper' && computerSelection=='rock'){
 return "You Win! Paper beats rock";                       
}
else {    
  return "It'\s a tie, play again!";
} 

  }

function game(){

    let scorePlayer=0;
    let scoreComputer = 0;
    for (var i=0;i<5;i++){
      var getPlayerSelection=(prompt('Choose Rock, Paper or Scissors?')).toLowerCase();
      var playerSelection = getPlayerSelection;
      var computerSelection = getComputerChoice();
      console.log(playRound(playerSelection,computerSelection));
      if((playRound(playerSelection,computerSelection) === ("You Win! Rock beats Scissors"))||(playRound(playerSelection,computerSelection) === ("You Win! Scissors beats Paper"))||(playRound(playerSelection,computerSelection) === ("You Win! Paper beats rock"))){
        scorePlayer++;
    } 
      else if((playRound(playerSelection,computerSelection) === ("You Lose! Paper beats Rock"))||(playRound(playerSelection,computerSelection) === ("You Lose! Rock beats Scissors"))||(playRound(playerSelection,computerSelection) === ("You Lose! Scissors beats paper"))){
        scoreComputer++;
    }
      console.log(`Player ${scorePlayer} vs Computer ${scoreComputer}`);
      alert(`Score: Player ${scorePlayer} vs Computer ${scoreComputer}`);
    }
    
    const reloadBtn = document.querySelector('.reload');

    if (scorePlayer>scoreComputer||scorePlayer>=3){
      document.getElementById("youwin").innerHTML= `You are the Winner!<br> Final Score: <br> Player ${scorePlayer} vs Computer ${scoreComputer}`;
  }
    else if(scorePlayer<scoreComputer||scoreComputer>=3){
      document.getElementById("youlose").innerHTML= `You lose. Computer is the winner! <br> Final Score: <br>Player ${scorePlayer} vs Computer ${scoreComputer}`;
}
  else {
  document.getElementById("tied").innerHTML= "It'\s a tie, <br> Play again!";
}
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
      }
game();
    
