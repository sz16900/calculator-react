import React from 'react';
// My Components
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => {
  return (
    <div className="app-container">
      <Display />
      <ButtonPanel />
    </div>
  );
};

export default App;
