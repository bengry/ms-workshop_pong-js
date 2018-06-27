import {State} from "./models/state.js";
import {Renderer} from "./renderer.js";

const INITIAL_BALL_SPEED = 0.002;
const MATKA_SIZE = 0.1


class Pong{
    constructor(){
        this.state = new State();
        this.renderer = new Renderer(this.state);
        this.start();
    }

    start(){
        this.state.ball.speed = INITIAL_BALL_SPEED;
        this.state.matkot[0].size = MATKA_SIZE;
        this.state.matkot[1].size = MATKA_SIZE;
        this.frame()
    }

    nextState(){
        const prevState = this.state;
        this.state = Object.create(this.state);
        Object.assign(this.state, prevState);
        this.state.ball.handleBallMove();
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

        if (this.ballHitMatka){
            setBallAngle(true);
        }
        else if (this.state.ball[0] === 0 || this.state.ball[0] === 1){
            log.console('goallllllllllllll!')
        }
        else if (this.ball.position[1] === 0 || this.ball.position[1] === 1) {
            setBallAngle(false)
        }
    }

    ballHitMatka(){
        if(this.ball.position[0] == 0 && 
            (this.ball.position[1] > this.matkot[0].yPosition && this.ball.position[1] < this.matkot[0].yPosition + MATKA_SIZE)){
                return true;
            }
        if(this.ball.position[0] == 1 && 
            (this.ball.position[1] > this.matkot[1].yPosition && this.ball.position[1] < this.matkot[1].yPosition + MATKA_SIZE)){
                return true;
            }        
    }
}

export let game = new Pong;
