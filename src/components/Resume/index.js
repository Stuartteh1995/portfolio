import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";

const TechSkills = [
  "CSS",
  "HTML",
  "JavaScript",
  "React",
  "NoSQL",
  "SQL",
  "jQuery",
  "Bootstrap",
  "Progressive Web Apps",
  "Mern Stack",

];

const Resume = () => {
  return (
    <div class="skill_container">
    <div className="container text-center center">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Technical Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list">
              {TechSkills.map((TechSkill) => (
                <ListGroup.Item className="list-item">
                  {TechSkill}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div id="button">
        <a
          href={process.env.PUBLIC_URL + "/Resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-primary">Download Resume</button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Resume;
