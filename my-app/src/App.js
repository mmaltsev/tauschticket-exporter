import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

import Textarea from "@mui/joy/Textarea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="area-textfield">
          {/* <div className="area-textfield__buttton">
            <Button variant="outlined" disableElevation>
              Start parcing
            </Button>
          </div> */}
          <div className="area-textfield__input">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                console.log(event.target[0].value);
              }}
            >
              <Textarea
                placeholder="Paste your copied HTML code to parse it!"
                required
                sx={{ mb: 1 }}
              />

              <Button type="submit">Start Parcing</Button>
            </form>
            {/* <Textarea
              minRows={2}
              size="lg"
              variant="outlined"
              placeholder="Enter copied Data"
            /> */}
          </div>
        </div>

        {/* <p>And now</p> */}
      </header>
      {/* <body>
        <Button variant="outlined" disableElevation>
          Hello World
        </Button>
      </body> */}
    </div>
  );
}

export default App;