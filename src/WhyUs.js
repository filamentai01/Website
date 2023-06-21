import React from "react";
import './WhyUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import speed from './icons/speed_icon.svg';
import objectDetection from './icons/objectDetection_icon.svg';
import access from './icons/access_icon.svg';
import alert from './icons/alert_icon.svg';
import collaboration from './icons/collaboration_icon.svg';
import flexibility from './icons/flexibility_icon.svg';
import savings from './icons/savings_icon.svg';
import productivity from './icons/productivity_icon.svg';

import speedMobile from './icons/speed_icon_mobile.svg';
import objectDetectionMobile from './icons/objectDetection_icon_mobile.svg';
import accessMobile from './icons/access_icon_mobile.svg';
import alertMobile from './icons/alert_icon_mobile.svg';
import collaborationMobile from './icons/collaboration_icon_mobile.svg';
import flexibilityMobile from './icons/flexibility_icon_mobile.svg';
import savingsMobile from './icons/savings_icon_mobile.svg';
import productivityMobile from './icons/productivity_icon_mobile.svg';

const WhyUs = () => {
    return(
        <>
        
        <div className="main-container d-none d-lg-block" >
        <Container >
            <Row>
            <Col md={4} sm={4} xs={4} lg={4}></Col>
                <Col md={4} sm={4} xs={4}>
            <div className="whyus-header mb-5 font-face-title mr-3">Why Filament AI</div>
            </Col>
                <Col md={4} sm={4} xs={4}></Col>
            </Row>
        <Row >
            {/* <Col md={3}></Col> */}
            <Col md={3} xs={3} sm={3} className="mt-5">
            <img className="" src={alert} alt="icon" />
            <div className="icon_description font-face-icon-des">{'Real Time Alerts'}</div>
            </Col>
            <Col md={3} xs={3} sm={3} className="mt-5">
            <img className="" src={productivity} alt="icon" />
            <div className="icon_description font-face-icon-des">{'Resource Productivity'}</div>
            </Col>
            <Col md={3} xs={3} sm={3} className="mt-5">
            <img className="" src={access} alt="icon" />
            <div className="icon_description font-face-icon-des">{'Access Control'}</div>
            </Col>
            <Col md={3} xs={3} sm={3} className="mt-5">
            <img className="" src={savings} alt="icon" />
            <div className="icon_description font-face-icon-des">{'Business Savings'}</div>
            </Col>
            {/* <Col md={3}></Col> */}
        </Row>
        <Row >
        {/* <Col md={3}></Col> */}
            <Col md={3} className="whyus-footer mt-5">
            <img className="" src={objectDetection} alt="icon" />
            <div className="icon_description font-face-icon-des">{'Object / People Tracking'}</div>
            </Col>
            <Col md={3} className="whyus-footer mt-5 ">
            <img className="" src={speed} alt="icon" />
            <div className="icon_description font-face-icon-des">{'Speed & Security'}</div>
            </Col>
            <Col md={3} className="mt-5 whyus-footer">
            <img className="" src={flexibility} alt="icon" />
            <div className="icon_description font-face-icon-des">{'Flexibility & Scalability'}</div>
            </Col>
            <Col md={3} className="mt-5 whyus-footer">
            <img className="" src={collaboration} alt="icon" />
            <div className="icon_description font-face-icon-des">{'Better Collaboration'}</div>
            </Col>
            {/* <Col md={3}></Col> */}
        </Row>
        </Container>
        </div>
        <div className="main-container d-lg-none" >
        <Container >
            <Row>
            <Col md={3} sm={3} xs={3} lg={3}></Col>
                <Col md={6} sm={6} xs={6} lg={6}>
            <div className="whyus-header mb-4 font-face-title-mobile mr-3">Why Filament AI</div>
            </Col>
                <Col md={3} sm={3} xs={3} lg={3}></Col>
            </Row>
        <Row >
            {/* <Col md={3}></Col> */}
            <Col md={4} xs={4} sm={4} lg={4} className="mt-4">
            <img className="" src={alertMobile} alt="icon" />
            <div className="icon_description font-face-icon-des-mobile">{'Real Time Alerts'}</div>
            </Col>
            <Col md={4} xs={4} sm={4} lg={4} className="mt-4">
            <img className="" src={productivityMobile} alt="icon" />
            <div className="icon_description font-face-icon-des-mobile">{'Resource Productivity'}</div>
            </Col>
            <Col md={4} xs={4} sm={4} lg={4} className="mt-4">
            <img className="" src={accessMobile} alt="icon" />
            <div className="icon_description font-face-icon-des-mobile">{'Access Control'}</div>
            </Col>
           
            {/* <Col md={3}></Col> */}
        </Row>
        <Row >
        {/* <Col md={3}></Col> */}
        <Col md={4} xs={4} sm={4} lg={4} className="mt-4">
            <img className="" src={savingsMobile} alt="icon" />
            <div className="icon_description font-face-icon-des-mobile">{'Business Savings'}</div>
            </Col>
            <Col md={4} xs={4} sm={4} lg={4} className=" mt-4">
            <img className="" src={objectDetectionMobile} alt="icon" />
            <div className="icon_description font-face-icon-des-mobile">{'Object / People Tracking'}</div>
            </Col>
            <Col md={4} xs={4} sm={4} lg={4} className="mt-4 ">
            <img className="" src={speedMobile} alt="icon" />
            <div className="icon_description font-face-icon-des-mobile">{'Speed & Security'}</div>
            </Col>
           
            {/* <Col md={3}></Col> */}
        </Row>
        <Row>
        <Col md={2} xs={2} sm={2} lg={2} />   
        <Col md={4} xs={4} sm={4} lg={4}  className="mt-4 whyus-footer">
            <img className="" src={flexibilityMobile} alt="icon" />
            <div className="icon_description font-face-icon-des-mobile">{'Flexibility & Scalability'}</div>
            </Col>
            <Col md={4} xs={4} sm={4} lg={4} className="mt-4 whyus-footer">
            <img className="" src={collaborationMobile} alt="icon" />
            <div className="icon_description font-face-icon-des-mobile">{'Better Collaboration'}</div>
            </Col>
            <Col md={2} xs={2} sm={2} lg={2} /> 
        </Row>
        </Container>
        </div>
        </>
    )
}

export default WhyUs;