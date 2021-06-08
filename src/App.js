import React, { useState } from 'react';
import './App.css';

function App() {


  const employees = ["Hira", "Rean"];

  // conditional rendering juga dapat digunakan dalam variable
  // jadi dapat cek variabel dalam kasus employees undefined
  const firstEmployees = employees && employees[0];

  return (
    <div className="App">
      <header className="App-header">

      
      {// penggunaan variabel (employees) didepan dalam kondisi akan mengembalikan true *dipakai untuk menghilangkan error meskipun variabel (employees) tidak ada isinya/undefined
        // juga bisa menambahkan kondisi lain dengan menggunakan () contoh = employees && (employees.length > 0 || *kondisi lain*) && (jsx/hasil)
        employees && employees.length > 0  && (
          <div>
          <h2>Employee List :</h2>
          {employees.map(employees => (
            <h4>{employees}</h4>
          ))}
          </div>
      )}
      






      </header>
    </div>
  );
}

export default App;
