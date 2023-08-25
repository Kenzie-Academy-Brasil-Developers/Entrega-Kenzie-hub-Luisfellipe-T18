import styles from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";
import { ModalCreateTech } from "../../components/ModalCreateTech";
import { CardContext } from "../../providers/CardContent";

export const Dashboard = () => {
  const { user, userLogout } = useContext(UserContext);
  const { editingCard } = useContext(CardContext);
  const [isVisible, setIsVisible] = useState(false);

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
            <TechList setIsVisible={setIsVisible} />
          </div>
          {isVisible || editingCard ? (
            <ModalCreateTech
              setIsVisible={setIsVisible}
              editingCard={editingCard}
              isVisible={isVisible}
             
            />
          ) : null}
        </main>
      </div>
    </>
  );
};
