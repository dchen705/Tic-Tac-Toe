const gameboard = document.querySelector(".tictactoe-board");
const spaces = document.querySelectorAll(".tictactoe-board>div");
let turn_counter = 1;


function mark_space(space_num) {
    console.log(space_num);
    let space_text = space_num.querySelector('p');
    if (turn_counter % 2 == 1) {
        space_text.textContent="X";
    }
    else if (turn_counter % 2 == 0) {
        space_text.textContent="O";
    }
    console.log(turn_counter);
    turn_counter += 1;
    
}

const gameboardModule = (function() {
    const space_values = ["","","","","","","","",""];
    return {space_values};
})();

const Player = (name) => {
    return {name, wins, losses, ties}
}

const displayController = (function() {

})();

const gameController = (function() {
    const start_btn = document.querySelector(".start_button");
    start_btn.addEventListener("click", () => {
        gameboard.style.backgroundColor = "white";
        turn_counter = 1;
        spaces.forEach(function(space) {
            space.addEventListener("click", function(event) {
                mark_space(space);
            });   
        });
    });
})();
