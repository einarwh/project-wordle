import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInputForm from '../GuessInputForm/GuessInputForm';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {

  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    setGuesses([...guesses, guess ]);
  }

  return (
    <div>
      <GuessList guesses={guesses} />
      <GuessInputForm addGuess={addGuess} />
    </div>
  );
}

export default Game;
