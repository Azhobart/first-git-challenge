let cells = document.querySelectorAll(".tile");

let current_turn = 0;

cells.forEach((cell) => {
  cell.onclick = () => {
    if (current_turn % 2 === 0) {
      cell.classList.add("x");
      cell.innerHTML = "x";
    } else {
      cell.classList.add("o");
      cell.innerHTML = "o";
    }

    current_turn += 1;
  };
});
