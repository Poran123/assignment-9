import "bootstrap/dist/css/bootstrap.min.css";
import CustomNav from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <CustomNav></CustomNav>

      <Outlet></Outlet>

      {/* footer section */}
      <Footer></Footer>
    </>
  );
}

export default App;