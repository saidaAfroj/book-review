import React from "react";
import Video from "./book_image3.mp4";

class Start extends React.Component {
    constructor(props) {
        super(props);
        
        
    }
    // Renders component based on current state and props
    render() {
		return(
        <div>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4"/>
          </video>
        </div>);
	}
	
}

export default Start;