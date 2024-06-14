let allGrid = document.querySelectorAll(".grid");
let turn = "X";
let turnPh = document.querySelector(".turn");
let audioTurn = new Audio("./assets/music/ting.mp3");
let gameOver = new Audio("./assets/music/gameover.mp3");

// Function to change turn
const changeTurn = () => {
  turn = turn === "X" ? "O" : "X";
  turnPh.innerHTML = turn;
};

// Function to check for a Win
const checkWin = () => {
  var gridTxt = document.querySelectorAll(".gridTxt");
  var info = document.querySelector(".info");
  var win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winner = null;
  win.forEach((e) => {
    if (
      gridTxt[e[0]].innerText === gridTxt[e[1]].innerText &&
      gridTxt[e[0]].innerText === gridTxt[e[2]].innerText &&
      gridTxt[e[0]].innerText !== ""
    ) {
      winner = gridTxt[e[0]].innerText;
    }
  });

  if (winner) {
    info.innerText = `${winner} Won`;
    info.style.fontSize = "5rem";
    info.style.color = "cyan";
    info.style.textShadow = "0 0 1vw #00eeff, 0 0 1vw #00eeff";
    info.style.fontFamily = "hf";
    audioTurn.pause();
    gameOver.play();
  } else {
    // Check for tie
    let isTie = true;
    gridTxt.forEach((box) => {
      if (box.innerText === "") {
        isTie = false;
      }
    });
    if (isTie) {
      info.innerText = "Its a Tie";
      info.style.fontSize = "5rem";
      info.style.color = "cyan";
      info.style.textShadow = "0 0 1vw #00eeff, 0 0 1vw #00eeff";
      info.style.fontFamily = "hf";
    }
  }
};

// Function to reset game
const resetGame = () => {
  var btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    btn.style.borderBottom = "none";
    btn.style.borderRight = "none";
    btn.style.borderTop = "5px solid rgb(44, 59, 59)";
    btn.style.borderLeft = "5px solid rgb(44, 59, 59)";
    location.reload();
    gameOver.play();
  });
};

// Function to make move
allGrid.forEach((e) => {
  var gridTxt = e.querySelector(".gridTxt");
  e.addEventListener("click", () => {
    if (gridTxt.innerHTML === "") {
      gridTxt.innerHTML = turn;
      audioTurn.play();
      checkWin();
      changeTurn();
      resetGame();
    } else {
      alert("This Block is Already Occupied!");
    }
  });
});
