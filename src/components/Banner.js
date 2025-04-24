import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mahek Agarwal`} <span className="txt-rotate" dataPeriod="1000" ><span className="wrap"></span></span></h1>
                  <p>
                   A Computer Science student passionate about UI/UX design, data analysis, and programming. Skilled in C++, Python, SQL, Tableau, and Figma, I love solving problems and creating impactful digital experiences. My projects reflect creativity, analytical thinking, and a strong commitment to learning and innovation.</p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  <div style={{ display: 'flex', gap: '40px', justifyContent: 'left', flexWrap: 'wrap' }}>
  <a href="https://drive.google.com/file/d/1xb6mdA4NwyfQh2Y1qck2e_yQPgqtHivr/view?usp=sharing" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
    <button
      style={buttonStyle}
      onMouseEnter={e => {
        e.target.style.color = buttonHoverStyle.color;
        e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
      }}
      onMouseLeave={e => {
        e.target.style.color = 'white';
        e.target.style.backgroundColor = '#000000';
      }}
    >
      Resume
    </button>
  </a>
  <a href="https://drive.google.com/file/d/1qWtddj3INmGswRgGantZ971mE4RVPLIU/view?usp=sharing" style={{ textDecoration: 'none' }}>
    <button
      style={buttonStyle}
      onMouseEnter={e => {
        e.target.style.color = buttonHoverStyle.color;
        e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
      }}
      onMouseLeave={e => {
        e.target.style.color = 'white';
        e.target.style.backgroundColor = '#000000';
      }}
    >
      Video CV
    </button>
  </a>
</div>


                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
const buttonStyle = {
  padding: '20px 30px',
  borderRadius: '50px', // For oval shape
  border: 'none',
  backgroundColor: '#2c2c2c', // Initial color
  color: 'white',
  cursor: 'pointer',
  fontSize: '20px',
  transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth color transition
  textDecoration: 'none', // Remove underline from links
};

const buttonHoverStyle = {
  color: '#000000', // Text color changes to black on hover
  backgroundColor: 'white', // Background color changes to white on hover
};
