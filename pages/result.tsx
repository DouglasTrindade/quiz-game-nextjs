import styles from "../styles/result.module.css";
import { useRouter } from "next/router";
import Statistic from "../components/Statistic";
import Button from "../components/Button/index";

const Result = () => {
  const router = useRouter()

  const total = +router.query.total
  const right = +router.query.right
  const percentage = Math.round((right / total) * 100)

  return (
    <div>
      <div className={styles.result}>  
        <h1>Resultado Final</h1>
        <div style={{ display: "flex" }}>
          <Statistic text="Perguntas" value={total} 
            backgroundColor="#9CD2A4" />
          <Statistic text="Certas" value={right} />
          <Statistic text="Percentual" value={`${percentage}%`} 
            backgroundColor="#DE6A33" />
        </div>
        <Button href="/" text="Reiniciar Jogo" />
      </div>
    </div>
  )
}

export default Result