import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/goodread.jpg";
import projImg2 from "../assets/img/healthcare.png";
import projImg3 from "../assets/img/imdb.jpg";
import projImg4 from "../assets/img/cal.jpg";
import projImg5 from "../assets/img/placement.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Goodreads",
      description: "Data Analysis and Visualization",
      imgUrl: projImg1,
      githubUrl: "https://github.com/mahekagar29/GoodBooks-data-analysis"
    },
    {
      title: "Healthcare App",
      description: "UI/UX Design",
      imgUrl: projImg2,
      githubUrl: "https://github.com/mahekagar29/HealthCareApp"
    },
    {
      title: "GPA & CGPA Calculator",
      description: "C++ Project",
      imgUrl: projImg4,
      githubUrl: "https://github.com/mahekagar29/CGPA-GPA-Calculator"
    },
    {
      title: "IMDb Movie Analysis",
      description: "Data-Driven Insights",
      imgUrl: projImg3,
      githubUrl: "https://github.com/mahekagar29/IMDb-Data-Analysis"
    },
    {
      title: "Placement and Readiness App",
      description: "UI/UX Design",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>
                  Each project showcases my ability to solve real-world problems through thoughtful design, data analysis, and efficient coding. I focus on creating practical, user-centered solutions that blend technical skills with creativity.
                </p>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
