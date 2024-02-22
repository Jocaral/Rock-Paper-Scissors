
// Computer Choice
function getComputerChoice(){

  const choices=['rock','paper','scissors'];
  return (choices[(Math.floor(Math.random() * choices.length))]);
}
// Create a single game
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

  };

// Create the 5 round game
function game(){
  //define scores
  let scorePlayer=0;
  let scoreComputer =0;
  const options = document.querySelector('.options')

    //define button loop selection
    const buttons =document.querySelectorAll('.option-item');
      buttons.forEach(opt =>{
        opt.addEventListener ('click',(e)=>{

           var playerSelection = e.target.value;
           console.log(playerSelection);
           var computerSelection = getComputerChoice();

           console.log
        
           if ((playRound(playerSelection,computerSelection) === ("You Win! Rock beats Scissors"))||(playRound(playerSelection,computerSelection) === ("You Win! Scissors beats Paper"))||(playRound(playerSelection,computerSelection) === ("You Win! Paper beats rock"))){
           scorePlayer++;
            } 
            else if((playRound(playerSelection,computerSelection) === ("You Lose! Paper beats Rock"))||(playRound(playerSelection,computerSelection) === ("You Lose! Rock beats Scissors"))||(playRound(playerSelection,computerSelection) === ("You Lose! Scissors beats paper")))
           {
             scoreComputer++;
         };

         var message=document.querySelector('.message');
         options.appendChild(message);
         message.innerHTML=`${playRound(playerSelection,computerSelection)}<br> Player ${scorePlayer} vs Computer ${scoreComputer}`;
        //  ((playRound(playerSelection,computerSelection))
      
   //console.log(`Player ${scorePlayer} vs Computer ${scoreComputer}`);

    // Final Score inside the function
         if (scorePlayer>scoreComputer && scorePlayer>=3){
            options.textContent='';
           document.getElementById("youwin").innerHTML= `You are the Winner!<br> Final Score: <br> Player ${scorePlayer} vs Computer ${scoreComputer}`;
       
          }
         else if(scorePlayer<scoreComputer && scoreComputer>=3){
          options.textContent='';
           document.getElementById("youlose").innerHTML= `You lose. Computer is the winner! <br> Final Score: <br>Player ${scorePlayer} vs Computer ${scoreComputer}`;
     }
       else if (scorePlayer==2 && scoreComputer==2){
        options.textContent='';
       document.querySelector('#tied').innerHTML= "It'\s a tie, <br> Play again!";
     }
    });
  });
  
    }

    //Reload Button
        const reloadBtn = document.createElement('button');
        const btn = document.querySelector('.btn');
        btn.appendChild(reloadBtn);

        reloadBtn.textContent = 'Restart';
        reloadBtn.className = 'reload';
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        });

      
game();
    
