const scoresLocalStorageKey = 'scores';
const playersLocalStorageKey = 'players';

const getItem = key => JSON.parse(localStorage.getItem(key));

const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const state = {
  scores: {
    get() {
      return getItem(scoresLocalStorageKey);
    },
    set(value) {
      if (!Array.isArray(value)) {
        throw new Error(`value must be an array.`);
      }

      setItem(scoresLocalStorageKey, value);
    },
  },
  players: {
    get() {
      return getItem(playersLocalStorageKey);
    },
    set(value) {
      if (!Array.isArray(value)) {
        throw new Error(`value must be an array.`);
      }

      setItem(playersLocalStorageKey, value);
    },
  },
};
