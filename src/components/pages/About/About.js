import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import classes from "./About.module.css";

const About = () => {
    return (
        <div className={classes.pagesContainer}>
            <Helmet>
                <title>Quasar | About</title>
            </Helmet>
            <Container fluid>
                <Row className={`text-center mt-3 ${classes.aboutHeader}`}>
                    <h1>Quasar<font>.</font></h1>
                    <p>Transforming the future of health care.</p>
                </Row>

                <Row className='col-12 m-auto mt-3'>
                    <div className='col-lg-3 p-2'>
                        <Card className='text-center border-5 border-success'>
                            <Card.Body>
                                <Card.Title><h4>Blockchain System</h4></Card.Title>
                                <Card.Text>
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/17-internet-network-technology/encrypted.png" alt="Blockchain system"/>
                                </Card.Text>
                                <Card.Text>
                                    Our app utilizes Blockchain system which improves the security and data privacy protection significantly.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-3 p-2'>
                        <Card className='text-center border-5 border-success'>
                            <Card.Body className='text-center'>
                                <Card.Title>Peer to Peer Vaccination Verification</Card.Title>
                                <Card.Text>
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/17-internet-network-technology/smartphone-transfer.png" alt="Peer to Peer Vaccination Verification"/>
                                </Card.Text>
                                <Card.Text>
                                    Utilizing blockchain systems makes the control of public medical data easier and more secure. The only public data displayed assosciated to you is your Covid-19 vaccination record
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-3 p-2'>
                        <Card className='text-center border-5 border-success'>
                            <Card.Body className='text-center'>
                                <Card.Title>Secure Medical Records</Card.Title>
                                <Card.Text>
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/21-medical-science-lab/diagnostic-pulse.png" alt="Secure Medical Records"/>
                                </Card.Text>
                                <Card.Text>
                                    Every medical records being sent from our app is secured with key, controlling the availabity for the public.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-3 p-2'>
                        <Card className='text-center border-5 border-success'>
                            <Card.Body className='text-center'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    
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
