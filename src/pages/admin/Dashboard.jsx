import "../../styles/Dashboard.scss";
import { auth } from "../../../firebaseConfig.js";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="dashboardPage">
      <div className="container justify-content-center my-5">
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default Dashboard;
