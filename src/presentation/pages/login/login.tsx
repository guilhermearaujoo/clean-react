import React from "react";
import Styles from "./login-styles.scss";
import { Header, Input, FormStatus, Footer } from "@/presentation/components";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Type your email" />
        <Input
          type="password"
          name="password"
          placeholder="Type your password"
        />
        <button className={Styles.submit} type="submit">
          Login
        </button>
        <a className={Styles.link}>Create Account</a>
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
