import { FunctionComponent } from 'react'
import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'

interface SearchProps {
  placeholder: string
}

const Search: FunctionComponent<SearchProps> = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  )
}

export default Search
