import React, { useState } from 'react';
import './App.css';
import EmployeeMap from './EmployeeMap';

const employee = [
  {
    name: "Arip",
    id: "1"
  },
  {
    name: "Suhe",
    id: "2"
  },
  {
    name: "Jodi",
    id: "3"
  }
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
      
      {employee.map(employee => 
          <EmployeeMap key={employee.id} name={employee.name} id={employee.id} />
      )}



      </header>
    </div>
  );
}

export default App;
