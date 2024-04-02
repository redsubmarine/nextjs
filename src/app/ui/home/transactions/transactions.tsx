import { FunctionComponent } from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'

interface TransactionsProps {}

const Transactions: FunctionComponent<TransactionsProps> = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="no avatar" width={40} height={40} className={styles.userImage} />
                Red Me
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>2024.03.27</td>
            <td>$3,333</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="no avatar" width={40} height={40} className={styles.userImage} />
                Red Me
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>2024.03.27</td>
            <td>$3,333</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="no avatar" width={40} height={40} className={styles.userImage} />
                Red Me
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>2024.03.27</td>
            <td>$3,333</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
