import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer(){
    return (
    <div className="footer">
        <div className="socialMedia">
        <LinkedInIcon onClick={event =>  window.location.href="https://www.linkedin.com/in/albert-flynn-647065247/"} />
        </div>
        <p>&copy; 2022 albertflynn.com </p>
        </div>
    );
}

export default Footer;