import {Ball} from "./ball.js";
import {Score} from "./score.js";
import {Matka} from "./matka.js";
import {Player} from "./player.js";

export class State{
    constructor(){
        const randAngle = 60 + (Math.random() < 0.5 ? 0 : 180) + Math.random() * 60 ;
        this.ball = new Ball(0, [0.5,0.5], randAngle);
        this.score = new Score();
        this.matkot = [new Matka(), new Matka()];
        this.players = [new Player, new Player];
    }
}