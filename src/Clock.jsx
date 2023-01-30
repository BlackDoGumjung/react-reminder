import React from 'react';

function Clock() {
  return (
    <div>
      <p>React Again!!</p>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
