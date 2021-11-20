import React from "react";
import Navbar from './Navbar';
import Start from './Start';
import Showbooks from './Showbooks';

class Home extends React.Component {
    constructor(props) {
        super(props);
		this.state = {page: 'start'};
        this.pageHandler = this.pageHandler.bind(this);
    }
    pageHandler(page, info){
        if (page== 'showbooks'){
            this.setState({page: 'showbooks', category: info});
        }
    }
    
    render() {
        
        return(
          <div>
          <Navbar pageHandler={this.pageHandler}/>
          {this.state.page == 'start' && <Start/>}
          {this.state.page == 'showbooks' && <Showbooks pageHandler={this.pageHandler} category={this.state.category}/>}
          </div>);
	}
	
}

export default Home;