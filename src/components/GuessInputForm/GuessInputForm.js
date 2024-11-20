import React from 'react';

function GuessInputForm() {

  const [guessInput, setGuessInput] = React.useState('');

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        console.log("Now what?");
        let guess = guessInput;
        console.log("Guess: " + guess);
        
        setGuessInput('');


      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        value={guessInput}
        required
        pattern="\w{5}"
        maxLength="5"
        onChange={(event) => {
          setGuessInput(event.target.value.toUpperCase());
        }} />
    </form>
  );
}

export default GuessInputForm;
