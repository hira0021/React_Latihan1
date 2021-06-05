import React from 'react';
import './App.css';
import Employee from './Employee';

const employeeInfo = [
  {
    firstName: "Jek",
    lastName: "Smith",
    age: "21"
  },
  {
    firstName: "Arip",
    lastName: "Gege",
    age: "21"
  },
  {
    firstName: "Dewa",
    lastName: "Bumi",
    age: "21"
  },
  {
    firstName: "Sakti",
    lastName: "Mandraguna",
    age: "21"
  },
  {
    firstName: "Uzumaki",
    lastName: "Genjih",
    age: "59"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory </h1>
        {employeeInfo.map(employee => {
          return (
            <Employee {...employee} />
          );
        })}        
      </header>
    </div>
  );
}

export default App;
