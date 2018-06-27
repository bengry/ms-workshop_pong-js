export class Matka{
    constructor(speed){
        this.yPosition = 0;
        this.speed = speed;
        this.size = 0;
    }

    nextPosition(isUp){
        this.yPosition += Math.min(1, Math.max(0, this.speed * (isUp ? -1 : 1)));
    }
}