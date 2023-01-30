import React from 'react';

function Book(props) {
  return (
    <div>
      <h3>{`기술명은 ${props.name}`}</h3>
      <h4>{`챕터는 ${props.chapter}`}</h4>
    </div>
  );
}

export default Book;
