import { fetchUsers } from '@/app/lib/data'
import Pagination from '@/app/ui/home/pagination/pagination'
import Search from '@/app/ui/home/search/search'
import styles from '@/app/ui/home/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { ReadonlyURLSearchParams } from 'next/navigation'

interface UsersPageProps {
  searchParams?: ReadonlyURLSearchParams
}

const UsersPage: FunctionComponent<UsersPageProps> = async ({ searchParams }) => {
  const sp = new URLSearchParams(searchParams)
  const q = sp.get('q') || ''
  const page = parseInt(sp.get('page') || '1') || 1

  const { users, count } = await fetchUsers(q, page)

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
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src={user.image || '/noavatar.png'}
                      alt="profile image"
                      width={40}
                      height={40}
                      className={styles.userImage}
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
                <td>{user.isActive ? 'active' : 'passive'}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/home/users/${user.id}`}>
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

export default UsersPage
