import {Ball} from "./ball";
import {Score} from "./score";
import {Matka} from "./matka";
import {Player} from "./player";

export class State{
    constructor(){
        this.ball = new Ball(0, [0.5,0.5], Math.random());
        this.score = new Score();
        this.matkot = [new Matka(), new Matka];
        this.players = [new Player, new Player];
    }
}