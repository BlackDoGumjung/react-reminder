import React from 'react';

function Comment(props) {
  return (
    <div>
      <p>First Component</p>
      <p>{props.name}</p>
      <p>{props.comment}</p>
    </div>
  );
}

export default Comment;
