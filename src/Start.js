import React from "react";

class Start extends React.Component {
    constructor(props) {
        super(props);
        
        
    }
    // Renders component based on current state and props
    render() {
		return(
        <div><div class="book">
            <span class="page turn"></span>
            <span class="page turn"></span>
            <span class="page turn"></span>
            <span class="page turn"></span>
            <span class="page turn"></span>
            <span class="page turn"></span>
            <span class="cover"></span>
            <span class="page"></span>
            <span class="cover turn"></span>
            
        </div>
        </div>);
	}
	
}

export default Start;