export class Matka{
    constructor(speed){
        this.yPosition = 0;
        this.speed = speed;
    }

    nextPosition(isUp){
        this.yPosition += Math.min(1, Math.max(this.yPosition * (isUp ? -1 : 1), this.speed * (isUp ? -1 : 1)));
    }
}