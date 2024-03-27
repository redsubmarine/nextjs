import { FunctionComponent } from 'react'
import styles from './pagination.module.css'

interface PaginationProps {}

const Pagination: FunctionComponent<PaginationProps> = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        Previous
      </button>
      <button className={styles.button}>Next</button>
    </div>
  )
}

export default Pagination
