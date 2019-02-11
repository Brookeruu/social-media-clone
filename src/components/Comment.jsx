import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  const style = {
    backgroundColor: 'gray'
  };

  return (
    <div style={style}>
      <h2>{props.name}</h2>
      <p>{props.text}</p>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;
