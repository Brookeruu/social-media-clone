import React from 'react';
import Comment from './Comment';
import philFox from '../assets/images/phil-fox.jpg';

function CommentList() {
  const style = {
    backgroundColor: 'lightgrey',
    padding: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    borderRadius: '5px'
  };

  return (
    <div style={style}>
      <Comment
        image={philFox}
        name='Brooke'
        text='Social media sucks!' />
      <Comment
        image={philFox}
        name='Phil'
        text='Agreed!' />
      <Comment
        image={philFox}
        name='Cole'
        text='Did you hear about that murder?' />
    </div>
  );
}

export default CommentList;
