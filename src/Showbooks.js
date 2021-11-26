import React from "react";
import Books from "./assets/books";
import BookDisplayTable from './BookDisplayTable';

class Showbooks extends React.Component {
    constructor(props) {
        super(props);
        this.displayBooks = Books;
    }
    
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
    
    
    <BookDisplayTable pageHandler={this.props.pageHandler} bookList={this.displayBooks}/>       
    
  </body>);
	}
	
}

export default Showbooks;