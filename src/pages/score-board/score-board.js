export class ScoreBoard {
  constructor({ selector, scores }) {
    this.scores = scores;
  }

  init() {
    document.querySelector(selector).innerHTML = this._template;

    document.querySelector('.ScoreBoard__scores').
  }
}

const scoreItemTemplate = `
<div>
`;

document.querySelector('.ScoreBoard__scores').innerHTML = `
  <
`;
