import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import classes from "./About.module.css"

const About = () => {
    return (
        <div className={classes.pagesContainer}>
            <Helmet>
                <title>Company | About</title>
            </Helmet>
            <Container fluid>
                <Row className='text-center mt-3'>
                    <h2>Why choose us</h2>
                </Row>
                <Row className='col-12 m-auto mt-3'>
                    <div className='col-md-3 p-2'>
                        <Card className='text-center border-5 border-success'>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-3 p-2'>
                        <Card className='text-center border-5 border-success'>
                            <Card.Body className='text-center'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-3 p-2'>
                        <Card className='text-center border-5 border-success'>
                            <Card.Body className='text-center'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className='col-md-3 p-2'>
                        <Card className='text-center border-5 border-success'>
                            <Card.Body className='text-center'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default About
