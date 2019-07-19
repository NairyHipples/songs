import { SONG_SELECTED } from './action-types';

// Action creator
export const selectSong = song => {
  // Return an action
  return { type: SONG_SELECTED, payload: song };
};
