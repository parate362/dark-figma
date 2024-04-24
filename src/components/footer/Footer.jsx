import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'

const Last = () => {
  return (
    <div className='bg-black  h-auto w-auto  border-top border-secondary pt-2'>

<Container >
      <Row>
        <Col xs={12} md={6} className="text-center text-md-start mb-md-0">
          <p className='text-light-emphasis'>@ 2024 Your Company, Inc. All rights reserved</p>
        </Col>

        <Col xs={12} md={6}  className="text-center text-md-end">
          <Image className="img-fluid m-2" src="./x.png" />
          <Image className="img-fluid m-2" src="./insta.png" />
          <Image className="img-fluid m-2" src="./pintrest.png" />
          <Image className="img-fluid m-2" src="./linkdin.png" />
          <Image className="img-fluid m-2" src="./tiktok.png" />
          <Image className="img-fluid m-2" src="./youtube.png" />
        </Col>
      </Row>
    </Container>

      



    </div>
  )
}

export default Last;
