class state{
    constructor(){
        this.ball = new Ball(0, [0.5,0.5], Math.random());
        this.score = new score();
        this.matkot = [new Matka(), new Matka];
        this.players = [new Player, new Player];
    }
}