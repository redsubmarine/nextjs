'use server'

import bcrypt from 'bcrypt'
import { AuthError } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { signIn } from '../auth'
import { Product, User } from './models'
import { connectToDB } from './utils'

export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

  try {
    await connectToDB()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(String(password), salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
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

export const updateUser = async (formData: FormData) => {
  const { id, ...updateData } = Object.fromEntries(formData)

  try {
    await connectToDB()

    const sanitizedData = Object.fromEntries(
      Object.entries(updateData).filter(([_, value]) => value !== '' && value !== undefined)
    )

    await User.findByIdAndUpdate(id, sanitizedData)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to update user!')
  }

  revalidatePath('/home/users')
  redirect('/home/users')
}

export const addProduct = async (formData: FormData) => {
  const { title, description, price, stock, color, size } = Object.fromEntries(formData)

  try {
    await connectToDB()

    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      color,
      size,
    })
    await newProduct.save()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to create product!')
  }

  revalidatePath('/home/products')
  redirect('/home/products')
}

export const updateProduct = async (formData: FormData) => {
  const { id, ...updateData } = Object.fromEntries(formData)

  try {
    await connectToDB()

    const sanitizedData = Object.fromEntries(
      Object.entries(updateData).filter(([_, value]) => value !== '' && value !== undefined)
    )

    await Product.findByIdAndUpdate(id, sanitizedData)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to update product!')
  }

  revalidatePath('/home/products')
  redirect('/home/products')
}

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData)

  try {
    await connectToDB()

    await User.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to delete user!')
  }

  revalidatePath('/home/users')
}

export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData)

  try {
    await connectToDB()

    await Product.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to delete product!')
  }

  revalidatePath('/home/products')
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn('credentials', { username, password })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
