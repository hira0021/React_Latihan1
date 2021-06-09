import React, { useState } from 'react';
import TestCounter from './TestCounter'
import './App.css';

function App() {


  const [showCounter, setShowCounter] = useState(false);
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <h1>Selamat Datang di aplikasi penghitung!</h1>
      <button onClick={() => setShowCounter(!showCounter)}>Tampilkan Aplikasi</button>
      {showCounter ? (
        <TestCounter />
      ) : (
        <div></div>
      )}





    </div>
  );
}

export default App;
