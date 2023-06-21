import React from "react";
import './Header.css'
import logo from './icons/logo.svg';
import logoMobile from './icons/logo_mobile.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = ({ servicesRef, aboutUsRef, contactUsRef }) => {

    const onServicesClick = (e) => {
        e.preventDefault();
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
      };

      const onAboutUsClick = (e) => {
        e.preventDefault();
        aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
      };

      const onContactUsClick = (e) => {
        e.preventDefault();
        contactUsRef.current.scrollIntoView({ behavior: "smooth" });
      };

    return(
        <>
        <Container>
        <Row>
        <Col md={12} sm={12} xs={12} lg={12}>
        <header className="header d-none d-lg-block">
          <div className="d-flex justify-content-between">
        <img className='logo' src={logo} alt="logo" />
            <div className="header_options">
                <div className="default_margin font-face-button-link " onClick={onServicesClick}>Services</div>
                <div className="default_margin font-face-button-link" onClick={onAboutUsClick}>About Us</div>
                <div className="header_button font-face-button" onClick={onContactUsClick}>Contact Us</div>
            </div>
            </div>
        </header>
        <header className="header d-lg-none d-flex justify-content-between">
        <img className='logo' src={logoMobile} alt="logo" />
            {/* <img className='logo' src={hamburger} alt="logo" /> */}
                {/* <div className="default_margin font-face-button-link " onClick={onServicesClick}>Services</div>
                <div className="default_margin font-face-button-link" onClick={onAboutUsClick}>About Us</div>
                <div className="header_button font-face-button" onClick={onContactUsClick}>Contact Us</div> */}
        </header>
        </Col>
        </Row>
        </Container>
        </>
    )
}

export default Header;