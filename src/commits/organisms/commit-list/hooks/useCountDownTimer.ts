import { useEffect, useState } from 'react';

const useCountDown = (
  isListReady: boolean,
  seconds: number,
  countDown: number,
  setCountDown: (value: number) => void
) => {
  let intervalId: any;

  useEffect(() => {
    if (isListReady) {
      intervalId = setInterval(() => {
        setCountDown(!countDown ? seconds : countDown - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [countDown, isListReady]);

  return countDown;
};

export default useCountDown;
