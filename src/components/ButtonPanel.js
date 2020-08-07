import React from 'react';
import Button from './Button';
import '../assets/main.css';

const ButtonPanel = () => (
  <div id="button-panel-container">
    <div className="group-1">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="+" color />
    </div>
    <div className="group-2">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="x" color />
    </div>
    <div className="group-3">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" color />
    </div>
    <div className="group-4">
      <Button name="1" />
      <Button name="3" />
      <Button name="4" />
      <Button name="+" color />
    </div>
    <div className="group-5">
      <Button name="0" wide />
      <Button name="," />
      <Button name="=" color />
    </div>
  </div>
);

export default ButtonPanel;
