import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is demo project</p>
        <p>new para added in feature branch</p>
        <p>New para added for new-feature branch</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React project 
        </a>
        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to the Google 
        </a>
        <a
          className="App-link"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to the Facebook 
        </a>
      </header>
    </div>
  );
}

export default App;
