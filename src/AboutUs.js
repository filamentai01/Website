import React from "react";
// import aboutUsImg from './AboutUsImg.svg';
import './AboutUs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { forwardRef } from "react";
import aboutUsImg from './images/img_test.svg';

const AboutUs = forwardRef((props, ref) => {

    return (
        <>
            <Container ref={ref}>
                <Row>


                    <div className="aboutus_section d-none d-lg-block">

                        <div className="row align-items-center">
                            <Col md={6} xs={6}>
                                <div >
                                    <img className={"aboutus_image"} src={aboutUsImg} alt="logo" />
                                </div>
                            </Col>
                            <Col md={6} xs={6}>
                                <div className="aboutus_text">

                                    <div className="font-face-title mb-4">
                                        Who We Are
                                    </div>
                                    <div>
                                        <div className="aboutus_info font-face-subtext">Welcome to our AI computer vision company! We are a team of experienced professionals dedicated to bringing cutting-edge AI technology to businesses and organizations worldwide.Our mission is to provide state-of-the-art computer vision solutions that help our clients optimize their operations, improve their customer experiences, and achieve their business goals. </div>
                                    </div>
                                </div>
                            </Col>

                        </div>

                    </div>

                    <div className="aboutus_section_mobile  d-lg-none">
                        <div className="font-face-title-mobile mb-4">
                            Who We Are
                        </div>
                        <div className="align-items-center">
                            <img className={"aboutus_image_mobile mb-4"} src={aboutUsImg} alt="logo" />
                        </div>
                        <div>
                            <div className="aboutus_info font-face-subtext-mobile p-2">Welcome to our AI computer vision company! We are a team of experienced professionals dedicated to bringing cutting-edge AI technology to businesses and organizations worldwide.Our mission is to provide state-of-the-art computer vision solutions that help our clients optimize their operations, improve their customer experiences, and achieve their business goals. </div>
                        </div>
                    </div>

                </Row>
            </Container>
        </>
    )
});

export default AboutUs;