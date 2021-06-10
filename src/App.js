import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {

  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="App">
      <h1>Selamat Datang di aplikasi!</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter? "Sembunyikan" : "Tampilkan"}
      </button>
      {showCounter && <TodoList />}





    </div>
  );
}

export default App;
