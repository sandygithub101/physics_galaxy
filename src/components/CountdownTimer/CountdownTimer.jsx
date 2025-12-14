import React, { useState, useEffect } from 'react';

function CountdownTimer({ timeStamp }) {
  const targetTimestamp = timeStamp;
  //   1696962600; // Replace with your target timestamp
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(updatedTimeRemaining);

      if (updatedTimeRemaining.total <= 0) {
        clearInterval(interval);
        // Optionally, you can perform an action when the timer reaches zero
        console.log('Timer reached zero');
      }
    }, 1000); // Update the timer every second

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  function calculateTimeRemaining() {
    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    const total = targetTimestamp - now;

    if (total <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }

    const seconds = total % 60;
    const minutes = Math.floor((total / 60) % 60);
    const hours = Math.floor((total / 3600) % 24);
    const days = Math.floor(total / 86400);

    return { days, hours, minutes, seconds, total };
  }

  return (
    <div>
      <p>
        {timeRemaining.days} days:{timeRemaining.hours} hrs:{timeRemaining.minutes} mins:{timeRemaining.seconds} sec
      </p>
    </div>
  );
}

export default CountdownTimer;
