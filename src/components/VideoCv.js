import { Container, Row, Col } from "react-bootstrap";

export const VideoCV = () => {
  return (
    <section className="video-cv bg-dark text-light py-5" id="video-cv">
      <Container>
        <Row>
          <Col size={12} className="text-center">
            <h2 className="mb-4">Video CV</h2>
            <p className="mb-4">Watch my visual résumé to get a quick overview of my skills and journey.</p>
            <div className="video-responsive">
              <iframe
                width="100%"
                height="400"
                src="https://drive.google.com/file/d/1qWtddj3INmGswRgGantZ971mE4RVPLIU/view?usp=sharing "
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video CV"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};