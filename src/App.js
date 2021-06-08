import React, { useState } from 'react';
import './App.css';
import Employee from './Employee';

function App() {

  const employee = [
    {
      name: "Hira",
      id: "001"
    },
    {
      name: "Rean",
      id: "002"
    }
  ]

  const baseEmployeeObjet = {
    role: "Employee",
    company: "Hira Code"
  }

  const firstEmployee = {...baseEmployeeObjet , ...employee[0]};

  return (
    <div className="App">
      <header className="App-header">

      <Employee {...firstEmployee}/>






      </header>
    </div>
  );
}

export default App;
