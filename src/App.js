// src/App.js
import React from 'react';
import Form from './components/Form';
import ServiceList from './components/ServiceList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="logo.png" alt="EZ Works" className="logo" />
        <h1>Suite Of Business Support Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
      </header>
      <ServiceList />
      <Form />
    </div>
  );
}

export default App;
