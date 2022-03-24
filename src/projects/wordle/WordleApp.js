import './App.css';
import GameController from './components/GameController';
import Header from './components/header/Header';
function WordleApp() {
  return (
    <div className="wordle">
      <header className="wordle__header">
        <Header />
      </header>
      <div className="game_container">
        <GameController />
      </div>
    </div>
  );
}

export default WordleApp;
