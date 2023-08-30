let cells = document.querySelectorAll('.row div');
let count = 0;
let gameOver = false;
let winnerText = document.querySelector('.board p');
let player = 'Player One';
let boardClick = document.querySelector('.board');

boardClick.addEventListener('click', gameIsOver, true);

function gameIsOver() {
    if (gameOver == true) {
        window.location.reload();
    }
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', playerClick);
}

function playerClick() {
    if (gameOver == true) { 
        gameIsOver();
    } else if (count % 2 == 0) {
        this.textContent = 'X';
        count++;
        player = 'Player One'
        gameOverCheck();
    } else {
        this.textContent = 'O';
        count++;
        player = 'Player Two'
        gameOverCheck();
    }
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent != '') {
            cells[i].removeEventListener('click', playerClick);
        }
    }
};

function gameOverCheck() {
    for (let i = 0; i < cells.length; i++) {
    }

    let topWin = cells[0].textContent + cells[1].textContent + cells[2].textContent;
    let centerWin = cells[3].textContent + cells[4].textContent + cells[5].textContent;
    let bottomWin = cells[6].textContent + cells[7].textContent + cells[8].textContent;
    let leftWin = cells[0].textContent + cells[3].textContent + cells[6].textContent;
    let middleWin = cells[1].textContent + cells[4].textContent + cells[7].textContent;
    let rightWin = cells[2].textContent + cells[5].textContent + cells[8].textContent;
    let tlbrWin = cells[0].textContent + cells[4].textContent + cells[8].textContent;
    let trblWin = cells[2].textContent + cells[4].textContent + cells[6].textContent;
    winCheck = [topWin, centerWin, bottomWin, leftWin, middleWin, rightWin, tlbrWin, trblWin];
    for (let i = 0; i < winCheck.length; i++) {
        if (winCheck[i] == 'XXX' || winCheck[i] == 'OOO') {
            winnerText.textContent = player + ' wins!';
            gameOver = true
        } else if (gameOver == false && count == 9) {
            winnerText.textContent = 'It\'s a draw!';
            gameOver = true
        }
    }
};