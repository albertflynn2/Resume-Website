import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Typography } from "@material-ui/core";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Albert Flynn</h2>
        <div className="prompt"> 
          <p>
           A software developer with a passion for learning and creating
         </p> 
         <LinkedInIcon onClick={event =>  window.location.href="https://www.linkedin.com/in/albert-flynn-647065247/"} />
         <EmailIcon color="default" onClick={event =>  window.location.href="mailto:albertflynn2@gmail.com/"} />
         <GithubIcon onClick={event =>  window.location.href="https://github.com/albertflynn2"} />

       </div>
      </div>


      <div className="skills">
        <ol className="list">
          <li className="item">
            <h2> 
              <Typography variant="h3" component="h3" align="left">Front-End</Typography>
              </h2>
            <span>
            <Typography variant="h5" component="h4" align="left">
            ReactJS - MaterialUI - HTML - CSS - Bootstrap - Styled Components
            </Typography>
         </span>
          </li>
         <li className="item">
         <h2> <Typography variant="h3" component="h3" align="center">Back-End</Typography></h2>
           <span>
           <Typography variant="h5" component="h4" align="center">
           NodeJs - MySQL - MongoDB - DynamoDB - AWS S3
           </Typography>
           </span>
         </li>
         <li className="item">
         <h2> <Typography variant="h3" component="h3" align="right">Languages</Typography></h2>
            <span>
            <Typography variant="h5" component="h4" align="right">
            JavaScript - Java
            </Typography>
            </span>
         </li>
        </ol>
      </div>
      </div>
  )
}

export default Home;