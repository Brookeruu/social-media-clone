import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  const style = {
    display: 'flex',
    backgroundColor: 'white',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px'
  };
  const imageStyle = {
    height: '70px',
    width: '70px',
    borderRadius: '5px'
  };
  const divStyle = {
    marginLeft: '10px'
  };

  return (
    <div style={style}>
      <img style={imageStyle} src={props.image}/>
      <div style={divStyle}>
        <h2 className="nameColor">{props.name}</h2>
        <style jsx global>{`
            .nameColor {
              color: steelblue;
            }
            .nameColor:hover {
              color: pink;
            }
          `}</style>
        <p className="nameColor">{props.text}</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;
