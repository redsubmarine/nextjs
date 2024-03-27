import { FunctionComponent } from 'react'
import Card from '../ui/home/card/card'
import styles from '../ui/home/home.module.css'
import Rightbar from '../ui/home/rightbar/rightbar'
import Transactions from '../ui/home/transactions/transactions'

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Home
