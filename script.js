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

// add event listeners test

rock_id.addEventListener('click',function() {
    console.log("hey you clicked rock");
});

paper_id.addEventListener('click',function() {
    console.log("hey you clicked paper");
});

scissors_id.addEventListener('click',function() {
    console.log("hey you clicked scissors");
})