import logo from './logo.svg';
import './App.css';
import WordleApp from './projects/wordle/WordleApp';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
      </header>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
