

let autoplaying = false ;

let intervalid;

function autoplay(){
     if (!autoplaying){
        intervalid = setInterval(function(){
            const playermove = computerMove ;
            selection(playermove)
        }, 2000) ;
        autoplaying = true ;
    }else {
        clearInterval(intervalid) ;
        autoplaying = false;
    }
}

let computerMove = '';

function selection(selectionreceive){

    let receive = selectionreceive;
    let input=Math.random();

    
    let result = '';

       if (input <= 1/3){
        computerMove='rock';
       } else if (input >=1/3 && input <= 2/3){
        computerMove='paper';
       } else if (input >= 2/3){
        computerMove='scissor';
       }
       console.log(computerMove);



    let score = JSON.parse(localStorage.getItem('score')) ;
    
    
     

       if(receive === 'scissor'){
        if(computerMove === 'rock'){
                result = 'You lose';
        } else if (computerMove === 'paper'){
            result = 'You win';
        }else if ( computerMove === 'scissor'){
            result = 'tie';
        }
        }

        if(receive === 'paper'){
            if(computerMove === 'rock'){
                result = 'You win';
        } else if (computerMove === 'paper'){
            result = 'tie';
        }else if ( computerMove === 'scissor'){
            result = 'You lose';
        }
        }


        if(receive === 'rock'){
            if(computerMove === 'rock'){
                result = 'tie';
           } else if (computerMove === 'paper'){
            result = 'You lose';
           }else if ( computerMove === 'scissor'){
            result = 'You win';
           }
         }

        if (result === 'You win'){
            score.wins ++;
        } else if (result === 'You lose'){
            score.losses ++;
        } else if (result === 'tie'){
            score.ties ++;
        }

        localStorage.setItem('score',JSON.stringify(score));

        console.log(score);

        document.getElementById('inputfield').value= `You choose ${receive}.\nComputer choose ${computerMove}.\n${result}`;
        document.getElementById('scorecard').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;



       if(result === 'You win'){
        document.getElementById('inputfield').style.backgroundColor='green';
       }else if (result=== 'You lose'){
        document.getElementById('inputfield').style.backgroundColor='red';
       }else if (result=== 'tie'){
        document.getElementById('inputfield').style.backgroundColor='grey';
       }

            

       
    }
    

