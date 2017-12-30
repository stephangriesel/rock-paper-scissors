// caching the dom...

let userScore = 0;
let computerScore = 0;
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

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userChoice);
    console.log(computerChoice);

}

function loose() {
    console.log("lost");
}

function draw() {
    console.log("draw");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
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


// 33.22