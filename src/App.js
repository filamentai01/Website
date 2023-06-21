
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Services from './Services'
import Header from './Header';
import Banner from './Banner';
import AboutUs from './AboutUs';
import WhyUs from './WhyUs';
import Analytics from './Analytics';
import ContactUs from './ContactUs';
import Footer from './Footer';
import React, {useRef} from 'react';

function App() {

  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);
   return (
    <div className="App">
      <Header servicesRef={servicesRef} contactUsRef={contactUsRef} aboutUsRef={aboutUsRef}/>
      <body>
      <Banner servicesRef={servicesRef}/>
      <AboutUs ref={aboutUsRef}/>
      <Services ref={servicesRef}/>
      <WhyUs/>
      <Analytics/>
      <ContactUs ref={contactUsRef}/>
      <Footer servicesRef={servicesRef} contactUsRef={contactUsRef} aboutUsRef={aboutUsRef}/>
      </body>
    </div>
  );
}

export default App;
