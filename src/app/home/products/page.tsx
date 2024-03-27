import Pagination from '@/app/ui/home/pagination/pagination'
import styles from '@/app/ui/home/products/products.module.css'
import Search from '@/app/ui/home/search/search'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

interface ProductsPageProps {}

const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/home/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noproduct.jpg" alt="no avatar" width={40} height={40} className={styles.productImage} />
                iPhone
              </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>2024.03.27.</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ProductsPage
