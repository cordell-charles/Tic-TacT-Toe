import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <TicTacToe />
      </header>
    </div>
  );
}

export default App;
