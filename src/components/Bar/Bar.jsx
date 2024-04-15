import React from "react"
import './Bar.css'
import { Container, Row, Col, Image } from "react-bootstrap";


const Bar = ()=>{
   
    return(
   
      <div className="bar">
        <div className="container h-auto w-auto p-2">
        <Row className="justify-content-center">
            <Col className="text-center">
        <p className="text-dark ">This page is included in a free SaaS Website Kit. View the complete Kit→</p>
        </Col>
        </Row>

        </div>
     
        </div>
    
    )
}

export default Bar;