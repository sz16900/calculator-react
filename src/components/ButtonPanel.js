import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonPanelStyled = styled.div`
  height: 100px;
`;

const ButtonPanel = () => (
  <div id="button-panel-container">
    <ButtonPanelStyled className="group-1">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" color="orange" />
    </ButtonPanelStyled>
    <ButtonPanelStyled className="group-2">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="x" color="orange" />
    </ButtonPanelStyled>
    <ButtonPanelStyled className="group-3">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" color="orange" />
    </ButtonPanelStyled>
    <ButtonPanelStyled className="group-4">
      <Button name="1" />
      <Button name="3" />
      <Button name="4" />
      <Button name="+" color="orange" />
    </ButtonPanelStyled>
    <ButtonPanelStyled className="group-5">
      <Button name="0" wide />
      <Button name="," />
      <Button name="=" color="orange" />
    </ButtonPanelStyled>
  </div>
);

export default ButtonPanel;
