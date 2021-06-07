import React, { useState } from 'react';
import './App.css';

function App() {

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const arr3 = [...arr1, ...arr2];

  console.log(arr3);

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
