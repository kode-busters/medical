import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import img from '../../../img/home-bg.png';
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.pagesContainer}>
            <Helmet>
                <title>Company | Home</title>
            </Helmet>
            <Container fluid>
                <Row className='p-5 d-flex justify-content-center align-items-center'>
                    <div className='col-lg-6 mb-2'>
                        <h1 className='mb-2'>App Name</h1>
                        <p className='mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        <Button className='bg-success mb-2'>Learn More</Button>
                    </div>
                    <div className='col-lg-6'>
                        <img src={img} alt='Vaccination Vector' className='w-100'/>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home
