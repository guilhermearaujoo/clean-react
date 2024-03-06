import { Header, Input, FormStatus, Footer } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'
import Context from '@/presentation/components/contexts/form/form-context'
import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    validation.validate('email', state.email)
  }, [state.email])

  useEffect(() => {
    validation.validate('password', state.password)
  }, [state.password])

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, setState }}>
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
