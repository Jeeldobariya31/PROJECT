let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgames = document.querySelector("#newgame");
let msgsc = document.querySelector(".msg");
let msgsp = document.querySelector("#msgs");
let valso = document.querySelector("#true");
let valsx = document.querySelector("#false");

let turnO = null; // null means no one has been selected yet

const winpatterns = [
    [0,1,2], [0,3,6], [0,4,8],
    [1,4,7], [2,5,8], [2,4,6],
    [3,4,5], [6,7,8]
];

// Set turn based on button click
const setx = (val) => {
    turnO = val;
    msgsc.classList.add("hide");
    enables();
};

// Show winner message
const showwin = (winner) => {
    msgsp.innerText = `🎉 Congratulations! Winner is: ${winner}`;
    msgsc.classList.remove("hide");
};

// Show message (error/info)
const showerror = (text) => {
    msgsp.innerText = text;
    msgsc.classList.remove("hide");
};

// Disable all boxes
const disables = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Enable and clear all boxes
const enables = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Reset the game and force new player selection
const resetGame = () => {
    turnO = null; // force new selection
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = true;
    }
    showerror("🔁 Game reset. Please select O or X to start.");
};

// Check winner
const cheakWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            disables();
            showwin(pos1val);
        }
    }
};

// Handle box clicks
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO === null) {
            showerror("❗ Please select who starts (O or X)");
            return;
        }

        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        box.disabled = true;
        turnO = !turnO; // toggle
        cheakWinner();
    });
});

// Set up selection buttons
valso.addEventListener("click", () => setx(true));   // O first
valsx.addEventListener("click", () => setx(false));  // X first

// Reset/New Game
newgames.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
