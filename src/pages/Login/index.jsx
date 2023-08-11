import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import styles from "./style.module.scss";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";


export const Login = ({setUser}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });



const navigate = useNavigate()

const [loading, setLoading] = useState(false)

  const userLogin = async(formData) => {
    try {
      setLoading(true)
      const { data } = await api.post("/sessions", formData)
      setUser(data.user)
      localStorage.setItem("@TOKEN", data.token)
      navigate("/dashboard")
      toast.success("Login realizado com sucesso", {
        autoClose: 2000,
      })
      
    } catch (error) {
        toast.error(error.response?.data.message, {
         autoClose: 2000,
        })
      
    } finally {
      setLoading(false)
    }
  }

 
  const submit = (formData) => {
    userLogin(formData);
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
                Entrar
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
