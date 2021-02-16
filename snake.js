import { getInputDirection } from "./inputs.js";
export const snakeSpeed = 10;
const snakeBody = [
    {x: 11, y: 11},
];
let newSeg = 0;
export const updateFrame = () => {
    addSegment();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i-- ) {
        snakeBody[i + 1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}
export const draw = (gameBoard) => {
    snakeBody.forEach(piece => {
        const snakeElem = document.createElement('div');
        snakeElem.style.gridRowStart = piece.y;
        snakeElem.style.gridColumnStart = piece.x;
        snakeElem.classList.add('snake');
        gameBoard.appendChild(snakeElem);
    })
}
export const expandSnake = (amount) => {
    newSeg += amount;
}
export const onSnake = (position,ignoreHead  = false) => {
    return snakeBody.some((segment,index) => {
        if (ignoreHead && index === 0) return false
        return eqPosition(segment,position);
    })
}
const eqPosition = (pos1,pos2) => {
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}
const addSegment = () => {
    for (let i = 0; i < newSeg; i++) {
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newSeg = 0;
}
export const getSnakeHead = () => {
    return snakeBody[0];
}
export const snakeColid = () => {
    return onSnake(snakeBody[0],{ignore:true});
}