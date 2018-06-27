import {State} from "./models/state.js";

const INITIAL_BALL_SPEED = 1;

game = new Pong;

class Pong{
    constructor(){
        this.state = new State();
    }

    start(){
        this.state.ball.speed = INITIAL_BALL_SPEED;

    }

    nextState(){
        this.state = Object.create(this.state)
        this.state.ball.nextPosition();
        return this.state;
    }
}