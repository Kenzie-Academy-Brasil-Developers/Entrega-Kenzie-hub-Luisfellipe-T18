import { MdEdit, MdDelete } from "react-icons/md";
import  styles  from "./style.module.scss"
import { useContext } from "react";
import { CardContext } from "../../../providers/CardContent";

export const TechCard = ({ card, setEditingCard }) => {
  const {cardDelete} = useContext(CardContext)
  return (
    <li className={styles.cardBox} >
      <h2 className="title1">{card.title}</h2>
      <div className={styles.divisionButtons}>
        <p className={styles.status}>{card.status}</p>
        <button  onClick={() => setEditingCard(card)} className={styles.butons} title="Editar card" aria-label="edit">
          <MdEdit />
        </button>
        <button onClick={() =>  cardDelete(card.id)  } className={styles.butons} title="Deletar card" aria-label="delete">
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
