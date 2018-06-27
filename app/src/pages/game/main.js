import { State } from './models/state.js';
import { Renderer } from './renderer.js';

const MATKA_BALL_ANGLE_INCREASE_RANGE = 2;
const INITIAL_BALL_SPEED = 0.002;
const MATKA_SIZE = 0.1;

class Pong {
  constructor() {
    this.state = new State();
    this.renderer = new Renderer(this.state);
    this.start();

    this.player1ScoreEl = document.querySelector('#player1Score');
    this.player2ScoreEl = document.querySelector('#player2Score');
  }

  start() {
    this.state.ball.speed = INITIAL_BALL_SPEED;
    this.state.matkot[0].size = MATKA_SIZE;
    this.state.matkot[1].size = MATKA_SIZE;
    this.frame();
  }

  nextState() {
    const prevState = this.state;
    this.state = Object.create(this.state);
    Object.assign(this.state, prevState);
    this.handleBallMove();
    return this.state;
  }

  frame() {
    requestAnimationFrame(() => {
      this.renderer.paint(this.nextState());
      this.frame();
    });
  }

  moveMatka(matka, isUp) {
    this.state.matkot[matka].nextPosition(isUp);
  }

  handleBallMove() {
    this.ball.nextPosition();

    if (this.ballHitMatka) {
      setBallAngle(true);
    } else if (this.state.ball[0] === 0 || this.state.ball[0] === 1) {
      this.updateScore({scoredPlayer: this.state.ball[0] ? 0 : 1});
    } else if (this.ball.position[1] === 0 || this.ball.position[1] === 1) {
      setBallAngle(false);
    }
  }

  ballHitMatka() {
    if (
      this.ball.position[0] == 0 &&
      (this.ball.position[1] > this.matkot[0].yPosition &&
        this.ball.position[1] < this.matkot[0].yPosition + MATKA_SIZE)
    ) {
      return true;
    }
    if (
      this.ball.position[0] == 1 &&
      (this.ball.position[1] > this.matkot[1].yPosition &&
        this.ball.position[1] < this.matkot[1].yPosition + MATKA_SIZE)
    ) {
      return true;
    }
  }

  updateScore({ scoredPlayer }) {
    this._updateScore(
      scoredPlayer === 1 ? this.player1ScoreEl : this.player2ScoreEl
    );
  }

    /**
     * Called when the ball should change angle
     * @param isMatka Whether the ball hit the matka. If false, the ball hit one of the horizontal walls
     */
    setBallAngle(isMatka) {
        if (isMatka)
            this.state.ball.angle = this.getBallNewAngleOnMatkaHit();
        else
            this.state.ball.angle = 180 - this.state.ball.angle;
    }

    private getBallNewAngleOnMatkaHit() {
        const matka = this.state.matkot[this.state.ball.speed > 0 ? 1 : 0];
        const ballOffsetFromMatkaCenter = Math.abs(matka.yPosition + matka.size / 2 - this.state.ball.position.y);
        const hitRatio = ballOffsetFromMatkaCenter / matka.size;
        const newAngle = this.state.ball.angle * (1.5 * hitRatio - 0.5);

        return newAngle * -1;
    }

    _updateScore(element) {
        const score = Number(element.textContent);
        element.textContent = score + 1;
    }
}

export let game = new Pong();
