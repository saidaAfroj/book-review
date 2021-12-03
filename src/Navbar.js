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
    
    showFavorite(){
        if (this.props.userInfo && this.props.userInfo.type && (this.props.userInfo.type == 'user' || this.props.userInfo.type == 'admin')) {
            return( <li onClick={() => this.props.pageHandler('showbooks', 'userSugg')}><a href="#">{this.props.userInfo.name}'s Suggestion</a></li>);
        }
    }
    
    showLogin() {
        
    if (this.props.userInfo && this.props.userInfo.type && (this.props.userInfo.type == 'user' || this.props.userInfo.type == 'admin') ) {
        return(<li onClick={() => this.props.pageHandler('logout', '')}><a href ="#">Log Out</a></li>);
    } else {
        return(<li onClick={() => this.props.pageHandler('login', '')}><a href ="#">Log In</a></li>);
    }
  
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
                    { this.showFavorite()}
                     <li onClick={() => this.props.pageHandler('showbooks', 'Trending')}><a href="#">Trending</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Sci-fi')}><a href="#">Sci-Fi</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Thriller')}><a href ="#">Thriller</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Drama')}><a href ="#">Drama</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Non Fiction')}><a href ="#">Non Fiction</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Children')}><a href ="#">Children</a></li>
                     <li onClick={() => this.props.pageHandler('showbooks', 'Other')}><a href ="#">Other</a></li>
                     {this.showLogin()}
                </ol>
            </nav>
           </body>
		);
	}
	
}

export default Navbar;