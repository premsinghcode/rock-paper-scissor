var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
var computerChoice;
function main(){
rock_div.addEventListener('click',function (){
 game("r");
});
paper_div.addEventListener('click', function () {
    game("p");
});
scissors_div.addEventListener('click', function () {
    game("s");
});
}
main();
function game(userChoice){
    switch (userChoice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);       
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
        default:
            break;
    }
}
function getComputerChoice(){
    var randomChoice = Math.floor(Math.random()*3);
    switch (randomChoice) {
        case 0:
            computerChoice = "r";
            break;
        case 1:
            computerChoice = "p";
            break;
        case 2:
            computerChoice = "s";
            break;   
        default:
            computerChoice = "r";
            break;    
    }
    console.log(computerChoice);
}
getComputerChoice();
function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML = convert(user) + " beats " + convert(computer) + ".So you WIN !! "
    getComputerChoice();
    document.querySelector(".comp").innerHTML = "COMPUTER CHOSE : " + convert(computer);
    document.querySelector(".user").innerHTML = "USER CHOSE :" + convert(user);
}
function lose(user,computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convert(computer) + " beats " + convert(user) + ".So you Lose !! "
    getComputerChoice();
    document.querySelector(".comp").innerHTML = "COMPUTER CHOSE : " + convert(computer);
    document.querySelector(".user").innerHTML = "USER CHOSE :" + convert(user);
}
function draw(user, computer) {
    result_p.innerHTML = "Its a draw";
    getComputerChoice();
    document.querySelector(".comp").innerHTML = "COMPUTER CHOSE : " + convert(computer);
    document.querySelector(".user").innerHTML = "USER CHOSE :" + convert(user);
}
function convert(letter){
    if (letter==="r") {return "Rock";}
    if (letter === "p") { return "Paper";}
    if (letter === "s") { return "Scissors";}
}

    
