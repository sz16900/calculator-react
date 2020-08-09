import React from 'react';
// My Components
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../assets/main.css';

const App = () => (
  <div id="app-container">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
