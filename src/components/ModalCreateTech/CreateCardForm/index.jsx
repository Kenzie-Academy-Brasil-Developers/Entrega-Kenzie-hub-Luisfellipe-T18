import { useForm } from "react-hook-form";
import { InputCard } from "./inputsCard";
import { CardContext } from "../../../providers/CardContent";
import { useContext } from "react";
import styles from "././style.module.scss";

export const CrateCardForm = ({isVisible}) => {
  const { editingCard , cardUpdate} = useContext(CardContext);

  const { register, handleSubmit } = useForm({
  defaultValues: {
      title: editingCard ? editingCard.title : "",
      status: editingCard ? editingCard.status : "",
    }
  });



  const { createCard } = useContext(CardContext);

    
  const submit = (formData) => {

   if(isVisible) {
   createCard(formData)}
   else if (editingCard) {
    cardUpdate(formData);
   }
    
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <InputCard label="Nome" {...register("title")}/>
      
      <label className="label">Selecione o nível</label>

      <select className={styles.select} {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <button type="submit" className={styles.button}>
      {editingCard ?  "Salvar alterações" : "Cadastrar Tecnologia" }
      </button>
    </form>
  );
};
