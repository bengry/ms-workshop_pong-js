import { state } from '../../storage/storage.js';

const scoreItemTemplate = ({ name, value }) => `
  <li class="ScoreBoard__ScoreItem">
    <span class="ScoreBoard__ScoreItem__Name">${name}</span>
    <span class="ScoreBoard__ScoreItem__Score">${value}</span>
  </li>
`;

export class ScoreBoard {
  constructor({ scores }) {
    this.scores = scores;
  }

  init() {
    this._scoreListEl = document.querySelector('.ScoreBoard__Scores > ul');
    this._addScoreItems();
  }

  _addScoreItems() {
    const scoreItems = this.scores.map(score => scoreItemTemplate(score));
    this._scoreListEl.innerHTML = scoreItems.join('');
  }
}

const scores = state.scores.get();
const scoreBoard = new ScoreBoard({ scores });
scoreBoard.init();
