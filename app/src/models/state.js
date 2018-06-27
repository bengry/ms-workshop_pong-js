import {Ball} from "./ball.js";
import {Score} from "./score.js";
import {Matka} from "./matka.js";
import {Player} from "./player.js";
import {state} from "../state/state.js"

export class State{
    constructor(){
        const randAngle = (Math.random() < 0.5 ? 1 : -1) * (60 + Math.random() * 60);
        this.ball = new Ball(0, [0.5,0.5], randAngle);
        this.score = new Score();
        this.matkot = [new Matka(), new Matka()];
        this.players = [new Player('Tal'), new Player('Yossi')];
    }
}