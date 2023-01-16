import logo from './logo.svg';
import './App.css';
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

function App() {
  const sendRequest = () => {
    axios.get(`${apiUrl}user`).then((response) => {
      console.log(response)
    })
  }
  console.log(apiUrl)
  return (
      <div className="App">
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
          <button onClick={sendRequest}>SendRequest</button>
          <input type="text" defaultValue={process.env.REACT_APP_API_URL}/>
        </header>
      </div>
  );
}

export default App;