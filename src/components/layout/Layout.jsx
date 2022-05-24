import react from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import './layout.css';
import App from "../../App";

const Layout = ({ Children }) => {
  return (
    <div className="origin">
      <Sidebar />
      <div className="body-panel">
        <Navbar />
        { Children }
        <App />
      </div>
    </div>
  );
};

export default Layout;
