import React from "react";

class BookDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return(
          <div>
          <h1>{this.props.book.name}</h1>
          </div>);
	}
	
}

export default BookDetails;