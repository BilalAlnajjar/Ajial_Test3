import React from 'react';
import "../css/style.css";
import bigImg from '../image/imgTwoSecThree.jpeg';
import smallImg from '../image/imgOneSecThree.jpeg';
class ThirdSection extends React.Component {
    render() {
        return ( 
            <section className='thirdSec'>
        <div className='container'>
            <div className="parent">
                <div className="div1">   <img src= "imgTwoSecThree.jpeg" className="bigImg"/></div>
                <div className="div2">  <img src= "imgOneSecThree.jpeg" className="smallImg"/></div>
                <div className="div3"> 
                    <h2>COME ,BE INSPIRED</h2>
                    <P>We are excited to welcome you to our gallery and see how our collections influence you.</P>
                </div>
            </div>
        </div>
    </section>
        )
    }
}
export default ThirdSection;