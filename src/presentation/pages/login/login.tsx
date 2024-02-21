import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Header, Input, FormStatus, Footer } from '@/presentation/components'
import Context from '@/presentation/components/contexts/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage?: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })
  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Type your email" />
          <Input
            type="password"
            name="password"
            placeholder="Type your password"
          />
          <button
            disabled
            data-testid="submit"
            className={Styles.submit}
            type="submit"
          >
            Login
          </button>
          <a className={Styles.link}>Create Account</a>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
