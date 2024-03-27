'use client'
import Pagination from '@/app/ui/home/pagination/pagination'
import Search from '@/app/ui/home/search/search'
import styles from '@/app/ui/home/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

interface UsersPageProps {}

const UsersPage: FunctionComponent<UsersPageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/home/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="no avatar" width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>red@wonseok.me</td>
            <td>2024.03.27.</td>
            <td>Admin</td>
            <td>active</td>
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

export default UsersPage
