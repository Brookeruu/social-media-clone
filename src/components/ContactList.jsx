import React from 'react';
import Contact from './Contact';
import philFox from '../assets/images/phil-fox.jpg';


function ContactList() {
  return(
    <div>
      <style jsx global>{`
          .newNameColor {
            color: steelblue;
          }
          `}</style>
      <Contact
        name='Phil'
        imageSrc={philFox} />
      <Contact
        name='Phil'
        imageSrc={philFox} />
    </div>
  );
}
export default ContactList;
