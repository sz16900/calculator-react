import React from 'react';
import propTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div>
      {' '}
      {result}
      {' '}
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
