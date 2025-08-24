import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const currentUser = useSelector((state) => state.user.currentUser);
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }
  return children;
}
