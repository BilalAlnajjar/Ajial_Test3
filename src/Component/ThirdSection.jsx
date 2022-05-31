import React from 'react';
import bigImg from '../image/imgTwoSecThree.jpeg';
import smallImg from '../image/imgOneSecThree.jpeg';
import "../css/style.css";
class ThirdSection extends React.Component {
    render() {
        return ( 
            <section className='thirdSec'>
        <div className='containerThree'>
            <div className="parent">
                <div className="div1">   <img src= {bigImg} className="bigImg"/></div>
                <div className="div2">  <img src= {smallImg} className="smallImg"/></div>
                <div className="div3"> 
                    <h2>COME ,BE INSPIRED</h2>
                    <p>We are excited to welcome you to our gallery and see how our collections influence you.</p>
                </div>
            </div>
        </div>
    </section>
        )
    }
}
export default ThirdSection;