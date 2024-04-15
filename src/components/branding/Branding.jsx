import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

export const Branding = () => {
  return (
    <div className=' bg-black'>
    
    <div className='container h-auto w-auto p-5'>
          <Row className="py-2 justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <h6>Trusted by the world’s most innovative teams</h6>
            </Col>
          </Row>

          <Row  className="justify-content-center">
            <Col xs={6} sm={4} md={2}  className="text-center">
              <Image className="img-fluid" src="acme1.png" />
            </Col>
            <Col xs={6} sm={4} md={2}  className="text-center">
              <Image className="img-fluid" src="quantum1.png" />
            </Col>
            <Col xs={6} sm={4} md={2}  className="text-center">
              <Image className="img-fluid" src="echo1.png" />
            </Col>
            <Col xs={6} sm={4} md={2}  className="text-center">
              <Image className="img-fluid" src="celestia1.png" />
            </Col>
            <Col xs={6} sm={4} md={2}  className="text-center">
              <Image className="img-fluid" src="pulse1.png" />
            </Col>
            <Col xs={6} sm={4} md={2}  className="text-center">
              <Image className="img-fluid" src="apex1.png" />
            </Col>
          </Row>
        </div>
     
    </div>
  )
}

