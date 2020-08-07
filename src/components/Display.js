import React from 'react';
import propTypes from 'prop-types';
import '../assets/main.css';

const Display = (props) => {
  const { result } = props;
  return (
    <div id="display-container">
      <p>{result}</p>
    </div>
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
