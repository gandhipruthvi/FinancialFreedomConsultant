import "../../styles/Dashboard.scss";
import { auth, db } from "../../../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { Button, Pagination, Table } from "react-bootstrap";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const appointmentCollection = collection(db, "appointments");
      const appointmentSnapshot = await getDocs(appointmentCollection);
      const appointmentList = appointmentSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAppointments(appointmentList);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      try {
        await deleteDoc(doc(db, "appointments", id));
        setAppointments(
          appointments.filter((appointment) => appointment.id !== id)
        );
      } catch (error) {
        console.log("error in fetching data", error);
      }
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointments.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(appointments.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="dashboardPage">
      <div className="container justify-content-center my-5">
        <h1>Dashboard</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Date</th>
              <th>Client Name</th>
              <th>Client Email</th>
              <th>Contact No.</th>
              <th>Country</th>
              <th>Info</th>
              <th>Service</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((appointment, index) => (
              <tr key={appointment.id}>
                <td>{index + 1}</td>
                <td>
                  {appointment.date
                    .toLocaleString("en-US", {
                      timeZone: "Asia/Dubai",
                    })
                    .replace(/GMT.*/i, "")}
                </td>
                <td>{appointment.clientName}</td>
                <td>{appointment.clientEmail}</td>
                <td>{appointment.contactNumber}</td>
                <td>{appointment.country}</td>
                <td>{appointment.info}</td>
                <td>{appointment.service}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(appointment.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <Pagination.Item
              key={pageNumber + 1}
              active={pageNumber + 1 === currentPage}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>

        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default Dashboard;
