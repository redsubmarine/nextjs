import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  providers: [], // Add providers with an empty array for now
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log('callbacks')
      const isLoggedIn = !!auth?.user
      const isOnHome = nextUrl.pathname.startsWith('/home')
      if (isOnHome) {
        return isLoggedIn
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/home', nextUrl))
      }
      return true
    },
  },
} satisfies NextAuthConfig
