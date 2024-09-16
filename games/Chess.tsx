import React, { useState, useEffect } from 'react';

type Piece = 'P' | 'R' | 'N' | 'B' | 'Q' | 'K' | 'p' | 'r' | 'n' | 'b' | 'q' | 'k' | null;
type Board = Piece[][];

const initialBoard: Board = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

const Chess: React.FC = () => {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState<[number, number] | null>(null);
  const [playerTurn, setPlayerTurn] = useState<boolean>(true);

  useEffect(() => {
    console.log("Chess component mounted");
    return () => console.log("Chess component unmounted");
  }, []);

  useEffect(() => {
    if (!playerTurn) {
      const timer = setTimeout(computerMove, 500);
      return () => clearTimeout(timer);
    }
  }, [playerTurn]);

  const isValidMove = (from: [number, number], to: [number, number]): boolean => {
    // Implement chess rules here
    console.log(`Checking move from ${from} to ${to}`);
    return true; // Placeholder
  };

  const handleClick = (row: number, col: number) => {
    console.log(`Clicked on square: ${row}, ${col}`);
    if (!playerTurn) return;

    if (selectedPiece) {
      if (isValidMove(selectedPiece, [row, col])) {
        const [selectedRow, selectedCol] = selectedPiece;
        const newBoard = [...board];
        newBoard[row][col] = board[selectedRow][selectedCol];
        newBoard[selectedRow][selectedCol] = null;
        setBoard(newBoard);
        setSelectedPiece(null);
        setPlayerTurn(false);
      } else {
        setSelectedPiece(null);
      }
    } else if (board[row][col] && board[row][col]?.toUpperCase() === board[row][col]) {
      setSelectedPiece([row, col]);
    }
  };

  const computerMove = () => {
    console.log("Computer is making a move");
    // Simple random move for the computer
    const blackPieces: [number, number][] = [];
    board.forEach((row, i) => {
      row.forEach((piece, j) => {
        if (piece && piece.toLowerCase() === piece) {
          blackPieces.push([i, j]);
        }
      });
    });

    if (blackPieces.length > 0) {
      const [fromRow, fromCol] = blackPieces[Math.floor(Math.random() * blackPieces.length)];
      let toRow, toCol;
      do {
        toRow = Math.floor(Math.random() * 8);
        toCol = Math.floor(Math.random() * 8);
      } while (board[toRow][toCol] !== null);

      const newBoard = [...board];
      newBoard[toRow][toCol] = board[fromRow][fromCol];
      newBoard[fromRow][fromCol] = null;
      setBoard(newBoard);
    }

    setPlayerTurn(true);
  };

  const renderSquare = (row: number, col: number) => {
    const piece = board[row][col];
    const isSelected = selectedPiece && selectedPiece[0] === row && selectedPiece[1] === col;
    const squareColor = (row + col) % 2 === 0 ? 'bg-amber-200' : 'bg-amber-800';
    const pieceColor = piece && piece.toLowerCase() === piece ? 'text-gray-900' : 'text-gray-100';

    return (
      <div
        key={`${row}-${col}`}
        className={`w-12 h-12 flex items-center justify-center ${squareColor} ${
          isSelected ? 'border-2 border-yellow-400' : ''
        }`}
        onClick={() => handleClick(row, col)}
      >
        {piece && <span className={`text-3xl ${pieceColor}`}>{getPieceSymbol(piece)}</span>}
      </div>
    );
  };

  const getPieceSymbol = (piece: Piece): string => {
    const symbols: { [key: string]: string } = {
      P: '♙', R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔',
      p: '♟', r: '♜', n: '♞', b: '♝', q: '♛', k: '♚',
    };
    return symbols[piece] || '';
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Chess Game</h1>
      <div className="mb-4">
        {playerTurn ? "Your turn" : "Computer's turn"}
      </div>
      <div className="grid grid-cols-8 gap-0 border-4 border-amber-900">
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => renderSquare(rowIndex, colIndex))
        )}
      </div>
    </div>
  );
};

export default Chess;