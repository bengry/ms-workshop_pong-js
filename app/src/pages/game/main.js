import {State} from "./models/state.js";

const INITIAL_BALL_SPEED = 1;


class Pong{
    constructor(){
        this.state = new State();
        this.start();
    }

    start(){
        this.state.ball.speed = INITIAL_BALL_SPEED;
        this.frame()
    }

    nextState(){
        const prevState = this.state;
        this.state = Object.create(this.state);
        Object.assign(this.state, prevState);
        this.state.ball.nextPosition();
        return this.state;
    }

    frame(){
        requestAnimationFrame(() => {
            this.nextState();
            this.frame();
        });
    }

    moveMatka(matka, isUp){
        this.state.matkot[matka].nextPosition(isUp);
    }
}

export let game = new Pong;
