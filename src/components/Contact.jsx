import React from 'react';
import PropTypes from 'prop-types';
import philFox from '../assets/images/phil-fox.jpg';

function Contact(props) {
  const style = {
    backgroundColor: '#00C8F3'
  };
  const buttonStyle = {
    padding: '10px',
    borderRadius: '15px',
    backgroundColor: 'blue'
  };
  const imageStyle = {
    height: '70px',
    width: '70px'
  };
  return(
    <div style={style}>
      <img style={imageStyle} src={philFox}/>
      <h4>{props.name}</h4>
      <button style={buttonStyle}>Button</button>
    </div>
  );
}

Contact.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired
};
export default Contact;
