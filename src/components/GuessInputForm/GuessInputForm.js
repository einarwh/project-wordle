import React from 'react';

function GuessInputForm({ addGuess }) {

  const [guessInput, setGuessInput] = React.useState('');

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        let guess = guessInput;
        console.log({guess});

        addGuess(guess);
        setGuessInput('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        value={guessInput}
        required
        pattern="[a-zA-Z]{5}"
        maxLength="5"
        onChange={(event) => {
          setGuessInput(event.target.value.toUpperCase());
        }} />
    </form>
  );
}

export default GuessInputForm;
