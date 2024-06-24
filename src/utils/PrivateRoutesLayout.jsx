import { Outlet, useLocation, Navigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

const PrivateRoutesLayout = () => {
  const location = useLocation();

  return auth.currentUser ? (
    <Outlet />
  ) : (
    // keep the previous navigation stack
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutesLayout;
