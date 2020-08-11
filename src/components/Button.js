import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: ${(props) => (props.wide ? '50%' : '25%')};
  height: 100%;
  font-size: 2em;
  font-weight: bolder;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;

const Button = (props) => {
  const { name, wide, color, handleClick } = props;
  return (
    <ButtonStyled wide={wide} color={color} onClick={() => handleClick(name)}>
      <p>{name}</p>
    </ButtonStyled>
  );
};

Button.propTypes = {
  name: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  wide: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Button;
