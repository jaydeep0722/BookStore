import { useContext } from "react";
import { AppContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AppContext);
  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
