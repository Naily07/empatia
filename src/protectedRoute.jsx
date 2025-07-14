import { Navigate } from "react-router-dom";
import { useAccountStore } from "./stores/accountStore";

export default function ProtectedRoute({ children }) {
  const { account } = useAccountStore(); // ou `const { account } = useAuth();`

  if (!account) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}
