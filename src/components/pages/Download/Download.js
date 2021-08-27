import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import img from '../../../img/download-bg.png'
import classes from './Download.module.css';

const Download = () => {
    return (
        <div className={classes.pagesContainer}>
            <Helmet>
                <title>Company | Download</title>
            </Helmet>
            <Container fluid>
                <div className='row my-3'>
                    <div className='col-lg-6 mb-2 text-center me-0 ms-auto'>
                        <h1 className='mb-2'>Download</h1>
                        <p className='mb-2'>Download our Health App to experience seamless Health Record Tracking and sharing.</p>
                        <div className={classes.downloadIcon}>
                            <i className="fab fa-google-play"></i>
                            <i className="fab fa-app-store-ios"></i>
                        </div>
                    </div>

                </div>
                <Row>
                    <div className='col-lg-6'>
                        <img src={img} alt='Download Vector' className='w-100' />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Download
