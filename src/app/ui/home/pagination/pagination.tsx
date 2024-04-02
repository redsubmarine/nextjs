'use client'

import { FunctionComponent } from 'react'
import styles from './pagination.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  count: number
}

const Pagination: FunctionComponent<PaginationProps> = ({ count }) => {
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const params = new URLSearchParams(searchParams)
  const page = params.get('page') || '1'
  const ITEM_PER_PAGE = 2

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

  const handleChangePage = (type: string) => {
    type === 'prev' ? params.set('page', `${parseInt(page) - 1}`) : params.set('page', `${parseInt(page) + 1}`)

    replace(`${pathname}?${params}`)
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage('prev')}>
        Previous
      </button>
      <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage('next')}>
        Next
      </button>
    </div>
  )
}

export default Pagination
