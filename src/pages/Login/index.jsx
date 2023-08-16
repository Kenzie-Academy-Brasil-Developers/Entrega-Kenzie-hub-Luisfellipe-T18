import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Link} from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import styles from "./style.module.scss";
import { useContext, useState } from "react";
import { UserContext, UserProvider } from "../../providers/UserContext";


export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

const [loading, setLoading] = useState(false)

const { userLogin } = useContext(UserContext)

  const submit = (formData) => {
    userLogin(formData, setLoading, reset);
  };
  return (
    <div className="container">
      <Header />
      <main className={styles.mainLogin}>
        <div className={styles.loginBox}>
          <form className={styles.formBox} onSubmit={handleSubmit(submit)}>
            <h2 className="title1">Login</h2>
            <div>
              <Input
                label="Seu e-mail"
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
                error={errors.email}
              />
              <InputPassword
                label="Sua senha"
                {...register("password")}
                placeholder="Digite aqui sua senha"
                error={errors.password}
              />
            </div>
            <div className={styles.buttons}>
              <button className={styles.btn_primary} type="submit">
                {loading ? "Logando..." : "Entrar"}
              </button>
              <p>Ainda não posssui uma conta?</p>
              <Link className={styles.btn_register} to="/register">
                Cadastre-se
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
