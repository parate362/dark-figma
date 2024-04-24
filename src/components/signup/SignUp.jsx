import React from "react";

import {Row, Col, Image } from "react-bootstrap";
const SignUp = () => {
  return (
    <div className="bg-black pt-4 pb-5">
      <div className="container  w-auto h-487px p-5">
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
              lineHeight: "30px",
              border: "none",
              borderRadius: "4px",
              gap: "10px",
              width: "286px",
              paddingTop:"2px",
              paddingBottom:"4px",
             
            }}

            className="m-3 bg-dark text-center"
            placeholder="   name@gmail.com"
            type="email"
          />

          <button
            type="button"
            className="bg-light-100 w-full md:w-28 py-2 px-2 rounded ms; ml-8  "
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
              className="img-fluid custom-image d-none d-md-block"
              src="./helix21.png"
             
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignUp;
