// caching the dom...

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_id = document.getElementById("r");
const paper_id = document.getElementById("p");
const scissors_id = document.getElementById("s");

// test function

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getComputerChoice());

function game(userChoice) {
}

function main(){
    rock_id.addEventListener('click',function() {
        game("r");
    });
    
    paper_id.addEventListener('click',function() {
        game("p");
    });
    
    scissors_id.addEventListener('click',function() {
        game("s");
    })

}

main();
