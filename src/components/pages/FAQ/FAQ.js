import React from 'react';
import { Accordion, Container} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import classes from './FAQ.module.css'

const FAQ = () => {
    return (
        <div className={classes.pagesContainer}>
            <Helmet>
                <title>Quasar | Frequently Asked Questions</title>
            </Helmet>
            <Container fluid className='m-auto'>
                <div className='row my-3'>
                    <div className='col-lg-12 mb-2 text-center m-auto'>
                        <h1 className='mb-3'>Frequently Asked Questions</h1>
                        <p className='mb-3'>Browse our section of questions that can answer you.</p>
                        <div className='col-8 m-auto mb-3'>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is Quasar?</Accordion.Header>
                                    <Accordion.Body>
                                        Quasar is an official and secure Health data security app where you can control who can see your medical records. It also boasts a QR-based information sharing where you can control who can see your records.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Is Quasar collecting our private data for their own?</Accordion.Header>
                                    <Accordion.Body>
                                        Quasar and its associates ensure every users that we don't have any ill intention of private data exploitation. We only intend to protect every user's data for any malicious intent on their medical data from being used without their consent and permission.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Will anything change aside from the data that I want to edit?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes there is. Every health data stored is paired with a unique key for a more secured data storage. Thus every QR code you will see on your overview will also change.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Why do you claim it is secure?</Accordion.Header>
                                    <Accordion.Body>
                                        Quasar is using the advanced technology of blockchain, meaning a decentralized and non-authoritative information dissemination. Only the users can control what will happen with their medical data, lessening any malicious exploitation.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default FAQ
