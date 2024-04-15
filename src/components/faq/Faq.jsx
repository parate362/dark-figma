import React from "react"
import {Container,Row, Col,Image } from "react-bootstrap";


export const Faq = () => {
  return (
    <div className="faq pb-5">
    <Container className="w-auto h-706">
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2 className="text-light fw-bold mt-5">Frequently asked questions </h2>
        </Col>
      </Row>

      <Row className='justify-content-center '>
    <Col xs={12} md={6} lg={4}>
      <div className="card mb-3" style={{background:"border-box border-box" , border: "none"}}>
        <div className="card-body" style={{borderBottom:"1px solid white", padding: "30px 0px"}}>
          <div className="display-ruby text-center">
            <a className="card-title text-decoration-none" style={{color:"#ffffff"}}>
              How does the pricing work for teams
            </a>
            <Image className="img-fluid ps-5" src="Frame.png" />
          </div>
        </div>
      </div>
    </Col>
    </Row>

<Row className='justify-content-center'>
    <Col xs={12} md={6} lg={4}>
      <div className="card mb-3" style={{background:"border-box border-box",border: "none"}}>
        <div className="card-body" style={{borderBottom:"1px solid white", padding: "30px 0px"}}>
          <div className="display-ruby text-center">
            <a className="card-title text-decoration-none" style={{color:"#ffffff"}}>
              How does the pricing work for teams
            </a>
            <Image className="img-fluid ps-5" src="Frame.png" />
          </div>
        </div>
      </div>
    </Col>
</Row>

<Row className='justify-content-center'>
    <Col xs={12} md={6} lg={4}>
      <div className="card mb-3" style={{background:"border-box border-box",border: "none"}}>
        <div className="card-body" style={{borderBottom:"1px solid white", padding: "30px 0px"}}>
          <div className="display-ruby text-center">
            <a className="card-title text-decoration-none" style={{color:"#ffffff"}}>
              How does the pricing work for teams
            </a>
            <Image className="img-fluid ps-5" src="Frame.png" />
          </div>
        </div>
      </div>
    </Col>
    </Row>

<Row className='justify-content-center'>
    <Col xs={12} md={6} lg={4}>
      <div className="card mb-3" style={{background:"border-box border-box",border: "none"}}>
        <div className="card-body" style={{borderBottom:"1px solid white", padding: "30px 0px"}}>
          <div className="display-ruby text-center">
            <a className="card-title text-decoration-none" style={{color:"#ffffff"}}>
              How does the pricing work for teams
            </a>
            <Image className="img-fluid ps-5" src="Frame.png" />
          </div>
        </div>
      </div>
    </Col>
  </Row>
    </Container>
  </div>

  )
}

