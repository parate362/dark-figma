import React from 'react'
import "./Grid.css"
import { Container,Row,Col,Card } from 'react-bootstrap'

const Grid = () => {
  return (
    <div className='grid'>
     <div className="container w-auto h-auto p-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h2 className="text-light fw-bold">Everything you need</h2>
            <p className="text-light fw-light pt-3">
              Enjoy customizable lists, team work tools, and smart <br />{" "}
              tracking all in one place. Set tasks, get reminders, and <br />{" "}
              see your progress simply and quickly.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4 " >
          <Col md={4} sm={12} className="text-center p-2">
            <Card
              border="dark"
              className='w-auto h-auto bg-black'
            >
              <Card.Body>
                <Card.Img
                  src="Frame21.png"
                  style={{ width: "56px", height: "56px" }}
                  className="mx-auto d-block"
                />
                <Card.Header className="text-light fw-bold text-center">
                  {" "}
                  Integration ecosystem
                </Card.Header>
                <Card.Text className="text-light fw-light text-center">
                  Enhance your productivity by connecting <br /> with your
                  favorite tools, keeping all your <br />
                  essentials in one place.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={12} className="text-center p-2">
            <Card
              border="dark"
              className='w-auto h-auto bg-black'
            >
              <Card.Body>
                <Card.Img
                  src="Frame21.png"
                  style={{ width: "56px", height: "56px" }}
                  className="mx-auto d-block"
                />
                <Card.Header className="text-light fw-bold text-center">
                  {" "}
                  Goal setting and tracking
                </Card.Header>
                <Card.Text className="text-light fw-light text-center">
                Define and track your goals, breaking <br />down objectives into
                achievable tasks to <br />keep your targets in sight.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={12} className="text-center p-2">
            <Card
              border="dark"
            className='w-auto h-auto bg-black'
            >
              <Card.Body >
                <Card.Img
                  src="Frame21.png"
                  style={{ width: "56px", height: "56px" }}
                  className="mx-auto d-block"
                />
                <Card.Header className="text-light fw-bold text-center">
                  {" "}
                  Secure data encryption
                </Card.Header>
                <Card.Text className="text-light fw-light text-center">
                With end-to-end encryption, your data is <br />securely stored and
                protected from <br />unauthorized access.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      </div>
  )
}

export default Grid;