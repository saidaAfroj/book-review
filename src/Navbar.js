import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    // Renders component based on current state and props
    render() {
		return(
          <body class="navbody">
            <nav>
                <div class ="icon"> Read<b style={{color: 'red'}}>&</b>Soul</div>
                <div class= "search_box">
                     <input type = "search" placeholder="Search Here.."/>
                     <span class= "fa fa-search"></span>
                </div>
                <ol>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Fiction')}><a href="#">Fiction</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Non-Fiction')}><a href ="#">Non Fiction</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Crime')}><a href ="#">Crime</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Drama')}><a href ="#">Drama </a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Children')}><a href ="#">Children's Book </a></li>
                     <li><a href ="#">Log In</a></li>
                </ol>
            </nav>
           </body>
		);
	}
	
}

export default Navbar;