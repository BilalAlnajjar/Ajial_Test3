import React from "react";
import "../css/style.css"

class MapSection extends React.Component{
    render() {
        return (
            <div className="mapBox">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.9541068587!2d2.4170746774882033!3d48.85883363935366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1653883616376!5m2!1sar!2s"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
        )
    }
}

export default MapSection;