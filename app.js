let cells = document.querySelectorAll(".tile");
let board = document.getElementById("board");

let current_turn = 0;
const board_width = 7;
const board_height = 6;

cells.forEach((cell) => {
  cell.onclick = () => {
    if (!cell.classList.contains("o") && !cell.classList.contains("x")) {
      if (current_turn % 2 === 0) {
        cell.classList.add("o");
      } else {
        cell.classList.add("x");
      }
    }

    current_turn += 1;

    for (let x = 0; x < board_width; x++) {
      for (let y = 0; y < board_height; y++) {
        let current_cell = board.children[y].children[x];

        if (
          current_cell.classList.contains("o") ||
          current_cell.classList.contains("x")
        ) {
          if (y < board_height - 1) {
            let lower_cell = board.children[y + 1].children[x];
            if (
              !lower_cell.classList.contains("o") &&
              !lower_cell.classList.contains("x")
            ) {
              if (current_cell.classList.contains("o")) {
                lower_cell.classList.add("o");
                current_cell.classList.remove("o");
              }
              if (current_cell.classList.contains("x")) {
                lower_cell.classList.add("x");
                current_cell.classList.remove("x");
              }
            }
          }
        }
      }
    }
  };
});
