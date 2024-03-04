import { useEffect, useState } from 'react';
import { TIMER } from '../const';

const ProgressBar = () => {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('INTERVAL');
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={TIMER} />;
};

export default ProgressBar;
