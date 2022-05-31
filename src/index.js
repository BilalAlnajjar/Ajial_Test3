import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SecondSection from "./Component/SecondSection";
import HeroSection from "./Component/HeroSection";
import MapSection from "./Component/MapSection";
import LocationSection from "./Component/LocationSection";
import Footer from "./Component/Footer";
import ThirdSection from "./Component/ThirdSection"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <MapSection />
      <LocationSection/>
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
