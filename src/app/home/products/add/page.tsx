import { addProduct } from '@/app/lib/actions'
import styles from '@/app/ui/home/products/addProduct/addProduct.module.css'
import { FunctionComponent } from 'react'

interface AddProductProps {}

const AddProduct: FunctionComponent<AddProductProps> = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea name="description" id="description" rows={16} placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddProduct
