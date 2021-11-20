import React from "react";
import Image1 from "./img/image-1.jpg";
import Image2 from "./img/image-2.jpg";
import Image3 from "./img/image-3.png";
import Image4 from "./img/image-4.jpg";
import Image5 from "./img/image-5.jpg";
import Image6 from "./img/image-6.jpg";

class Showbooks extends React.Component {
    constructor(props) {
        super(props);
        
        
    }
    // Renders component based on current state and props
    render() {
		return(
        <body class="showbooks">
    
    
    <header class="ScriptHeader">
    <div class="rt-container">
    	<div class="col-rt-12">
        	<div class="rt-heading">
            	<h1>{this.props.category}</h1>
                <p>A responsive image grid layout with hover overlay effect.</p>
            </div>
        </div>
    </div>
    </header>
    
    
    <section>
    <div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
              
<link href="https://fonts.googleapis.com/css?family=Poppins:700|Raleway" rel="stylesheet"/>

    <div class="row">
      <div class="column">
        <a href="#">
          <div class="container">
            <img src={Image1} class="image"/>
            <div class="overlay">
              <div class="text">Example 1</div>
            </div>
          </div>
        </a>
      </div>
      <div class="column">
        <a href="#">
          <div class="container">
            <img src={Image2} class="image"/>
            <div class="overlay">
              <div class="text">Example 2</div>
            </div>
          </div>
        </a>
      </div>
      <div class="column">
        <a href="#">
          <div class="container">
            <img src={Image3} class="image"/>
            <div class="overlay">
              <div class="text">Example 3</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <a href="#">
          <div class="container">
            <img src={Image4} class="image"/>
            <div class="overlay">
              <div class="text">Example 4</div>
            </div>
          </div>
        </a>
      </div>
      <div class="column">
        <a href="#">
          <div class="container">
            <img src={Image5} class="image"/>
            <div class="overlay">
              <div class="text">Example 5</div>
            </div>
          </div>
        </a>
      </div>
      <div class="column">
        <a href="#">
          <div class="container">
            <img src={Image6} class="image"/>
            <div class="overlay">
              <div class="text">Example 6</div>
            </div>
          </div>
        </a>
      </div>
    </div>
           
    		</div>
		</div>
    </div>
</section>       
    
  </body>);
	}
	
}

export default Showbooks;