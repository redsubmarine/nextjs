import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { User } from './lib/models'
import { connectToDB } from './lib/utils'

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
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          console.log('credentials------------')
          const user = await login(credentials)
          return user
        } catch (err) {
          console.log(err)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.username = user.username
        token.image = user.image
      }
      return token
    },
  },
})
