import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv" />
      <footer>
        {" "}
        This project was created by Hanna and is{" "}
        <a
          href="https://github.com/UAHanna/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-soursed on Github
        </a>
      </footer>
    </div>
  );
}
