import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
  <Row>
    <Col xs={12} className="px-1 mb-3">
      <input
        type="text"
        value={formDetails.name}
        placeholder="Your Name"
        onChange={(e) => onFormUpdate('name', e.target.value)}
        required
      />
    </Col>
    <Col xs={12} className="px-1 mb-3">
      <input
        type="email"
        value={formDetails.email}
        placeholder="Email Address"
        onChange={(e) => onFormUpdate('email', e.target.value)}
        required
      />
    </Col>
    <Col xs={12} className="px-1 mb-3">
      <textarea
        rows="6"
        value={formDetails.message}
        placeholder="Your Message"
        onChange={(e) => onFormUpdate('message', e.target.value)}
        required
      ></textarea>
    </Col>
    <Col xs={12} className="px-1">
      <button type="submit"><span>{buttonText}</span></button>
    </Col>
    {status.message && (
      <Col xs={12}>
        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
      </Col>
    )}
  </Row>
</form>

                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
