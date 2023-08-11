import styles from "./style.module.scss";
import Logo from "../../assets/Logo.svg";

export const Dashboard = ({ user, userLogout }) => {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={Logo} alt="LogoKenzieHub" />
        <button onClick={() => userLogout()} className="btn-desability">
          Sair
        </button>
      </header>
    <div >
      <main className={styles.mainBox}>
        <div className={styles.dashBox}>
          <h2 className="title1">Olá, {user?.name}</h2>
          <p className="headline">{user?.course_module}</p>
        </div>
      </main>
    </div>
    </>
  );
};
