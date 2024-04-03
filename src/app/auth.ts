import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { connectToDB } from './lib/utils'
import { User } from './lib/models'
import bcrypt from 'bcrypt'

const login = async (credentials: Partial<Record<string, unknown>>) => {
  try {
    await connectToDB()

    const user = await User.findOne({ username: credentials.username })
    if (!user) throw new Error('Wrong credentials!')

    const isPasswordCorrect = await bcrypt.compare(String(credentials.password), user.password)
    if (!isPasswordCorrect) throw new Error('Wrong credentials!')

    delete user.password
    return user
  } catch (err) {
    console.log(err)
    throw new Error('Failed to login!')
  }
}

export const { signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      ...authConfig,
      async authorize(credentials) {
        try {
          console.log(10, '1111111111111111111111111')
          const user = await login(credentials)
          console.log(11)
          return user
        } catch (err) {
          return null
        }
      },
    }),
  ],
})
