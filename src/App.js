import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
