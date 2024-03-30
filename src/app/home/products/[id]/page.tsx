import styles from '@/app/ui/home/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'
import { FunctionComponent } from 'react'

interface SingleProductPageProps {}

const SingleProductPage: FunctionComponent<SingleProductPageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="avatar" fill />
        </div>
        iPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Red" />
          <label>Price</label>
          <input type="number" name="price" placeholder="hello@hello.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>Color</label>
          <input type="text" name="color" placeholder="blue" />
          <label>Size</label>
          <textarea name="size" placeholder="Seoul" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="description" id="desc" rows={10} placeholder="Description" />
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
