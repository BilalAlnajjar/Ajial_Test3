import React from 'react';
import ImgMap from '../image/imgMap.jpg';

class Map extends React.Component{
    render(){
        return(
            <div class="mapBox">
                   <img src= {ImgMap} className="imgMap"/> 
            </div>
        );
    }
}

export default Map
