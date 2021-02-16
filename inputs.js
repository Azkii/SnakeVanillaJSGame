let inputDirection = {x: 0, y: 0};
let lastInputDirect = {x: 0, y: 0};
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirect.y !== 0) break;
            inputDirection = {x:0,y:-1};
            break
        case 'ArrowDown':
            if (lastInputDirect.y !== 0) break;
            inputDirection = {x:0,y:1};
            break
        case 'ArrowLeft':
            if (lastInputDirect.x !== 0) break;
            inputDirection = {x:-1,y:0};
            break
        case 'ArrowRight':
            if (lastInputDirect.x !== 0) break;
            inputDirection = {x:1,y:0};
            break
    }
});
export const getInputDirection = () => {
    lastInputDirect = inputDirection;
    return inputDirection
}