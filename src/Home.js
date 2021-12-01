import React from "react";
import Navbar from './Navbar';
import Start from './Start';
import Showbooks from './Showbooks';
import BookDetails from './BookDetails';

class Home extends React.Component {
    constructor(props) {
        super(props);
		this.state = {page: 'start'};
        this.pageHandler = this.pageHandler.bind(this);
    }
    pageHandler(page, info){
        if (page== 'showbooks'){
            this.setState({page: 'showbooks', category: info});
        } else if(page == 'detail'){
            this.setState({page: 'detail', book: info});
        } else if(page == 'start'){
            this.setState({page: 'start'});
        }
    }
    
    render() {
        
        return(
          <div>
          <Navbar pageHandler={this.pageHandler}/>
          {this.state.page == 'start' && <Start/>}
          {this.state.page == 'showbooks' && <Showbooks pageHandler={this.pageHandler} category={this.state.category}/>}
          {this.state.page == 'detail' && <BookDetails book={this.state.book}/>}
          </div>);
	}
	
}

export default Home;