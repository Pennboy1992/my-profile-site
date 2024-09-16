import React, { useState, useEffect } from 'react';

const words = ['react', 'typescript', 'javascript', 'next', 'tailwind', 'node','redis','aws','docker','kubernetes'];

const hangmanStates = [
  `
   +---+
   |   |
       |
       |
       |
       |
=========`,
  `
   +---+
   |   |
   O   |
       |
       |
       |
=========`,
  `
   +---+
   |   |
   O   |
   |   |
       |
       |
=========`,
  `
   +---+
   |   |
   O   |
  /|   |
       |
       |
=========`,
  `
   +---+
   |   |
   O   |
  /|\\  |
       |
       |
=========`,
  `
   +---+
   |   |
   O   |
  /|\\  |
  /    |
       |
=========`,
  `
   +---+
   |   |
   O   |
  /|\\  |
  / \\  |
       |
=========`
];

const Hangman: React.FC = () => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [remainingGuesses, setRemainingGuesses] = useState(6);

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const guessLetter = (letter: string) => {
    if (guessedLetters.has(letter)) return;

    const newGuessedLetters = new Set(guessedLetters);
    newGuessedLetters.add(letter);
    setGuessedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      setRemainingGuesses(remainingGuesses - 1);
    }
  };

  const maskedWord = word
    .split('')
    .map(letter => (guessedLetters.has(letter) ? letter : '_'))
    .join(' ');

  const isGameOver = remainingGuesses === 0;
  const isGameWon = word.split('').every(letter => guessedLetters.has(letter));

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const keyboardRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    
  ];

  return (
    <div className="flex flex-col items-center mt-8 w-full max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Hangman Game</h1>
      <pre className="font-mono text-sm text-center whitespace-pre-wrap">{hangmanStates[6 - remainingGuesses]}</pre>
      <div className="text-xl font-mono text-center">{maskedWord}</div>
      <div className="text-center">Remaining Guesses: {remainingGuesses}</div>
      <div className="text-center">
        Guessed Letters: {Array.from(guessedLetters).join(', ')}
      </div>
      {!isGameOver && !isGameWon && (
        <div className="w-full bg-gray-800 p-2 rounded-xl">
          {keyboardRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center mb-2">
              {row.map(key => (
                <button
                  key={key}
                  onClick={() => guessLetter(key)}
                  disabled={guessedLetters.has(key)}
                  className={`
                    w-10 h-12 mx-1 text-center border rounded-md font-semibold text-white text-lg 
                    ${guessedLetters.has(key) ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'}
                  `}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
      {isGameOver && <div className="text-red-500 text-center">Game Over! The word was: {word}</div>}
      {isGameWon && <div className="text-green-500 text-center">Congratulations! You guessed the word!</div>}
    </div>
  );
};

export default Hangman;
