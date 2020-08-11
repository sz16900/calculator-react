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
`;

const ResultStyled = styled.p`
  font-size: ${props => (props.result.length > 25 ? '1.5em' : '3em')};
`;

const Display = props => {
  const { result, operation } = props;
  return (
    <DisplayStyled id="display-container">
      <h1 className="operator">{operation}</h1>
      <ResultStyled result={result}>{result}</ResultStyled>
    </DisplayStyled>
  );
};

Display.propTypes = {
  result: propTypes.string,
  operation: propTypes.string,
};
// Set default value
Display.defaultProps = {
  result: '0',
  operation: ' ',
};

export default Display;
