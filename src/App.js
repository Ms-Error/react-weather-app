import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <section className="App-section">
          <Weather defaultLocation="Lisbon" />
        </section>{" "}
        <footer className="App-footer">
          <h6>
            <a
              href="https://github.com/Ms-Error/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Open - source code{" "}
            </a>{" "}
            by Pranavi Tadivalasa from She Codes.
          </h6>{" "}
        </footer>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
