import {snakeSpeed, updateFrame as updateSnake,draw as drawSnake} from './snake.js';
import {updateFrame as updateFood,draw as drawFood} from './food.js';
import {getSnakeHead,snakeColid} from './snake.js';
import {boardOut} from './grid.js';
let lastRenderTime = 0;
let checkIfOver = false;
const gameBoard = document.querySelector(".game");
window.addEventListener("click", () => {
    window.requestAnimationFrame(main,lastRenderTime);
});
const main = (currentTime) => {
    if (checkIfOver) {
        if(confirm("you lost")) {
            window.location = "/"
        }
        return
    }
    const secSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main);
    if (secSinceLastRender < 1/snakeSpeed) return;
    lastRenderTime = currentTime;
    updateFrame();
    draw();
}
export const updateFrame = () => {
    updateSnake();
    updateFood();
    gameOver();
}
export const draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
const gameOver = () => {
    checkIfOver = boardOut(getSnakeHead()) || snakeColid();
}