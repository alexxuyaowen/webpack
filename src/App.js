import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [time]);

  return <h1>{time}</h1>;
};

export default App;
