import React, { useState } from 'react';
import TestCounter from './TestCounter'
import './App.css';

function App() {

  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="App">
      <h1>Selamat Datang di aplikasi penghitung!</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter? "Sembunyikan" : "Tampilkan"}
      </button>
      {showCounter && <TestCounter />}





    </div>
  );
}

export default App;
