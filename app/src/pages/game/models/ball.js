export class Ball{

    constructor(speed, position, angle){
        this.speed = speed;
        this.position = position;
        this.angle = angle;
    }

    nextPosition(){
        const x1 = this.position[0];
        const y1 = this.position[1];
        const radianAngle = this.angle * Math.PI / 180;

        this.position = [x1 + this.speed * Math.cos(radianAngle), y1 + this.speed * Math.sin(radianAngle)];
    }
}