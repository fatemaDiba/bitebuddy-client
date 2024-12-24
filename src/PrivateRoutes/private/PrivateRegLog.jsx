import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../loading/Loading";
import { AuthContext } from "../../Auth/AuthProvider";
import { useContext } from "react";

const PrivateRegLog = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default PrivateRegLog;
