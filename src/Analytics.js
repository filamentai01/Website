import React, { useState } from "react";
import { Container, Accordion, Col, Row } from 'react-bootstrap';
import './Analytics.css'
import accuracy from './images/dashboard_accuracy.svg';
import alert from './images/dashboard_alert.svg';
import compliance from './images/dashboard_compliance.svg';

const Analytics = (props) => {
  const [target, setTarget] = useState('0')
  console.log(target)
  return (
    <>
      <div className="App  d-none d-lg-block">
        <Container className='p-5'>
          <Row className="text-left analytics-heading mb-5 font-face-title">
            <Col md={12} sm={12} xs={12} lg={12}>
              Analytics
            </Col>
          </Row>
          <Row >
            <Col md={6} sm={6} xs={6} lg={6}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" onClick={() => setTarget('0')}>
                  <Accordion.Header className="font-face-subtitle">Alert</Accordion.Header>
                  <Accordion.Body className="accordion-data font-face-body">
                    Timely notification is essential in preventing incidents and injuries. Filament AI is scaleable and provides immediate notification or alerts to the at-risk individual as well as the supervisor.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" onClick={() => setTarget('1')}>
                  <Accordion.Header className="font-face-subtitle">Compliances </Accordion.Header>
                  <Accordion.Body className="accordion-data font-face-body">
                    For safety personnel who are already overworked, compliance assurance is a difficult responsibility. By ensuring that employees follow corporate policies and legal obligations, Filament AI helps safety professionals save time and money.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" onClick={() => setTarget('2')}>
                  <Accordion.Header className="font-face-subtitle">AI Accuracy</Accordion.Header>
                  <Accordion.Body className="accordion-data font-face-body">
                    High accuracy rates with the dedicated Filament AI team working with each facility.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6} sm={6} xs={6} lg={6}>
              {
                target == '0' ?
                  <img src={alert} alt={'dashboard'} className='w-100' />
                  :
                  target == '1' ?
                    <img src={compliance} alt={'dashboard'} className='w-100' />
                    :
                    target == '2' ?
                      <img src={accuracy} alt={'dashboard'} className='w-100' />
                      :
                      ''
              }
            </Col>
          </Row>
        </Container>
      </div>
      <div className="App d-lg-none mb-4">
        <Container className='p-3'>
          <Row className="text-left analytics-heading mt-4 mb-3 font-face-title-mobile">
            <Col md={12} sm={12} xs={12} lg={12}>
              Analytics
            </Col>
          </Row>
          <Row >
            <Col md={12} sm={12} xs={12} lg={12}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" onClick={() => setTarget('0')}>
                  <Accordion.Header className="font-face-subtitle-mobile">Alert</Accordion.Header>
                  <Accordion.Body className="accordion-data font-face-body-mobile">
                    Timely notification is essential in preventing incidents and injuries. Filament AI is scaleable and provides immediate notification or alerts to the at-risk individual as well as the supervisor.
                    <img src={alert} alt={'dashboard'} className='w-100 mt-2' />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" onClick={() => setTarget('1')}>
                  <Accordion.Header className="font-face-subtitle-mobile">Compliances </Accordion.Header>
                  <Accordion.Body className="accordion-data font-face-body-mobile">
                    For safety personnel who are already overworked, compliance assurance is a difficult responsibility. By ensuring that employees follow corporate policies and legal obligations, Filament AI helps safety professionals save time and money.
                    <img src={compliance} alt={'dashboard'} className='w-100 mt-2' />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" onClick={() => setTarget('2')}>
                  <Accordion.Header className="font-face-subtitle-mobile">AI Accuracy</Accordion.Header>
                  <Accordion.Body className="accordion-data font-face-body-mobile">
                    High accuracy rates with the dedicated Filament AI team working with each facility.
                    <img src={accuracy} alt={'dashboard'} className='w-100 mt-2' />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default Analytics;