import React from "react";
import "./Faq.css"

import { Container, Row, Col,Image } from "react-bootstrap";


export const Faq = () => {
  return (
   <div className='faq'>
  <div className="container w-auto h-auto p-5">
    <Row className='justify-content-center pb-5'>
      <Col xs={12} className='text-center'>
        <h2 style={{ color: "white", letterSpacing: "-0.06em" }}>Frequently asked questions</h2>
      </Col>
    </Row>

    <Row className='justify-content-center'>
      <Col xs={12} md={6} lg={8}>
        <div className="card mb-3" style={{background:"border-box border-box" , border: "none"}}>
          <div className="card-body" style={{borderBottom:"1px solid white", padding: "30px 0px"}}>
            <div className="display-ruby text-center">
              <a className="card-title text-decoration-none" style={{color:"#ffffff"}}>
                How does the pricing work for teams
              </a>
              <Image className="img-fluid ps-5" src="./Frame.png" />
            </div>
          </div>
        </div>
      </Col>
      </Row>

<Row className='justify-content-center'>
      <Col xs={12} md={6} lg={8}>
        <div className="card mb-3" style={{background:"border-box border-box",border: "none"}}>
          <div className="card-body" style={{borderBottom:"1px solid white", padding: "30px 0px"}}>
            <div className="display-ruby text-center">
              <a className="card-title text-decoration-none" style={{color:"#ffffff"}}>
                How does the pricing work for teams
              </a>
              <Image className="img-fluid ps-5" src="./Frame.png" />
            </div>
          </div>
        </div>
      </Col>
</Row>

<Row className='justify-content-center'>
      <Col xs={12} md={6} lg={8}>
        <div className="card mb-3" style={{background:"border-box border-box",border: "none"}}>
          <div className="card-body" style={{borderBottom:"1px solid white", padding: "30px 0px"}}>
            <div className="display-ruby text-center">
              <a className="card-title text-decoration-none" style={{color:"#ffffff"}}>
                How does the pricing work for teams
              </a>
              <Image className="img-fluid ps-5" src="./Frame.png" />
            </div>
          </div>
        </div>
      </Col>
      </Row>

<Row className='justify-content-center'>
      <Col xs={12} md={6} lg={8}>
        <div className="card mb-3" style={{background:"border-box border-box",border: "none"}}>
          <div className="card-body" style={{borderBottom:"1px solid white", padding: "30px 0px"}}>
            <div className="display-ruby text-center">
              <a className="card-title text-decoration-none" style={{color:"#ffffff"}}>
                How does the pricing work for teams
              </a>
              <Image className="img-fluid ps-5" src="./Frame.png" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</div>
  )
}

