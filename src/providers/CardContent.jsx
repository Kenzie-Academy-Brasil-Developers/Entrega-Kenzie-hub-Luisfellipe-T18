import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";


export const CardContext = createContext({});

export const CardProvider = ({ children }) => {

  const { user } = useContext(UserContext);

  const [cardList, setCardList] = useState(user ? user.techs : []);

  const [editingCard, setEditingCard] = useState(null);

  const navigate = useNavigate();

  const createCard = async (formData) => {
    try {
      const newCard = { title: user.tech, ...formData };
      const token = localStorage.getItem("@TOKEN");

      const { data } = await api.post("/users/techs/", newCard, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
       
      setCardList([...cardList, data]);
      navigate("/dashboard");
      
    } catch (error) {
      console.log(error);
    }
  };

  const cardUpdate = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const { data } = await api.put(
        `/users/techs/${editingCard.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newCard = cardList.map((card) => {
        if (card.id === editingCard.id) return data;
        else {
          return card;
        }
      });
      setCardList(newCard);
      setEditingCard(null);
    } catch (error) {
      console.log(error);
    }
  };

  const cardDelete = async (deleteCardId) => {

  
    try {
      const token = localStorage.getItem("@TOKEN");

          await api.delete(`/users/techs/${deleteCardId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const newlist = cardList.filter((card) => card.id != deleteCardId);
      setCardList(newlist);

     

      alert("Exclusão realizada com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardContext.Provider
      value={{
        cardUpdate,
        cardList,
        createCard,
        editingCard,
        setEditingCard,
        cardDelete,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
