import { User } from './models'
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
