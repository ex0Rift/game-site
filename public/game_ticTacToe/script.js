win_screen = document.getElementById("win_screen");
win_text = document.getElementById("win_text");

//1 is x, 0 is o
let turn = 1

addEventListener("click", function (event){
    const p =event.target.closest("p");
    if (p.textContent === ""){
        if (turn){
            p.textContent = "x";
        }else{
            p.textContent = "o";
        }
        turn = !turn;
    }
    //check for win condition

    //put all element text data into an array
    const elements = document.querySelectorAll("div p");
    const textArray = Array.from(elements).map(p => p.textContent);

    if
    (
        //row checks
        textArray[0] !== "" && textArray[0] === textArray[1] && textArray[1] === textArray[2] ||
        textArray[3] !== "" && textArray[3] === textArray[4] && textArray[4] === textArray[5] ||
        textArray[6] !== "" && textArray[6] === textArray[7] && textArray[7] === textArray[8] ||
        //column checks
        textArray[0] !== "" && textArray[0] === textArray[3] && textArray[3] === textArray[6] ||
        textArray[1] !== "" && textArray[1] === textArray[4] && textArray[4] === textArray[7] ||
        textArray[2] !== "" && textArray[2] === textArray[5] && textArray[5] === textArray[8] ||
        //diaganol checks
        textArray[0] !== "" && textArray[0] === textArray[4] && textArray[4] === textArray[8] ||
        textArray[2] !== "" && textArray[2] === textArray[4] && textArray[4] === textArray[6]
    )
    {
        if (turn){
            //oposit of turn is winner
            win_text.textContent = `Naughts have Won!`;
        }else{
            win_text.textContent = `Crosses have Won!`;
        }
        win_screen.classList.add("show");
    }

    //check for stalemate
    if (!textArray.some(item => item === "")) {
        win_text.textContent = `It was a draw...`;
        win_screen.classList.add("show");
    }
}); 

//reset logic
function reset(){
    win_screen.classList.remove("show");
    document.querySelectorAll("p").forEach(p => p.textContent = "");
}



