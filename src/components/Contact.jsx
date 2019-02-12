import React from 'react';
import PropTypes from 'prop-types';

function Contact(props) {
  const style = {
    backgroundColor: 'lightgrey',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: 'grey'
  };
  const buttonStyle = {
    padding: '10px',
    borderRadius: '15px',
    backgroundColor: 'steelblue',
    color: 'white',
  };
  const imageStyle = {
    height: '70px',
    width: '70px',
    borderRadius: '5px'
  };
  return(
    <div style={style}>
      <img style={imageStyle} src={props.imageSrc}/>
      <h4 className="newNameColor">{props.name}</h4>
      <button style={buttonStyle}>Button</button>
    </div>
  );
}

Contact.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired
};
export default Contact;
