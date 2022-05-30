import React from "react";
import "../css/style.css"
class LocationSection extends React.Component{
  render(){
    return (
      <div className="location">
          <div className="header">
              <h1>OUR <br></br> LOCATION</h1>
          </div>

          <div className="street">
              <h1>99 KING STREET</h1>
              <h6>Newport</h6>
              <h6>RI 02840</h6>
              <h6>United states of America</h6>

              <p>Our newly opend gallery is located near the Edward<br></br>
                 king House on 99 king street, the Mopdern Art Gallery is<br></br>
                 free to all vistors and open seven days a week from<br></br>
                 8am to 9pm.
              </p>
          </div>
      </div>
    ); 
  }
}

export default LocationSection;