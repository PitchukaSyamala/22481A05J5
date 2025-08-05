// src/App.js
import React from "react";
import URLShortener from "./components/URLShortener";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        <h1>URL Shortener-REACT</h1>
      </header>
      <main style={styles.main}>
        <URLShortener />
      </main>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
    borderBottom: "4px solid #1abc9c",
  },
  main: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "1rem",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
};

export default App;
