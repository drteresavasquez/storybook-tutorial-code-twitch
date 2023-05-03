import logo from './logo.svg';
import './App.css';
import { ButtonComp } from './stories/button/Button';
import { Header } from './stories/header/Header';

function App() {
  return (
    <div className="App">
      <Header
        onCreateAccount={() => {}}
        onLogin={function noRefCheck() {}}
        onLogout={function noRefCheck() {}}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComp
          label="Button"
          onClick={() => {}}
        />
      </header>
    </div>
  );
}

export default App;
