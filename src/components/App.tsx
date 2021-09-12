import React from 'react';
import AppRouter from "../AppRouter";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="site-container">
      <div className="wrapper">
        <main className="main">
          <Navbar/>
          <AppRouter/>
        </main>
      </div>
    </div>
  );
}

export default App;
