import React, { useRef } from 'react';
import './App.css';

function setSpeed(speed) {
  const speedControl = {
    0: 'none',
    1: '10s',  // Faster than before
    2: '5s',
    3: '3s',
    4: '2s',
    5: '0.8s', // Increased speed significantly
  };

  const duration = speedControl[speed] || '10s';

  if (fanRef.current) {
    fanRef.current.style.animation =
      duration === 'none'
        ? 'none'
        : `App-logo-spin infinite ${duration} linear`;
  }
}


  return (
    <div className="App">
      <header className="App-header">
        <div className="fan-div" ref={fanRef}>
          <div className="rectangle one"></div>
          <div className="all-in-one">
            <div className="rectangle1 one"></div>
            <div className="circle"></div>
            <div className="rectangle1 one"></div>
          </div>
          <div className="rectangle three"></div>
        </div>
        <p>Adjust the speed as much as you want</p>
        <div className="controls">
          <button onClick={() => setSpeed(0)}>0</button>
          <button onClick={() => setSpeed(1)}>1</button>
          <button onClick={() => setSpeed(2)}>2</button>
          <button onClick={() => setSpeed(3)}>3</button>
          <button onClick={() => setSpeed(4)}>4</button>
          <button onClick={() => setSpeed(5)}>5</button>
        </div>
      </header>
    </div>
  );
}

export default App;
