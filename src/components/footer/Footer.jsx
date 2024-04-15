import React from 'react'

import { Container,Row,Col,Image } from 'react-bootstrap'

const Last = () => {
  return (
    <div className='bg-black  h-auto w-auto  border-top border-secondary pt-2'>

<Container >
      <Row>
        <Col style={{ color: "#808080", textAlign:"start" }}>
          <p>@ 2024 Your Company, Inc. All rights reserved</p>
        </Col>

        <Col style={{ textAlign: "end" }}>
          <Image className="img-fluid m-2" src="./X.png" />
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