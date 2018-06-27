import {State} from "./models/state.js";

const INITIAL_BALL_SPEED = 1;
const MATKA_BALL_ANGLE_INCREASE_RANGE = 2;

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

    /**
     * Called when the ball should change angle
     * @param isMatka Whether the ball hit the matka. If false, the ball hit one of the horizontal walls
     */
    setBallAngle(isMatka){
        if (isMatka)
            this.state.ball.angle = this.getBallNewAngleOnMatkaHit();
        else
            this.state.ball.angle = 180 - this.state.ball.angle;
    }

    private getBallNewAngleOnMatkaHit(){
        const matka = this.state.matkot[this.state.ball.speed > 0 ? 1 : 0];
        const ballOffsetFromMatkaCenter = Math.abs(matka.yPosition + matka.size / 2 - this.state.ball.position.y);
        const hitRatio = ballOffsetFromMatkaCenter / matka.size;
        const newAngle = this.state.ball.angle * (1.5 * hitRatio - 0.5);

        return newAngle * -1;
    }
}

let game = new Pong;
