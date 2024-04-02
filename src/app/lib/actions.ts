import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { User } from './models'
import { connectToDB } from './utils'

export const addUser = async (formData: FormData) => {
  'use server'
  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

  try {
    await connectToDB()
    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    })
    await newUser.save()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to create user!')
  }

  revalidatePath('/home/users')
  redirect('/home/users')
}
