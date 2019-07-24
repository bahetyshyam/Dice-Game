/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();



document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        //1. Generate a random number
     var dice = Math.floor(Math.random()*6) + 1;
    
    //2.Display the result 
    
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    
    //3. Update the result
    if(dice !== 1)
        {
            roundScore+=dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
    else
        {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying)
        {
            //1. Update the Scores
            scores[activePlayer]+=roundScore;
    
            //2.Update the UI
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

            //3.Check if the player won the game
            if(scores[activePlayer] >= 100)
                {
                    //Winner
                    document.getElementById('name-' + activePlayer).textContent = 'Winner!';
                    document.querySelector('.dice').style.display = 'none';
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    gamePlaying = false;

                }
            else {
                nextPlayer();
            }
        }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer=1 : activePlayer = 0;
            roundScore = 0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            document.querySelector('.dice').style.display = 'none';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying =  true;
    
    document.querySelector('.dice').style.display = 'none'; //Hides the dice image

    document.getElementById('score-0').textContent = '0';   // Initializes the values of current and global scores to 0 in the UI
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1'; //Inititlizes the players name back to Player 1 and Player 2
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner'); //Removes the winner class from both players
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active'); //Removes the active classes from both winners
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active'); //Initializes the player 1 as the active player again  by adding the active class.
}



//document.querySelector('#current-' + activePlayer).textContent;



















