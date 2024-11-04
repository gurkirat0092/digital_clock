import React, { useState, useEffect } from 'react';
import './timer.css';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="clock-container">
      {formattedTime}
    </div>
  );
}

export default DigitalClock;