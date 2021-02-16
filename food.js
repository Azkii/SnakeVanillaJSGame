import {onSnake,expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'
const randomizeFoodPosition = () => {
    let newFoodPos = null;
    while (newFoodPos === null || onSnake(newFoodPos)) {
        newFoodPos = randomGridPosition();
    }
    return newFoodPos
}
let food = randomizeFoodPosition();
const expenSnake = 10;
export const updateFrame = () => {
    if (onSnake(food)) {
        expandSnake(expenSnake);
        food = randomizeFoodPosition();
    }
}
export const draw = (gameBoard) => {
    const foodElem = document.createElement('div');
    foodElem.style.gridRowStart = food.y;
    foodElem.style.gridColumnStart = food.x;
    foodElem.classList.add('food');
    gameBoard.appendChild(foodElem);
}