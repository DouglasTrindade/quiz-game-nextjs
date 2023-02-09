import styles from "../styles/result.module.css";
import { useRouter } from "next/router";

const Result = () => {
  const router = useRouter()

  const total = +router.query.total
  const right = +router.query.right
  const percentage = Math.round((right / total) * 1)


  return (
    <div>
      <div className={styles.result}>  
        <h1>Resultado Final</h1>
        <div>{total}</div>
        <div>{right}</div>
        <div>{`${percentage}%`}</div>
      </div>
    </div>
  )
}

export default Result