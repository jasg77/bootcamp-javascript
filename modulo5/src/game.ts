interface Card {
    suit: string;
    value: number;
    name: string;
    image: string;
}

const deck: Card[] = [
    { suit: 'copas', value: 1, name: 'As', image: 'images/1_as-copas.jpg' },
    { suit: 'copas', value: 2, name: 'Dos', image: 'images/2_dos-copas.jpg' },
    { suit: 'copas', value: 3, name: 'Tres', image: 'images/3_tres-copas.jpg' },
    { suit: 'copas', value: 4, name: 'Cuatro', image: 'images/4_cuatro-copas.jpg' },
    { suit: 'copas', value: 5, name: 'Cinco', image: 'images/5_cinco-copas.jpg' },
    { suit: 'copas', value: 6, name: 'Seis', image: 'images/6_seis-copas.jpg' },
    { suit: 'copas', value: 7, name: 'Siete', image: 'images/7_siete-copas.jpg' },
    { suit: 'copas', value: 0.5, name: 'Sota', image: 'images/10_sota-copas.jpg' },
    { suit: 'copas', value: 0.5, name: 'Caballo', image: 'images/11_caballo-copas.jpg' },
    { suit: 'copas', value: 0.5, name: 'Rey', image: 'images/12_rey-copas.jpg' },
];

let playerHand: Card[] = [];
let playerScore: number = 0;
let gameOver: boolean = false;

function getRandomCard(): Card {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    if (scoreDiv) {
        scoreDiv.textContent = `Puntuación: ${playerScore}`;
    }
}

function showCard(card: Card) {
    const cardImage = document.getElementById('cardImage') as HTMLImageElement;
    if (cardImage) {
        cardImage.src = card.image;
        cardImage.alt = `${card.name} de ${card.suit}`;
    }
}

export function drawCard() {
    if (gameOver) return;

    const card = getRandomCard();
    playerHand.push(card);
    playerScore += card.value;
    showCard(card);
    updateScore();

    if (playerScore > 7.5) {
        alert('¡Te has pasado! Has perdido.');
        gameOver = true;
        document.getElementById('newGame')!.style.display = 'block';
    } else if (playerScore === 7.5) {
        alert('¡Felicidades! Has ganado.');
        gameOver = true;
        document.getElementById('newGame')!.style.display = 'block';
    }
}

export function stand() {
    if (gameOver) return;

    gameOver = true;
    let message = '';
    if (playerScore < 4) {
        message = 'Has sido muy conservador';
    } else if (playerScore === 5) {
        message = 'Te ha entrado el canguelo eh?';
    } else if (playerScore === 6 || playerScore === 7) {
        message = 'Casi casi...';
    } else if (playerScore === 7.5) {
        message = '¡Lo has clavado! ¡Enhorabuena!';
    }
    alert(message);
    document.getElementById('newGame')!.style.display = 'block';
}

export function startGame() {
    playerHand = [];
    playerScore = 0;
    gameOver = false;
    updateScore();
    showCard({ suit: '', value: 0, name: '', image: 'images/back.jpg' });
    document.getElementById('newGame')!.style.display = 'none';
}
