import logo from './logo.svg';
import './App.css';

const urlPlatzi = 'https://platzi.com/';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {props.children}
        {props.despedida}
        <a
          className="App-link"
          href={urlPlatzi}
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React con Platzi
        </a>
      </header>
    </div>
  );
}

export default App;
