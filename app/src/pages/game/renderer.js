export class Renderer {
    constructor() {
        this.boardEl = document.getElementById('board');
        this.ballEl = document.getElementById('ball');
        this.matka1El = document.getElementById('matka1');
        this.matka2El = document.getElementById('matka2');
    }

    paint(state) {
        this.ballEl.style.left = state.ball.position[0] + 'px';
        this.ballEl.style.top = state.ball.position[1] + 'px';
    }
}


