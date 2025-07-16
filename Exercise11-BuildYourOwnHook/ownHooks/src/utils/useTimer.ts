import { useEffect, useState } from "react";
interface useTimerReturnI {
  seconds: number;
}

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { seconds };
};
