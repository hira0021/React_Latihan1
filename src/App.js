import React, { useState } from 'react';
import './App.css';

function App() {

  const isLogin = false;
  
  return (
    <div className="App">
      <header className="App-header">

      <h1>Welcome to the app!</h1>

      {// Bentuknya = {Variabel ? (*apa yang dilakukan jika true*) : (apa yang dilakukan jika false)}
        isLogin ? (
        <h3>Hello Hira-san</h3>
      ) : (
        <div>
          <h3>Please Login To Continue</h3>
          <button>Login</button>
        </div>
      )}
      






      </header>
    </div>
  );
}

export default App;
