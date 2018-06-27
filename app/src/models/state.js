import {Ball} from "./ball";
import {Score} from "./score";
import {Matka} from "./matka";
import {Player} from "./player";

export class State{
    constructor(){
        const randAngle = 60 + (Math.random() < 0.5 ? 0 : 180) + Math.random() * 60 ;
        this.ball = new Ball(0, [0.5,0.5], randAngle);
        this.score = new Score();
        this.matkot = [new Matka(), new Matka()];
        this.players = [new Player, new Player];
    }
}