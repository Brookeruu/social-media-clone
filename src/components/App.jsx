import React from 'react';
import Profile from './Profile';
import CommentList from './CommentList';
import ContactList from './ContactList';

function App(){
  const style = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
  };
  const headerSpace = {
    height: '100px'
  };

  return (
    <div>
      <div style={headerSpace}>
      </div>
      <div style={style}>
        <Profile/>
        <CommentList/>
        <ContactList/>
      </div>
    </div>
  );
}

export default App;
