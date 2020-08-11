import React from 'react';
// My Components
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../assets/main.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const copyState = this.state;
    const calcResult = calculate(copyState, buttonName);
    this.setState(calcResult);
  }

  render() {
    const copyObject = this.state;
    return (
      <div id="app-container">
        <Display result={copyObject.next || copyObject.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
