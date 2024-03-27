import Footer from '../ui/home/footer/footer'
import styles from '../ui/home/home.module.css'
import Navbar from '../ui/home/navbar/navbar'
import Sidebar from '../ui/home/sidebar/sidebar'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
