import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Home />
      <Footer />
    </>
  );
}

export default App;
