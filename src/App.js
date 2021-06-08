import React, { useState } from 'react';
import './App.css';

function App() {

  // di coba menggunakan state 
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="App">
      <header className="App-header">

      <h1>Welcome to the app!</h1>
      
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin? (
          "Logout"
        ) : (
          "Login"
        )}
      </button>
      
      {
        isLogin ? (
        <h3>Hello Hira-san</h3>
      ) : (
          <h3>Please Login</h3>
      )}
      






      </header>
    </div>
  );
}

export default App;
