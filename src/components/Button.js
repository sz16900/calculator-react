import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: ${(props) => (props.wide ? '50%' : '25%')};
  height: 100%;
  font-size: 2em;
  font-weight: bolder;
  border: 1px solid black;
  background: ${(props) => (props.color ? '#F2913E' : '#E0E0E0')};
`;

const Button = (props) => {
  const { name, wide, color } = props;
  return (
    <ButtonStyled wide={wide} color={color}>
      <p>{name}</p>
    </ButtonStyled>
  );
};

Button.propTypes = {
  name: propTypes.string.isRequired,
};

export default Button;
