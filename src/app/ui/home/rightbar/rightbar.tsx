import { FunctionComponent } from 'react'
import styles from './rightbar.module.css'

interface RightbarProps {}

const Rightbar: FunctionComponent<RightbarProps> = () => {
  return <div className={styles.container}>Rightbar</div>
}

export default Rightbar
