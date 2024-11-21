import React from 'react';

import { range } from '../../utils.js';

function Guess({ word }) {
  let colNumbers = range(0, 5);

  return (
    <p className="guess">
      {colNumbers.map(i => <span key={i} className="cell">{word[i]}</span>)}
    </p>
  );
}

export default Guess;
