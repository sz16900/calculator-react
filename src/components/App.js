import React from 'react';
// My Components
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => {
  return (
    <div id="app-container">
      <Display />
      <ButtonPanel />
    </div>
  );
};

export default App;
