import React from 'react';
import './App.css';
import Header from './Header';
import BowlersList from './bowlers/BowlersList';

function App() {
  return (
    <div className="App">
      <Header title="Bowling League Alpha Omega Squadron" />
      <BowlersList />
    </div>
  );
}

export default App;
