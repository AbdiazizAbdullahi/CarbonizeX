import React from 'react';
import Stima from './component/zizu/Electricity';
import Fuel from './component/zizu/Fuel';
import Selector from './component/zizu/Selector';
import './App.css';

function App() {
  return (
    <div className="App">
      <Selector />
      <Stima/>
      <Fuel />
    </div>
  );
}

export default App;
