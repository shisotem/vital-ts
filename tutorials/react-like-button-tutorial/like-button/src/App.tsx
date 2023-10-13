import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const count = 999;
  return <span className="likeButton">✦ {count}</span>;
}

export default App;
