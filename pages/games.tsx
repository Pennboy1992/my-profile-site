import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

const ChessDynamic = dynamic(() => import('../games/Chess'), { 
  ssr: false,
  loading: () => <p>Loading Chess game...</p>
});

const Hangman = dynamic(() => import('../games/Hangman'), { 
  ssr: false,
  loading: () => <p>Loading Hangman game...</p>
});

const TicTacToe = dynamic(() => import('../games/TickTacToe'), {
    ssr: false,
    loading: () => <p>Loading Tic-Tac-Toe game...</p>
  });

const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  useEffect(() => {
    console.log('Selected game:', selectedGame);
  }, [selectedGame]);

  return (
    <div className="flex flex-col items-center space-y-6 w-full max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Games</h1>
      <ul className="list-disc list-inside space-y-2">
        <li 
          className="cursor-pointer hover:text-blue-600"
          onClick={() => setSelectedGame('chess')}
        >
          Chess
        </li>
        <li 
          className="cursor-pointer hover:text-blue-600"
          onClick={() => setSelectedGame('hangman')}
        >
          Hangman
        </li>
        <li
          className="cursor-pointer hover:text-blue-600"
          onClick={() => setSelectedGame('tictactoe')}
        >
          Tic-Tac-Toe
        </li>
      </ul>
      <div className="w-full">
        <p>Debug: Selected game: {selectedGame}</p>
        <Suspense fallback={<div>Loading...</div>}>
          {selectedGame === 'chess' && (
            <div className="flex justify-center">
              <ChessDynamic />
            </div>
          )}
          {selectedGame === 'hangman' && (
            <div className="flex justify-center">
              <Hangman />
            </div>
          )}
          {selectedGame === 'tictactoe' && (
            <div className="flex justify-center">
              <TicTacToe />
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Games;