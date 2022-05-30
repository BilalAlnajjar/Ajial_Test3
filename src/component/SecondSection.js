import React from 'react';
import ImgSecondSection from '../image/imgSecondSection.jpg';

class SecondSection extends React.Component{
  render(){
    return(
        <div className='container'>
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
            <div className="mapBox">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.9541068587!2d2.4170746774882033!3d48.85883363935366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1653883616376!5m2!1sar!2s"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
        </div>
    )
  }
}

export default SecondSection;