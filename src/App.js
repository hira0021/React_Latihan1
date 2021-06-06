import React, { useState } from 'react';
import './App.css';
import Employee from './Employee';

const employeeInfo = [
  {
    firstName: "Jek",
    lastName: "Smith",
    age: "21",
    employeeId: "1"
  },
  {
    firstName: "Arip",
    lastName: "Gege",
    age: "21",
    employeeId: "2"
  },
  {
    firstName: "Dewa",
    lastName: "Bumi",
    age: "21",
    employeeId: "3"
  },
  {
    firstName: "Sakti",
    lastName: "Mandraguna",
    age: "21",
    employeeId: "4"
  },
  {
    firstName: "Uzumaki",
    lastName: "Genjih",
    age: "59",
    employeeId: "5"
  }
]

const employeeData = {
  id: "1",
  name: "Tofik",
  salary: "$5000",
  address: {
    salary: "$100",
    street: "JL. Nanas",
    country: "Indonesia",
    province: "Banten",
    zone: {
      plantZone: "7B",
      alienZone: "41"
    }
  }

};

function App() {
  // Destructuring dalam 1 baris
  const {
    name, 
    salary, 
    address: {
      street, 
      country, 
      province, 
      zone : {plantZone: myPlantZone, alienZone}
    }
  } = employeeData;

  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory </h1>
        <p>{name}</p>
        <p>{myPlantZone}</p>
      </header>
    </div>
  );
}

export default App;
