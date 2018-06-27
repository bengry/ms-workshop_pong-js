export class Renderer {
    constructor(state) {
        this.lastState = {...state};

        this.boardEl = document.getElementById('board');
        this.ballEl = document.getElementById('ball');
        this.matka1El = document.getElementById('matka1');
        this.matka2El = document.getElementById('matka2');

        this.boardSize = [this.boardEl.offsetWidth, this.boardEl.offsetHeight];
    }

    paint(state) {
        this.ballEl.style.left = (state.ball.position[0] * this.boardSize[0]) + 'px';
        this.ballEl.style.top = (state.ball.position[1] * this.boardSize[1]) + 'px';

        this.lastState = {...state};
    }
}


