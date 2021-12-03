import React from "react";
import Navbar from './Navbar';
import Start from './Start';
import Showbooks from './Showbooks';
import BookDetails from './BookDetails';
import Login from './Login';

class Home extends React.Component {
    constructor(props) {
        super(props);
		this.state = {page: 'start', userInfo: {name: '', type: ''}};
        this.pageHandler = this.pageHandler.bind(this);
    }
    pageHandler(page, info){
        if (page== 'showbooks'){
            this.setState({page: 'showbooks', category: info, userInfo: this.state.userInfo});
        } else if(page == 'detail'){
            this.setState({page: 'detail', book: info, userInfo: this.state.userInfo});
        } else if(page == 'start'){
            this.setState({page: 'start', userInfo: this.state.userInfo});
        } else if (page == 'login') {
            this.setState({page: 'login', userInfo: this.state.userInfo});
        } else if (page == 'login-succss') {
            this.setState({page: 'showbooks', category: 'Sci-fi', userInfo: {name: info.name, type: info.type}});
        } else if (page == 'logout') {
            this.setState({page: 'start', userInfo: {name: '', type: ''}});
        }
    }
    
    render() {
        
        return(
          <div>
          <Navbar pageHandler={this.pageHandler} userInfo={this.state.userInfo}/>
          {this.state.page == 'start' && <Start/>}
          {this.state.page == 'showbooks' && <Showbooks pageHandler={this.pageHandler} category={this.state.category} userInfo={this.state.userInfo} />}
          {this.state.page == 'detail' && <BookDetails book={this.state.book} userInfo={this.state.userInfo}/>}
          {this.state.page == 'login' && <Login pageHandler={this.pageHandler}/>}
          </div>);
	}
	
}

export default Home;