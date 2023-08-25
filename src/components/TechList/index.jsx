import { useContext } from "react";
import { CardContext } from "../../providers/CardContent";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss"

export const TechList = ({ setIsVisible }) => {
  
    const { cardList, setEditingCard, cardDelete  } = useContext(CardContext);
  return (
    <div className={styles.containerList}>
      <div className={styles.headerList}>
        <h1 className="title1">Tecnologias</h1>
        <button onClick={() => setIsVisible(true)} className={styles.btn_add}>
          +
        </button>
      </div>

      <ul className={styles.listBox}>
        {cardList.map(card => (
            <TechCard key={card.id} card={card} setEditingCard={setEditingCard} />
        ))}
      </ul>
    </div>
  );
};
