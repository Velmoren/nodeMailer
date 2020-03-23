import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = (event) => {
    event.preventDefault();

    if (event.target.id === 'name') {
      setName(event.target.value)
    } else {
      setEmail(event.target.value)
    }
    // event.target.id === 'name' ? setName(event.target.value) : setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataToSubmit = {
      // name: name,
      // email: email
      // одинаково работает
      name,
      email
    }

    axios.post('/api/sendMail', dataToSubmit)
  }

  // http:// localhost: 3000

  // server



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form onSubmit={handleSubmit}>
          <input id='name' placeholder='name' value={name} onChange={handleClick} /><br />
          <input id='email' placeholder='email' value={email} onChange={handleClick} /><br />
          <button onClick={handleSubmit}>Send Email</button>
        </form>

      </header>
    </div>
  );
}

export default App;
