import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import styles from "./style.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const { userRegister } = useContext(UserContext);

  const submit = (formData) => {
    userRegister(formData, setLoading);
  };

  return (
    <div className="container">
      <header className={styles.header}>
        <img className={styles.logo} src={Logo} alt="LogoKenzieHub" />
        <Link to="/" className="btn-desability">
          Voltar
        </Link>
      </header>
      <main className={styles.mainRegister}>
        <div className={styles.registerBox}>
          <div className={styles.headFomr}>
            <h2 className="title1">Crie sua conta</h2>
            <p className="headline">Rapido e grátis, vamos nessa !</p>
          </div>
          <div className={styles.formBox}>
            <form onSubmit={handleSubmit(submit)}>
              <Input
                error={errors.name}
                label="Nome"
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")}
                disabled={loading}
              />

              <Input
                error={errors.email}
                label="Email"
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
                disabled={loading}
              />

              <InputPassword
                error={errors.password}
                label="Senha"
                placeholder="Digite aqui sua senha"
                {...register("password")}
                disabled={loading}
              />

              <InputPassword
                error={errors.comfirmPassword}
                label="Confirmar Senha"
                placeholder="Confirme aqui sua senha"
                {...register("comfirmPassword")}
                disabled={loading}
              />

              <Input
                error={errors.bio}
                label="Bio"
                type="text"
                placeholder="Fale sobre você"
                {...register("bio")}
                disabled={loading}
              />

              <Input
                error={errors.contact}
                label="Contato"
                type="text"
                placeholder="Opção de contato"
                {...register("contact")}
                disabled={loading}
              />

              <label className="label">Selecionar módulo</label>
              <select
                className={styles.select}
                {...register("course_module")}
                error={errors.course_module}
                disabled={loading}
              >
                <option>Selecione um módulo</option>
                <option value="Primeiro Módulo - Introdução ao Frontend">
                  Primeiro Módulo
                </option>
                <option value="Segundo Módulo - Aprofundamento ao Frontend">
                  Segundo Módulo
                </option>
                <option value="Terceiro Módulo - Introduçã ao React">
                  Terceiro Módulo
                </option>
                <option value="Quarto Módul - Apronfundamento ao Frontend">
                  Quarto Módulo
                </option>
                <option value="Quinto Módulo -  Frontend avançado">
                  Quinto Módulo
                </option>
                <option value="Sexto Módulo - Frontend avançado">
                  Sexto Módulo
                </option>
              </select>
              {errors.course_module ? (
                <p className="headline">{errors.course_module.message}</p>
              ) : null}

              <div className={styles.buttonBox}>
                <button className="btn-primary-negative" disabled={loading}>
                  {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
