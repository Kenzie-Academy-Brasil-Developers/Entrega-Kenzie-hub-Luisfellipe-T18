import styles from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Dashboard = () => {

  const {user, userLogout } = useContext(UserContext)

  return (
    <>
      <header className={styles.header}>
        
          <img className={styles.logo} src={Logo} alt="LogoKenzieHub" />
          <button onClick={() => userLogout()} className="btn-desability">
            Sair
          </button>
        
      </header>
      <div>
        <main className={styles.mainBox}>
          <div className={styles.dashBox}>
            <h2 className="title1">Olá, {user?.name}</h2>
            <p className="headline">{user?.course_module}</p>
          </div>
          <div className={styles.dashContent}>
            <h2 className="title1">
              Que pena! Estamos em desenvolvimento :(
            </h2>
            <p className={styles.paragraph}>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </main>
      </div>
    </>
  );
};
