import React from 'react'
import "./Product.css"
import { Container, Row, Col, Image } from "react-bootstrap";

const Product = () => {
  return (
    <div className='product'>

      <div className="container w-auto h-auto p-5">
        <Row>
          <Col>
          <h1 className='text-white' >Intuitive interface</h1>

          <p className='text-white'>Celebrate the joy of accomplishment with an app <br /> designed to track your progress, motivate your efforts, <br /> and celebrate your successes, one task at a time.</p>
          </Col>
        </Row>

      <Row>
        <Col>
        <Image
              className="img-fluid"
              src="./AppNight.png"
            />

        </Col>
      </Row>

      </div>
      
    </div>
  )
}

export default Product;