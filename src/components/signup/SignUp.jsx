import React from "react";
import "./SignUp.css";
import {Row, Col, Image } from "react-bootstrap";
const SignUp = () => {
  return (
    <div className="signup">
      <div className="container  w-auto h-auto p-5">
        <Row>
          <Col>
            <h2 style={{ color: "white" }}>Get instant access</h2>
          </Col>
        </Row>

        <div className="mb-2"></div>

        <Row>
          <Col>
            <p style={{ color: "#BBBBBB", letterSpacing: "-0.01em" }}>
              Celebrate the joy of accomplishment with an app designed <br /> to
              track your progress and motivate your efforts.
            </p>

               
          <input
            style={{
              background: " #FFFFFF33",
              lineHeight: "30px",
              border: "none",
              borderRadius: "4px",
              gap: "10px",
              width: "286px",
              paddingTop:"2px",
              paddingBottom:"4px",
             
            }}

            className="me-3"
            placeholder="   name@gmail.com"
            type="email"
          />

          <button
            type="button"
            className="btn btn-light w-115 h-30 fw-Normal "
          >
            Get access
          </button>
          </Col>
        </Row>


        <Row className="justify-content-center">
          <Col xs={6} md={3} className="text-center">
            <Image
              className="img-fluid custom-image1 "
              src="./emojistar1.png"
            
            />
            <Image
              className="img-fluid custom-image d-none d-sm-block"
              src="./helix21.png"
             
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignUp;
