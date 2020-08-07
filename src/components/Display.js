import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return <div>{result}</div>;

  Display.PropTypes = {
    result: PropTypes.string,
  };
  // Set default value
  Display.defaultProps = {
    result: '0',
  };
};

export default Display;
