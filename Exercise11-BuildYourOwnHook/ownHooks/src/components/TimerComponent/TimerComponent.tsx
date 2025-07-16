import { useTimer } from "../../utils/useTimer";

export const TimerComponent = () => {
  const { seconds } = useTimer();

  return (
    <>
      <h1>Timer: {seconds}</h1>
    </>
  );
};
