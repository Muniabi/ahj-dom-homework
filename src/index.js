import "./styles.css";
import characterImg from "./goblin.png";

const CELLS_COUNT = 16;
const INTERVAL = 1000;

const container = document.querySelector(".game-container");
const field = document.createElement("div");
field.className = "game-field";

// Генерация игрового поля
for (let i = 0; i < CELLS_COUNT; i += 1) {
    const cell = document.createElement("div");
    cell.className = "cell";
    field.appendChild(cell);
}

container.appendChild(field);

// Создание персонажа
const character = document.createElement("img");
character.src = characterImg;
character.className = "character";
let currentCell = field.children[Math.floor(Math.random() * CELLS_COUNT)];
currentCell.appendChild(character);

// Перемещение персонажа
setInterval(() => {
    const cells = Array.from(field.children);
    const newCell = cells.filter((cell) => cell !== currentCell)[
        Math.floor(Math.random() * (CELLS_COUNT - 1))
    ];
    newCell.appendChild(character);
    currentCell = newCell;
}, INTERVAL);
