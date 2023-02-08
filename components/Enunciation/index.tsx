import styles from "../Enunciation/styles.module.css";

interface EnunciationProps {
  text: string
}

const Enunciation = (props: EnunciationProps) => {
  return (
    <div className={styles.enunciation}>
      <span className={styles.text}>
        {props.text}
      </span>
    </div>
  );
}
 
export default Enunciation
