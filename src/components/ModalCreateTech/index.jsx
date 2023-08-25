import { useContext } from "react";
import { CrateCardForm } from "./CreateCardForm";
import styles from "./style.module.scss";
import { CardContext } from "../../providers/CardContent";

export const ModalCreateTech = ({
  setIsVisible,
  isVisible,

}) => {

  const { setEditingCard } = useContext(CardContext)
  return (
    <div role="dialog" className={styles.modalBox}>
      <div className={styles.modalBody}>
        <div className={styles.modalHead}>
          <h2 className="title1">
            {isVisible ? "Cadastrar Tecnologia" : "Tecnologia Detalhes"}
          </h2>
          <button
            className={styles.buttonExit}
            onClick={() => {
              setIsVisible(false);
              setEditingCard(null);
            }}
            
          >
            x
          </button>
        </div>
        <div className={styles.formBox}>
          <CrateCardForm isVisible={isVisible}/>
        </div>
      </div>
    </div>
  );
};
