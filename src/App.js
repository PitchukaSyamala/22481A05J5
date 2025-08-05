import React from "react";
import URLShortener from "./components/URLShortener";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Batch URL Shortener</h1>
      <URLShortener />
    </div>
  );
}

export default App;
