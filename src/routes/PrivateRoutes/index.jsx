import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet } from "react-router-dom";
import { CardProvider } from "../../providers/CardContent";


export const PrivateRoutes = () => {
    const { user } = useContext(UserContext);

    return user ? <CardProvider><Outlet/></CardProvider>  : <Navigate to="/"/> 

}