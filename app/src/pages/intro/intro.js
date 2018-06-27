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

const intro = new Intro({
  playerInputs: [
    document.querySelector('#Intro__Player1__input'),
    document.querySelector('#Intro__Player2__input'),
  ],
  onSave: players => {
    state.players.set(players);

    window.location.replace('../game/index.html');
  },
});
