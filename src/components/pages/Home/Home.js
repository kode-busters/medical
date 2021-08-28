import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import img from '../../../img/quasar device.png';
import classes from './Home.module.css';
import logodark2 from '../../../img/logo2dark.png'

const Home = () => {
    return (
        <div className={classes.pagesContainer}>
            <Helmet>
                <title>Quasar | Home</title>
            </Helmet>
            <Container fluid>
                <Row className='p-5 d-flex justify-content-center align-items-center'>
                    <div className='col-lg-6 mb-2'>
                        <img src={logodark2} alt="quasar logo" />
                        <p className='mb-2'>One of the very first Health Information Security App in the Philippines with Blockchain Technology utilization for a more secure and seamless data protection</p>
                        <Link to='/about'><Button className='bg-success mb-2'>Learn More</Button></Link>
                    </div>
                    <div className='col-lg-5'>
                        <img src={img} alt='Vaccination Vector' className='w-100'/>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home
