import { useEffect, useState } from 'react';

const useCurrentDateInterval = (isListReady: boolean) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  let intervalId: any;

  useEffect(() => {
    if (isListReady) {
      intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 10000);
    } else {
      clearInterval(intervalId);
    }

    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [currentTime, isListReady]);

  return currentTime;
};

export default useCurrentDateInterval;
