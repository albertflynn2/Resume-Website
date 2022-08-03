import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience"> 
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="2000 - 2006"
      iconStyle={{background: "#003c8f", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">St.Flannan's College, Ennis, Co.Clare
          </h3>
          <p>Leaving Certificate</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="2006 - 2012"
      iconStyle={{background: "#003c8f", color: "#fff"}}
        icon={<SchoolIcon />}
        >
           <h3 className="vertical-timeline-element-title">Galway-Mayo Institute of Technology, Co.Galway
           </h3>
           <p>Bachelor of Business</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="2015 - 2017"
      iconStyle={{background: "#003c8f", color: "#fff"}}
       icon={<SchoolIcon />}
       >
          <h3 className="vertical-timeline-element-title">National University of Ireland - Galway, Co.Galway
          </h3>
          <p>Masters of Education</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="2021 - 2022"
      iconStyle={{background: "#003c8f", color: "#fff"}}
      icon={<SchoolIcon />}
      >
          <h3 className="vertical-timeline-element-title">National University of Ireland - Galway, Co.Galway
          </h3>
          <p>Diploma in Software Engineering</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="2022 - 2022"
      iconStyle={{background: "#e9d35b", color: "#fff"}}
      icon={<WorkIcon />}
      >
    <h3 className="vertical-timeline-element-title">Freelance Software Engineer
        </h3>
        <p>Developing Websites, Maintaining and developing personal website and portfolio</p>
     </VerticalTimelineElement>
  

      </VerticalTimeline>
    </div>
  );
}

export default Experience;