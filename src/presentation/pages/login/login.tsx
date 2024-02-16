import React from "react";
import Styles from "./login-styles.scss";
import Spinner from "@/presentation/components/spinner/spinner";
import Logo from "@/presentation/components/logo/logo";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <h1>4 devs - Developer Survey</h1>
        <Logo />
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" placeholder="Digite seu email" name="email" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" placeholder="Digite sua senha" name="senha" />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <a className={Styles.link}>Criar conta</a>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <footer className={Styles.footer}></footer>
    </div>
  );
};

export default Login;
