import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
		this.state = {show: "all"};
    }
    // Renders component based on current state and props
    render() {
		return( 
		<div>
		<nav>
		<ul>
	        <li onClick= {() => this.setState({show: "all"})}><a href="#">All</a></li>
			<li onClick= {() => this.setState({show: "fiction"})}><a href="#">Fiction</a></li>
			<li onClick= {() => this.setState({show: "drama"})}><a href="#">Drama</a></li>
		</ul>
		</nav>
		{this.state.show == "all" && <h1>All</h1>}
        {this.state.show == "fiction" && <h1>Fiction</h1>}
		</div>);
	}
	
}

export default Home;