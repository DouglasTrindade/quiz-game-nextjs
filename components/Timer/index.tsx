import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../Timer/styles.module.css";

interface TimerProps {
  duration: number
  timeIsOver: () => void
}

const Timer = (props: TimerProps) => {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        isPlaying 
        duration={props.duration}
        size={120}
        onComplete={props.timeIsOver}
        colors={[ '#93BF85', '#F7B801', '#ED827A', '#FF2400' ]}
        colorsTime={[ 7, 4, 2, 0 ]}
        >
          {({ remainingTime }) => remainingTime }
      </ CountdownCircleTimer>
    </div>
  );
}
 
export default Timer