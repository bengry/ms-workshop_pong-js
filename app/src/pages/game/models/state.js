import {Ball} from "./ball.js";
import {Score} from "./score.js";
import {Matka} from "./matka.js";
import {Player} from "./player.js";

const MATKA_SPEED = 5;

export class State{
    constructor(){
        const randAngle = (Math.random() < 0.5 ? 1 : -1) * (60 + Math.random() * 60);
        this.ball = new Ball(0, [0.5,0.5], randAngle);
        this.score = new Score();
        this.matkot = [new Matka(MATKA_SPEED), new Matka(MATKA_SPEED)];
        this.players = [new Player('Tal'), new Player('Yossi')];

        console.log("INIT state", this);
    }

    toString(){
        return `Ball: ${this.ball}`;
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