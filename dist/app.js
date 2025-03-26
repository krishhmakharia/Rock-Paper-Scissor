let user_score = 0;
let comp_score = 0;
const choices = document.querySelectorAll(".choice");
const user_score_board = document.querySelector("#user-score");
const comp_score_board = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");

const showWinner = (user_win) => {
    if(user_win){
        user_score++;
        //console.log("User wins");
        user_score_board.innerText = user_score;
        msg.innerText = "You wins 🎊";
    }else{
        comp_score++;
        // console.log("Computer wins");
        comp_score_board.innerText = comp_score;
        msg.innerText = "You loss 🥲";
    }

}

const compGenChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const comp_choice = Math.floor(Math.random() * 3);
    // console.log("User choice: " , user_choice);
    // console.log("Comp choice: " , options[comp_choice]);
    return options[comp_choice];
}

const playGame = (user_choice) => {
    const comp_choice = compGenChoice();
    console.log(`User choice: ${user_choice}\nComputer choice: ${comp_choice}`);
    // if((user_choice === "rock" && comp_choice === "scissor") ||
    // (user_choice === "paper" && comp_choice === "rock") ||
    // (user_choice === "scissor" && comp_choice === "paper")){
    //     user_score++;                   //user wins
    //     console.log("User wins");
    // }
    // else if(user_choice === comp_choice){    //tie
    //     console.log("It's a tie");
    // }
    // else{                                   //computer wins
    //     comp_score++;
    //     console.log("Computer wins");
    // }
    // console.log(`User score: ${user_score} and Computer score: ${comp_score}`);
    if (user_choice === comp_choice) {
        console.log("It's a tie");
        msg.innerText = "It's a tie 😏";
    }
    else {
        let user_win = true;
        if (user_choice === "rock") {
            user_win = comp_choice === "paper" ? false : true;
        }
        else if (user_choice === "paper") {
            user_win = comp_choice === "scissors" ? false : true;
        }
        else {
            user_win = comp_choice === "rock" ? false : true;
        }
        showWinner(user_win);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // console.log("clicked");
        let user_choice = choice.getAttribute("id");
        let comp_choice = playGame(user_choice);
    })
});