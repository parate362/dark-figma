import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";


export const Hero = () => {
  return (
    <>


      <div className="hero">

        <div className="container w-auto h-auto">
          <Row className="py-2 justify-content-center pb-">
            <Col xs={12} md={6} className="text-center">
              <button className="p-2 btn btn-outline-secondary text-light">
                Version 2.0 is here <span className="fw-bold">Read more →</span>
              </button>
            </Col>
          </Row>

          <div className="pb-3"></div>

          <Row className="justify-content-center">
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "165px",
                fontWeight: "700",
                lineHeight: "125px",
                letterSpacing: "-0.075em",
                textAlign: "center",
                color: "white",
                marginTop: "35px",
              }}
            >
              <p>
                One Task <br /> at a Time
              </p>
            </div>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <p style={{ color: 'white' }}>
                Celebrate the joy of accomplishment with an <br /> app designed to
                track your progress, motivate <br />
                your efforts, and celebrate your successes.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={6} md={3} className="text-center">
              {/* <Image
                className="img-fluid d-none d-md-block"
                src="./cursor1.png"
                style={{ width: "50%", display: "block", position: 'absolute', top: -230, left: -65 }}
              /> */}
              <Image
                className="img-fluid custom2 d-none d-md-block"
                src="./cursor2.png"
              />

            </Col>
            <Col xs={6} md={3} className="text-center">
              {/* <Image
                className="img-fluid custom2  d-none d-md-block"
                src="./message2.png"
               
              /> */}
              <Image
                className="img-fluid custom1 d-none d-md-block"
                src="./message1.png"
              />
            </Col>
          </Row>

          <div className="pb-n5"></div>

          <Row className="justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <Button
                style={{ backgroundColor: "white", color: "black", position: 'relative', top: 20 }}
                rounded
              >
                Get for free
              </Button>

            </Col>
          </Row>
        </div>

        <Image
          className="img-fluid"
          src="./Ellipse2.png"
          style={{ width: "100%", height: "auto" }}
        />

      </div>

    </>
  );
};
