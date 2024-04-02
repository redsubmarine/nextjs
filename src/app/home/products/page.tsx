import { fetchProducts } from '@/app/lib/data'
import Pagination from '@/app/ui/home/pagination/pagination'
import styles from '@/app/ui/home/products/products.module.css'
import Search from '@/app/ui/home/search/search'
import Image from 'next/image'
import Link from 'next/link'
import { ReadonlyURLSearchParams } from 'next/navigation'
import { FunctionComponent } from 'react'

interface ProductsPageProps {
  searchParams?: ReadonlyURLSearchParams
}

const ProductsPage: FunctionComponent<ProductsPageProps> = async ({ searchParams }) => {
  const sp = new URLSearchParams(searchParams)
  const q = sp.get('q') || ''
  const page = parseInt(sp.get('page') || '1') || 1

  const { products, count } = await fetchProducts(q, page)

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
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src={product.image || '/noproduct.jpg'}
                      alt="no avatar"
                      width={40}
                      height={40}
                      className={styles.productImage}
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.createdAt?.toString().slice(4, 16)}</td>
                <td>{product.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/home/products/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <Link href="/">
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </Link>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default ProductsPage
