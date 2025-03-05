import { startGame, drawCard, stand } from './game';

const app = document.getElementById('app');

if (app) {
    const drawCardButton = document.getElementById('drawCard');
    const standButton = document.getElementById('stand');
    const newGameButton = document.getElementById('newGame');

    drawCardButton?.addEventListener('click', drawCard);
    standButton?.addEventListener('click', stand);
    newGameButton?.addEventListener('click', startGame);

    startGame();
}
