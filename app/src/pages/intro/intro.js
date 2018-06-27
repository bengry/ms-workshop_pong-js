import { state } from '../../storage/storage.js';

export class Intro {
  constructor({ playerInputs, onSave }) {
    this._form = document.querySelector('form.Intro__Form');
    this._form.addEventListener('submit', e => {
      e.preventDefault();

      const [player1Input, player2Input] = playerInputs;

      onSave([
        {
          name: player1Input.value,
        },
        {
          name: player2Input.value,
        },
      ]);
    });
  }
}

const readLastState = () => {
  const lastPlayers = state.players.get();
  if (!lastPlayers) {
    return [];
  }

  return lastPlayers.map(p => p.name);
};

const player1InputEl = document.querySelector('#Intro__Player1__input');
const player2InputEl = document.querySelector('#Intro__Player2__input');

const lastPlayers = readLastState();
if (lastPlayers) {
  player1InputEl.value = lastPlayers[0];
  player2InputEl.value = lastPlayers[1];
}

new Intro({
  playerInputs: [
    document.querySelector('#Intro__Player1__input'),
    document.querySelector('#Intro__Player2__input'),
  ],
  onSave: players => {
    state.players.set(players);

    window.location.href = '../game/index.html';
  },
});
