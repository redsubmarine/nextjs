'use client'
import { FunctionComponent } from 'react'
import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

interface SearchProps {
  placeholder: string
}

const Search: FunctionComponent<SearchProps> = ({ placeholder }) => {
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    if (e.target.value) {
      params.set('q', e.target.value)
    } else {
      params.delete('q')
    }

    replace(`${pathname}?${params}`)
  }, 300)

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
    </div>
  )
}

export default Search
