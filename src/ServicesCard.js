import React from "react";
import './Services.css';
import facialRecognition from './images/content_facialRecognition.svg';
import objectDetection from './images/content_objectDetection.svg';
import security from './images/content_security.svg';
import bayAnalytics from './images/content_bayAnalytics.svg';
import defectAnalytics from './images/content_defectAnalytics.svg';
import footfallMonitoring from './images/content_footfallMonitoring.svg';
import healthandSafety from './images/content_healthandSafety.svg';
import productivity from './images/content_productivity.svg';

const ServicesCard = (props: any) => {

    return (
        
        <div class="content-area" >
            <img className="content-img"
                src={
                    props?.target == 'facialRecognition' ?
                        facialRecognition
                        :
                        props?.target == 'objectDetection' ?
                            objectDetection
                            :
                            props?.target == 'security' ?
                                security
                                :
                                props?.target == 'bayAnalytics' ?
                                    bayAnalytics
                                    :
                                    props?.target == 'defectAnalytics' ?
                                        defectAnalytics
                                        :
                                        props?.target == 'productivity' ?
                                            productivity
                                            :
                                            props?.target == 'footfallMonitoring' ?
                                                footfallMonitoring
                                                :
                                                props?.target == 'healthAndSafety' ?
                                                    healthandSafety
                                                    :
                                                    facialRecognition
                }
                alt="content" />
            <div className="content-header mb-2 mt-2 font-face-subtitle">
                {
                    props?.target == 'facialRecognition' ?
                        'Facial Recognition Toolkit'
                        :
                        props?.target == 'objectDetection' ?
                            'Object Detection & Tracking Toolkit'
                            :
                            props?.target == 'security' ?
                                'Security Toolkit'
                                :
                                props?.target == 'bayAnalytics' ?
                                    'Bay Analytics Toolkit'
                                    :
                                    props?.target == 'defectAnalytics' ?
                                        'Defect Analysis'
                                        :
                                        props?.target == 'productivity' ?
                                            'Productivity Toolkit'
                                            :
                                            props?.target == 'footfallMonitoring' ?
                                                'Footfall Monitoring Toolkit'
                                                :
                                                props?.target == 'healthAndSafety' ?
                                                    'Health & Safety Compliance Toolkit'
                                                    :
                                                    'Facial Recognition Toolkit'
                }

            </div>
            <div className="content-text font-face-body">
                {
                    props?.target == 'facialRecognition' ?
                        'Our facial recognition system goes a long way in real-time identification & authentication to increase anti-spoofing capabilities with the use of AI based video analytics, from employee attendance and tracking & monitoring staff productivity, to recognising a blacklisted individual. Security, access control, and personalisation are just a few of the many uses for FR.'
                        :
                        props?.target == 'objectDetection' ?
                            'Vehicle identification & classification, automatic number plate recognition, and robust AI tracking methodologies combined with real-time response generation for streamlined workflow, reduced expenditure, and increased efficiencies. Detecting intrusion, loitering, weapons, or dangerous objects.'
                            :
                            props?.target == 'security' ?
                                'Produce information to prevent any security breaches using AI-based surveillance that leaves no space for error. Utilizing your existing CCTV system, we create solutions for intrusion detection, queue detection, crowd formation, entry/exit limitation, detecting movement in limited zones, vehicle seal detection, and more.'
                                :
                                props?.target == 'bayAnalytics' ?
                                    'To achieve maximum efficiency, minimize costs, and to spot any type of misconduct or manhandling, track all productivity measures, including truck load optimization, turnaround time, dock utilization, and load planning choices. Any infractions or deviations are noted and quickly informed in order to take corrective action.'
                                    :
                                    props?.target == 'defectAnalytics' ?
                                        'Real-time process-tracking using machine vision to implement smart manufacturing processes to increase productivity, minimize company expenses, increase productivity and accuracy, and provide quick development and delivery.'
                                        :
                                        props?.target == 'productivity' ?
                                            "Create an automated inspection system to keep an eye out for damage and theft by assessing the entire facility using computer vision to produce insights on space and machinery utilization, monitoring man hours, run-time vs. idle time, and other metrics. We produce pertinent insights for gathering practical productivity statistics and providing real-time feedback on employees' productivity."
                                            :
                                            props?.target == 'footfallMonitoring' ?
                                                'Utilize our most up-to-date video data and analytics technology to measure foot traffic, create heat maps, map out density, and identify hotspot regions in order to react to retail behavior, improve business operations, spur growth, and maintain workplace safety and security.'
                                                :
                                                props?.target == 'healthAndSafety' ?
                                                    'Utilizing the power of artificial intelligence for predictive maintenance and ensuring a safe working environment by deploying analytics and alerts based on AI, from detecting safety gear, PPE, use of the appropriate equipment, proximity to forklifts, and health hazards like fire, low lighting, or spillage to trigger alerts on non-compliance.'
                                                    :
                                                    'Our facial recognition system goes a long way in real-time identification & authentication to increase anti-spoofing capabilities with the use of AI based video analytics, from employee attendance and tracking & monitoring staff productivity, to recognising a blacklisted individual. Security, access control, and personalisation are just a few of the many uses for FR.'
                }
            </div>
        </div>    
    )
}

export default ServicesCard;