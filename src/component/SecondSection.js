import React from 'react';
import ImgSecondSection from '../image/imgSecondSection.jpg';

class SecondSection extends React.Component{
  render(){
    return(
        <section className='containerSecondSection'>
            <article className='articleSecondSection'>
                <h1 className='headSecondSection'> YOUR DAY AT THE  GALLERY</h1>
                <p className='paragraphSecondSection'>Wander through our distinct collections and find 
                new insights about our artists. Dive in to the details of 
                their creative process.</p>
            </article>
            <div className='imageBox'>
                <img src= {ImgSecondSection} className="imgSecondSection"/>
            </div>
        </section>
    );
  }
}

export default SecondSection;