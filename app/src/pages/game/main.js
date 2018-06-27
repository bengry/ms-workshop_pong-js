import {State} from "./models/state.js";
import {Renderer} from "./renderer.js";

const INITIAL_BALL_SPEED = 0.002;


class Pong{
    constructor(){
        this.state = new State();
        this.renderer = new Renderer(this.state);
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
            this.renderer.paint(this.nextState());
            this.frame();
        });
    }

    moveMatka(matka, isUp){
        this.state.matkot[matka].nextPosition(isUp);
    }

    handleBallMove(){
        this.ball.nextPosition();


    }

    ballHitMatka(){
        if(this.ball.position[0] == 0 && 
            (this.ball.position[1] > this.matkot[0].yPosition && this.ball.position[1] < this.matkot[0].yPosition + 0.1)){
                console.log('in matka');
            }
    }
}

export let game = new Pong;
