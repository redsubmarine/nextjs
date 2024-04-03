'use client'
import styles from '@/app/ui/login/login.module.css'
import { FunctionComponent } from 'react'
import { useFormState } from 'react-dom'
import { authenticate } from '../lib/actions'

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const [_, dispatch] = useFormState(authenticate, undefined)
  // const { pending } = useFormStatus()
  return (
    <div className={styles.container}>
      <form action={dispatch} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
