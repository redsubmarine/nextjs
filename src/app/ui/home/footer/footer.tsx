import { FunctionComponent } from 'react'
import styles from './footer.module.css'

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>red Dev</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  )
}

export default Footer
