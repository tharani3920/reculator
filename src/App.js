import logo from './logo.svg';
 import React, { useRef } from 'react';
 import './App.css';
 
 function App() {
   const fanRef = useRef(null); // Create a ref to reference the fan-div element
 
   function setSpeed(speed) {
     const speedControl = {
       0: 'none',
       1: '20s',
       2: '10s',
       3: '5s',
       4: '3s',
       5: '1s',
     };
 
     const duration = speedControl[speed] || '20s';
 
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
