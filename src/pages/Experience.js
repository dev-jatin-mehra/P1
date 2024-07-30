import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className="experience" style={{ marginTop: '4em' }}>
      <VerticalTimeline lineColor="#0F67B1">
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018-2020"
          iconStyle={{ background: "#E4003A", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            HighSchool, HGS Bhimtal
          </h3>
          <p>Secondary</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2020-22"
          iconStyle={{ background: "#E4003A", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intermediate, HGS Bhimtal
          </h3>
          <p>Senior Secondary</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2022-2026"
          iconStyle={{ background: "#E4003A", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BachelorInTechnology, GEHU Bhimtal Campus
          </h3>
          <p>Undergraduate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="05/2024-06/2024"
          iconStyle={{ background: "#399918", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bharat Intern, Virtual
          </h3>
          <p>Data Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
