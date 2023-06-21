import React from "react";
import './ContactUs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contactus from './images/contactus_img.svg';
import mail from './icons/mail_icon.svg';
import phone from './icons/phone_icon.svg';
import mailMobile from './icons/mail_icon_mobile.svg';
import phoneMobile from './icons/phone_icon_mobile.svg';
import { forwardRef } from "react";

const ContactUs = forwardRef((props, ref) => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }

    return (
        <>
            <div className="d-none d-lg-block">
                <div className="contact-form" ref={ref}>
                    <Container className="text-center">
                        <Row>
                            <Col md={3} sm={3} xs={3} lg={3}></Col>
                            <Col md={6} sm={6} xs={6} lg={6}>
                                <div className="form-heading font-face-title">Feel Free To Contact Us</div>
                            </Col>
                            <Col md={3} sm={3} xs={3} lg={3}></Col>
                        </Row>
                    </Container>
                    <Container className="form-controls mt-5 ">
                        <Row className="mb-5">
                            {/* <Col md={1} xs={1}></Col> */}
                            <Col md={5} xs={5} sm={5} lg={5} className="mt-5">

                                <img src={contactus} alt={'contact us'} className='mb-4 w-60' />
                                {/* <div className="font-face-heading mt-2 mb-5">Connect With Us</div> */}
                                <div className="d-flex align-items-center contact-info"><img src={phone} alt={'phone'} className="contact-icon" /><div className="font-face-forms">+91-9619300426</div></div>
                                <div className="d-flex align-items-center contact-info mb-5"><img src={mail} alt={'mail'} className="contact-icon" /><div className="font-face-forms">sales@filamentai.in</div></div>

                            </Col>

                            <Col md={6} xs={6} sm={6} lg={6} >
                                <Row>
                                    <Col md={12} xs={12} sm={12} lg={12} >
                                        <div className="form-items mb-4 mt-5">
                                            <div className="font-face-heading ">Connect With Us</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} xs={6} sm={6} lg={6} >
                                        <div className="form-items mb-3">
                                            <div className="mb-2 font-face-forms">Name</div>
                                            <input type="text" className="font-face-placeholder input form-elements" placeholder="Enter your name"/>
                                        </div>
                                    </Col>
                                    <Col md={6} xs={6} sm={6} lg={6} >
                                        <div className="form-items mb-3">
                                            <div className="mb-2 font-face-forms">Company</div>
                                            <input type="text" className="font-face-placeholder input form-elements" placeholder="Enter your company name" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} xs={6} sm={6} lg={6} >
                                        <div className="form-items mb-3">
                                            <div className="mb-2 font-face-forms">Email</div>
                                            <input type="text" className="font-face-placeholder input form-elements" placeholder="Enter your email address" />
                                        </div>
                                    </Col>
                                    <Col md={6} xs={6} sm={6} lg={6}>
                                        <div className="form-items mb-3">
                                            <div className="mb-2 font-face-forms">Phone number</div>
                                            <input type="text" className="font-face-placeholder input form-elements" placeholder="Enter your phone number"  />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} xs={12} sm={12} lg={12}>
                                        <div className="form-items mb-4">
                                            <div className="mb-2 font-face-forms">Enter your message</div>
                                            <input type="textarea" className="font-face-placeholder input text-area form-elements" placeholder="Message"  />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} xs={12} sm={12} lg={12}>
                                        <div className="form-items mb-5">
                                            <button type="submit" className="submit-button w-100 font-face-button">Submit</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={1} xs={1} sm={1} lg={1}></Col>
                        </Row>
                    </Container>
                </div>

                <div>

                </div>
            </div>
            <div className="d-lg-none contact-form-mobile-container pt-5 pb-5">
                <Container>
                    <Row className="form-heading font-face-title-mobile">
                        <div className="mb-3">Feel Free To Contact Us</div>
                        <Col md={4} sm={4} xs={4} lg={4}></Col>
                        <Col md={4} sm={4} xs={4} lg={4}>
                            <img src={contactus} alt={'contact us'} className='mb-3 w-100' />
                        </Col>
                        <Col md={4} sm={4} xs={4} lg={4}></Col>
                    </Row>
                    <Row>
                        <Col md={2} sm={2} xs={2} lg={2}></Col>
                        <Col md={8} sm={8} xs={8} lg={8}>
                            <div className="d-flex align-items-center contact-info text-center"><img src={phoneMobile} alt={'phone'} className="contact-icon" /><div className="font-face-forms-mobile form-heading">+91-9619300426</div></div>
                            <div className="d-flex align-items-center contact-info mb-5"><img src={mailMobile} alt={'mail'} className="contact-icon" /><div className="font-face-forms-mobile form-heading">sales@filamentai.in</div></div>
                        </Col>
                        <Col md={2} sm={2} xs={2} lg={2}></Col>
                    </Row>
                    <Row>
                        <Col md={1} sm={1} xs={1} lg={1}></Col>
                        <Col md={10} sm={10} xs={10} lg={10}>
                            <div className="contact-us-form-mobile p-4">
                                <Row>
                                    {/* <Col md={1} sm={1} xs={1} lg={1}></Col> */}
                                    <Col md={12} sm={12} xs={12} lg={12}>
                                        <div className="form-elements font-face-forms-mobile mb-2">
                                            Name
                                        </div>
                                        <input type="text" className="font-face-placeholder-mobile input mb-3 form-elements" placeholder="Enter your name" />
                                        <div className="form-elements font-face-forms-mobile mb-2">
                                            Company
                                        </div>
                                        <input type="text" className="font-face-placeholder-mobile input mb-3 form-elements" placeholder="Enter your company" />
                                        <div className="form-elements font-face-forms-mobile mb-2">
                                            Email
                                        </div>
                                        <input type="text" className="font-face-placeholder-mobile input mb-3 form-elements" placeholder="Enter your email" />
                                        <div className="form-elements font-face-forms-mobile mb-2">
                                            Phone Number
                                        </div>
                                        <input type="text" className="font-face-placeholder-mobile input mb-3 form-elements" placeholder="Enter your phone number" />
                                        <div className="form-elements font-face-forms-mobile mb-2">
                                            Message
                                        </div>
                                        <input type="text" className="font-face-placeholder-mobile input mb-3 form-elements" placeholder="Enter your message" />
                                        <div className="form-items mt-5 mb-4">
                                            <button type="submit" className="submit-button w-100 font-face-button-mobile">Submit</button>
                                        </div>
                                    </Col>
                                    {/* <Col md={1} sm={1} xs={1} lg={1}></Col> */}
                                </Row>
                            </div>
                        </Col>
                        <Col md={2} sm={1} xs={1} lg={1}></Col>
                    </Row>
                </Container>
            </div>

        </>
    )
});

export default ContactUs;