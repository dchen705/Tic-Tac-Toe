const gameboard = document.querySelector(".tictactoe-board");
const spaces = document.querySelectorAll(".tictactoe-board>div");
let turn_counter = 1;


const gameboardModule = (function() {
   const reset_btn = document.querySelector(".reset_button");
    reset_btn.addEventListener("click", clear_board);
  
    const start_btn = document.querySelector(".start_button");
    let space = "dummy_value"
    let clickHandler = createClickHandler(space);
    start_btn.addEventListener("click", () => {
        gameboard.style.backgroundColor = "white";
        turn_counter = 1;
        spaces.forEach(function(space) {
          clickHandler = createClickHandler(space);
          space.addEventListener("click", clickHandler); 
          
        });
    });

  function createClickHandler(space) {
    return function() {
        mark_space(space);
    }
  } 
  
    function mark_space(space_num) {
    
    let space_text = space_num.querySelector('p');
    if (space_text.textContent != "") {
        space.removeEventListener("click", clickHandler);
        return
    }
    if (turn_counter % 2 == 1) {
        space_text.textContent="X";
        gameController.check_wins(space_num);
        if (turn_counter == 9) {
          alert("tie!");
          clear_board();
        }
    }
    else if (turn_counter % 2 == 0) {
        space_text.textContent="O";
        gameController.check_wins(space_num);
        if (turn_counter == 9) {
            alert("tie!");
            clear_board();
          }

    }
    console.log(turn_counter);
    turn_counter += 1;   
}
  
function clear_board() {
  let all_spaces = gameboard.querySelectorAll("p");
  all_spaces.forEach(space => {
    space.textContent = "";
  })
  turn_counter = 1;
}
  
})();

const Player = (name) => {
    return {name, wins, losses, ties}
}

const displayController = (function() {

})();

const gameController = (function() {
  
function check_wins(space_num) {
    let row_values = [];
    let col_values = [];
    let diagonals = get_diagonals();
    let diagonal1 = diagonals.diagonal1;
    let diagonal2 = diagonals.diagonal2;
    let this_row = space_num.classList.item(1);
    let this_col = space_num.classList.item(2);
    let row_spaces_to_check = document.querySelectorAll("." + this_row);
    row_spaces_to_check.forEach(space => {
      row_values.push(space.textContent);
    });
    let col_spaces_to_check = document.querySelectorAll("." + this_col);
  col_spaces_to_check.forEach(space => {
      col_values.push(space.textContent);
    });
  if (row_values.every(value => 
    value == "X"
  )) {
    alert("Player 1 wins");
  }
  else if (row_values.every(value => 
    value == "O"
  )) {
    alert("Player 2 wins");
  }
  else if (col_values.every(value => 
    value == "X"
  )) {
    alert("Player 1 wins");
  }
  else if (col_values.every(value => 
    value == "O"
  )) {
    alert("Player 2 wins");
  }
  else if (diagonal1.every(value =>
    value == "X")) {
    alert("Player 1 wins");
    }
  else if (diagonal1.every(value =>
    value == "O")) {
    alert("Player 2 wins");
    }
  else if (diagonal2.every(value =>
    value == "X")) {
    alert("Player 1 wins");
    }
  else if (diagonal2.every(value =>
    value == "O")) {
    alert("Player 2 wins");
    }
}

function get_diagonals() {
  let diagonal1_positions = [".row1.col1 p",".row2.col2 p",".row3.col3 p"];
  let diagonal2_positions = [".row1.col3 p",".row2.col2 p",".row3.col1 p"];
  let diagonal1_marks = [];
  let diagonal2_marks = [];
  
  diagonal1_positions.forEach(position => {
    let this_space = document.querySelector(position);
    let this_mark = this_space.textContent;
    diagonal1_marks.push(this_mark);
  })
  
  diagonal2_positions.forEach(position => {
    let this_space = document.querySelector(position);
    let this_mark = this_space.textContent;
    diagonal2_marks.push(this_mark);
  })

  return {
    diagonal1: diagonal1_marks,
    diagonal2: diagonal2_marks
  };
}

return {
  check_wins: check_wins,
  get_diagonals: get_diagonals
}

})();
