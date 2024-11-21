import React from 'react';

import Guess from '../Guess/Guess';
import { range } from '../../utils.js';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function GuessList({ guesses }) {
  let rowNumbers = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      { rowNumbers.map(i => <Guess key={i} word={guesses[i] || ""} />) }
    </div>
  );
}

export default GuessList;
