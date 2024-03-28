import React, { useState } from 'react';
import '../styles/TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    if (board[index] === null && !gameOver) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const calculateWinner = () => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (!board.includes(null)) {
      return 'Draw';
    }

    return null;
  };

  const winner = calculateWinner();

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setGameOver(false);
  };

  React.useEffect(() => {
    if (winner) {
      setGameOver(true);
    }
  }, [winner]);

  return (
    <div className="game">
      <div className="game-board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="game-info">
        {winner ? (
          <div>
            <p>{winner === 'Draw' ? "It's a draw!" : `Winner: ${winner}`}</p>
            {gameOver && <button onClick={resetGame}>Reset Game</button>}
          </div>
        ) : (
          <p>Next Player: {player}</p>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;