import React from "react";
import "../css/style.css"
import Image from "../download.jpeg"

class HeroSection extends React.Component{
    render() {
        return (
            <div className="hero">
                <div className="heroBackground">
                    <div className="backgroundBalk">

                    </div>
                    <div className="backgroundImage">

                        <img src={Image} alt="photo"></img>
                    </div>
                    <div className="backgroundWhite">

                    </div>
                </div>
                <section className="heroSection">
                    <div className="heroTitle">
                        <h1>MODERN<span>I</span></h1>
                        <h1>ART GAL<span>LERY</span></h1>
                    </div>
                    <div className="heroDescription">
                        <p>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer

                        </p>
                        <div>
                            <button className="ourBtn">OUR LOCATION</button>
                            <button className="rightBtn"> > </button>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default HeroSection;