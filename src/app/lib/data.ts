import { Product, User } from './models'
import { connectToDB } from './utils'

export const fetchUsers = async (q: string, page: number) => {
  const $regex = new RegExp(q, 'i')

  const ITEM_PER_PAGE = 2

  try {
    await connectToDB()
    const count = await User.find({ username: { $regex } }).countDocuments()

    const users = await User.find({ username: { $regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))

    return { users, count }
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch users!')
  }
}

export const fetchUser = async (id: string) => {
  try {
    await connectToDB()
    const user = await User.findById(id)
    return user
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch user!')
  }
}

export const fetchProducts = async (q: string, page: number) => {
  const $regex = new RegExp(q, 'i')

  const ITEM_PER_PAGE = 2

  try {
    await connectToDB()
    const count = await Product.find({ title: { $regex } }).countDocuments()

    const products = await Product.find({ title: { $regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))

    return { products, count }
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch products!')
  }
}

export const fetchProduct = async (id: string) => {
  try {
    await connectToDB()
    const product = await Product.findById(id)
    return product
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch product!')
  }
}
