import React from "react";
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import linkedin from './icons/linkedin_icon.svg';
import twitter from './icons/twitter_icon.svg';
import linkedinMobile from './icons/linkedin_icon_mobile.svg';
import twitterMobile from './icons/twitter_icon_mobile.svg';
import logoMobile from './icons/logo_mobile.svg';

const Footer = ({ servicesRef, aboutUsRef, contactUsRef }) => {

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

    return (
        <>
            <div className="footer-content  d-none d-lg-block">
                <Container>
                    <Row>
                        <Col md={2} sm={2} xs={2} lg={2} className="mb-5">
                            <svg width="169" height="25" viewBox="0 0 169 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_582_4397)">
                                    <path d="M3.12 10.8343H0V7.74857H3.12V5.24571C3.12 3.89714 3.33714 2.84571 3.77143 2.09143C4.22857 1.31429 4.91429 0.777143 5.82857 0.48C6.76571 0.16 8.01143 0 9.56571 0C10.3429 0 11.3257 0.0571429 12.5143 0.171429V3.25714C11.5314 3.14286 10.8114 3.08571 10.3543 3.08571C9.50857 3.08571 8.92571 3.22286 8.60571 3.49714C8.28572 3.74857 8.12571 4.24 8.12571 4.97143V7.74857H12.3429V10.8343H8.12571V24.3429H3.12V10.8343ZM14.1257 7.74857H19.1314V24.3429H14.1257V7.74857Z" fill="#013096" />
                                    <path d="M23.7852 0.342896H28.7908V24.3429H23.7852V0.342896Z" fill="#013096" />
                                    <path d="M38.0216 24.6857C36.4673 24.6857 35.3016 24.5485 34.5244 24.2742C33.7701 23.9771 33.233 23.4628 32.913 22.7314C32.6159 21.9771 32.4673 20.8571 32.4673 19.3714C32.4673 18.0457 32.6273 17.0057 32.9473 16.2514C33.2901 15.4971 33.8273 14.96 34.5587 14.64C35.313 14.2971 36.3416 14.1257 37.6444 14.1257H43.2673V12.9942C43.2673 12.2857 43.1644 11.76 42.9587 11.4171C42.7759 11.0742 42.4216 10.8342 41.8959 10.6971C41.393 10.56 40.6273 10.4914 39.5987 10.4914C38.1816 10.4914 36.2387 10.6285 33.7701 10.9028V7.74853C35.5759 7.51996 37.6901 7.40567 40.113 7.40567C42.2387 7.40567 43.873 7.56567 45.0159 7.88567C46.1816 8.20567 47.0159 8.75424 47.5187 9.53138C48.0216 10.3085 48.273 11.44 48.273 12.9257V24.3428H43.3701V22.8342C42.9816 23.4971 42.4559 23.9657 41.793 24.24C41.1301 24.5371 39.873 24.6857 38.0216 24.6857ZM39.9759 21.5657C40.9816 21.5657 41.7016 21.5314 42.1359 21.4628C42.4559 21.4171 42.673 21.3485 42.7873 21.2571C42.9244 21.1657 43.0387 21.0171 43.1301 20.8114C43.2216 20.6514 43.2673 20.4114 43.2673 20.0914V16.8685H39.8387C39.0616 16.8685 38.513 16.9257 38.193 17.04C37.873 17.1314 37.6559 17.3371 37.5416 17.6571C37.4273 17.9542 37.3701 18.4914 37.3701 19.2685C37.3701 20.0228 37.4273 20.5485 37.5416 20.8457C37.6559 21.1428 37.873 21.3371 38.193 21.4285C38.5359 21.52 39.1301 21.5657 39.9759 21.5657Z" fill="#013096" />
                                    <path d="M52.6777 7.74853H57.6831V9.77139C58.0031 8.19424 59.6374 7.40567 62.586 7.40567C64.1402 7.40567 65.3177 7.61138 66.1177 8.02281C66.9177 8.41138 67.4549 9.02853 67.7292 9.87424C68.0035 9.00567 68.5292 8.3771 69.3063 7.98853C70.1063 7.59996 71.3063 7.40567 72.9063 7.40567C74.3463 7.40567 75.4545 7.5771 76.232 7.91996C77.0092 8.23996 77.5463 8.74281 77.8435 9.42853C78.1635 10.1142 78.3235 11.0285 78.3235 12.1714V24.3428H73.3174V12.8571C73.3174 12.1257 73.272 11.6114 73.1806 11.3142C73.0892 10.9942 72.8831 10.7771 72.5631 10.6628C72.266 10.5485 71.7402 10.4914 70.986 10.4914C70.0488 10.4914 69.3745 10.5485 68.9631 10.6628C68.5745 10.7771 68.312 10.9942 68.1749 11.3142C68.0606 11.6114 68.0035 12.1257 68.0035 12.8571V24.3428H62.9977V12.8571C62.9977 12.1257 62.9517 11.6114 62.8602 11.3142C62.7688 10.9942 62.5635 10.7771 62.2435 10.6628C61.9463 10.5485 61.4206 10.4914 60.6663 10.4914C59.7292 10.4914 59.0549 10.5485 58.6435 10.6628C58.2549 10.7771 57.9917 10.9942 57.8545 11.3142C57.7402 11.6114 57.6831 12.1257 57.6831 12.8571V24.3428H52.6777V7.74853Z" fill="#013096" />
                                    <path d="M91.0424 24.6857C85.1681 24.6857 82.231 22.8914 82.231 19.3028V13.3371C82.231 11.2571 82.8938 9.74853 84.2195 8.81138C85.5681 7.87424 87.6367 7.40567 90.4252 7.40567C93.0538 7.40567 94.9738 7.86281 96.1852 8.7771C97.4195 9.66853 98.0367 11.1885 98.0367 13.3371V17.3828H87.271V18.8914C87.271 19.8514 87.6138 20.5371 88.2995 20.9485C88.9852 21.36 90.2195 21.5657 92.0024 21.5657C93.6481 21.5657 95.4995 21.3257 97.5567 20.8457V24.0342C95.5224 24.4685 93.351 24.6857 91.0424 24.6857ZM93.271 14.5371V12.1371C93.271 11.5885 93.0424 11.1771 92.5852 10.9028C92.151 10.6285 91.4081 10.4914 90.3567 10.4914C89.1452 10.4914 88.3338 10.6285 87.9224 10.9028C87.4881 11.2 87.271 11.6114 87.271 12.1371V14.5371H93.271Z" fill="#013096" />
                                    <path d="M101.862 7.74853H106.799V9.77139C107.188 8.19424 108.959 7.40567 112.114 7.40567C114.239 7.40567 115.725 7.79424 116.571 8.57138C117.439 9.32567 117.874 10.5257 117.874 12.1714V24.3428H112.868V12.8228C112.868 12.1828 112.799 11.7028 112.662 11.3828C112.548 11.0628 112.297 10.8342 111.908 10.6971C111.542 10.56 110.971 10.4914 110.194 10.4914C109.211 10.4914 108.491 10.56 108.034 10.6971C107.577 10.8114 107.268 11.0285 107.108 11.3485C106.948 11.6685 106.868 12.16 106.868 12.8228V24.3428H101.862V7.74853Z" fill="#013096" />
                                    <path d="M130.55 24.6858C129.704 24.6858 128.996 24.6515 128.424 24.5829C127.853 24.5144 127.281 24.3772 126.71 24.1715C126.07 23.9658 125.544 23.6801 125.133 23.3144C124.744 22.9486 124.424 22.4458 124.173 21.8058C123.899 21.1429 123.761 20.3772 123.761 19.5086V10.8344H120.401V7.74864H123.761V2.94864H128.767V7.74864H133.327V10.8344H128.767V18.6515C128.767 19.4515 128.836 20.0572 128.973 20.4686C129.11 20.8572 129.373 21.1429 129.761 21.3258C130.15 21.4858 130.744 21.5658 131.544 21.5658C131.864 21.5658 132.459 21.5086 133.327 21.3944V24.5144C132.253 24.6286 131.327 24.6858 130.55 24.6858Z" fill="#013096" />
                                    <path d="M148.814 24.6857C147.259 24.6857 146.094 24.5485 145.316 24.2742C144.562 23.9771 144.025 23.4628 143.705 22.7314C143.408 21.9771 143.259 20.8571 143.259 19.3714C143.259 18.0457 143.419 17.0057 143.739 16.2514C144.082 15.4971 144.619 14.96 145.351 14.64C146.105 14.2971 147.134 14.1257 148.436 14.1257H154.059V12.9942C154.059 12.2857 153.956 11.76 153.751 11.4171C153.568 11.0742 153.214 10.8342 152.688 10.6971C152.185 10.56 151.419 10.4914 150.391 10.4914C148.974 10.4914 147.031 10.6285 144.562 10.9028V7.74853C146.368 7.51996 148.482 7.40567 150.905 7.40567C153.031 7.40567 154.665 7.56567 155.808 7.88567C156.974 8.20567 157.808 8.75424 158.311 9.53138C158.814 10.3085 159.065 11.44 159.065 12.9257V24.3428H154.162V22.8342C153.774 23.4971 153.248 23.9657 152.585 24.24C151.922 24.5371 150.665 24.6857 148.814 24.6857ZM150.768 21.5657C151.774 21.5657 152.494 21.5314 152.928 21.4628C153.248 21.4171 153.465 21.3485 153.579 21.2571C153.716 21.1657 153.831 21.0171 153.922 20.8114C154.014 20.6514 154.059 20.4114 154.059 20.0914V16.8685H150.631C149.854 16.8685 149.305 16.9257 148.985 17.04C148.665 17.1314 148.448 17.3371 148.334 17.6571C148.219 17.9542 148.162 18.4914 148.162 19.2685C148.162 20.0228 148.219 20.5485 148.334 20.8457C148.448 21.1428 148.665 21.3371 148.985 21.4285C149.328 21.52 149.922 21.5657 150.768 21.5657Z" fill="#013096" />
                                    <path d="M163.606 1.74857H168.612V5.79428H163.606V1.74857ZM163.606 7.74856H168.612V24.3428H163.606V7.74856Z" fill="#013096" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_582_4397">
                                        <rect width="168.929" height="25" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className="d-flex align-items-center">
                                <a href="https://www.linkedin.com/company/filament.ai/" target="_blank"><img src={linkedin} alt={'linkedin'} className='mt-5 footer-icons' /></a>
                                <img src={twitter} alt={'twitter'} className='mt-5' />
                            </div>
                        </Col>
                        <Col md={3} sm={3} xs={3} lg={3} className="mb-5"></Col>
                        <Col md={2} sm={2} xs={2} lg={2} className="mb-5">
                            <div className="footer-heading mb-4 font-face-footer-heading" onClick={onServicesClick}>{'Services'}</div>
                            <div className="footer-content-text font-face-footer-content" onClick={onServicesClick}>{'Face Recognition Toolkit'}</div>
                            <div className="footer-content-text font-face-footer-content" onClick={onServicesClick}>{'Object Detection and Tracking Toolkit'}</div>
                            <div className="footer-content-text font-face-footer-content" onClick={onServicesClick}>{'Health & Safety Compliance Toolkit'}</div>
                            <div className="footer-content-text font-face-footer-content" onClick={onServicesClick}>{'Security Toolkit'}</div>
                            <div className="footer-content-text font-face-footer-content" onClick={onServicesClick}>{'Productivity Toolkit'}</div>
                            <div className="footer-content-text font-face-footer-content" onClick={onServicesClick}>{'Footfall Monitoring Toolkit'}</div>
                            <div className="footer-content-text font-face-footer-content" onClick={onServicesClick}>{'Bay Analytics Toolkit'}</div>
                            <div className="footer-content-text font-face-footer-content" onClick={onServicesClick}>{'Defect Analysis'}</div>
                        </Col>
                        <Col md={3} sm={3} xs={3} lg={3} className="mb-5"></Col>
                        <Col md={2} sm={2} xs={2} lg={2} className="mb-5">
                            <div className="footer-heading mb-4 font-face-footer-heading">Company</div>
                            <div className="footer-content-text font-face-footer-content" onClick={onAboutUsClick}>About Us</div>
                            <div className="footer-content-text font-face-footer-content" onClick={onContactUsClick}>Contact Us</div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-content-mobile d-lg-none p-4">
                <Container>
                    <Row>
                        
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={logoMobile} alt="logo" />
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/company/filament.ai/" target="_blank"><img src={linkedinMobile} alt={'linkedin'} className='footer-icons' /></a>
                                    <img src={twitterMobile} alt={'twitter'} />
                                </div>
                                </div>
                    </Row>
                    <Row>
                       
                        <Col md={7} sm={7} xs={7} lg={7} className="mb-4 mt-4">
                            <div className="footer-heading-mobile mb-4 font-face-footer-heading-mobile" onClick={onServicesClick}>{'Services'}</div>
                            <div className="footer-content-text-mobile font-face-footer-content-mobile" onClick={onServicesClick}>{'Face Recognition Toolkit'}</div>
                            <div className="footer-content-text-mobile font-face-footer-content-mobile" onClick={onServicesClick}>{'Object Detection and Tracking Toolkit'}</div>
                            <div className="footer-content-text-mobile font-face-footer-content-mobile" onClick={onServicesClick}>{'Health & Safety Compliance Toolkit'}</div>
                            <div className="footer-content-text-mobile font-face-footer-content-mobile" onClick={onServicesClick}>{'Security Toolkit'}</div>
                            <div className="footer-content-text-mobile font-face-footer-content-mobile" onClick={onServicesClick}>{'Productivity Toolkit'}</div>
                            <div className="footer-content-text-mobile font-face-footer-content-mobile" onClick={onServicesClick}>{'Footfall Monitoring Toolkit'}</div>
                            <div className="footer-content-text-mobile font-face-footer-content-mobile" onClick={onServicesClick}>{'Bay Analytics Toolkit'}</div>
                            <div className="footer-content-text-mobile font-face-footer-content-mobile" onClick={onServicesClick}>{'Defect Analysis'}</div>
                        </Col>
                        <Col md={2} sm={2} xs={2} lg={2}/>
                        <Col md={3} sm={3} xs={3} lg={3} className="mb-4 mt-4">
                            <div className="footer-heading-mobile mb-4 font-face-footer-heading-mobile">Company</div>
                            <div className="footer-content-text-mobile font-face-footer-content-mobile" onClick={onAboutUsClick}>About Us</div>
                            <div className="footer-content-text-mobile font-face-footer-content-mobile" onClick={onContactUsClick}>Contact Us</div>
                        </Col>
                    
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer;