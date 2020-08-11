import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonPanelStyled = styled.div`
  height: 100px;
`;

const ButtonPanel = (props) => {
  const { clickHandler } = props;
  return (
    <div id="button-panel-container">
      <ButtonPanelStyled className="group-1">
        <Button name="AC" handleClick={clickHandler} />
        <Button name="+/-" handleClick={clickHandler} />
        <Button name="%" handleClick={clickHandler} />
        <Button name="÷" color="orange" handleClick={clickHandler} />
      </ButtonPanelStyled>
      <ButtonPanelStyled className="group-2">
        <Button name="7" handleClick={clickHandler} />
        <Button name="8" handleClick={clickHandler} />
        <Button name="9" handleClick={clickHandler} />
        <Button name="x" color="orange" handleClick={clickHandler} />
      </ButtonPanelStyled>
      <ButtonPanelStyled className="group-3">
        <Button name="4" handleClick={clickHandler} />
        <Button name="5" handleClick={clickHandler} />
        <Button name="6" handleClick={clickHandler} />
        <Button name="-" color="orange" handleClick={clickHandler} />
      </ButtonPanelStyled>
      <ButtonPanelStyled className="group-4">
        <Button name="1" handleClick={clickHandler} />
        <Button name="3" handleClick={clickHandler} />
        <Button name="4" handleClick={clickHandler} />
        <Button name="+" color="orange" handleClick={clickHandler} />
      </ButtonPanelStyled>
      <ButtonPanelStyled className="group-5">
        <Button name="0" wide handleClick={clickHandler} />
        <Button name="," handleClick={clickHandler} />
        <Button name="=" color="orange" handleClick={clickHandler} />
      </ButtonPanelStyled>
    </div>
  );
};

export default ButtonPanel;
