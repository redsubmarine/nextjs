import Sidebar from '../ui/home/sidebar/sidebar'
import Navbar from '../ui/home/navbar/navbar'
import styles from '../ui/home/home.module.css'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
