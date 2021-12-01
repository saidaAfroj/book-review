import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchBox: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {    
        this.setState({searchBox: event.target.value});
    }
    
    handleSubmit(event) {
        if (!this.state.searchBox || /^\s*$/.test(this.state.searchBox)) return;
        event.preventDefault();
        this.setState({searchBox: ''});
        this.props.pageHandler('showbooks', this.state.searchBox);
        
    }
    
    render() {
		return(
          <body class="navbody">
            <nav>
                <div class ="icon" onClick={() => this.props.pageHandler('start', '')}> Book <b style={{color: 'red'}}>Review</b></div>
                <div class= "search_box">
                     <form onSubmit={this.handleSubmit}>
                     <input type = "search" placeholder="Search Here.." value={this.state.searchBox} onChange={this.handleChange}/>
                     <button class= "fa fa-search" ></button>
                     </form>
                </div>
                <ol>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Sci-fi')}><a href="#">Sci-Fi</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Thriller')}><a href ="#">Thriller</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Drama')}><a href ="#">Drama</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Non Fiction')}><a href ="#">Non Fiction</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Children')}><a href ="#">Children</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Other')}><a href ="#">Other</a></li>
                     <li><a href ="#">Log In</a></li>
                </ol>
            </nav>
           </body>
		);
	}
	
}

export default Navbar;