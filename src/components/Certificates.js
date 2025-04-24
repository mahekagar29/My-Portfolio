import { Container, Row, Col } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";
import "./Certificates.css";

export const Certificates = () => {
  const certificates = [
    {
      title: "Complete Interview Preparation",
      provider: "GeeksForGeeks",
      date: "Aug 2024",
      image: require("../assets/img/GFG.jpg"), // Use require for local images
    },
    {
      title: "DSA Course",
      provider: "IAMNEO",
      date: "Nov 2023",
      image: require("../assets/img/DSA.jpg"), // Add the image path
    },
    {
      title: "C++ Course",
      provider: "IAMNEO",
      date: "Nov 2023",
      image: require("../assets/img/CPP.jpg"), // Add the image path
    },
    // {
    //   title: "SQL Certificate",
    //   provider: "HackerRank",
    //   date: "2023",
    //   image: require("../assets/img/HackerRank.jpg"), // Add the image path
    // },
    // {
    //   title: "Python Certificate",
    //   provider: "HackerRank",
    //   date: "2023",
    //   image: require("../assets/img/HackerRank.jpg"), // Add the image path
    // },
  ];

  return (
    <section className="certificates" id="certificates">
      <Container>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Here are some of the certifications I’ve earned through consistent
          learning and upskilling:
        </p>
        <Row className="certificate-row">
          {certificates.map((cert, idx) => (
            <Col key={idx} md={6} lg={4}>
              <div className="certificate-card-container">
                <div className="certificate-card">
                  <div className="front">
                    <FaCertificate className="cert-icon" />
                    <h5>{cert.title}</h5>
                    <p className="cert-provider">{cert.provider}</p>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <div className="back">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="cert-image"
                    />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
