function getComputerChoice(){
    let pcChoice = Math.floor(Math.random() * 3);
    return pcChoice;
}
let playerSelection;
let computerSelection;
let score_pc = 0;
let score_player = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const sci = document.getElementById("sci");

rock.addEventListener('click', function() {  
    playerSelection =  document.getElementById("rock").value;
    game();
});
paper.addEventListener('click', function() {  
    playerSelection =  document.getElementById("paper").value;
    game();

});
sci.addEventListener('click', function() {  
    playerSelection =  document.getElementById("sci").value;
    game();

});
// 0 = Rock
//1 = Paper
//2 = Scissors



function playRound(playerSelection, computerSelection) {
    
    let player = parseInt(playerSelection)

    switch(computerSelection){

        case 0:
            document.getElementById("img_pc").src="img/rock.svg";
            break;
        case 1:
            document.getElementById("img_pc").src="img/paper.svg";
            break;
        case 2:
            document.getElementById("img_pc").src="img/sci.svg";
            break;
    }

    switch(player){
        case 0:
            //console.log(0);
            document.getElementById("img_player").src="img/rock.svg";
            break;
        case 1:
            //console.log(1);
            document.getElementById("img_player").src="img/paper.svg";
            break;
        case 2:
            //console.log(2);
            document.getElementById("img_player").src="img/sci.svg";
            break;
    }

    if(playerSelection == computerSelection)
    {
        return "Tie"
    }
    else if(playerSelection == 0 && computerSelection == 1 || playerSelection == 1 && computerSelection == 2 || playerSelection == 2 && computerSelection == 0){
        return "Loss"
    }
    else{
        return "Win"
    }
}

function game(){
    computerSelection = getComputerChoice();
    if( playRound(playerSelection, computerSelection) == "Tie")
    {
        document.getElementById("pc").innerHTML = "Tie";
        document.getElementById("player").innerHTML = "Tie";

    }
    else if( playRound(playerSelection, computerSelection) == "Loss"){
        score_pc++;
        document.getElementById("score").innerHTML = score_player + " : " + score_pc;
        document.getElementById("pc").innerHTML = "Wins";
        document.getElementById("player").innerHTML = "Losses";

    }
    else{
        score_player++;
        document.getElementById("score").innerHTML = score_player + " : " + score_pc;
        document.getElementById("pc").innerHTML = "Losses";
        document.getElementById("player").innerHTML = "Wins";
    }

    if(score_pc == 3)
    {
        alert("Computer Wins");
        score_pc = 0;
        score_player = 0;
        document.getElementById("score").innerHTML = "0 : 0";
        document.getElementById("img_pc").src=" ";
        document.getElementById("img_player").src=" ";
    }
    else if(score_player == 3)
    {
        alert("Player Wins");
        score_pc = 0;
        score_player = 0;
        document.getElementById("score").innerHTML = "0 : 0";
        document.getElementById("img_pc").src=" ";
        document.getElementById("img_player").src=" ";
    }
    else{ 
        playRound(playerSelection, computerSelection);
    }






}
