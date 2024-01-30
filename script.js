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
  return "Tied game, play again!";
} 

  }

function game(){

    let scorePlayer=0;
    let scoreComputer = 0;
    for (var i=0;i<5;i++){
      var getPlayerSelection=(prompt('Choose Rock,Paper or Scissors?')).toLowerCase();
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
    }
    

    if (scorePlayer>scoreComputer||scorePlayer>=3){
  console.log('You are the Winner!');
}
    else if(scorePlayer<scoreComputer||scoreComputer>=3){
   console.log('Computer is the winner!')
}
}

game();
    
/*
function winner(){
  let scorePlayer=0;
  let scoreComputer=0;
  if (console.log(playRound(playerSelection,computerSelection)=="You Win! Rock beats Scissors" || playRound()=="You Win! Scissors beats Paper" || playRound()==="You Win! Paper beats rock")){
    scorePlayer+=1;
  }
  else {}
  return scorePlayer;
} 

winner(game());

*/
/*
playRound(playerSelection,computerSelection);

*/

 

 /*
 for (var i=0;i<5;i++)
 {
   game();
 }
*/