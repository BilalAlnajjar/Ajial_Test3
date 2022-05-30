import React from "react";
import "../css/style.css"
class Footer extends React.Component{
  render(){
    return (
      <footer className="gallery">
          <div className="gall-head">
              <h1>MODERN ART GALLERY</h1>
          </div>

          <div className="gall-content">
              <p>The Modern ArtGallery is free to all visitors and open<br></br>
                 seven days a week from 8am to 9am. find us at 99<br></br>
                 king Street. Newport, USA.
              </p>
          </div>

          <div className="gall-icons">
              <i className="">fecebook</i>
          </div>
      </footer>
    ); 
  }
}

export default Footer;