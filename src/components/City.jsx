import React from 'react';
import '../scss/City.scss';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import img1 from '../components/images/v_mask.jpg';
import img2 from '../components/images/v_kanal.jpg';
import img3 from '../components/images/p_eiffel.jpg';



function City() {
    


    return (
        <div className="Container1">
            <Container fluid>

                <Row>
                    <Col xs={12} md={8} fluid>
                        <Row className="Row1">
                            <Col>
                                <Button variant="light" size="lg">
                                    <div className="city1">
                                    </div>
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="light" size="lg">
                                    <div className="city2">
                                    </div></Button>
                            </Col>
                            <Col>
                                <Button variant="light" size="lg">
                                    <div className="city3">
                                    </div></Button>
                            </Col>



                        </Row>
                        <Row className="Row2">
                        <Col>
                                <Button variant="light" size="lg">
                                    <div className="city4">
                                    </div></Button>
                            </Col>
                            <Col>
                                <Button variant="light" size="lg">
                                    <div className="city5">

                                    </div></Button>
                            </Col>
                            <Col>
                                <Button variant="light" size="lg">
                                    <div className="city6">

                                    </div></Button>
                            </Col>

                        </Row>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="images">
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src={img1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Venice Carnival</h3>
                                        <p className="text-dark">The carnival ends with the Christian celebration of Lent, forty days before Easter, on Shrove Tuesday (Martedì Grasso or Mardi Gras), the day before Ash Wednesday.</p>
                                    </Carousel.Caption>
                                </Carousel.Item >
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src={img2}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Canal Grande</h3>
                                        <p>30100 Venezia VE</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src={img3}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Eiffel Tower</h3>
                                        <p>
                                            Champ de Mars, 5 Avenue Anatole France, 75007 Paris, Fransa
            </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>


                        </div>

                    </Col>
                </Row>


            </Container>

        </div>




    );
}



export default City;
