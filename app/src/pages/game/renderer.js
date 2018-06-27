export class Renderer {
    constructor(state) {
        this.lastState = state;

        this.ballEl = document.getElementById('ball');
        this.matka1El = document.getElementById('matka1');
        this.matka2El = document.getElementById('matka2');
    }

    paint(state) {

        this.ballEl.style.left = state.ball.position[0] + 'px';
        this.ballEl.style.top = state.ball.position[1] + 'px';

        this.matka1El.style.top = state.matkot[0].yPosition + 'px';
        this.matka2El.style.top = state.matkot[1].yPosition + 'px';

        this.lastState = state;
    }
}


