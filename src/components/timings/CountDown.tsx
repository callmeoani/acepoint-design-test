import Countdown, { CountdownRenderProps } from "react-countdown";

// type rendererProps = {
//   hours: string;
//   minutes: string;
//   seconds: string;
//   completed: boolean;
// };
const Completionist = () => <span>You are good to go!</span>;

const CountDown = () => {
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours > 0 ? hours : ""}
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div>
      <Countdown date={Date.now() + 500000} renderer={renderer} />
    </div>
  );
};

export default CountDown;
