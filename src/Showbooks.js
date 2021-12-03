import React from "react";
import Books from "./assets/books";
import BookDisplayTable from './BookDisplayTable';

class Showbooks extends React.Component {
    constructor(props) {
        super(props);
    }
    
    fetchTitle(givenCategory) {
        const category_array= ["Sci-fi", "Thriller", "Drama", "Non Fiction", "Children", "Other"];
        if(category_array.includes(givenCategory)) {
            
            return "Top rated " + givenCategory + " Books";
        } else if (givenCategory == 'userSugg') {
            return "Suggested books for " + this.props.userInfo.name ;
        } else if (givenCategory == 'Trending') {
            return "Books that are Trending now" ;
        }
        
        return  "Relevant results from searching '" + givenCategory + "'";
    }
    
    fetchBooks(givenCategory) {
        const category_array= ["Sci-fi", "Thriller", "Drama", "Non Fiction", "Children", "Other"];
        const returnBooks = [];
        
        if(category_array.includes(givenCategory)) {
            
            for(var i=0; i<Books.length; i++){
                if(Books[i].category && Books[i].category == givenCategory) {
                    returnBooks.push(Books[i]);
                }
            }
        } else if(givenCategory == 'userSugg') {
            returnBooks.push(Books[0]);
            returnBooks.push(Books[5]);
        } else if (givenCategory == 'Trending') {
            for(var i=0; i<Books.length; i++){
                if(Books[i].trending && Books[i].trending.length > 0) {
                    returnBooks.push(Books[i]);
                }
            }
        } else {
            for(var i=0; i<Books.length; i++){
                if((Books[i].name && Books[i].name.trim().toLowerCase().includes(givenCategory.trim().toLowerCase())) || 
                    (Books[i].author && Books[i].author.trim().toLowerCase().includes(givenCategory.trim().toLowerCase())) || 
                    (Books[i].summary && Books[i].summary.trim().toLowerCase().includes(givenCategory.trim().toLowerCase()))) {
                    returnBooks.push(Books[i]);
                }
            }
        }
        
        return  returnBooks;
    }
    
    render() {
		return(
        <body class="showbooks">
    
    
    <header class="ScriptHeader">
    <div class="rt-container">
    	<div class="col-rt-12">
        	<div class="rt-heading">
            	<h1>{this.fetchTitle(this.props.category)}</h1>
            </div>
        </div>
    </div>
    </header>
    
    
    <BookDisplayTable pageHandler={this.props.pageHandler} bookList={this.fetchBooks(this.props.category)}/>       
    
  </body>);
	}
	
}

export default Showbooks;