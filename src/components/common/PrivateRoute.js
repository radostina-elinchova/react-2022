import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    if(!isAuthenticated){
        return <Navigate to="/login" replace />
    }
    return  children
    };

export default PrivateRoute;