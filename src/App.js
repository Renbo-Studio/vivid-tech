import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Vivid-Tech Solar Solutions</h1>
        <p>Your Reliable Source for Sustainable Energy</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section className="hero">
        <h2>Powering a Brighter Future with Solar Energy</h2>
        <p>Join us in the solar revolution and make a positive impact on the environment.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
}

export default App;
