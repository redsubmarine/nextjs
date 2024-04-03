import Image from 'next/image'
import { FunctionComponent } from 'react'
import {
  MdAnalytics,
  MdAttachMoney,
  MdHelpCenter,
  MdHome,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from 'react-icons/md'
import { IMenuItems } from './interfaces'
import MenuLink from './menuLink/menuLink'
import styles from './sidebar.module.css'

const menuItems: IMenuItems[] = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Home',
        path: '/home',
        icon: <MdHome />,
      },
      {
        title: 'Users',
        path: '/home/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/home/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/home/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/home/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/home/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/home/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/home/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/home/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
]

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt="no avatar" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>red</span>
          <span className={styles.userRole}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((i) => (
              <MenuLink item={i} key={i.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}

export default Sidebar
