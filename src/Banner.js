import React from "react";
import bgImg from './images/bgImg.svg';
import './Banner.css'
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = ({servicesRef}) => {
    const onServicesClick = (e) => {
        e.preventDefault();
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
      };

    return(
        <>
        <div className="dark-overlay">
        <img className="banner_img d-none d-lg-block" src={bgImg} alt="logo" />
        <img className="banner_img_mobile d-lg-none" src={bgImg} alt="logo" />
        </div>
     <Container>
         <div className=" d-none d-lg-block">
            <Col xs={8} lg={8} sm={8} md={8} className="banner-heading font-face-play-bold">
            <div >Bringing Cutting-Edge AI Technology to Businesses Worldwide</div>
            </Col>
            <Col xs={8} lg={8} sm={4} md={4} className="banner-content font-face-play-regular">
            <div >Experience the Power of Computer Vision</div>
            </Col>
            <Col xs={2} lg={2} sm={2} md={2} className="banner-button">
            <div className="font-face-button" onClick={onServicesClick}>Explore Now</div>
            </Col>
            </div>

            <div className="d-lg-none">
            <Col xs={8} lg={8} sm={8} md={8} className="banner-heading-mobile font-face-play-bold-mobile">
            <div >Bringing Cutting-Edge AI Technology to Businesses Worldwide</div>
            </Col>
            <Col xs={8} lg={8} sm={4} md={4} className="banner-content-mobile font-face-play-regular-mobile">
            <div >Experience the Power of Computer Vision</div>
            </Col>
            <Col xs={3} lg={2} sm={2} md={2} className="banner-button-mobile">
            <div className="font-face-button-mobile" onClick={onServicesClick}>Explore Now</div>
            </Col>
            </div>
        </Container>
        </>
    )
}

export default Banner;