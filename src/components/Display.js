import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const DisplayStyled = styled.div`
  background-color: gray;
  height: 100px;
  color: white;
  font-weight: bolder;
  padding: 0 10px;
  justify-content: flex-end;
  align-items: end;
  font-size: 3em;
`;

const Display = props => {
  const { result } = props;
  return (
    <DisplayStyled id="display-container">
      <p>{result}</p>
    </DisplayStyled>
  );
};

Display.propTypes = {
  result: propTypes.string,
};
// Set default value
Display.defaultProps = {
  result: '0',
};

export default Display;
