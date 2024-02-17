import React from "react";
import Styles from "./login-styles.scss";
import { Header, Input, FormStatus, Footer } from "@/presentation/components";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="senha" placeholder="Digite sua senha" />
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <a className={Styles.link}>Criar conta</a>
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
