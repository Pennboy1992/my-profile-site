import React, { useState } from 'react';

type Player = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<Player>(null);

  const checkWinner = (squares: Player[]): Player => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Tic-Tac-Toe</h1>
      <div className="mb-4">
        {winner
          ? `Winner: ${winner}`
          : board.every((square) => square !== null)
          ? "It's a draw!"
          : `Current player: ${currentPlayer}`}
      </div>
      <div className="flex flex-wrap w-60 mb-4">
        {board.map((square, index) => (
          <button
            key={index}
            className="w-20 h-20 text-4xl font-bold bg-white border border-gray-300 focus:outline-none flex items-center justify-center"
            onClick={() => handleClick(index)}
          >
            {square || '-'}
          </button>
        ))}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={resetGame}
      >
        Reset Game
      </button>
      <div className="mt-4">Debug: Board state: {JSON.stringify(board)}</div>
    </div>
  );
};

export default TicTacToe;
