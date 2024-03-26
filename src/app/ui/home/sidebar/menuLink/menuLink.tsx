'use client'
import { FunctionComponent } from 'react'
import styles from './menuLink.module.css'
import Link from 'next/link'
import { IMenuItem } from '../interfaces'
import { usePathname } from 'next/navigation'

interface MenuLinkProps {
  item: IMenuItem
}

const MenuLink: FunctionComponent<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname()
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
