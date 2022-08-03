import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {

 {/* State navbar not being used to set to false */}
  const [expandNavbar, setExpandNavbar] = useState(false);

const location = useLocation();

{/* Function to run "useEffect" if location changes
(will set network to false so it will close navBar every time page location chnges) */}
useEffect(() => {
  setExpandNavbar(false)
}, [location])

  return (
    //State If expandnavBar is open we have a on/true value
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
    <div className="toggleButton"> 

    {/*  State navbar expansion needed for responsiveness to now set to true when clicked */}
    <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
      <ReorderIcon/>
      </button>
    </div>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>


    </div>
    </div>
    
  );
}

export default Navbar;



