import { FunctionComponent } from 'react'
import styles from './chart.module.css'

interface ChartProps {}

const Chart: FunctionComponent<ChartProps> = () => {
  return <div className={styles.container}>Chart</div>
}

export default Chart
