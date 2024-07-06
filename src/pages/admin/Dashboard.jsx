import "../../styles/Dashboard.scss";
import { auth, db } from "../../../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { Button, Pagination, Table, Tabs, Tab } from "react-bootstrap";
import moment from "moment-timezone";
import PaymentLinkGenerator from "./PaymentLinkGenerator.jsx";
import ScheduleManagement from "./ScheduleManagement.jsx";

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
        date: new Date(doc.data().date),
      }));
      setAppointments(sortByDate(appointmentList));
    };
    fetchData();
  }, []);

  const sortByDate = (data) => {
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
  };

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
    window.scrollTo(0, 0);
  };

  return (
    <div className="dashboardPage">
      <div className="container">
        <button className="logoutBtn" onClick={handleLogout}>
          Log Out
        </button>
        <Tabs defaultActiveKey="dashboard" id="uncontrolled-tab-example">
          <Tab eventKey="dashboard" title="Dashboard">
            <div className="d-flex justify-content-between align-items-center"></div>
            <Table responsive striped bordered hover>
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
                      {moment(appointment.date).format("DD/MM/yyyy hh:mm A")}
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
            <Pagination className="justify-content-center">
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
                  activeLabel=""
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
          </Tab>

          <Tab eventKey="paymentLink" title="Payment Link Generator">
            <PaymentLinkGenerator />
          </Tab>

          <Tab eventKey="scheduleManagement" title="Schedule Management">
            <ScheduleManagement />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
