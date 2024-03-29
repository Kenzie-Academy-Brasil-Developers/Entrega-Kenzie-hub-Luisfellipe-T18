import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const pathname = window.location.pathname;
  


  useEffect(() => {
    const userID = localStorage.getItem("@USERID");
    const token = localStorage.getItem("@TOKEN");

    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`users/${userID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        setUser(data);
        
        navigate(pathname);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (userID && token) {
      getUser();
    }
  }, []);

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@TOKEN");
    toast.warn("Deslogando"),
      {
        autoClose: 1000,
      };
  };

  const userLogin = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@USERID", data.user.id);
      localStorage.setItem("@TOKEN", data.token);
      reset();
      navigate("/dashboard");
      toast.success("Login realizado com sucesso", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Não foi possível efectuar o login", {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData, setLoading) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Cadastro criado com sucesso", {
        autoClose: 2000,
      });
      navigate("/");
    } catch {
      toast.error("Não foi possível efectuar o cadastro", {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ loading, user, userLogin, userRegister, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
