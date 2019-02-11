import React from 'react';
import Comment from './Comment';

function CommentList() {
  const style = {
    backgroundColor: 'red',
    padding: '10px'
  };

  return (
    <div style={style}>
      <Comment
        name='Brooke'
        text='Social media sucks!' />
    </div>
  );
}

export default CommentList;
