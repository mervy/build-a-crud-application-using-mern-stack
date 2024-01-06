import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Axios from 'axios';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);

  const addNewNumber = () => {
    Axios.post('http://localhost:8080/add-phone', { name, phone });
  }

  return (
    <div className='container'>
      <h1>How to build a CRUD application using MERN stack</h1>
      <hr />

      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>

      <label htmlFor="">Name: </label>
      <input type="text" onChange={(e) => { setName(e.target.value) }} />

      <label htmlFor="phone">Phone: </label>
      <input type="number" onChange={(e) => { setPhone(e.target.value) }} />

      <button onClick={addNewNumber}>Add New Number</button>

    </div>
  )
}



export default App;
