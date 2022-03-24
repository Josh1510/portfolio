import logo from './logo.svg';
import './App.css';
import WordleApp from './projects/wordle/WordleApp';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
        <Projects />
        {/* <WordleApp /> */}
      </header>
    </div>
  );
}

export default App;
