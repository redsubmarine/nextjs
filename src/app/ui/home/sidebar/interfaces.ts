import { ReactNode } from 'react'

export interface IMenuItem {
  title: string
  path: string
  icon: ReactNode
}

export interface IMenuItems {
  title: string
  list: IMenuItem[]
}
