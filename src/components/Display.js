import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const DisplayStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: gray;
  height: 100px;
  color: white;
  font-weight: bolder;
  padding: 0 10px;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
  word-wrap: break-word;
  font-size: ${(props) => (props.result.length > 27 ? '1em' : '3em')};
`;

const Display = (props) => {
  const { result } = props;
  return (
    <DisplayStyled id="display-container" result={result}>
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
