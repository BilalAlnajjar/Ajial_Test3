import React from "react";
import "../css/style.css"
import facebookImage from '../image/facebookImage.png';
import insta from '../image/instaImage.png';
import twitter from '../image/twitterImage.png';
class Footer extends React.Component{
  render(){
    return (
      <footer className="gallery">
          <div className="gall-head">
              <h1>MODERN <br></br>ART GALLERY</h1>
          </div>

          <div className="gall-content">
              <p>The Modern ArtGallery is free to all visitors and open<br></br>
                 seven days a week from 8am to 9am. find us at 99<br></br>
                 king Street. Newport, USA.
              </p>
          </div>

          <div className="gall-images">
              <img src={facebookImage}></img>
              <img src={insta}></img>
              <img src={twitter}></img>
          </div>
      </footer>
    ); 
  }
}

export default Footer;